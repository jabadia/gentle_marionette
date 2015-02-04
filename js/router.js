ContactManager.module("ContactsApp", function(ContactsApp, ContactManager, Backbone, Marionette, $, _)
{
	ContactsApp.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"contacts": "listContacts",
		},

		controller: {

			listContacts: function()
			{
				ContactsApp.List.Controller.listContacts();
			},

		}
	});

	var router = new ContactsApp.Router();

});