const bankAccountHelpers = require('./BankAccountHelpers').BankAccountHelpers

class BankAccount{

    accountHasEnoughMoney = (account, sum) => account.amount >= sum

    accountExists = (account) => account.number === '1' || account.number === '2'

    validateAccountNumberFormat(senderAccount, receiverAccount) {
        if(!bankAccountHelpers.correctAccountNumber(senderAccount)){
            bankAccountHelpers.logMessage(`Incorrect acount number format for sender: ${senderAccount.number}`)

            return false;
        }

        if(!bankAccountHelpers.correctAccountNumber(receiverAccount)){
            bankAccountHelpers.logMessage(`Incorrect acount number format for receiver: ${receiverAccount.number}`)

            return false;
        }
    }

    checkSenderAndReceiverAccountExistence(senderAccount, receiverAccount){
        if(!this.accountExists(senderAccount)){
            bankAccountHelpers.logMessage(`Sender account not exists: ${senderAccount.number}`)

            return false;
        }

        if(!this.accountExists(receiverAccount)){
            bankAccountHelpers.logMessage(`Sender account not exists: ${receiverAccount.number}`)

            return false;
        }
    }

    validateAccounts(senderAccount, receiverAccount){
        
        if(!this.validateAccountNumberFormat(senderAccount, receiverAccount)){
            
            return false;
        }
        
        if(!this.checkSenderAndReceiverAccountExistence(senderAccount, receiverAccount)){
            
            return false;
        }   
    }

    createTransactionLog(senderAccount, receiverAccount, sum){
        bankAccountHelpers.logMessage(`Transaction log created: ${JSON.stringify(senderAccount)} | ${JSON.stringify(receiverAccount)} | ${sum} | ${Date.now()}`)
    }

    transfer(senderAccount, receiverAccount, sum){
        bankAccountHelpers.logMessage('Start transaction');

        if(this.validateAccounts(senderAccount, receiverAccount)){
            
            return null
        }
        bankAccountHelpers.logMessage('Accounts validation: OK');
        
        if(!this.accountHasEnoughMoney(senderAccount, sum)){
            bankAccountHelpers.logMessage('Sender balance check: Error! No enough money');    
            
            return null;
        }

        this.createTransactionLog(senderAccount, receiverAccount, sum)
        bankAccountHelpers.logMessage('Transfer completed!');
        
        return bankAccountHelpers.generateTransactionNumber(senderAccount, receiverAccount, sum)
    }
}

module.exports.BankAccount = new BankAccount()