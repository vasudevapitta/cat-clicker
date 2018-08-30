let model = {};
model.arrow = '↓';
model = {
	currentCat: null,
	cats: [
			{
				name: 'Missy' + model.arrow,
				url: './src/images/cat0.jpg',
				altTxt: 'Cute picture of cat',
				count: 0,
				id: 0
			},

			{
				name: 'Smokey' + model.arrow,
				url: './src/images/cat1.jpg',
				altTxt: 'Cute picture of cat',
				count: 0,
				id: 1	
			},
			
			{
				name: 'Sooty' + model.arrow,
				url: './src/images/cat2.jpg',
				altTxt: 'Cute picture of cat',
				count: 0,
				id: 2		
			}
		]
};

const controller = {
	init(){
		view.init();
	},

	getAllCats(){
		return model.cats;
	},

	setCurrentCat(cat){
		return model.currentCat = cat;
	},

	getName(){
		return model.currentCat.name;
	},

	getCount(){
		return model.currentCat.count;
	},

	getUrl(){
		return model.currentCat.url;
	},

	getAltTxt(){
		return model.currentCat.altTxt;
	},

	updateCount(cat){
		cat.count++;
		view.render();
	}
}

const view = {
	init(){
		this.body = $('body');
		this.container = $('.container');
		this.allCats = controller.getAllCats();
		this.fragment = document.createDocumentFragment();
		this.render();
	},

	render(){
		$(this.container).html('');
		let catObj, template
		for(let cat of this.allCats){
			catObj = cat;
			controller.setCurrentCat(cat);

			this.name = controller.getName();
			this.count = controller.getCount();
			this.url = controller.getUrl();
			this.altTxt = controller.getAltTxt();

			template = $(`<div class='cat'>
						<p class='name'>${this.name}</p>
						<p class='num'>${this.count}</p>
						<img src='${this.url}' alt='${this.altTxt}' class='img'>
						</div>`);

			template.click(function(thisObj){
					return function(){
						controller.updateCount(thisObj);
					};
				}(catObj));

			$(this.fragment).append(template);
		}
		$(this.container).append(this.fragment);
	},

};

controller.init();