// tmp/js/models/contact.js

var app = app || {};

// Contact Model
// -----------
// Our basic **Contact** model

app.Contact = Backbone.Model.extend({

	// Default attributes
	defaults: {
		title: 'Unknown',
		subHeading:'Unknown',
		bigH2Heading:'Unknown',
		bigpara:'Unknown',
		labelName:'Unknown',
		labelEmail:'Unknown',
		labelPhone:'Unknown',
		labelMessage:'Unknown',
		buttonValue: 'Unknown'
		
	}

});