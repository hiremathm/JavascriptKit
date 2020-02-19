const customer = {
    accountNo: "123",
    name: "shiva",
    balance: 500,
    transaction: function(amount, code){
        if(code == 1){
            this.balance += amount
            return `The balance ${amount} is successfully credited to your account and your current balance is ${this.currentBalance()} `
        }else if(code == 0){
            if(this.balance > amount){
                this.balance -= amount
                return `The balance ${amount} is debited from your account and your current balance is ${this.currentBalance()} `
            }else{
                return 'Insufficient balance'
            }
        }else{
            return 'Invalid Code'
        }
    },
    currentBalance: function(){
        return this.balance;
    }
}

console.log(customer.transaction(300, 1))
console.log(customer.transaction(200, 0))
console.log(customer.transaction(1000, 0))
console.log(customer.transaction(100, 5))