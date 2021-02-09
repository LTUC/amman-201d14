'use strict';

/*

Truthy & Falsey values:

Falsey values: 
1-False
2-0
3- the empty string
4- Null
5- undefined
6- 10/'bashar'; // NaN => Not A Number


Truthy values:
1-true
2-any numeric value other than 0 
3- any string '23213213'

*/
// let falseyValue = 10/'bashar';
// console.log(falseyValue);
// if(falseyValue){
//     console.log('this wont run')
// }else{
//     console.log('im inside else')

// }
// let truthyValue =0*3;
// if(truthyValue){
//     console.log('This is true')
// }else{
//     console.log('its false');
// }

// Switch 
/*
switch(the value i want to check){
    case 'yes':
    case 'y':    
        console.log('something);
}

*/


// let answer = prompt('do you think i like paris');
// // y
// switch(answer.toLowerCase()){
//     case 'yes':
//     case 'y':    
//         alert('thats incorrect');
//         break;
//     case 'no':
//     case 'n':    
//         alert('thats correct');
//         break;
//     case 'idk':
//         alert('mohammad');
//         break
//     default:
//         alert('Frank')            
// }   


//arrays

// let arr = [1,2,3,4,5,6,7];
// console.log(arr);

// let stdNames = ['wasfi','naji','joudy','mohammad azzam','duha','anagheem'];

// console.log(stdNames);

// console.log(stdNames[4]);

// console.log(stdNames[1]);

// stdNames[2] = 'Mohammad khasawneh';

// console.log(stdNames);

// let userEnter = prompt('Please add a name?');
// mohammad alazzam
// stdNames[6] = userEnter;

// stdNames.push(userEnter);

// console.log(stdNames);

// stdNames.push('Hello');

// console.log(stdNames);

// stdNames.pop();
// // remove the last element from the array

// console.log(stdNames);


//loops 

/*Programming structure that repeats a sequence of instructions until a specfic condition is met

     counter   
for(intilization; condition; update the counter or the initial value){
    // block
}

*/ 

// using console.log() log 10 numbers using for loop
// 1-only once 
// 2- if the condition is True run the code 
// 3 - updating the value of coutner
// for(let i = 0; i <= 10;i++){
//     console.log(i);
// }
// i++ => i = i + 1
// i-- => i = i - 1
// index++ = index = index + 1;
// for(let index = 30 ; index >= 20; index = index -2){
//     console.log(index);
// }


// just zero
// infinte loop
// for(let i = 0 ; i <= 2 ; i--){
//     console.log(i);
// }
// i = 0 
// i = -1
// i = -2
// let movieNames = ['harry potter','law abiding citzen','catch me if you can', 'lord of the ring','inception', 'tent','ocean 8'];
// console.log(movieNames);
// console.log(movieNames.length);
// 7 
// 0 1 2 3 4 5 6      
// console.log(movieNames)
// console.log(movieNames[movieNames.length - 1]);
// for(let index = 0  ; index <= movieNames.length-1 ; index++){
//     console.log(movieNames[index]);
// }

// let movieNames = ['harry potter','law abiding citzen','catch me if you can', 'lord of the ring','inception', 'tent','ocean 8'];
// for(let index = 0  ; index < movieNames.length ; index++){
//     if(index === 4){
//         break;
//     }
//     console.log(movieNames[index]);
// }


// let arrOfNums = [1,2,3,4,5,6,7,8,9,10];
// // console.log(arrOfNums)
// // console.log(arrOfNums[0]);
// // problem domain 
// /* loop through the array that you have and i want you each time to print out for me the multiplication table for each number inside the array using document.write() (1-10)*/

// for(let i = 0 ; i < arrOfNums.length;i++){
//     // each time you are looping for the array elements
//     document.write('<h2>'+`multiplication table for ${arrOfNums[i]}` + '</h2>')
//     for(let j = 1 ; j<= 10 ; j++){
//         document.write('<p>' + arrOfNums[i] * j + '</p>')
//     }
// }

/*
while(condition){
    //block of code
}
*/ 

// let userPassword = prompt('enter your password');
// while (userPassword !== 'bashar') {
//     userPassword = prompt('enter your password');
// }

// let userPassword = prompt('enter your password');
// // userPassword = parseInt(userPassword); // numeric value
// // console.log(typeof userPassword)
// while (parseInt(userPassword) !== 123456) {
//     userPassword = prompt('incorrect value');
//     // userPassword = parseInt(userPassword);

// }

// let loading = 0;
// // an infinte // T
// while (loading < 1) {
//     console.log('the page is still loading!');
//     loading++;
// }


// do {

// }while()