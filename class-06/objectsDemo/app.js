'use strict';

// let data = ['mohammad', 42,'negative', 180 , 70, 1998];

// array in the global scope
let grades = [30,20,50,20,70];

// let modifedGrades = [];

// modifedGrades[0] = 30*2;
// modifedGrades.push(30*2)
// console.log(modifedGrades);
let mohammad = {
    studentName:'Mohammad',
    age:30,
    height:181,
    favColor:'black',
    favFood:['mansaf','makmoura','pizza','shawerma'],
    totalGrades:[],
    covid19Stats: false,
    jobDetails: {
        jobTitle:'SoftWare-Developer',
        salary:3200,
        location:'Irbid-Jordan'
    },
    hobbies:['fighting','coding'],
    talk:function(){
        console.log(this.studentName +' Talking about the UFC all the time!');
    },
    updateAge:function(){
        this.age = this.age + 1;
        return this.age;
    },
    grades:function(){
        for(let i =0 ; i <grades.length; i++){
            // console.log(grades[i]*2);
            // mohammad.totalGrades[i] = grades[i]*2;
            this.totalGrades.push(grades[i]*2);
            // []                     //[60,40,100,40,140]  
            // 60
            // 40 
            // 100
        }

    }

};
// mohammad.talk();
// // mohammad.grades();
// console.log(mohammad);
// console.log(mohammad.updateAge());
// mohammad.talk();
// console.log(mohammad.updateAge());
// console.log(console.log());
// console.log(mohammad.age);

let joudy = {
    studentName:'Joudy',
    age:23,
    height:161,
    favColor:'white',
    favFood:['mansaf','makmoura','pizza','shawerma'],
    covid19Stats: false,
    jobDetails: {
        jobTitle:'SoftWare-Developer',
        salary:4000,
        location:'Irbid-Jordan'
    },
    hobbies:['shopping','coding'],
    talk:function(){
        console.log('Talking about the Shopping all the time!');
    },
    // method
    updateAge:function(){
        console.log(this);
    }
};
// console.log(console);

// joudy.updateAge()


// accessing the objects
// 1 - Dot notation
// console.log(mohammad.height);
// 2- square bracket notaiton

// console.log(mohammad['height']);

// console.log(student1.height);
// console.log(joudy.favFood);
// console.log(mohammad['height']);
// for(let i = 0 ; i < joudy.favFood.length ; i++){
//     console.log(joudy.favFood[i]);
// }
// update the properties with re assign
// joudy.height = 162;

// console.log(joudy);

// delete mohammad.hobbies;
// console.log(mohammad);
// console.log(document.write)
// document.write('<p>'  + 'abdallah' + '</p>');
// document.write('<p>'  + 'mohammad alazzam' + '</p>');
// console.log(document);

let paragraph = document.getElementById('paragraph');
paragraph.textContent = 'Used variables';

let heading2 = document.getElementById('header');
heading2.textContent = 'Changes';



let contains = document.getElementById('container');
// console.log(contains);
let header3  = document.createElement('h3');
contains.appendChild(header3);
header3.textContent = 'this is created by he javascript';




let main = document.getElementById('main-container');

let header1 = document.createElement('h1');

main.appendChild(header1);
header1.textContent = 'headingOne'








