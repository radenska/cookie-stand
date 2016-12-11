'strict use'

var orderForm = document.getElementById('order-form');

function orderHandler(event) {
  event.preventDefault();
  var tempname = event.target.name.value;
  var tempaddress1 = event.target.address1.value
  var tempcctype = event.target.cctype.value;
  var tempccnum = event.target.ccnum.value;
  var tempcccookie = parseInt(event.target.cccookie.value);
  var temporcookie = parseInt(event.target.orcookie.value);
  var tempcutter = parseInt(event.target.cutter.value);
  var tempshirt = parseInt(event.target.tshirt.value);

  if(!tempcccookie && !temporcookie && !tempcutter && !temptshirt) {
    return alert('You must order at least one item!');
  }
  if(!parseInt(tempccnum)) {
    return alert('Your credit card number should only contain numbers, please try again!');
  }
  if(tempccnum.length !== 16) {
    return alert('Your credit card number should have 16 digits, please try again!');
  }

  alert('this thing is working');
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
