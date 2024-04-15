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

function removeItem(name) {
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
    let pennySum = 0;
    // mutiply the number of coins by it's values
    const quantiesInDrawer = drawer.map(item => item.quantity * item.value); 
    quantiesInDrawer.forEach(num => pennySum += num);
    // convert pennies to dollars 
    dollarSum = pennySum/100;
    return dollarSum;
}

function canMakeAmount(target) {
    if (target <= sumDrawer()) {
        return true;
    } else {
        return false;
    };
}



function calculateCustomerChange(cost, paid) {
    // converting paid into pennies 
    let paidInPennies = paid * 100;
    // adding paid to the register
    while (paidInPennies != 0) {
      if (paidInPennies >= 10000) {
          addItem("hundred");
          paidInPennies -= 10000;
          console.log("100 added to the register");
      } else if (paidInPennies >= 2000) {
          addItem("twenty");
          paidInPennies -= 2000;
          console.log("20 added to the register");
      } else if (paidInPennies >= 1000) {
          addItem("ten");
          paidInPennies -= 1000;
          console.log("10 added to the register");
      } else if (paidInPennies >= 500) {
          addItem("five");
          paidInPennies -= 500;
          console.log("5 added to the register");
      } else if (paidInPennies >= 100) {
          addItem("one");
          paidInPennies -= 100;
          console.log("1 added to the register");
      } else if (paidInPennies >= 25) {
          addItem("quarter");            
          paidInPennies -= 25;
          console.log("25 cents added to the register");
      } else if (paidInPennies >= 10) {
          addItem("dime");
          paidInPennies -= 10;
          console.log("10 cents added to the register");
      } else if (paidInPennies >= 5) {
          addItem("nickel");
          paidInPennies -= 5;
          console.log("5 cents added to the register");
      } else if (paidInPennies >= 1) {
          addItem("penny");
          paidInPennies -= 1;
          console.log("1 cent added to the register");
      } else {
          console.log(`No more ${paidInPennies} left.`);
      }
  }

    // calculate the change
    const customerChange = paid - cost;
    // convert customerChange to pennies
    let customerChangeInPennies = customerChange * 100;
    // remove change from the drawer
    while (customerChangeInPennies != 0) {
      if (customerChangeInPennies >= 10000) {
          removeItem("hundred");
          customerChangeInPennies -= 10000;
          console.log("100 given to the guest");
      } else if (customerChangeInPennies >= 2000) {
          removeItem("twenty");
          customerChangeInPennies -= 2000;
          console.log("20 given to the guest");
      } else if (customerChangeInPennies >= 1000) {
          removeItem("ten");
          customerChangeInPennies -= 1000;
          console.log("10 given to the guest");
      } else if (customerChangeInPennies >= 500) {
          removeItem("five");
          customerChangeInPennies -= 500;
          console.log("5 given to the guest");
      } else if (customerChangeInPennies >= 100) {
          removeItem("one");
          customerChangeInPennies -= 100;
          console.log("1 given to the guest");
      } else if (customerChangeInPennies >= 25) {
          removeItem("quarter");
          customerChangeInPennies -= 25;
          console.log("25 cents given to the guest");
      } else if (customerChangeInPennies >= 10) {
          removeItem("dime");
          customerChangeInPennies -= 10;
          console.log("10 cents given to the guest");
      } else if (customerChangeInPennies >= 5) {
          removeItem("nickel");
          customerChangeInPennies -= 5;
          console.log("5 cents given to the guest");
      } else if (customerChangeInPennies >= 1) {
          removeItem("penny");
          customerChangeInPennies -= 1;
          console.log("1 cent given to the guest");
      } else {
          console.log(`No more ${customerChangeInPennies} left.`);
      }
    }

    // returns the new amount in the drawer
    return drawer;
}
