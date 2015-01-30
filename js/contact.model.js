ContactManager.Contact = Backbone.Model.extend({

	defaults: {
		firstName: '-',		
		lastName: '-',
		phoneNumber: 'unknown',
	}

});

ContactManager.ContactCollection = Backbone.Collection.extend({

	model: ContactManager.Contact,
	comparator: function(a,b) { 
		return a.get('firstName')+ " " + a.get('lastName') >  b.get('firstName')+ " " + b.get('lastName');
	}
	//'firstName',

});