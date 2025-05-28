import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

let isPaid = false;
let price = 10000;
const flavors = [
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
        name: "cappuccino",
        isAvailable: true,
    },
];

function pay() {
    const input = prompt("Please, pay for your coffee first: ");
    const amount = parseInt(input, 10);

    if (isNaN(amount)) {
        console.log("Please enter a number for your payment");
        return false;
    }

    if (amount < price) {
        let moneyToPay = price - amount;
        console.log(`Insufficient payment, need to pay ${moneyToPay}ar more`);
        return false;
    }

    if (amount > price) {
        let restOfMoney = amount - price;
        console.log(`Don't forget your change : ${restOfMoney}ar`);
    }

    if (amount === price) {
        isPaid = true;
        if (isPaid) {
            console.log("Choose your flavor : ");
            flavors.map((flavor) => {
                console.log(`- ${flavor.name.toUpperCase()}`);
            });

            const ask = prompt("> ");
            const selectedFlavor = flavors.find(
                (flavor) => flavor.name.toLowerCase() === ask.toLowerCase()
            );

            if (selectedFlavor) {
                if (selectedFlavor.isAvailable) {
                    console.log("Here's your coffee");
                } else {
                    console.log(
                        "We're sorry but that flavor is unavailable for the moment"
                    );
                }
            } else {
                console.log("Please, make sure you enter the right choice");
            }
        }
    }
}

pay();
