import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { amount, currency = "INR", bookingId } = req.body;
  if (!amount) return res.status(400).json({ message: "amount required" });

  // hide keys in env
  const rzp = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  try {
    const order = await rzp.orders.create({
      amount, // in paise
      currency,
      receipt: bookingId || `rec_${Date.now()}`,
      payment_capture: 1,
    });

    return res.status(200).json({ orderId: order.id, razorpayKey: process.env.RAZORPAY_KEY_ID, order });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message || "Razorpay error" });
  }
}
