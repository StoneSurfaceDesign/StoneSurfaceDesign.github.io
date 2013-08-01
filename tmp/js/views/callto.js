// js/views/callto.js

var app = app || {};


app.CallToView = Backbone.View.extend({
	tagName: 'section',
    id: 'call-to-action-link',
	className: 'margintop20 marginbot20',
    template: _.template( $( '#callToTemplate' ).html() ),

    render: function() {
		//this.el is what we defined in tagName. use $el to get access to jQuery html() function
		this.$el.html( this.template( this.model.toJSON() ) );
		console.log(this);

		return this;

    }

});