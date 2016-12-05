'strict use';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var locationPike = {
  minCustomer: 23,
  maxCustomer: 65,
  aveSale: 6.3,
  hourlyCust: [],
  custPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCust[i] = (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
    }
  },
  numHourlyCookies: [],
  hourlySales: function() {
    this.custPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.numHourlyCookies[i] = Math.ceil(this.hourlyCust[i] * this.aveSale);
    }
  },
  totalCookies: 0,
  totalDailySales: function() {
    this.hourlySales();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies += this.numHourlyCookies[i];
    }
  },
  go: function() {
    return this.totalDailySales();
  }
};

locationPike.go();

// function displayList(obj) {
//   var cookieList = [];
//   for (var i = 0; i < 15; i++) {
//
//   }
// }

console.log('min ' + locationPike.minCustomer);
console.log('max ' + locationPike.maxCustomer);
console.log('avesale ' + locationPike.aveSale);
console.log('hourlycust ' + locationPike.hourlyCust);
console.log('numhourlycookies ' + locationPike.numHourlyCookies);
console.log('total cookies ' + locationPike.totalCookies);
