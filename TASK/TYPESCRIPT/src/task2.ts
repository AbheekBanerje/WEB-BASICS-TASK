interface Payment {
  amount: number;
  method: "card" | "upi" | "cash";
}

function processPayment(payment: Payment) {
  console.log(`Payment of ${payment.amount} via ${payment.method}`);
}

processPayment({ amount: 1000, method: "upi" });