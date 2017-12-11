const cats = [{name: "Fluffy", favouriteFood: "milk", image: "http://www.pngmart.com/files/4/Kitten-PNG-Image.png" },
 {name: "Lola", favouriteFood: "salad", image: "https://static1.shop033.com/resources/18/160536/picture/EC/85607916.jpg"}]



var app = function() {

// selction id: cats -  class: cat - li : name/ li: favourite food / li:img

const newCat = document.createElement('ul');
newCat.classList.add('cat');

const listItemName = document.createElement('li');
listItemName.innerText = "Fluffy";

const listItemFaveFood = document.createElement('li');
listItemFaveFood.innerText = "milk";

const listItemImage = document.createElement('li');
const image = document.createElement('img');
image.src = "https://static1.shop033.com/resources/18/160536/picture/EC/85607916.jpg";
listItemImage.appendChild(image);

newCat.appendChild(listItemName);
newCat.appendChild(listItemFaveFood);
newCat.appendChild(listItemImage);

const cats = document.querySelector('#cats');
cats.appendChild(newCat);



};

// window.onload = app;
document.addEventListener('DOMContentLoaded', app);
