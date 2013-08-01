// js/views/contact.js

var app = app || {};


app.ContactView = Backbone.View.extend({
	tagName: 'section',
    id: 'contact',
	className: 'margintop40',
    template: _.template( $( '#contactTemplate' ).html() ),

    render: function() {
		//this.el is what we defined in tagName. use $el to get access to jQuery html() function
		this.$el.html( this.template( this.model.toJSON() ) );
		console.log(this);

		return this;

    }

});