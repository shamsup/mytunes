// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    var songQueue = params.queue;
    this.set('songQueue', songQueue);

    var library = params.library;
    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    library.on('play', function(song) {
      this.set('currentSong', song);
    }, this);

    library.on('enqueue', function(song) {
      songQueue.add(song);
    }, this);

    songQueue.on('dequeue', function(song) {
      songQueue.remove(song);
    }, this);

    songQueue.on('ended', function(song) {
      song.dequeue();
      if (songQueue.length) {
        songQueue.playFirst();
      } else {
        this.set('currentSong', new SongModel());
      }
      // this.set('currentSong', songQueue.at(0));
    }, this);
  }

});
