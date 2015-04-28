Backbone = require('backbone');
Backbone.Radio = require('backbone.radio');

module.exports.globalChannel = Backbone.Radio.channel('global');
module.exports.userChannel = Backbone.Radio.channel('user');
