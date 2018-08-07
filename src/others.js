document.addEventListener('DOMContentLoaded', () => {
  let kitties= []
  
  class Cat{
    constructor(name,imgPath,altText) {
      this.name = name, 
      this.clicks = 0,
      this.imgPath = imgPath
      this.altText = altText
      kitties.push(this)
    }
  }
  const catOne = new Cat('Gus Gus','app/images/cat1.jpeg','picture of a cat yawning');
  const catTwo = new Cat('Juliet','app/images/cat2.jpeg','picture of a sleeping cat');
  const catThree = new Cat('Bobo','app/images/cat3.jpeg','picture of a kitten');
  const catFour = new Cat('Snarf','app/images/cat4.jpeg','picture of a regal cat');
  const catFive = new Cat('Sir Figgington','app/images/cat5.jpeg','picture of a cat with blue eyes');
  
  class CatFactory{

    //responsible for rendering kitties on the page
    static renderCats(kitty){
      let main = document.querySelector('main');
      main.innerHTML = "";
      //document fragment for cat html
      let newCat =     document.createDocumentFragment(),
          catCarrier = document.createElement('div'),
          catNameTag = document.createElement('div'),
          catName =    document.createElement('h3'),
          catImg =     document.createElement('img'),
          catClicks =  document.createElement('div'),
          catId =      'cat' + (kitty.name.replace(' ', '')).toLowerCase();
      
      
          //update the kitty object to hold an id
          kitty.id = catId;
          //holds cat's name
          catNameTag.classList.add('cat-name');
          catNameTag.setAttribute('id',catId);
          catName.innerText = kitty.name

          catNameTag.appendChild(catName);

          //build cat image 
          catImg.setAttribute('src', kitty.imgPath);
          catImg.setAttribute('alt',kitty.altText);
          catImg.setAttribute('data-id',kitty.id);

          //div to hold clicks
          catClicks.classList.add('description-box');
          catClicks.setAttribute('data-count-id',kitty.id);
          catClicks.innerText = `Clicks: ` + kitty.clicks;

          //build the cat carrier 
          catCarrier.classList.add('cat-carrier');

          catCarrier.appendChild(catNameTag);
          catCarrier.appendChild(catImg);
          catCarrier.appendChild(catClicks);

          //append the fragment 
          newCat.appendChild(catCarrier);

          //put it in the DOM
          document.getElementById('kitties').appendChild(newCat);

          return catCarrier;
    }

    static addClicker(kitty){
      //add clicks to cats
      //find the img element and add an event listener to it
       kitty.querySelector('img').addEventListener('click',function(event) {
        const kittyId = event.target.getAttribute('data-id'); //this line gets the value of the image's id

        //loop through the kitties array and find the cat with this id
        let thisKitty = kitties.find((cat) => {
          return cat.id === kittyId;
        });

        CatFactory.updateCount(thisKitty);
        return thisKitty.clicks;
      })

    }

    static updateCount(kittyObj) {
      const kittyCount = document.querySelector('div[data-count-id="' + kittyObj.id + '"]'); // get current count element

      kittyObj.clicks += 1; // update kitty object 
      kittyCount.innerHTML = " ";
      kittyCount.innerText = `Clicks: ${kittyObj.clicks}`; // re-render kitty count 
  }

  }
  //initial page load. 
  kitties.map(cat => {
    CatFactory.addClicker(CatFactory.renderCats(kitties[0]));
  })



  
  const catNames = kitties.map(function(cat){
    return cat.name;
  });
  
  
  const navFrag = document.createDocumentFragment();
  const ul = document.querySelector('ul');
  const li = document.createElement('li');

  catNames.forEach(function(cat){
    let catName = cat;
    const catLi = document.createElement('li');
    catLi.textContent = catName;
    ul.appendChild(catLi);
    catLi.setAttribute('id', 'cat'+ catName.replace(' ','').toLowerCase());

    catLi.addEventListener('click', function(event){
      const catLiId = event.target.getAttribute('id');

      let thisKitty = kitties.find((cat) => {
        return cat.id === catLiId;
      })

      CatFactory.addClicker(CatFactory.renderCats(thisKitty));
    })
  })
  
})
