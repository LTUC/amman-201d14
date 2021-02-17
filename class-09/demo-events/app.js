'use strict';
const container = document.getElementById('container');
let button = document.getElementById('btn-1');
button.addEventListener('click', sayHi);
button.addEventListener('mouseover', addText);



function sayHi(){
    alert('Hello User');
}
function addText(){
    let para = document.createElement('p');
    container.appendChild(para);
    para.textContent = 'This text is generated by hovering the button';
    
}

let paragraph = document.getElementById('p-one');
paragraph.addEventListener('dblclick', changeText);

function changeText(){  
    paragraph.textContent = 'I will be changed if you double click!!';
}   





