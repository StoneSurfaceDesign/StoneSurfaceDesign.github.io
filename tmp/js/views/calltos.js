// site/js/view/calltos.js

var app = app || {};

app.CallTosView = Backbone.View.extend({

    el: '#wrap',

    initialize: function( initialCallTos ) {
		this.collection = new app.CallTos( initialCallTos );
        this.render();
    },

    // render paragraphs by rendering each paragraph in its collection
    render: function() {
        this.collection.each(function( item ) {
			this.renderCallTo( item );
        }, this );
    },

    // render a paragraph by creating a ParagraphView and appending the
    // element it renders to the paragraphs 's element
    renderCallTo: function( item ) {
		var callToView = new app.CallToView({
			model: item
        });
        this.$el.append( callToView.render().el );
    }
});