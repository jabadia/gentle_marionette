ContactManager.module("Entities", function(Entities,ContactManager,Backbone,Marionette,$,_)
{

	Entities.Contact = Backbone.Model.extend({

		defaults: {
			firstName: '-',		
			lastName: '-',
			phoneNumber: 'unknown',
		}

	});

	Entities.ContactCollection = Backbone.Collection.extend({

		model: Entities.Contact,
		comparator: 'lastName',

	});

});

