// console.log(localStorage);

// localStorage.setItem('Email','Najialbataineh@gmail.com');
// localStorage.setItem('PassWord',123456789); // local storage

// // console.log(localStorage);

// console.log(localStorage.getItem('Email'));
// console.log(localStorage.getItem('PassWord'));

function Coffee(name, size, milk, isHot, drinkType){
    this.name = name;
    this.size = size;
    this.isHot = isHot;
    this.drinkType = drinkType;
    this.milk = milk;
    Coffee.drinks.push(this);
  }
Coffee.drinks = [];
let coffee = new Coffee('Bashar','Medium',true,'no','Caramel-Latte');

// console.log(Coffee.drinks);


localStorage.setItem('Order', JSON.stringify(coffee));

let item1 = localStorage.getItem('Order');
console.log(JSON.parse(item1));