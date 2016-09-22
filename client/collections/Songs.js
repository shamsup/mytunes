// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
    }).then(data => data.results)
    .then(results => this.add(results.map(song => (console.log(song), {
      url: song.url,
      title: song.title,
      artist: song.artist,
      album: song.album,
      artwork: song.artwork_url,
      objectId: song.objectId
    })))).then(() => this.trigger('update'));
  }

});
