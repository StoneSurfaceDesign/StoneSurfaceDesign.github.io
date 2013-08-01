// js/views/portfolio.js

var app = app || {};


app.PortfolioView = Backbone.View.extend({
	tagName: 'section',
    id: 'port',
    template: _.template( $( '#portfolioTemplate' ).html() ),

    render: function() {
		//this.el is what we defined in tagName. use $el to get access to jQuery html() function
		this.$el.html( this.template( this.model.toJSON() ) );
		console.log(this);

		return this;

    }

});