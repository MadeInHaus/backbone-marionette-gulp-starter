var dest = './build';
var src = './src';

var settings_json;

try {
    settings_json = require('../settings');
} catch (e) {
    console.log('settings.json file not found, some tasks may not work without this.');
    console.log(e);
}

var settings = require('./util/settingsParser')(settings_json || {}, {dest: dest});

module.exports = {
    browserSync: {
        server: {
            // Serve up our build folder
            baseDir: dest
        }
    },
    browserify: {
        // A separate bundle will be generated for each
        // bundle config in the list below
        src: src,
        bundleConfigs: [{
            entries: src + '/javascript/main.js',
            dest: dest + '/js',
            outputName: 'main.js',
            // Additional file extentions to make optional
            extensions: ['.coffee', '.js', '.hbs'],
            // list of modules to make require-able externally
            //require: ['some-module', 'another-module']
        }]
    },
    assets: {
        src: src + '/assets/**',
        dest: dest
    },
    images: {
        src: src + '/images/**',
        dest: dest + '/images'
    },
    markup: {
        src: src + '/html/**/*.html',
        dest: dest
    },
    sass: {
        src: src + '/sass/**/*.{sass,scss}',
        dest: dest + '/css',
        settings: {
            // Required if you want to use SASS syntax
            // See https://github.com/dlmanning/gulp-sass/issues/81
            sourceComments: 'map',
            imagePath: '/images' // Used by the image-url helper
        }
    },
    production: {
        cssSrc: dest + '/css/*.css',
        jsSrc: dest + '/js/*.js',
        dest: dest
    },
    settings: settings
};
