'strict use'

var orderForm = document.getElementById('order-form');


function orderHandler(event) {
  event.preventDefault();
  var tempname = event.target.name.value;
  var tempaddress1 = (event.target.address1.value).replace(',',' ');
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
  if(isNaN(tempcccookie)) {
    tempcccookie = 0;
  }
  if(isNaN(temporcookie)) {
    temporcookie = 0;
  }
  if(isNaN(tempcutter)) {
    tempcutter = 0;
  }
  if(isNaN(temptshirt)) {
    temptshirt = 0;
  }

  var orderTotal = (tempcccookie + temporcookie + tempcutter * 5 + temptshirt * 10)*1.088;
  orderTotal.toFixed(2);

  var newOrder = [tempname, tempaddress1, tempcctype, tempccnum, tempcccookie, temporcookie, tempcutter, temptshirt, orderTotal];
  var prevOrders = localStorage.getItem('order');
  if (prevOrders === null) {
    localStorage.setItem('order', newOrder);
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


orderForm.addEventListener('submit', orderHandler);

// localStorage.removeItem('order');
