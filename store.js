'strict use'

var orderForm = document.getElementById('order-form');
// var OrdersArray = [['Customer Name', 'Address', 'Credit Card Type', 'Credit Card Number', '# of Choc Chip', '# of Oat Raisin', '# of Cutters', '# of shirts']];
// var OrdersTable = document.getElementById('orders');
// var el2 = document.getElementById('tr');
// var elContent = '';
//
// function appendEl(elContent) { //creates and appends an element, relies on global variables
//   var el = document.createElement('td');
//   el.textContent = elContent;
//   el2.appendChild(el);
//   OrdersTable.appendChild(el2);
// }
//
// function makeTable() {
//   for (var i = localStorage.pending.length; i < OrdersArray; i++) {
//     var trEl = document.getElementByID('tr');
//     for(var j = localStorage.OrdersArray[i].length; j < OrdersArray[i]; j++) {
//       elContent = OrdersArray[i][j];
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
  // OrdersArray.push([tempname, tempaddress1, tempcctype, tempccnum, tempcccookie, temporcookie, tempcutter, temptshirt]);
  localStorage.pending = ([tempname, tempaddress1, tempcctype, tempccnum, tempcccookie, temporcookie, tempcutter, temptshirt]);
  // makeTable();
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
// window.addEventListener('storage', storageHandler, false);
