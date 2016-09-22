// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<div />',

  initialize: function() {
    this.$el.on('ended', 'audio', function() {
      this.model.ended();
    }.bind(this));
    this.render();
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    this.$el.empty();
    $('body').css('background-image', 'url("' + this.model.get('artwork') + '")');
    return this.$el.append(
      $('<audio controls autoplay />').attr('src', this.model ? this.model.get('url') : '').on('ended', function() {
        this.model.ended();
      }.bind(this))
    );
    $('audio', this.$el)[0].currentTime = 0;
  }

});
