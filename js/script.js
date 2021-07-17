// Mobile Price Increase
const mobilePrice = document.getElementById('plusBtn');
mobilePrice.addEventListener('click', function () {
   
   const total = increaseProduct('quantityIncrease');
   // Function Calling
   updateMobilePrice('price', total);

   document.getElementById('quantityIncrease').value = total;
});
const priceDecrease = document.getElementById('minusBtn');
priceDecrease.addEventListener('click', function(){
   const total2 = increaseProduct('quantityIncrease')
   console.log('clicked', total2)
})

// Function for
function increaseProduct(id) {
   const quantity = document.getElementById(id).value;
   const quantityIncrease = parseInt(quantity) + 1;
   return quantityIncrease;
}

function updateMobilePrice(id, totalProduct) {
   // const current = document.getElementById(id).innerText;
   // const currentPrice = parseInt(current);
   const totalAmount = totalProduct * 1219;
   document.getElementById(id).innerText = totalAmount;
};