'strict use'

var tableHeader = ['Customer Name', 'Address', 'Credit Card Type', 'Credit Card Number', '# of Choc Chip', '# of Oat Raisin', '# of Cutters', '# of shirts', 'Total Cost (includes sales tax)', 'Process Order'];
var OrdersTable = document.getElementById('orders');
var el2;
var elContent = '';
var el;
var storedString = localStorage.order;
var orders = storedString.split(',');
var removedOrder = [];

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
  el2 = document.createElement('tr');
  for (var j = 0; j < orders.length + 1; j++) {
    if (j % (tableHeader.length - 1) === 0 && j != 0) {
      var filledButton = document.createElement('button');
      filledButton.name = j/(tableHeader.length - 1);
      var buttonText = document.createTextNode('Fill Order');
      filledButton.appendChild(buttonText);
      el2.appendChild(filledButton);
      OrdersTable.appendChild(el2);
      el2 = document.createElement('tr');
    }
    elContent = orders[j];
    appendEl(elContent);
  }
}

function removeFromOrders(OrderNum) {
  var start = OrderNum*(tableHeader.length - 1) - (tableHeader.length - 1); //where to start removing from the orders array
  var end = OrderNum*(tableHeader.length - 1);
  for (var i = start; i < end; i++) {
    removedOrder.push(orders[i]);
  }
}

function filledHandler(event) {
  event.preventDefault();
  var orderNum = event.target.name; //figure out which order needs to be moved;
  removeFromOrders(orderNum);
  console.log(removedOrder);
  // switchLocalStorage();
  // makeTable();
}

if(localStorage.order) {
  makeTable();
}

document.addEventListener('click', filledHandler);
