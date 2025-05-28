let isPaid = false;
let price = 10
const flavors = ["latte", "espresso", "americano", "mocha", "americano"]

function pay(amount) {
    if (amount === price) {
        isPaid = true
        if (isPaid) {
            flavors.map((flavor) => {
                console.log(flavor);
            });
        }
    }
}

pay(10);

// if client pay 
    // choose flavor
    // if flavor
        // getCoffee
        // else tell client no flavor