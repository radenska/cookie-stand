'strict use'

var orderForm = document.getElementById('order-form');

function orderHandler(event) {
  event.preventDefault();
  var tempname = event.target.name.value;
  var tempaddress1 = event.target.address1.value
  var tempcctype = event.target.cctype.value;
  var tempccnum = parseInt(event.target.ccnum.value);
  var tempcccookie = parseInt(event.target.cccookie.value);
  var temporcookie = parseInt(event.target.orcookie.value);
  var tempcutter = parseInt(event.target.cutter.value);
  var tempshirt = parseInt(event.target.shirt.value);

  if(!tempcccookie && !temporcookie && !tempcutter && !tempshirt) {
    return alert('You must order at least one item!');
  }
  locationNameList.push(tempLocation);
  minCustomerList.push(tempMin);
  maxCustomerList.push(tempMax);
  aveSaleList.push(tempAverage);
  alert('You have added ' + tempLocation + 'to the list of store locations!');

  // cookieTable.innerHTML = '';
  // tosserTable.innerHTML = '';
  event.target.Location.value = null;
  event.target.Min.value = null;
  event.target.Max.value = null;
  event.target.Average.value = null;
}

orderForm.addEventListener('submit', orderHandler);
