'use strict';
              // 9   // 8  
let hours = ['6am','7pm','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let container = document.getElementById('container');

let table = document.createElement('table');
container.appendChild(table);

// let globalArrTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];


function Location(locationName,min,max,avg){
  // the property in the object
   this.locationName = locationName;
   this.min = min;
   this.max = max;
   this.avg = avg;
   this.randomCustomers = [];
   this.numOfCookiesSoldPerHour = [];
   this.total = 0;
//    this.globalArrTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// reseted
//    console.log('********************',this);

}
Location.prototype.randomCustomerPerHour = function(){
        for(let i = 0 ; i < hours.length ; i++){
            this.randomCustomers.push(randomGenrator(this.min,this.max));
        }
}
Location.prototype.cookiesSoldPerHour = function(){
        for(let i = 0 ; i < hours.length; i++){
        this.numOfCookiesSoldPerHour.push(Math.ceil(this.randomCustomers[i]*this.avg));
        this.total += this.numOfCookiesSoldPerHour[i];
        // this.total = this.total + this.numOfCookiesSoldPerHour[i];
        // globalArrTotals[i] = globalArrTotals[i] + this.numOfCookiesSoldPerHour[i];
        // console.log(this.globalArrTotals[i])
        }
        // console.log(this.globalArrTotals)
}
//seattle.cookiesSoldPerHour
Location.prototype.render = function(){

    let tr = document.createElement('tr');
    table.appendChild(tr);

    let locationTitle = document.createElement('td');
    tr.appendChild(locationTitle);
    locationTitle.textContent = this.locationName;

    let td;
    for(let  i = 0; i < this.numOfCookiesSoldPerHour.length; i++){
        td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = this.numOfCookiesSoldPerHour[i];
    }
    let dailyTotal = document.createElement('td');
    tr.appendChild(dailyTotal);
    dailyTotal.textContent = this.total
}
// Location.prototype.summingTotal = function(){
//     for(let i = 0 ; i <this.numOfCookiesSoldPerHour.length ; i++){
//         globalArrTotals[i] += this.numOfCookiesSoldPerHour[i];
    
//     }
// }
let seattle = new Location('Seattle',23,65,6.3);
let tokyo = new Location('Tokyo',3,24,1.2);
let dubai = new Location('Dubai',11,38,3.7);
let paris = new Location('Paris',20,48,2.3);
let lima = new Location('Lima',2,16,4.6);




// headerRow()
let arrOfObjects = [seattle,tokyo,dubai,paris,lima];

// for(let i = 0 ; i <arrOfObjects.length; i ++){
//     arrOfObjects[i].randomCustomerPerHour();
//     arrOfObjects[i].cookiesSoldPerHour();
//     arrOfObjects[i].render();
// }
// footerRow();
headerRow()
seattle.randomCustomerPerHour();
seattle.cookiesSoldPerHour();
// seattle.summingTotal();
seattle.render();
tokyo.randomCustomerPerHour();
tokyo.cookiesSoldPerHour();
// tokyo.summingTotal();
tokyo.render();
dubai.randomCustomerPerHour();
dubai.cookiesSoldPerHour();
// dubai.summingTotal();
dubai.render();
paris.randomCustomerPerHour();
paris.cookiesSoldPerHour();
// paris.summingTotal();
paris.render();
lima.randomCustomerPerHour();
lima.cookiesSoldPerHour();
// lima.summingTotal();
lima.render();
// }


footerRow();


// for(let i = 0 ; i < seattle.numOfCookiesSoldPerHour.length; i++){
//     console.log(.numOfCookiesSoldPerHour[i]);
// for(let i = 0 ; i < seattle.numOfCookiesSoldPerHour.length ; i++){
//     console.log(seattle.numOfCookiesSoldPerHour[i])
// }


function headerRow(){
    let tr = document.createElement('tr');
    table.appendChild(tr);
    
    let emptyCell = document.createElement('th');
    tr.appendChild(emptyCell);
    
    let th;
    for(let i = 0 ; i < hours.length; i++){
        th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = hours[i];
        // console.log(th);
    }
    let dailyTotalCell = document.createElement('th');
    tr.appendChild(dailyTotalCell);
    dailyTotalCell.textContent = 'Daily Location Total';
    
}

function footerRow(){
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let thTotal = document.createElement('th');
    tr.appendChild(thTotal)
    thTotal.textContent = 'Totals';
    let th;
    let sum;
    let totalOfTotals = 0;
    for(let i = 0 ; i < hours.length; i++){
        sum = 0;
        // 0
        for(let j = 0; j < arrOfObjects.length; j++){
            sum = sum + arrOfObjects[j].numOfCookiesSoldPerHour[i];
            // seattle.numOfcookies[i] + tokyo.numOfcookies[i] + 
                            // sum =  + seattle.  [0]32;
                            // sum =    tokyo.    [0] 26 +32;
                            // sum =    dubai     [0] 45 +26 +32;
                            // sum  =   paris     [0] 59 + 45 +26 +32;
                            // sum  =   Lima      [0] 59 + 45 +26 +32 + 98; // 6am 
                            // sum = value;
        }
                      //0           // 400   
                      // 400 + 500 // 900
                      // 400 + 500 + 600  1500
        megaTotal = megaTotal + sum;
        th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = sum;

    }
    let totalOfTotals = document.createElement('th');
    tr.appendChild(totalOfTotals);
    totalOfTotals.textContent = megaTotal;
    // let th;
    // for(let i = 0; i < hours.length; i++){
    //     th = document.createElement('th');
    //     tr.appendChild(th);
    //     th.textContent = globalArrTotals[i];
    //     // console.log(this)
    // }
}

function randomGenrator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }


