'use strict';

let orderForm = document.getElementById('orderForm');
let orders = document.getElementById('orders');

function Coffee(name, size, milk, isHot, drinkType){
  this.name = name;
  this.size = size;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.milk = milk;
  Coffee.drinks.push(this);
}
Coffee.drinks = [];

function handleSubmit(event){
  event.preventDefault();
  // console.log(event.target);

  let drink = event.target;
  let name = drink.name.value;
  let size = drink.size.value;
  let isHot = drink.isHot.value;
  let dType  = drink.drinkType.value;
  let milk = drink.milk.value; 

  new Coffee(name, size, milk, isHot, dType);
  // console.log(Coffee.drinks);
  savedOrders(); // so when we create a new instance it will be saved in the local storage
  renderOrders();
}


function renderOrders(){
  orders.textContent = "";

  for(let i=0; i < Coffee.drinks.length; i++){
    let drinkLI = document.createElement('li');
    let infoP = document.createElement('p');
    let temp;
    if(Coffee.drinks[i].isHot === 'on'){
      temp = 'cold';
    } else{
      temp = 'hot';
    }
    infoP.textContent = `${Coffee.drinks[i].name} orderd a ${temp} ${Coffee.drinks[i].size} ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk}`;
    drinkLI.appendChild(infoP);
    orders.appendChild(drinkLI);
  }
}
function savedOrders(){
  let order = JSON.stringify(Coffee.drinks);
  localStorage.setItem('AllOrders', order);
}

function getOrder(){
  let gettingOrder = localStorage.getItem('AllOrders');
  let list = JSON.parse(gettingOrder);
  // i still dont have any order
  // console.log(list);
  // // null value
  if(list){ // its not null truthy 
    // console.log(list);
    Coffee.drinks = list;
  }else{
    Coffee.drinks = [];
  }
  renderOrders();
}
orderForm.addEventListener('submit', handleSubmit);
getOrder();