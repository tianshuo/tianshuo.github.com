/* 文档管理器 0.01 
*  by Tianshuo 阳光伟业
*/

$(function(){
	//Section Model
	window.Section= Backbone.Model.extend({
		defaults: function(){
			return {
				text: "请输入标题",
				type: "text",
				content: ["请输入文字"],
				order: Sections.nextOrder()
			};
		}
	});

	//Presentations Model <- Section Model
	window.Presentations= Section.extend({
		defaults: function(){
			return {
				text: "请输入标题",
				type: "presentation",
				content: [],
				order: Sections.nextOrder()
			};
		},
		addPresentation: function(){
			//TODO 
			return {}
		}
	});


	//Page Model
	window.SectionCollection=Backbone.Collection.extend({
		model:Section,
		localStorage: new Store("Page"),

		nextOrder: function() {
			if(!this.length) return 1;
			return this.last.get('order')+1;
		},
		
		comparator: function(obj){
			return obj.get('order');
		}
	});

	window.Page=new SectionCollection;

	// Page View
	window.PageView(
});