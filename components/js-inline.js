var can = require("can");
require("can/component/");
var template = require("./js-inline.stache!");

can.Component.extend({
  tag: "js",
  template: template
});
