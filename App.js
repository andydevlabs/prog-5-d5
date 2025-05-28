let isPaid = false;
let price = 10000;
const flavors = ["latte", "espresso", "americano", "mocha", "americano"];

function pay(amount) {
    if (amount === price) {
        isPaid = true;
        console.log("Choose your flavor : ");
        flavors.map((flavor) => {
            console.log(`- ${flavor.toUpperCase()}`);
        });
    }

    if (amount < price) {
        let moneyToPay = price - amount
        console.log(`Insufficient payment, need to pay ${moneyToPay}ar more`);
    }

    if (amount > price) {
        let restOfMoney = amount - price
        console.log(`Don't forget your change : ${restOfMoney}ar`);
    }
}

pay(10000);

// if client pay
// choose flavor
// if flavor
// getCoffee
// else tell client no flavor
