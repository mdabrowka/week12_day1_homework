// const cats = [{name: "Fluffy", favouriteFood: "milk", image: "http://www.pngmart.com/files/4/Kitten-PNG-Image.png" },
//  {name: "Lola", favouriteFood: "salad", image: "https://static1.shop033.com/resources/18/160536/picture/EC/85607916.jpg"}]
//
// var app = function() {
//
// // selction id: cats -  class: cat - li : name/ li: favourite food / li:img
//
// const newCat = document.createElement('ul');
// newCat.classList.add('cat');
//
// const listItemName = document.createElement('li');
// listItemName.innerText = "Fluffy";
//
// const listItemFaveFood = document.createElement('li');
// listItemFaveFood.innerText = "milk";
//
// const listItemImage = document.createElement('li');
// const image = document.createElement('img');
// image.src = "https://static1.shop033.com/resources/18/160536/picture/EC/85607916.jpg";
// listItemImage.appendChild(image);
//
// newCat.appendChild(listItemName);
// newCat.appendChild(listItemFaveFood);
// newCat.appendChild(listItemImage);
//
// const cats = document.querySelector('#cats');
// cats.appendChild(newCat);
//
// };


var app = function() {
  addNewCat("Name: Boba", "Favourite food: Sock fluff", `http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg`)
  addNewCat("Name: Barnaby", "Favourite food: Tuna", `https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg`)
  addNewCat("Name: Max", "Favourite food: Whiskas Temptations", `http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg`)
  addNewCat("Name: Lola", "Favourite food: Diet coke", `https://fthmb.tqn.com/65lNzIRNfZY4xY02D17b1RcGvso=/960x0/filters:no_upscale()/kitten-looking-at-camera-521981437-57d840213df78c583374be3b.jpg` )
}


const addNewCat = function(name, favouriteFood, image) {
const catName = createLi(name);
const catFaveFood = createLi(favouriteFood);
const imageLi = createLi();
const catImage = createImage(image);
imageLi.appendChild(catImage);
const ul = createUl();
appendChildren(catName, catFaveFood, imageLi, ul);
}


const createLi = function(text) {
  const listItem = document.createElement('li');
  listItem.innerText = text || '';
  return listItem;
}

const createImage = function(url) {
  const image = document.createElement('img');
  image.src = url;
  return image;
}

const createUl = function() {
  const ul = document.createElement('ul');
  ul.classList.add('cat');
  return ul;
}

const appendChildren = function(name, favouriteFood, image, catList) {
  const cats = document.querySelector("#cats");
  cats.appendChild(catList);
  catList.appendChild(name);
  catList.appendChild(favouriteFood);
  catList.appendChild(image);
}


// const image = document.createElement('img');
// img.src = imgLink;




document.addEventListener('DOMContentLoaded', app);
