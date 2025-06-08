function estimateTransactionFee() {
    let amount = parseFloat(prompt("Unatuma Ngapi? (KES): "));
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid positive number.");
        return null;
    }

    let fee;
    if (amount <= 1000) {
        fee = 10;
    } else if (amount > 1000 && amount <= 7000) {
        fee = 35;
    } else {
        fee = 70;
    }

    fee = Math.round(fee * 100) / 100;
    return { amount, fee };
}

const result = estimateTransactionFee();
if (result) {
    const { amount, fee } = result;
    const totalAmountDebited = amount + fee;
    console.log(`Sending KES ${amount}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalAmountDebited}`);
    console.log("Send Money Securely!");
}