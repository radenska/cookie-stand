'strict use'

var orderForm = document.getElementById('order-form');
// var OrdersArray = ['Customer Name', 'Address', 'Credit Card Type', 'Credit Card Number', '# of Choc Chip', '# of Oat Raisin', '# of Cutters', '# of shirts'];
// var OrdersTable = document.getElementById('orders');
// var el2;
// var elContent = '';
// var el;
//
// function appendEl(elContent) { //creates and appends an element, relies on global variables
//   el = document.createElement('td');
//   el.textContent = elContent;
//   el2.appendChild(el);
//   OrdersTable.appendChild(el2);
// }
//
// function makeTable() {
//   for (var i = OrdersArray.length; i < OrdersArray.length; i++) {
//     el2 = document.createElement('tr');
//     for(var j = localStorage.pending.length; j < localStorage.OrdersArray.length; j++) {
//       elContent = localStorage.pending[j];
//       appendEl(elContent);
//     }
//   }
// }

function orderHandler(event) {
  event.preventDefault();
  var tempname = event.target.name.value;
  var tempaddress1 = event.target.address1.value
  var tempcctype = event.target.cctype.value;
  var tempccnumString = event.target.ccnum.value;
  var tempccnum = parseInt(event.target.ccnum.value);
  var tempcccookie = parseInt(event.target.cccookie.value);
  var temporcookie = parseInt(event.target.orcookie.value);
  var tempcutter = parseInt(event.target.cutter.value);
  var temptshirt = parseInt(event.target.tshirt.value);

  if(!tempcccookie && !temporcookie && !tempcutter && !temptshirt) {
    return alert('You must order at least one item!');
  }
  if(!tempccnum) {
    return alert('Your credit card number should only contain numbers, please try again!');
  }
  if(tempccnumString.length !== 16) {
    return alert('Your credit card number should have 16 digits, please try again!');
  }
  var newOrder = [tempname, tempaddress1, tempcctype, tempccnum, tempcccookie, temporcookie, tempcutter, temptshirt];
  var prevOrders = localStorage.getItem('order');
  if (prevOrders === null) {
    localStorage.setItem('order',newOrder);
  } else {
    localStorage.setItem('order', prevOrders + ',' + newOrder);
  }

  event.target.name.value = null;
  event.target.address1.value = null;
  event.target.cctype.value = null;
  event.target.ccnum.value = null;
  event.target.cccookie.value = null;
  event.target.orcookie.value = null;
  event.target.cutter.value = null;
  event.target.tshirt.value = null;
}

// function storageHandler(storageHandler) {
//   alert('testing!');
//   makeTable();
// }

orderForm.addEventListener('submit', orderHandler);

// localStorage.removeItem('order');
