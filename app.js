'strict use';

var locationPike = {
  minCustomer: 23,
  maxCustomer: 65,
  aveSale: 6.3,
  hourlyCust: [],
  custPerHour: function() {
    return (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
  },
  numHourlyCookies: [],
  hourlySales: function() {
    return (this.numHourlyCookies[i] = this.custPerHour() * this.aveSale);
  },
  totalCookies: 0,
  totalDailySales: function() {
    var total = 0;
    for (var i = 6; i < 21; i++) {
      total += this.numHourlyCookies[i];
    }
    return (this.totalCookies = total);
  }
};

for (var i = 6; i < 21; i++) {
  locationPike.hourlyCust[i] = locationPike.custPerHour();
}

for (var i2 = 6; i2 < 21; i2++) {
  locationPike.numHourlyCookies[i2] = locationPike.hourlySales();
}

locationPike.totalCookies = locationPike.totalDailySales();


console.log('min' + locationPike.minCustomer);
console.log('max' + locationPike.maxCustomer);
console.log('avesale' + locationPike.aveSale);
console.log('hourlycust' + locationPike.hourlyCust);
console.log('numhourlycookies' + locationPike.numHourlyCookies);
console.log('total cookies' + locationPike.totalCookies);
