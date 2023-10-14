const bankAccount = require('./BankAccount').BankAccount

const senderAccount = {
    number: '11',
    amount: 1000
}

const receiverAccount = {
    number: '1',
    amount: 1000
}

const makeTransfer = (senderAccount, receiverAccount, sumToTransfer) => {
    const transactionNumber = bankAccount.transfer(senderAccount, receiverAccount, sumToTransfer)
    console.log('====================================');
    console.log('Transaction number', transactionNumber);
    console.log('====================================');
}

makeTransfer(receiverAccount, senderAccount, 1000)
makeTransfer(senderAccount, receiverAccount, 1000)