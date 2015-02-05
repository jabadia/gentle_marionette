var ContactManager = new Marionette.Application();

ContactManager.addRegions({
	mainRegion: "#main-region",
	coursesRegion: "#courses-region",
});

ContactManager.ErrorView = Marionette.ItemView.extend({
	template: '#error-view'
})

ContactManager.Error = Backbone.Model.extend({
	defaults: { msg: "unknown error" }
});

ContactManager.error = function(msg)
{
	var error = new ContactManager.Error({msg:msg})
	var errorView = new ContactManager.ErrorView({ model: error });
	ContactManager.mainRegion.show(errorView);
}

ContactManager.on("start", function()
{
	console.log("[start] app initialized");
	
	if(Backbone.history)
	{
		Backbone.history.start();

		if( Backbone.history.fragment === "")
		{
			ContactManager.ContactsApp.List.Controller.listContacts();
		}
	}

	
	var courses = new ContactManager.Entities.Courses();
	courses.fetch();

	console.log(courses);
	var coursesView = new ContactManager.Courses.Courses({
		collection: courses,
	});
	ContactManager.coursesRegion.show(coursesView);
})