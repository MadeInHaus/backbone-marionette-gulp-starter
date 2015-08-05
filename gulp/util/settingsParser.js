var _ = require('lodash');

var envs = ['development', 'qa', 'staging', 'production'];

module.exports = function(settings, defaultObj) {
  var new_settings = {};
  _.each(envs, function(env) {
    var env_settings = settings[env] || {};
    var new_setting = {};
    new_settings[env] = _.merge(new_setting, defaultObj || {}, settings['default'], env_settings);
  });

  console.log("new settings:\n", new_settings, "\n");

  return new_settings;
}
