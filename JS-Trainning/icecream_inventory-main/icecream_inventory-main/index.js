console.log("1. ADD ICE CREAM");
console.log("2. CHANGE ICE CREAM FLAVOR");
console.log("3. TOTAL NO OF ICE CREAM IN INVENTORY");
console.log("4. TOTAL AMOUNT");
console.log("5. DISPLAY");

let flavors = [];
let costs = [];
let continueChoice = 'N';

do {
    let option = prompt("ENTER CHOICE:");
    switch (option) {
        case '1':
            let newFlavor = prompt("Enter ice cream flavor:");
            let newCost = parseFloat(prompt("Enter the cost of ice cream"));
            flavors.push(newFlavor);
            costs.push(newCost);
            break;
    
        case '2':
            if (flavors.length === 0) {
                console.log("No ice cream in inventory");
            } else {
                console.log("Ice cream flavors in inventory:");
                for (let i = 0; i < flavors.length; i++) {
                    console.log(flavors[i] + " ");
                }
                let flavorToChange = prompt("Enter the ice cream flavor you want to change:");
                let newFlavorName = prompt("Enter the new flavor:");

                for (let i = 0; i < flavors.length; i++) {
                    if (flavors[i] === flavorToChange) {
                        flavors[i] = newFlavorName;
                    }
                }

                console.log("Updated ice cream flavors in inventory:");
                for (let i = 0; i < flavors.length; i++) {
                    console.log(flavors[i] + " ");
                }
            }
            break;

        case '3':
            console.log("TOTAL NO OF ICE CREAM IN INVENTORY: " + flavors.length);
            break;

        case '4':
            let totalAmount = 0;
            for (let i = 0; i < costs.length; i++) {
                totalAmount += costs[i];
            }
            console.log("TOTAL AMOUNT: " + totalAmount);
            break;

        case '5':
            console.log("Ice cream flavors in inventory:");
            for (let i = 0; i < flavors.length; i++) {
                console.log(flavors[i] + " ");
            }
            break;
    }
    continueChoice = prompt("DO YOU WANT TO CONTINUE?");
} while (continueChoice === 'y' || continueChoice === 'Y');
