// tmp/js/models/portfolio.js

var app = app || {};

// Portfolio Model
// -----------
// Our basic **Portfolio** model

app.Portfolio = Backbone.Model.extend({

	// Default attributes
	defaults: {
		bigHeading: 'Unknown',
		subHeading: 'Unknown',
		galleryList: 'Unknown',
		galleryList1: 'Unknown',
		galleryList2: 'Unknown',
		galleryList3: 'Unknown',

	}

});