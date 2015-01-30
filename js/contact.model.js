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


	var _contacts;

	var _initalizeContacts = function()
	{
		_contacts = new Entities.ContactCollection([
		{	id: 1, firstName: 'Bob',		lastName: 'Nolan',		phoneNumber: '555-1111'	},
		{	id: 2, firstName: 'Alice',		lastName: 'WhoTheFuck',	phoneNumber: '555-2222' },
		{	id: 3, firstName: 'Charlie',	lastName: 'Campbell',	phoneNumber: '555-3333' },
		{	id: 4, firstName: 'Alice',		lastName: 'The Best',	phoneNumber: '555-3333' }
		]);
	};

	var API = 
	{
		getContactEntities: function()
		{
			if(_contacts === undefined)
				_initalizeContacts();

			return _contacts;
		}
	};

	ContactManager.reqres.setHandler('contact:entities', function()
	{
		return API.getContactEntities();
	});
});

