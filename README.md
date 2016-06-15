# Backbone-Marionette-Gulp Starter

An ES6-ready boilerplate for building Backbone/Marionette apps using Gulp.

## Getting Started

#### 1. Install gulp globally:

```sh
$ npm install --global gulp
```

#### 2. Install project dependencies:

```sh
$ npm install
```

#### 3. Run gulp

Start a local dev environment:
```sh
$ gulp
```

Generate a production build:
```sh
$ gulp production
```

#### 4. Deployment

Download [settings.json](link to settings.json file goes here) and place in root directory.

The following command will deploy to [AWS S3](http://aws.amazon.com/s3/):
```sh
$ gulp deploy --[env]
```

This boilerplate assumes you've created a `settings.json` file in the project root. _This file should be (git)ignored as it contains sensitive information, i.e. AWS keys, etc._ When deployment is finished, a [Slack](http://slack.com) hook will be triggered in a channel of your choice. If you haven't heard of Slack, close Skype immediately and [read about it](http://slack.com).

##### Environment options

- `--dev` or `--development`
- `--qa`
- `--stage` or `--staging`
- `--prod` or `--production`

One of these arguments is required to successfully deploy files to S3, i.e `gulp deploy --staging`.

##### Sample `settings.json`:

```
{
    "default": {
        "aws": {
            "accessKeyId": "xxx",
            "secretAccessKey": "xxx",
            "basePath": "xxx",
            "bucket": "madeinhaus"
        },
        "slack": {
            "hook_url": "https://hooks.slack.com/services/xxx/xxx/xxx",
            "username": "Arnold Scavonegger",
            "message": "New build up on: "
        }
    }
}
```

Individual envs can have their own settings by adding a corresponding `'env': {...}` to the settings file,  only those settings which are different from default need to be set.

