import Razorpay from "razorpay";
import type { NextApiRequest, NextApiResponse } from "next";
// import the correct type for Razorpay order
import type { Orders } from "razorpay/dist/types/orders";
type SuccessResponse = {
  orderId: string;
  razorpayKey: string | undefined;
  order: Orders.RazorpayOrder;
};

type ErrorResponse = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method !== "POST") return res.status(405).end();

  const { amount, currency = "INR", bookingId } = req.body;
  if (!amount) return res.status(400).json({ message: "amount required" });

  const rzp = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_SECRET!,
  });

  try {
    const order: Orders.RazorpayOrder = await rzp.orders.create({
      amount,
      currency,
      receipt: bookingId || `rec_${Date.now()}`,
      payment_capture: true,
    });

    return res.status(200).json({
      orderId: order.id,
      razorpayKey: process.env.RAZORPAY_KEY_ID,
      order,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err?.message ?? "Razorpay error",
    });
  }
}