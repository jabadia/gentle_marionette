ContactManager.module("ContactsApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _)
{
	Show.Controller = {
		showContact: function(model)
		{
			var id = model;
			if( typeof model !== 'object')
			{
				var contacts = ContactManager.request('contact:entities');
				model = contacts.get(id);
			}			
			else
			{
				id = model.get('id');
			}

			if( ! model )
			{
				ContactManager.error("Can't find contact " + id);
				return;
			}

			Backbone.history.navigate("contacts/" + id);

			var contactView = new Show.Contact({
				model: model
			});

			ContactManager.mainRegion.show(contactView);
		}
	}

});
