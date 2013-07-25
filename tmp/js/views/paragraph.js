// js/views/paragraph.js

var app = app || {};


app.ParagraphView = Backbone.View.extend({
	tagName: 'section',
    id: 'features',
    template: _.template( $( '#featureTemplate' ).html() ),

    render: function() {
		//this.el is what we defined in tagName. use $el to get access to jQuery html() function
		this.$el.html( this.template( this.model.toJSON() ) );
		console.log(this);

		return this;

    }

});