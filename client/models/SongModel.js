// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function() {
    this.set('playCount', 0);
  },
  play: function() {
    this.set('playCount', this.get('playCount') + 1);
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  },
  ended: function() {
    this.trigger('ended', this);
  },
  dequeue: function() {
    this.trigger('dequeue', this);
  }

});
