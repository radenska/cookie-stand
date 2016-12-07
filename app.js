'strict use';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locationNameList = ['Pike and 1st', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var minCustomerList = [23, 3, 11, 20, 2];
var maxCustomerList = [65, 24, 38, 38, 16];
var aveSaleList = [6.3, 1.2, 3.7, 2.3, 4.6];
var locationObjList = [];
var cookieList = [];
var tosserList = [];
var trEl = '';
var thEl = '';
var tdEl = '';
var tableIdCookie = 'cookieInfo';
var tableIdTossers = 'tosserInfo';
var cookieTable = document.getElementById(tableIdCookie);
var tosserTable = document.getElementById(tableIdTossers);
var locForm = document.getElementById('loc-form');

function inputHandler() {
  event.preventDefault();
  locationNameList.push(event.target.Location.value);
  minCustomerList.push(Number(event.target.Min.value));
  maxCustomerList.push(Number(event.target.Max.value));
  aveSaleList.push(Number(event.target.Average.value));
  locationObjList = [];
  cookieTable.innerHTML = '';
  tosserTable.innerHTML = '';
  makeHeaderRow(cookieList, tableIdCookie);
  makeHeaderRow(tosserList, tableIdTossers);
  makeObjects();
  event.target.Location.value = null;
  event.target.Min.value = null;
  event.target.Max.value = null;
  event.target.Average.value = null;
  makeFooterRowCookies();
  makeFooterRowTossers();
}

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
  this.hourlyTossers = [];
  this.totalTossers = 0;

  this.custPerHour = function() { //generates a random number of customers per hour, based on the min and max for that location
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
    }
  };

  this.hourlySales = function() { //calculates hourly cookie sales, tossers needed and keeps track of total cookies and tossers
    this.custPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.numHourlyCookies.push(Math.ceil(this.hourlyCust[i] * this.aveSale));
      this.totalCookies += this.numHourlyCookies[i];
      if (this.numHourlyCookies[i] >= 40) {
        this.hourlyTossers[i] = Math.ceil(this.numHourlyCookies[i]/20);
      }
      else {
        this.hourlyTossers[i] = 2;
      }
      this.totalTossers += this.hourlyTossers[i];
    }
  };

  this.go = function() { //this is separate from the render function because otherwise the randomly generated data would change from cookies to tossers when render() is called twice
    this.hourlySales();
  }

  this.render = function(whereApp, tableID, total, hourly) { //appends a table row of cookie or tosser sales information for each location
    whereApp = document.getElementById(tableID);
    trEl = document.createElement('tr');
    appendEl(thEl, trEl, this.locationName, 'th', whereApp);
    for (var i = 0; i < hours.length; i++) {
      appendEl(tdEl, trEl, hourly[i], 'td', whereApp);
    }
    appendEl(thEl, trEl, total, 'th', whereApp);
  };
}

function makeHeaderRow(whereApp, tableID) { //makes the header row full of hours for a table
  whereApp = document.getElementById(tableID);
  var trEl = document.createElement('tr');
  for (var i = -1; i < hours.length; i++) { //i starts at -1 because the hours need to start on the second column of the table
    appendEl(thEl, trEl, hours[i], 'th', whereApp);
  }
  appendEl(thEl, trEl, 'Total', 'th', whereApp);
}

makeHeaderRow(cookieList, tableIdCookie);
makeHeaderRow(tosserList, tableIdTossers);

function makeObjects() {
  for (var i = 0; i < locationNameList.length; i++) { //uses constructor function to make all of the location object and stores them in an array, as well as render a row in both the cookie and the tosser table for each object
    locationObjList.push(new Location(locationNameList[i], minCustomerList[i], maxCustomerList[i], aveSaleList[i]));
    locationObjList[i].go();
    locationObjList[i].render(cookieList, tableIdCookie, locationObjList[i].totalCookies, locationObjList[i].numHourlyCookies);
    locationObjList[i].render(tosserList, tableIdTossers, locationObjList[i].totalTossers, locationObjList[i].hourlyTossers);
  }
}

makeObjects();

function makeFooterRowCookies() { //makes the last row of the table, which is the hourly cookie totals from all locations, and the daily cookie total of all locations together
  var totalTotal = 0;
  cookieList = document.getElementById(tableIdCookie);
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

function makeFooterRowTossers() { //makes the last row of the table, which is the hourly tosser totals from all locations, and the daily cookie total of all locations together
  var totalTotal = 0;
  tosserList = document.getElementById(tableIdTossers);
  trEl = document.createElement('tr');
  appendEl(thEl, trEl, 'Total', 'th', tosserList);
  for (var i = 0; i < hours.length; i++) {
    var hourTotal = 0; // this gets reset for every i increment because otherwise it would be a cumulative total (6am would get added to 7am, etc.)
    for (var j = 0; j < locationObjList.length; j++) { //nested for loop because for every hour, we need to access hourly cookie totals from all locations
      hourTotal += locationObjList[j].hourlyTossers[i];
    }
    appendEl(thEl, trEl, hourTotal, 'th', tosserList);
    totalTotal += hourTotal;
  }
  appendEl(thEl, trEl, totalTotal, 'th', tosserList);
}

makeFooterRowCookies();
makeFooterRowTossers();

//event handler function (has to include event.preventDefault();)

//add an event listener to an html form (type of event it's listening for, then call handler)

//call event listener

locForm.addEventListener('submit', inputHandler);
