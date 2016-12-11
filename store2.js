'strict use'

var tableHeader = ['Customer Name', 'Address', 'Credit Card Type', 'Credit Card Number', '# of Choc Chip', '# of Oat Raisin', '# of Cutters', '# of shirts'];
var OrdersTable = document.getElementById('orders');
var el2;
var elContent = '';
var el;

function appendEl(elContent) { //creates and appends an element, relies on global variables
  el = document.createElement('td');
  el.textContent = elContent;
  el2.appendChild(el);
  OrdersTable.appendChild(el2);
}

function makeTable(array) {
  el2 = document.createElement('tr');
  for(var j = 0; j < array.length; j++) {
    elContent = array[j];
    appendEl(elContent);
  }
}

var pending = localStorage.pending;

if(pending) {
  makeTable(tableHeader);
  makeTable(pending);
}
