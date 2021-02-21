'use strict';
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
                                        //true
let arr = [];
function Kitten(kittenName,likes,isGoodWithDogs,isGoodWithKids,isGoodwithOtherCats){
this.name = kittenName;
this.age = 0;
this.likes = likes;
this.isGoodWithDogs = isGoodWithDogs;
this.isGoodWithKids = isGoodWithKids;
this.isGoodwithOtherCats = isGoodwithOtherCats;
arr.push(this);
}
console.log(arr);
Kitten.prototype.updateAge = function(){
    this.age = randomValue(3,12) + ' months';
}
Kitten.prototype.render = function(){

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
        for(let i = 0 ; i <this.likes.length; i++)
        {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = this.likes[i];
        }

        let imageEl = document.createElement('img');
        articleEl.appendChild(imageEl);
        imageEl.setAttribute('src',`images/${this.name}.jpeg`)

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

let frankie = new Kitten('frankie', ['playing','eating','jumping'],true, false,false);
frankie.updateAge();
frankie.render();
// console.log(frankie);
let serena = new Kitten('serena', ['shopping','playingAround','running'],false,false,false);
serena.updateAge();
serena.render();
let jumper = new Kitten('jumper',['jumping','eating','sleeping'],true,true,true);
jumper.updateAge();
jumper.render();