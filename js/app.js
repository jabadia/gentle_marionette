var ContactManager = new Marionette.Application();

ContactManager.addRegions({
	mainRegion: "#main-region",
});

ContactManager.StaticView = Marionette.ItemView.extend({
	id: "static-view",
	tagName: "span",
	className: "instruction",
	template: "#static-template",
})

ContactManager.on("start", function()
{
	console.log("[start] app initialized");
	var staticView = new ContactManager.StaticView({
		template: "#list-item-template",
		tagName: 'ul',
	});
	ContactManager.mainRegion.show(staticView);
})