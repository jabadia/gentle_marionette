ContactManager.ContactView = Marionette.ItemView.extend({

	template: '#contact-list-item',
	tagName: 'li',
	events: {
		'click p': 'alertPhoneNumber',
	},

	alertPhoneNumber: function(e)
	{
		alert(this.model.escape('phoneNumber'));
	}
});

ContactManager.ContactCollectionView = Marionette.CollectionView.extend({

	tagName: 'ul',
	childView: ContactManager.ContactView,

});
