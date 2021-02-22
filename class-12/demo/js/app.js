'use strict';


let maximumClicks = 10;
let attempts = 0;

let leftImageElement = document.getElementById('leftImage');
let rightImageElement = document.getElementById('rightImage');

let arrOfObjects = [];
let namesArr = [];
let arrOfVotes = [];
let imagesCountArr = [];
function Goat(name, source){
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.imageDisplayed = 0;
    // Goat.prototype.arrOfObjects.push(this);
    arrOfObjects.push(this);
    namesArr.push(this.name);
}
new Goat('cruisin-goat','images/cruisin-goat.jpg');
new Goat('float-your-goat','images/float-your-goat.jpg');
new Goat('goat-away.','images/goat-away.jpg');
new Goat('goat-out-of-hand','images/goat-out-of-hand.jpg');
new Goat('smiling-goat','images/smiling-goat.jpg');
new Goat('sweater-goat','images/sweater-goat.jpg');


// console.log(arrOfObjects);
let leftImageIndex;
let rightImageIndex;
function renderTwoRandomImages(){
    leftImageIndex = generateRandomIndex(); 
    rightImageIndex = generateRandomIndex();
    while(leftImageIndex === rightImageIndex){
        leftImageIndex = generateRandomIndex(); 
    }

    leftImageElement.setAttribute('src', arrOfObjects[leftImageIndex].source); 
    arrOfObjects[leftImageIndex].imageDisplayed++;
    rightImageElement.setAttribute('src', arrOfObjects[rightImageIndex].source);
    arrOfObjects[rightImageIndex].imageDisplayed++;

                                          
}

renderTwoRandomImages();


function generateRandomIndex(){

     let randomIndex = Math.floor(Math.random() * arrOfObjects.length); 
     return randomIndex;
}


leftImageElement.addEventListener('click', handleClicking);
rightImageElement.addEventListener('click', handleClicking);
// id from the image
function handleClicking(event){
    attempts++;

    if(attempts <= maximumClicks){
        if(event.target.id === 'leftImage'){
            arrOfObjects[leftImageIndex].votes++;
 
        }else{
            arrOfObjects[rightImageIndex].votes++;

        }
        renderTwoRandomImages();
        // console.log(arrOfObjects);
    }else{
        let unorderdList = document.getElementById('unList');
        let li;
        for(let i = 0 ; i < arrOfObjects.length; i++){
            li = document.createElement('li');
            unorderdList.appendChild(li);
          
            li.textContent = `${arrOfObjects[i].name} it has ${arrOfObjects[i].votes} Votes and its being displayed ${arrOfObjects[i].imageDisplayed}.`
        }
        // console.log(arrOfObjects);

        for(let j = 0 ; j <arrOfObjects.length; j++){
            arrOfVotes.push(arrOfObjects[j].votes);
            imagesCountArr.push(arrOfObjects[j].imageDisplayed);
        }
        chartRender();
        leftImageElement.removeEventListener('click', handleClicking);
        rightImageElement.removeEventListener('click', handleClicking);    
    }
}

function chartRender(){
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: namesArr,
        datasets: [{
            label: 'Goat Votes',
            backgroundColor: '#e36bae',
            borderColor: 'rgb(255, 99, 132)',
            data: arrOfVotes,
        },{
            label: 'Goats Displayed',
            backgroundColor: '#f1d1d0',
            borderColor:'rgb(155,100,30)',
            data:imagesCountArr,

        }]
    },

    // Configuration options go here
    options: {}
});

// console.log(chart);
}
// console.log(chart)
// console.log(chart.config.data.labels[0]);
// console.log(chart.config.data.datasets[0].label);
// console.log(chart.config.data.datasets[0].data[2])