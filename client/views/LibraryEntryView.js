// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>[<%= playCount %>]</td><td>(<%= artist %>)</td><td><%= title %></td>'),
  initialize: function() {
    this.model.on('change:playCount', this.render, this);
  },
  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
