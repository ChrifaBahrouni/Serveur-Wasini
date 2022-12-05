// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51IrGOFIP10E0uvbRZxCf5JQ9o8GgayZMVfePx1auTpB39OLJJN18Brv2j0Akl70MyxkLH4bYOOh2SHzjenZshJbz00Pyh5iXd2')

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:4242/success',
    cancel_url: 'http://localhost:4242/cancel',
  });

  res.redirect(303, session.url);
});
// get all transactions  
const transactions = await stripe.issuing.transactions.list({
  limit: 10,
}); 
app.listen(4242, () => console.log(`Listening on port ${4242}!`));