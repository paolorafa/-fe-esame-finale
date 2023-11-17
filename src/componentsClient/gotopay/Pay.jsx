import React, { useState } from 'react';

function Pay() {
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = async () => {
    try {
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 1000,
          currency: 'EUR',
          payment_method_types: ['card'],
        }),
      });

      const responseData = await response.json();

      const clientSecret = responseData.clientSecret;
      
     

      setPaymentStatus('Pagamento completato con successo!');
    } catch (error) {
      console.error('Errore durante il pagamento:', error);
      setPaymentStatus('Errore durante il pagamento. Riprova più tardi.');
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Effettua il pagamento</button>
      <p>{paymentStatus}</p>
    </div>
  );
}

export default Pay;
