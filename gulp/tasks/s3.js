"use strict";

var gulp = require('gulp');
var settings = require('../config').settings;
var fs = require('fs');
var s3 = require('s3');
var _ = require('lodash');
var Slack = require('node-slack');

var gitUserInfo = require('../util/gitUserInfo');

var flags = require('minimist')(process.argv.slice(2));
var isProd = flags.production || flags.prod || false;
var isQA = flags.qa || false;
var isStaging = flags.staging || flags.stage || false;
var isDev = flags.development || flags.dev || false;

var env = _.find([isDev && 'development', isQA && 'qa', isStaging && 'staging', isProd && 'production']);
settings = settings[env];
console.log('Using these settings:\nenv: ', env, '\n\nsettings: ', settings);

gulp.task('s3', ['production'], function() {

    // Keep sensitive credentials outside the repo
    var s = settings.slack;
    var aws = settings.aws;
    var folder;

    if (isProd) {
        folder = 'production';
    } else if (isQA) {
        folder = 'qa';
    } else if (isStaging) {
        folder = 'staging';
    } else if (isDev) {
        folder = 'dev';
    } else {
        console.error('\nError! Please specify an `--[environment]` when running the "deploy" task\n');
        return;
    }


    var client = s3.createClient({
        maxAsyncS3: 20, // this is the default
        s3RetryCount: 3, // this is the default
        s3RetryDelay: 1000, // this is the default
        multipartUploadThreshold: 20971520, // this is the default (20 MB)
        multipartUploadSize: 15728640, // this is the default (15 MB)
        s3Options: aws
    });

    var params = {
        localDir: settings.dest,
        deleteRemoved: false, // Do not remove files on S3 if they are not present on local FS
        s3Params: {
            Bucket: aws.bucket,
            Prefix: aws.basePath + '/' + folder + '/',
            ACL: 'public-read'
        }
    };

    console.log('\n\n*** Deploying to AWS S3 ***\n\n');

    var uploader = client.uploadDir(params);

    uploader.on('error', function(err) {
        console.error('unable to upload:', err.stack);
    });

    uploader.on('progress', function() {
        console.log('progress', uploader.progressMd5Amount,
            uploader.progressAmount, uploader.progressTotal);
    });

    uploader.on('end', function() {
        console.log('done uploading');
        var slack = new Slack(s.hook_url, {});

        gitUserInfo(function (user) {
            slack.send({
                 text: s.message + folder + ' <http://' + aws.basePath + '.' + folder + '.haus.la>',
                 username: user.name || user.email || "Anonymous"
            });
        });
    });
});
