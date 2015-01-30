ContactManager.Contact = Backbone.Model.extend({

	defaults: {
		firstName: '-',		
		lastName: '-',
		phoneNumber: 'unknown',
	}

});

ContactManager.ContactCollection = Backbone.Collection.extend({

	model: ContactManager.Contact,

});