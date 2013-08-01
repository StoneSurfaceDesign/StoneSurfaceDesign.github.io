// tmp/js/app.js

var app = app || {};

$(function() {
	var supports,
	paragraphs = [
        { featureTitle: 'Stone Surface Design', featureSubheading: 'we make it simple', featuresParaTitle: 'Kitchen', featuresPara: 'We can transform your kitchen from drab to contemporary. Our kitchen services include, granite design and tile work on countertops, backsplashes and Islands.',
         featuresParaTitle1: 'Bath', featuresPara1: 'Your bathroom can go from traditional to modern with our customized and unique granite counter tops, baths and tile work.',
        featuresParaTitle2: 'Fireplace', featuresPara2: 'Customize your house and make it a home by allowing us to help you redesign your basic fireplace into to a new-aged, modern fireplace made of beautiful granite.'}
    ];

    new app.ParagraphsView( paragraphs );
	
	supports = [
		{iconGlobe: 'Custom Design', 
		iconGift: 'Countertops',
		iconStar: 'Quality Installs',
		supportTitle: 'Kitchen',
		kitchenList: 'Granite Countertops',
		kitchenList1: 'Tile Backsplashes',
		kitchenList2: 'Islands',
		kitchenList3: 'Custom Design',
		supportTitle1: 'Bath',
		bathList: 'Custom Sinks',
		bathList1: 'Granite or Tile installations',
		bathList2: 'Ask us about anything',
		supportTitle2: 'Fireplaces',
		fireplacesList: 'Custom Granite Fireplaces',
		fireplacesList1: 'Elegant Designs' }
	];
	
	new app.SupportsView( supports );
	
	var portfolios = [
		{ bigHeading: 'Gallery',
		subHeading: 'see some of our projects...',
		galleryList: 'All',
		galleryList1: 'Tile',
		galleryList2: 'One',
		galleryList3: 'Two' }
	];
	
	new app.PortfoliosView( portfolios );
	
	var callTo = [
		{ callToAct: 'Choose US for your Next Project ->'}
	];
	
	new app.CallTosView( callTo );
	
	var contacts = [
		{ title: 'Request an estimate',
		subHeading: 'WE WANT TO HEAR FROM YOU',
		bigH2Heading: 'Contact Us',
		bigpara: 'Send us a message and we will contact you right away!',
		labelName: 'Name:',
		labelEmail: 'Email:',
		labelPhone: 'Phone:',
		labelMessage: 'Message:',
		buttonValue: 'Send'
		}
	];
	
	new app.ContactsView( contacts );
	
	
});