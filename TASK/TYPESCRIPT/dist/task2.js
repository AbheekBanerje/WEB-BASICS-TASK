function processPayment(payment) {
    console.log(`Payment of ${payment.amount} via ${payment.method}`);
}
processPayment({ amount: 1000, method: "upi" });
export {};
