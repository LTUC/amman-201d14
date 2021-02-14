'use strict';
// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too `time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image // the image left
// good with kids
// good with dogs
// good with other cats

// TODO: dynamically generate kitten objects using form data


// <!-- generate this from js: -->
// <!-- <article>
//   <h2></h2>
//   <p></p>
//   <ul>
//     <li></li>
//   </ul>
//   <img>
// </article> -->
// Object Literlas
let frankie = {
    kittenName: 'Frankie',
    age:0,
    likes:['playing','eating','sleeping','napping','jumping'], // 50;
    isGoodWithKids:true,
    isGoodWithDogs:false,
    isGoodwithOtherCats:true,
    updateAge:function(){
        this.age = randomValue(3,12) + ' months';
    },
    
    render:function(){
        let divEl = document.getElementById('kittenProfiles');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let header2 = document.createElement('h2');
        articleEl.appendChild(header2);
        header2.textContent = this.kittenName;
        let paragraphEl = document.createElement('p');
        articleEl.appendChild(paragraphEl);
        paragraphEl.textContent = `${this.kittenName} is actually really fun cat`;
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
        imageEl.setAttribute('src','images/frankie.jpeg')
        // imageEl.setAttribute('alt','Some text generated')
    }

}

frankie.updateAge();
frankie.render();

// console.log(frankie);


let sereena = {
    kittenName: 'Sereena',
    age:0,
    likes:['playing','jumping'], // 50;
    isGoodWithKids:false,
    isGoodWithDogs:false,
    isGoodwithOtherCats:false,
    updateAge:function(){
        this.age = randomValue(3,12) + ' months';
    },
    
    render:function(){
        let divEl = document.getElementById('kittenProfiles');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let header2 = document.createElement('h2');
        articleEl.appendChild(header2);
        header2.textContent = this.kittenName;
        let paragraphEl = document.createElement('p');
        articleEl.appendChild(paragraphEl);
        paragraphEl.textContent = `${this.kittenName} is actually really fun cat`;
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
        imageEl.setAttribute('src','images/serena.jpeg')
        // imageEl.setAttribute('alt','Some text generated')
    }

}

sereena.updateAge();
sereena.render();

// console.log(div);
// helper function
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
  






