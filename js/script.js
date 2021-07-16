// Mobile Price Increase
const mobilePrice = document.getElementById('priceIncrease');
mobilePrice.addEventListener('click', function () {
   const mobilePrice = increaseProduct(price);
   console.log(priceIncrease)
});

// Function for
function increaseProduct(id) {
   const productValue = document.getElementById(id).value;
   const product = parseFloat(productValue);
   return product;
}

function updateMobilePrice(id, addedPrice) {
   const current = document.getElementById(id).innerText;
   const currentNumber = parseFloat(current);
   const totalAmount = addedPrice + currentNumber;
   document.getElementById(id).innerText = totalAmount;
}
// const depositBtn = document.getElementById('addDeposit');
// depositBtn.addEventListener('click', function () {
//    const depositNumber = getInputNumber('depositAmount');
//    updateSpanText('currentDeposit', depositNumber);
//    updateSpanText('currentBalance', depositNumber);

//    document.getElementById('depositAmount').value = '';
// });