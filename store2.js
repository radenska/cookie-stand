'strict use'

var tableHeader = ['Customer Name', 'Address', 'Credit Card Type', 'Credit Card Number', '# of Choc Chip', '# of Oat Raisin', '# of Cutters', '# of shirts', 'Total Cost (includes sales tax)', 'Order Status'];
var ordersTable = document.getElementById('orders');
var el2;
var elContent = '';
var el;
var storedString = localStorage.order;
var orders = storedString.split(',');
var removedOrders = [];
var filledTable = document.getElementById('filled');

function appendEl(elContent, table) { //creates and appends an element, relies on global variables
  el = document.createElement('td');
  el.textContent = elContent;
  el2.appendChild(el);
  table.appendChild(el2);
}

function makeHeader(table) {
  el2 = document.createElement('tr');
  for (var i = 0; i < tableHeader.length; i++) {
    appendEl(tableHeader[i], table);
  }
}

function makeTable() {
  makeHeader(ordersTable);
  el2 = document.createElement('tr');
  for (var j = 0; j < orders.length + 1; j++) {
    if (j % (tableHeader.length - 1) === 0 && j != 0) {
      var filledButton = document.createElement('button');
      filledButton.name = j/(tableHeader.length - 1);
      var buttonText = document.createTextNode('Fill Order');
      filledButton.appendChild(buttonText);
      el2.appendChild(filledButton);
      ordersTable.appendChild(el2);
      el2 = document.createElement('tr');
    }
    elContent = orders[j];
    appendEl(elContent, ordersTable);
  }
}

function removeFromOrders(OrderNum) {
  var start = OrderNum*(tableHeader.length - 1) - (tableHeader.length - 1); //where to start removing from the orders array
  var end = OrderNum*(tableHeader.length - 1);
  for (var i = start; i < end; i++) {
    removedOrders.push(orders[i]); //keeps a record of what was removed
  }
  orders.splice(start, tableHeader.length - 1); //removes from orders array
  console.log('orders array' + orders);
}

function makeFilledTable() {
  makeHeader(filledTable);
  el2 = document.createElement('tr');
  for (var j = 0; j < removedOrders.length + 1; j++) {
    if (j % (tableHeader.length - 1) === 0 && j != 0) {
      var filled = document.createElement('td');
      filled.textContent = 'FILLED';
      el2.appendChild(filled);
      filledTable.appendChild(el2);
      el2 = document.createElement('tr');
    }
    elContent = removedOrders[j];
    appendEl(elContent, filledTable);
  }
}

function filledHandler(event) {
  event.preventDefault();
  var orderNum = event.target.name; //figure out which order needs to be moved;
  removeFromOrders(orderNum);
  console.log(removedOrders);
  // switchLocalStorage(); in order for these tables to work if the browser is refreshed, the removed orders should be removed from the local storage 'order' key and placed into a separate local storage key;
  ordersTable.innerHTML = '';
  filledTable.innerHTML = '';
  makeTable();
  makeFilledTable();
}

if(localStorage.order) {
  makeTable();
}

else {
  alert('You have no orders!');
}

document.addEventListener('click', filledHandler);
