//8 GB unifiled memory button click handler
document.getElementById('basic-memory').addEventListener('click', function() {
    updateCost('memory', 0);
    totalPrice();
})

//16 GB unifiled memory button click handler
document.getElementById('upgraded-memory').addEventListener('click', function() {
    updateCost('memory', 180);
    totalPrice();
})

//256GB SSD Storage button click handler
document.getElementById('storage-basic').addEventListener('click', function() {
    updateCost('storage', 0);
    totalPrice();
})

//512GB SSD Storage button click handler
document.getElementById('storage-mid').addEventListener('click', function() {
    updateCost('storage', 100);
    totalPrice();
})

//1TB SSD Storage button click handler
document.getElementById('storage-high').addEventListener('click', function() {
    updateCost('storage', 180);
    totalPrice();
})

//free delivery button click handler
document.getElementById('free-delivery').addEventListener('click', function() {
    updateCost('delivery', 0);
    totalPrice();
})

//paying delivery button click handler
document.getElementById('paying-delivery').addEventListener('click', function() {
    updateCost('delivery', 20);
    totalPrice();
})


//function for price update
function updateCost(idName, price) {
    const cost = document.getElementById(idName + '-cost');
    cost.innerText = price;
}

//function for inner number
function getInnerNumber(idName) {
    const element = document.getElementById(idName + '-cost');
    return parseInt(element.innerText);
}

//function for total price count
function totalPrice() {
    const basePrice = getInnerNumber('base');
    const memoryPrice = getInnerNumber('memory');
    const storagePrice = getInnerNumber('storage');
    const deliveryPrice = getInnerNumber('delivery');
    const total = basePrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('total-cost').innerText = total;
    document.getElementById('final-total').innerText = total;
}

//20% less for bonus
document.getElementById('promo-btn').addEventListener('click', function() {
    const totalCost = getInnerNumber('total');
    const promoInputField = document.getElementById('promo-code');
    const promoInputValue = promoInputField.value;
    //checking promocode
    if (promoInputValue == 'stevekaku') {
        const newFinalTotal = totalCost * 0.8;
        document.getElementById('final-total').innerText = newFinalTotal;
    }
    //clear input field
    promoInputField.value = '';
})