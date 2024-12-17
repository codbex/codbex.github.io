const viewData = {
	id: "example-widgets",
	label: "Widgets Examples",
	factory: "frame",
	region: "bottom",
	link: "index.html",
};
if (typeof exports !== 'undefined') {
	exports.getView = function () {
		return viewData;
	}
}