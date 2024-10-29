// app/ClientCheckoutButton.js
'use client';

import React from 'react';
import Button from '@mui/material/Button';
import getStripe from '../utils/get-stripe';

export default function ClientCheckoutButton() {
  const handleSubmit = async () => {
    try {
      const checkoutSession = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!checkoutSession.ok) {
        throw new Error('Network response was not ok');
      }
      const checkoutSessionJson = await checkoutSession.json();

      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout({
        sessionId: checkoutSessionJson.id,
      });

      if (error) {
        console.warn(error.message);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  return (
    <Button onClick={handleSubmit} variant="contained" color="primary">
      Start Checkout
    </Button>
  );
}
