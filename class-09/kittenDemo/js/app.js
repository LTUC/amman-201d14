'use strict';
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
//true
let arr = [];
function Kitten(kittenName, likes, image, isGoodWithDogs, isGoodWithKids, isGoodwithOtherCats) {
    this.name = kittenName;
    this.age = 0;
    this.likes = likes;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodwithOtherCats = isGoodwithOtherCats;
    this.image = image;
    arr.push(this);
}
// console.log(arr);
Kitten.prototype.updateAge = function () {
    this.age = randomValue(3, 12) + ' months';
}
Kitten.prototype.render = function () {

    let divEl = document.getElementById('kittenProfiles');
    let articleEl = document.createElement('article');
    divEl.appendChild(articleEl);
    let header2 = document.createElement('h2');
    articleEl.appendChild(header2);
    header2.textContent = this.name;
    let paragraphEl = document.createElement('p');
    articleEl.appendChild(paragraphEl);
    paragraphEl.textContent = `${this.name} is actually really fun cat`;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    // each time im creating a list item
    let liEl;
    // 'cuddling,hugging'
    // ['cuddling','hugging']; after the split we seprated by comma
    for (let i = 0; i < this.likes.length; i++) {
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = this.likes[i];
    }

    let imageEl = document.createElement('img');
    articleEl.appendChild(imageEl);
    imageEl.setAttribute('src', this.image)

    // imageEl.setAttribute('alt','Some text generated')
    let table = document.createElement('table');
    articleEl.appendChild(table);

    let tr = document.createElement('tr');
    table.appendChild(tr);
    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = `IsGoodWithDogs`;
    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = `isGoodWithKids`;
    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = `isGoodwithOtherCats`;
    let tr2 = document.createElement('tr');
    table.appendChild(tr2);
    let td1 = document.createElement('td');
    tr2.appendChild(td1);
    td1.textContent = this.isGoodWithDogs;
    let td2 = document.createElement('td');
    tr2.appendChild(td2);
    td2.textContent = this.isGoodWithKids;
    let td3 = document.createElement('td');
    tr2.appendChild(td3);
    td3.textContent = this.isGoodwithOtherCats;
}

// Prototype object
// arr.push()
// arr.pop()
let frankie = new Kitten('frankie', ['playing', 'eating', 'jumping'], `images/frankie.jpeg`, true, false, false);

// console.log(frankie);
let serena = new Kitten('serena', ['shopping', 'playingAround', 'running'], `images/serena.jpeg`, false, false, false);

let jumper = new Kitten('jumper', ['jumping', 'eating', 'sleeping'], `images/jumper.jpeg`, true, true, true);







const form = document.getElementById('kittenForm');

form.addEventListener('submit', kittenCreator)


function kittenCreator(event) {
    // to prevent default behavior from the webpages
    event.preventDefault();
    console.log(event);
    const kittenName = event.target.nameField.value;
    // console.log(kittenName);
    let likes = event.target.likesField.value;
    likes = likes.split(',');
    console.log(likes);

    let image = event.target.LinkField.value;
    // console.log(image);
    // convert our string to array 
    // console.log(typeof likes);
    const dogs = event.target.isGoodWithDogs.checked;
    // console.log(dogs);
    const kids = event.target.isGoodWithKids.checked;
    // console.log(kids);
    const cats = event.target.isGoodwithOtherCats.checked;
    // console.log(cats);
    let newKitten = new Kitten(kittenName, likes, image, dogs, kids, cats);
    // console.log(newKitten);
    newKitten.updateAge();
    newKitten.render();


}

for(let i = 0 ; i < arr.length; i++){
    arr[i].updateAge();
    arr[i].render();
}


// frankie.updateAge();
// frankie.render();

// serena.updateAge();
// serena.render();

// jumper.updateAge();
// jumper.render();