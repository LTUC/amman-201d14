'use strict';

let catbutton = document.getElementById('catbutton');

let handleCatButtonClick = function(){
  let catsFromLS = JSON.parse(localStorage.cats);
  console.log('allCats array after retrieving from local storage', allCats);
  for (let i = 0; i < catsFromLS.length; i++){
    let newCat = new Cat(catsFromLS[i].name);
    // reinsinitate the object 
    newCat.render();
  }
  console.log('allCats array after reinstantiating through our Cat constructor', allCats);
};

catbutton.addEventListener('click', handleCatButtonClick);
