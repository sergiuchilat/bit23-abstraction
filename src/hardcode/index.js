const senderAccount = {
    number: '1',
    amount: 1000
}

const receiverAccount = {
    number: '2',
    amount: 1000
}

const sumToTransfer = 1000;

const makeTransfer = (senderAccount, receiverAccount, sumToTransfer) => {
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    console.log('Start transaction');
    console.log('------------------------------------');

    if(!(senderAccount.number === '1' || senderAccount.number === '2')){
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
        console.log(`Incorrect acount number format for sender: ${senderAccount.number}`);
        console.log('------------------------------------');
        
        return false;
    }
    
    if(!(receiverAccount.number === '1' || receiverAccount.number === '2')){
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
        console.log(`Incorrect acount number format for receiver: ${receiverAccount.number}`);
        console.log('------------------------------------');

        return false;
    }

    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    console.log('Accounts validation: OK');
    console.log('------------------------------------');
    
    if(senderAccount.amount < sumToTransfer){
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
        console.log(`Sender balance check: Error! No enough money`);
        console.log('------------------------------------');

        return false;
    }
    
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    console.log(`Transfer completed!`);
    console.log('------------------------------------');

    console.log('====================================');
    console.log('Transaction number', `${senderAccount.number}->${receiverAccount.number}=${sumToTransfer}[${Date.now()}]`);
    console.log('====================================');

    return true;
}

makeTransfer(senderAccount, receiverAccount, sumToTransfer)
makeTransfer(receiverAccount, senderAccount, sumToTransfer)