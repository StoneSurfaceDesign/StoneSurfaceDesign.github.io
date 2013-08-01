// site/js/view/supports.js

var app = app || {};

app.SupportsView = Backbone.View.extend({

    el: '#wrap',

    initialize: function( initialSupports ) {
		this.collection = new app.Supports( initialSupports );
        this.render();
    },

    // render supports by rendering each support in its collection
    render: function() {
        this.collection.each(function( item ) {
			this.renderSupport( item );
        }, this );
    },

    // render a support by creating a SupportView and appending the
    // element it renders to the paragraphs 's element
    renderSupport: function( item ) {
		var supportView = new app.SupportView({
			model: item
        });
        this.$el.append( supportView.render().el );
    }
});