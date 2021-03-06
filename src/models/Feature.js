var _ = require('underscore');
var Backbone = require('backbone');

var Regions = require('./Region').Regions;

var Feature = Backbone.Model.extend({

  initialize: function(attrs) {

    attrs = attrs || {}

    var sequenceData = attrs.sequenceData;
    var sequenceDataCol = new Regions();


    if (sequenceData !== null && typeof sequenceData !== 'undefined') {

      var abc = _.map(sequenceData, function(s) {
        s.feature = this;
        return s;
      }, this);

      // console.log("abc", abc);
      //
      //
      //
      // var sequenceDataModels = sequenceData.map(function(s) {
      //   console.log("nexts", s);
      //   return s.feature = this
      // }, this);
      //
      // console.log("S", sequenceDataModels);

      sequenceDataCol.reset(abc);
      this.set("sequenceData", sequenceDataCol);
    }

    // Upgrade the feature's sequence data to a Region model
    // this.set("sequenceData", new Regions(_.map(this.get("sequenceData"), (function(region){
    //   region.feature = this;
    //   return region;
    // }, this))));
  }

});

var Features = Backbone.Collection.extend({

  model: Feature

});

module.exports = {Feature: Feature, Features: Features};
