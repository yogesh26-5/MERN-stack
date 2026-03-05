let customers = [
  {
    id: 1,
    name: "John",
    balance: 5000,
    transactions: [],
  },
  {
    id: 2,
    name: "Amy",
    balance: 5000,
    transactions: [],
  },
];

export function checkBalance(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log(customer);
}

export function withdraw(id,amount){
customers = customers.map((customer) => {
    if (customer.id === id) {
        if (customer.balance < amount) {
            console.log("Insufficient balance");
            return customer;
        }
      return {
        ...customer,
        balance: customer.balance - amount,
        transactions: [...customer.transactions,
          {
            type: "debit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}
export function deposit(id, amount) {
   customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance: customer.balance + amount,
        transactions: [...customer.transactions,
          {
            type: "credit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}

export function showTransactions(id) {
    console.table(customers.find((customer) => customer.id === id).transactions);
}