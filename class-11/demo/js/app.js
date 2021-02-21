'use strict';


let maximumClicks = 10;
let attempts = 0;

let leftImageElement = document.getElementById('leftImage');
let rightImageElement = document.getElementById('rightImage');

let arrOfObjects = [];
function Goat(name, source){
    this.name = name;
    this.source = source;
    this.votes = 0;
    // Goat.prototype.arrOfObjects.push(this);
    arrOfObjects.push(this);
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
    leftImageIndex = generateRandomIndex(); // 3 // undifnied
    rightImageIndex = generateRandomIndex(); // 3 // undifined [image1,image2,  .. image6]
                                                               //[0,1,2,  .. 6] 

    // if statement  4      //        4
    // while  4            //         4 
    // console.log('LEFT IndeX ',leftImageIndex);
    // console.log(('Right index', rightImageIndex));
                    // T
    while(leftImageIndex === rightImageIndex){
        leftImageIndex = generateRandomIndex(); 
    }


                                                    //[4].source
    leftImageElement.setAttribute('src', arrOfObjects[leftImageIndex].source); // different
    rightImageElement.setAttribute('src', arrOfObjects[rightImageIndex].source);

                                                //[2].source = crusin goat;
}

renderTwoRandomImages();



function generateRandomIndex(){
                //0.99999      *    6
                //floor (5.99999) =>   5 
                // 0.55555
     let randomIndex = Math.floor(Math.random() * arrOfObjects.length); 
     return randomIndex;
}


leftImageElement.addEventListener('click', handleClicking);
rightImageElement.addEventListener('click', handleClicking);
// id from the image
function handleClicking(event){
    attempts++;
    // console.log(event);
    //Limiting The user;
    // 10  === 10;
    if(attempts <= maximumClicks){
        if(event.target.id === 'leftImage'){
            arrOfObjects[leftImageIndex].votes++;
            // console.log(arrOfObjects[leftImageIndex].votes);
        }else{
            arrOfObjects[rightImageIndex].votes++;
            // console.log(arrOfObjects[rightImageIndex].votes);
        }
        renderTwoRandomImages();
        console.log(arrOfObjects);
    }else{
        let unorderdList = document.getElementById('unList');
        let li;
        for(let i = 0 ; i < arrOfObjects.length; i++){
            li = document.createElement('li');
            unorderdList.appendChild(li);
                                    // [0]
                                    //cursin goat it has             
            li.textContent = `${arrOfObjects[i].name} it has ${arrOfObjects[i].votes} Votes.`
        }

        leftImageElement.removeEventListener('click', handleClicking);
        rightImageElement.removeEventListener('click', handleClicking);    
    }

}