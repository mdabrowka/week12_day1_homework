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
  addNewCat("Lola", "Tuna fish", `https://fthmb.tqn.com/65lNzIRNfZY4xY02D17b1RcGvso=/960x0/filters:no_upscale()/kitten-looking-at-camera-521981437-57d840213df78c583374be3b.jpg` )
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
