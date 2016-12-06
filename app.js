'strict use';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locationNameList = ['Pike and 1st', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var minCustomerList = [23, 3, 11, 20, 2];
var maxCustomerList = [65, 24, 38, 38, 16];
var aveSaleList = [6.3, 1.2, 3.7, 2.3, 4.6];
var locationObjList = [];

function Location(locationName, minCustomer, maxCustomer, aveSale) {
  this.locationName = locationName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.aveSale = aveSale;
  this.hourlyCust = [];
  this.totalCookies = 0;
  this.numHourlyCookies = [];
  this.cookieTossers = 2;
  this.custPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
    }
  };

  this.hourlySales = function() {
    this.custPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.numHourlyCookies.push(Math.ceil(this.hourlyCust[i] * this.aveSale));
      this.totalCookies += this.numHourlyCookies[i];
    }
  };

  this.render = function() {
    this.hourlySales(); //when hourly is run, calling totalDailySales assures all of the attributes of the object obtain data
    var trEl = document.createElement('tr');
    var cookieList = document.getElementById('cookieInfo');
    for (var i = 0; i < hours.length; i++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = this.numHourlyCookies[i];
      trEl.appendChild(tdEl);
      cookieList.appendChild(trEl);
    }
    // var locName = document.getElementById('cookieInfo');
    // liEl = document.createElement('li');
    // liEl.textContent = 'total ' + this.totalCookies + ' cookies';
    // locName.appendChild(liEl);
  };
}

function makeHeaderRow() {
  var cookieList = document.getElementById('cookieInfo');
  for (var i = 0; i < locationNameList.length; i++) {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = locationNameList[i];
    trEl.appendChild(thEl);
    cookieList.appendChild(trEl);
  }
}

makeHeaderRow();

for (var i = 0; i < locationNameList.length; i++) {
  locationObjList.push(new Location(locationNameList[i], minCustomerList[i], maxCustomerList[i], aveSaleList[i]));
  locationObjList[i].render();
}

function makeFooterRow() {
  var totalOfTotals = 0;
  var cookieList = document.getElementById('cookieInfo');
  for (var i = 0; i < locationNameList.length; i++) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = locationObjList[i].totalCookies;
    trEl.appendChild(tdEl);
    cookieList.appendChild(trEl);
    totalOfTotals += tdEl;
  }

}

makeFooterRow();

//function to make header row
//for loop to render each store to make table
//function to make a footer row
