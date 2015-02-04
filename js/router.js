ContactManager.module("ContactsApp", function(ContactsApp, ContactManager, Backbone, Marionette, $, _)
{
	ContactsApp.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"contacts": "listContacts",
			"contact/:id": "showContact",
		},

		controller: {

			listContacts: function()
			{
				console.log("router:listContacts");
				ContactsApp.List.Controller.listContacts();
			},

			showContact: function(id)
			{
				console.log("router:showContact",id);
				ContactsApp.Show.Controller.showContact(id);
			}

		}
	});

	var router = new ContactsApp.Router();

});