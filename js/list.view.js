ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _)
{
	List.Contact = Marionette.ItemView.extend({
		tagName: 'tr',
		template: '#contact-list-item',

		events: {
			"click": "highlightName",
			"click td": "alertName",
		},

		highlightName: function(e)
		{
			e.preventDefault();
			this.$el.toggleClass('warning');
		},

		alertName: function(e)
		{
			alert($(e.target).text());
		}
	});

	List.Contacts = Marionette.CompositeView.extend({
		tagName: 'table',
		className: 'table table-hover',
		template: '#contact-list',
		childView: List.Contact,
		childViewContainer: "tbody",
	});
})
