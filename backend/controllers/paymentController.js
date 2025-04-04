// Dummy payment handler

// You can store real orders in a database here if needed
const processPayment = (req, res) => {
  const { items, amount, paymentMethod } = req.body;

  // Check for required data
  if (!items || !amount || !paymentMethod) {
    return res.status(400).json({ message: "Missing payment details" });
  }

  // Simulate payment processing
  console.log("Processing payment...");
  console.log("Items:", items);
  console.log("Amount:", amount);
  console.log("Payment Method:", paymentMethod);

  // Simulate success
  return res.status(200).json({
    message: "Payment successful!",
    transactionId: `TXN-${Date.now()}`,
  });
};

module.exports = {
  processPayment,
};
