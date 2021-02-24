'use strict';

let allCats = [];
let catform = document.getElementById('catform');
let catlist = document.getElementById('catlist');

function Cat(name){
  this.name = name;
  this.render = function(){
    let listItem = document.createElement('li');
    listItem.textContent = this.name;
    catlist.appendChild(listItem);
  },
  allCats.push(this);
}

function handleCatSubmit(event){
  event.preventDefault();
  let newCat = new Cat(event.target.kitten.value);
  // serena
  catform.reset();
  newCat.render();
  localStorage.cats = JSON.stringify(allCats);
  console.log('this is what is in local storage', localStorage.cats);
}