(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['entryCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card\">\n  <h2 class = \"logTitle\" >\n    "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n  </h2>\n  <h5 class = \"logDate\" >\n    "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "\n  </h5>\n  <div class=\"log-text\" style=\"height:100px;\">\n    <p class = \"logMilage\" >\n      Miles Ran: "
    + alias4(((helper = (helper = helpers.miles || (depth0 != null ? depth0.miles : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"miles","hash":{},"data":data}) : helper)))
    + "\n    </p>\n    <p class = \"logText\" >\n      "
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\n    </p>\n  </div>\n</div>\n";
},"useData":true});
})();