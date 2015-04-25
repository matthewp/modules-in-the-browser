require("components/js-inline");
var can = require("can/view/");
var stache = require("can/view/stache/");

var tags = can.view.callbacks._tags;
var $ = can.$;

Object.keys(tags).forEach(function(tagName){

  $(tagName).each(function(i, el){
    var html = el.outerHTML;
    $(el).replaceWith(stache(html)());
  });

});
