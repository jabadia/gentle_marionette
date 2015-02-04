var ContactManager = new Marionette.Application();

ContactManager.addRegions({
	mainRegion: "#main-region",
});

ContactManager.on("start", function()
{
	console.log("[start] app initialized");
	
	if(Backbone.history)
	{
		Backbone.history.start();

		if( Backbone.history.fragment === "")
		{
			ContactManager.trigger("contacts:list");
		}
	}
})