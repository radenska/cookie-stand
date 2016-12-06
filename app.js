'strict use';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locationNameList = ['Pike and 1st', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var locationIDList = ['PikeList', 'SeaTacList', 'SeattleCenterList', 'CapitolHillList', 'AlkiList'];
var minCustomerList = [23, 3, 11, 20, 2];
var maxCustomerList = [65, 24, 38, 38, 16];
var aveSaleList = [6.3, 1.2, 3.7, 2.3, 4.6];
var locationObjList = [];

function Location(locationName, locationID, minCustomer, maxCustomer, aveSale) {
  this.locationName = locationName;
  this.locationID = locationID;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.aveSale = aveSale;
  this.hourlyCust = [];
  this.totalCookies = 0;
  this.numHourlyCookies = [];
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

  this.displayStats = function() {
    this.hourlySales(); //when hourly is run, calling totalDailySales assures all of the attributes of the object obtain data
    var locName = document.getElementById(this.locationID);
    var h1El = document.createElement('h1');
    h1El.textContent = this.locationName;
    locName.appendChild(h1El);
    var cookieList = document.getElementById(this.locationID);
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.numHourlyCookies[i] + ' cookies, ' + this.hourlyCust[i] + ' customers ';
      cookieList.appendChild(liEl);
    }
    locName = document.getElementById(this.locationID);
    liEl = document.createElement('li');
    liEl.textContent = 'total ' + this.totalCookies + ' cookies';
    locName.appendChild(liEl);
  };
}

for (var i = 0; i < locationNameList.length; i++) {
  locationObjList.push(new Location(locationNameList[i], locationIDList[i], minCustomerList[i], maxCustomerList[i], aveSaleList[i]));
  locationObjList[i].displayStats();
}
