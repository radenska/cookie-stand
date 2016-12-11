'strict use'

var tableHeader = ['Customer Name', 'Address', 'Credit Card Type', 'Credit Card Number', '# of Choc Chip', '# of Oat Raisin', '# of Cutters', '# of shirts'];
var OrdersTable = document.getElementById('orders');
var el2;
var elContent = '';
var el;
var storedString = localStorage.order;

var orders = storedString.split(',');
console.log(orders);

// localStorage.removeItem('pending');
function appendEl(elContent) { //creates and appends an element, relies on global variables
  el = document.createElement('td');
  el.textContent = elContent;
  el2.appendChild(el);
  OrdersTable.appendChild(el2);
}

function makeHeader() {
  el2 = document.createElement('tr');
  for (var i = 0; i < tableHeader.length; i++) {
    appendEl(tableHeader[i]);
  }
}

function makeTable() {
  makeHeader();
  // for (var i = 0; i < tableHeader.length; i++) {
  for (var j = 0; j < orders.length; j++) {
    if (j % tableHeader.length === 0) {
      el2 = document.createElement('tr');
    }
    elContent = orders[j];
    appendEl(elContent);
  }
}

if(localStorage.order) {
  makeTable();
}
