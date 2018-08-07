describe('cat', function (){
	let cat1; //, cat2;

	//everything within this beforeEach function is applied before each "it" spec is invoked
	
	beforeEach(()=>{
		cat1 = new Cat("Cindy","https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350");
		//cat2 = new Cat();
	});

	//This is an "it" spec
	it('should have a name, url & count', ()=>{
		cat1.name;
		cat1.url;
		cat1.count;
		cat1.id;

		expect((cat1.name.length)).not.toBe(0); //makes sure name is not empty
		expect((cat1.name)).toBeDefined(); //makes sure name is defined

		expect((cat1.url.length)).not.toBe(0); //makes sure url is not empty
		expect((cat1.url)).toBeDefined(); //makes sure url is defined

		expect((cat1.count)).toBeDefined(); //makes sure count is defined
	});

	it('should have a buildTemplate method', ()=>{
		expect(cat1.buildTemplate()).not.toBe(null); //make sure buildTemplate method is defined on cat object
	});
});