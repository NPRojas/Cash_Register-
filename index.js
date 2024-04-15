const drawer = [
    { name: 'penny', value: 1, quantity: 72 },
    { name: 'nickel', value: 5, quantity: 41 },
    { name: 'dime', value: 10, quantity: 31 },
    { name: 'quarter', value: 25, quantity: 17 },
    { name: 'one', value: 100, quantity: 90 },
    { name: 'five', value: 500, quantity: 11 }, 
    { name: 'ten', value: 1_000, quantity: 2 },
    { name: 'twenty', value: 2_000, quantity: 3 },
    { name: 'hundred', value: 10_000, quantity: 1 }
]

function removeItem(name, drawer) {
    // loop through the objects in the array
    // and compare name to all the names in the array
    const item = drawer.find(item => item.name === name)
    // removes from the quantity
    item.quantity--;
}

function addItem(name) {
    const item = drawer.find(item => item.name === name);
    item.quantity++;
}

function countCoints() {
    let coinSum = 0;
    // makes and array with only the coins info
    const coins = drawer.slice(0,4);
    // loops through the drawer and returns an array of the quanties
    const arrayOfCoinsNum = coins.map(coins => coins.quantity);
    // loops through the returned array and sums thems
    arrayOfCoinsNum.forEach(num => coinSum += num);
    return coinSum;
}

function countBills() {
    let billSum = 0;
    // makes and array with only the bills info
    const bills = drawer.slice(5);
    console.log(bills);
    // loops through the drawer and returns an array of the quanties
    const arrayOfBillNum = bills.map(bills => bills.quantity);
    // loops through the returned array and sums 
    arrayOfBillNum.forEach(num => billSum += num);
    return billSum;
}

function sumDrawer() {
    let totalSum = 0;
    const quantiesInDrawer = drawer.map(item => item.quantity); 
    quantiesInDrawer.forEach(num => totalSum += num);
    return totalSum;
}

function canMakeAmount(target) {
    if (target <= sumDrawer()) {
        return true;
    } else {
        return false;
    };
}

function calculateCustomerChange(cost, paid) {
    
}