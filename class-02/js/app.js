'use strict';

let confirmUser = confirm('do you like movies?');
console.log(confirmUser);


if (confirmUser){ // 
  alert('welcome to the movies page');
}
else{
  alert('omg');
}
let myBool = false;
let anotherBool = false;
let thirdBool = true;


if (myBool && anotherBool) { // false
  console.log('myBool and thirdBool were both true');
} // only one of these have to be true
else if (myBool || anotherBool) { // false
  console.log('My bool or anotherBool was true!');
} // only thirdBool can be true
else if (myBool) { // F
  console.log('myBool and anotherBool were false, but thirdBool was true.');
} // none of the above conditions were true
else { // default case
  console.log('Were any of my variables true?');
}


let myCharacter = 'invoker';
let userFav = prompt('what is your fav character?');
// console.log(userFav.toLowerCase()); // invoker // the way the user write it.
// userFav = userFav.toLowerCase();
// INVOKER -> invoker
if(userFav.toLowerCase() === myCharacter){
  alert('Okay, We have the same taste');
}else {
  alert('we dont have the same taste!');
}
console.log(userFav);




let userinput = prompt('do you think I like paris');
if (userinput ==='yes' || userinput ==='y'){
alert('you got it right !')
} else if(userinput ==='no' || userinput ==='n'){
  alert('no actually i love it ')
}
 

