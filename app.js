'strict use';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var locationPike = {
  locationName: 'Pike and 1st',
  locationID: 'PikeList',
  minCustomer: 23,
  maxCustomer: 65,
  aveSale: 6.3,
  hourlyCust: [],
  custPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
    }
  },
  numHourlyCookies: [],
  hourlySales: function() {
    this.custPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.numHourlyCookies.push(Math.ceil(this.hourlyCust[i] * this.aveSale));
    }
  },
  totalCookies: 0,
  totalDailySales: function() {
    this.hourlySales();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies += this.numHourlyCookies[i];
    }
  },
  displayStats: function () {
    this.totalDailySales(); //when displayStatus is run, calling totalDailySales assures all of the attributes of the object obtain data
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
  }
};

var locationSeaTac = {
  locationName: 'SeaTac Airport',
  locationID: 'SeaTacList',
  minCustomer: 3,
  maxCustomer: 24,
  aveSale: 1.2,
  hourlyCust: [],
  custPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
    }
  },
  numHourlyCookies: [],
  hourlySales: function() {
    this.custPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.numHourlyCookies.push(Math.ceil(this.hourlyCust[i] * this.aveSale));
    }
  },
  totalCookies: 0,
  totalDailySales: function() {
    this.hourlySales();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies += this.numHourlyCookies[i];
    }
  },
  displayStats: function() {
    this.totalDailySales();
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
  }
};

var locationSeattleCenter = {
  locationName: 'Seattle Center',
  locationID: 'SeattleCenterList',
  minCustomer: 11,
  maxCustomer: 38,
  aveSale: 3.7,
  hourlyCust: [],
  custPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
    }
  },
  numHourlyCookies: [],
  hourlySales: function() {
    this.custPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.numHourlyCookies.push(Math.ceil(this.hourlyCust[i] * this.aveSale));
    }
  },
  totalCookies: 0,
  totalDailySales: function() {
    this.hourlySales();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies += this.numHourlyCookies[i];
    }
  },
  displayStats: function() {
    this.totalDailySales();
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
  }
};

var locationCapitolHill = {
  locationName: 'Capitol Hill',
  locationID: 'CapitolHillList',
  minCustomer: 20,
  maxCustomer: 38,
  aveSale: 2.3,
  hourlyCust: [],
  custPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
    }
  },
  numHourlyCookies: [],
  hourlySales: function() {
    this.custPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.numHourlyCookies.push(Math.ceil(this.hourlyCust[i] * this.aveSale));
    }
  },
  totalCookies: 0,
  totalDailySales: function() {
    this.hourlySales();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies += this.numHourlyCookies[i];
    }
  },
  displayStats: function() {
    this.totalDailySales();
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
  }
};

var locationAlki = {
  locationName: 'Alki',
  locationID: 'AlkiList',
  minCustomer: 2,
  maxCustomer: 16,
  aveSale: 4.6,
  hourlyCust: [],
  custPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
    }
  },
  numHourlyCookies: [],
  hourlySales: function() {
    this.custPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.numHourlyCookies.push(Math.ceil(this.hourlyCust[i] * this.aveSale));
    }
  },
  totalCookies: 0,
  totalDailySales: function() {
    this.hourlySales();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies += this.numHourlyCookies[i];
    }
  },
  displayStats: function() {
    this.totalDailySales();
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
  }
};

locationPike.displayStats();
locationSeaTac.displayStats();
locationSeattleCenter.displayStats();
locationCapitolHill.displayStats();
locationAlki.displayStats();
