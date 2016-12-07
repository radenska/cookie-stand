'strict use';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locationNameList = ['Pike and 1st', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var minCustomerList = [23, 3, 11, 20, 2];
var maxCustomerList = [65, 24, 38, 38, 16];
var aveSaleList = [6.3, 1.2, 3.7, 2.3, 4.6];
var locationObjList = [];
var cookieList = [];
var trEl = '';
var thEl = '';
var tdEl = '';

function appendEl(el, el2, elContent, elId, whereApp) { //creates and appends an element, relies on global variables
  el = document.createElement(elId);
  el.textContent = elContent;
  el2.appendChild(el);
  whereApp.appendChild(el2);
}

function Location(locationName, minCustomer, maxCustomer, aveSale) { //constructor function for store locations
  this.locationName = locationName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.aveSale = aveSale;
  this.hourlyCust = [];
  this.totalCookies = 0;
  this.numHourlyCookies = [];
  this.cookieTossers = 2;

  this.custPerHour = function() { //generates a random number of customers per hour, based on the min and max for that location
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
    }
  };

  this.hourlySales = function() { //calculates hourly cookie sales and keeps track of total cookies sold
    this.custPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.numHourlyCookies.push(Math.ceil(this.hourlyCust[i] * this.aveSale));
      this.totalCookies += this.numHourlyCookies[i];
    }
  };

  this.render = function() { //appends a table row of cookie sales information for each location
    this.hourlySales(); //when hourly is run, calling totalDailySales assures all of the attributes of the object obtain data
    cookieList = document.getElementById('cookieInfo');
    trEl = document.createElement('tr');
    appendEl(thEl, trEl, this.locationName, 'th', cookieList);

    for (var i = 0; i < hours.length; i++) {
      appendEl(tdEl, trEl, this.numHourlyCookies[i], 'td', cookieList);
    }
    appendEl(thEl, trEl, this.totalCookies, 'th', cookieList);
  };
}

function makeHeaderRow() { //makes the header row of the cookie sales table, e.g., list of hours
  cookieList = document.getElementById('cookieInfo');
  var trEl = document.createElement('tr');
  for (var i = -1; i < hours.length; i++) { //i starts at -1 because the hours need to start on the second column of the table
    appendEl(thEl, trEl, hours[i], 'th', cookieList);
  }
  appendEl(thEl, trEl, 'Total', 'th', cookieList);
}

makeHeaderRow();

for (var i = 0; i < locationNameList.length; i++) { //uses constructor function to make all of the location object and stores them in an array
  locationObjList.push(new Location(locationNameList[i], minCustomerList[i], maxCustomerList[i], aveSaleList[i]));
  locationObjList[i].render();
}

function makeFooterRow() { //makes the last row of the table, which is the hourly cookie totals from all locations, and the daily cookie total of all locations together
  cookieList = document.getElementById('cookieInfo');
  var totalTotal = 0;
  trEl = document.createElement('tr');
  appendEl(thEl, trEl, 'Total', 'th', cookieList);
  for (var i = 0; i < hours.length; i++) {
    var hourTotal = 0; // this gets reset for every i increment because otherwise it would be a cumulative total (6am would get added to 7am, etc.)
    for (var j = 0; j < locationObjList.length; j++) { //nested for loop because for every hour, we need to access hourly cookie totals from all locations
      hourTotal += locationObjList[j].numHourlyCookies[i];
    }
    appendEl(thEl, trEl, hourTotal, 'th', cookieList);
    totalTotal += hourTotal;
  }
  appendEl(thEl, trEl, totalTotal, 'th', cookieList);
}

makeFooterRow();
