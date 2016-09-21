// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    });
  },

  nextSong: function(song) {
    console.log('SongQueue: next song');
    this.shift();
    //return this.at(0) || new SongModel();
  },

  playFirst: function() {
    this.at(0).play();
  }

});
