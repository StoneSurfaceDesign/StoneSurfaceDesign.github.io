// site/js/view/paras.js

var app = app || {};

app.ParagraphsView = Backbone.View.extend({

    el: '#wrap',

    initialize: function( initialParagraphs ) {
		this.collection = new app.Paragraphs( initialParagraphs );
        this.render();
    },

    // render paragraphs by rendering each paragraph in its collection
    render: function() {
        this.collection.each(function( item ) {
			this.renderParagraph( item );
        }, this );
    },

    // render a paragraph by creating a ParagraphView and appending the
    // element it renders to the paragraphs 's element
    renderParagraph: function( item ) {
		var paragraphView = new app.ParagraphView({
			model: item
        });
        this.$el.prepend( paragraphView.render().el );
    }
});