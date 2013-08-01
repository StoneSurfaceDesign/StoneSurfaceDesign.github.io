// site/js/view/paras.js

var app = app || {};

app.PortfoliosView = Backbone.View.extend({

    el: '#wrap',

    initialize: function( initialPortfolios ) {
		this.collection = new app.Portfolios( initialPortfolios );
        this.render();
    },

    // render portfolios by rendering each portfolio in its collection
    render: function() {
        this.collection.each(function( item ) {
			this.renderPortfolio( item );
        }, this );
    },

    // render a paragraph by creating a PortfolioView and appending the
    // element it renders to the paragraphs 's element
    renderPortfolio: function( item ) {
		var portfolioView = new app.PortfolioView({
			model: item
        });
        this.$el.append( portfolioView.render().el );
    }
});