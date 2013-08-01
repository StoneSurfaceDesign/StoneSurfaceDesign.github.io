// site/js/view/contacts.js

var app = app || {};

app.ContactsView = Backbone.View.extend({

    el: '#wrap',

    initialize: function( initialContacts ) {
		this.collection = new app.Contacts( initialContacts );
        this.render();
    },

    // render contacts by rendering each contact in its collection
    render: function() {
        this.collection.each(function( item ) {
			this.renderContact( item );
        }, this );
    },

    // render a contact by creating a ContactView and appending the
    // element it renders to the paragraphs's element
    renderContact: function( item ) {
		var contactView = new app.ContactView({
			model: item
        });
        this.$el.append( contactView.render().el );
    }
});