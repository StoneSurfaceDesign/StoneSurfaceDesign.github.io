// js/views/support.js

var app = app || {};


app.SupportView = Backbone.View.extend({
	tagName: 'section',
    id: 'support',
	className: 'paddingbottom40',
    template: _.template( $( '#supportTemplate' ).html() ),

    render: function() {
		//this.el is what we defined in tagName. use $el to get access to jQuery html() function
		this.$el.html( this.template( this.model.toJSON() ) );
		console.log(this);

		return this;

    }

});