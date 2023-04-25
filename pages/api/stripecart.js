import loadConfig from "next/dist/server/config";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const params = {
                submit_type: "pay",
                mode: "payment",
                payment_method_types: ["card"],
                billing_address_collection: "auto",
                shipping_options: [{ shipping_rate: "shr_1LVfzVGVURq38X9NfyWDtQK3" }],

                line_items: req.body.map((item) => {
                    return {
                        price_data: {
                            currency: "inr",
                            product_data: {
                                name: item.productName,
                                images: [item.productImage],
                            },
                            unit_amount: item.productPrice * 100,
                        },
                        quantity: item.purchasedQty,
                    };
                }),
                success_url: `${req.headers.origin}/paymentsucess`,
                cancel_url: `${req.headers.origin}/canceled`,
            };

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);

            res.status(200).json(session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}
