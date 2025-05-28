let isPaid = false;
let isAvailable = true;
let price = 10000;
const flavors = ["latte", "espresso", "americano", "mocha", "americano"];

const test = [
    {
        name: "latte",
        isAvailable: true,
    },
    {
        name: "espresso",
        isAvailable: false,
    },
    {
        name: "americano",
        isAvailable: true,
    },
    {
        name: "mocha",
        isAvailable: false,
    },
    {
        name: "americano",
        isAvailable: true,
    },
];

function pay(amount) {
    if (amount === price) {
        isPaid = true;
        console.log("Choose your flavor : ");
        test.map((flavor) => {
            console.log(`- ${flavor.name.toUpperCase()}`);
            
            switch (flavor.name.toLowerCase()) {
                case "latte":
                    if (flavor.isAvailable) {
                        console.log("Here's your coffee");
                    } else {
                        console.log(
                            "We're sorry but that flavor is unavailable for the moment"
                        );
                    }
                    break;
                case "espresso":
                    if (flavor.isAvailable) {
                        console.log("Here's your coffee");
                    } else {
                        console.log(
                            "We're sorry but that flavor is unavailable for the moment"
                        );
                    }
                    break;
                case "americano":
                    if (flavor.isAvailable) {
                        console.log("Here's your coffee");
                    } else {
                        console.log(
                            "We're sorry but that flavor is unavailable for the moment"
                        );
                    }
                    break;
                case "mocha":
                    if (flavor.isAvailable) {
                        console.log("Here's your coffee");
                    } else {
                        console.log(
                            "We're sorry but that flavor is unavailable for the moment"
                        );
                    }
                    break;
                default:
                    console.log("Please, make sure you enter the right choise");
            }
        });


    }

    if (amount < price) {
        let moneyToPay = price - amount;
        console.log(`Insufficient payment, need to pay ${moneyToPay}ar more`);
    }

    if (amount > price) {
        let restOfMoney = amount - price;
        console.log(`Don't forget your change : ${restOfMoney}ar`);
    }
}

pay(10000);
