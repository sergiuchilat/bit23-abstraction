class BankAccountHelpers{
    logMessage(message){
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
        console.log(message);
        console.log('------------------------------------');
    }

    correctAccountNumber(account){
        return account.number === '1' || account.number === '2'
    }

    generateTransactionNumber(senderAccount, receiverAccount, sum){
        return `${senderAccount.number}->${receiverAccount.number}=${sum}[${Date.now()}]`
    }
}

module.exports.BankAccountHelpers = new BankAccountHelpers()