import React from 'react';
import { LiteCreditCardInput } from 'react-native-credit-card-input';
import createStripe from 'stripe-client';

const stripe = createStripe("pk_test_51I0jtGF0TFxEW4qmG3adUE89QtZzhPjD23Dwj77euxrHMcj07IauercWEe7PIGFbo2K9CH4rqOE8neRR9OwlXKKY00Il7jZKDL
");

export const CreditCardInput = () => {
  const onChange = (formData) => {
    const { values , status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const card = {
      number: '4242424242424242',
      exp_month : '02',
      exp_year:'24',
      cvc: '244',
      name  : 'Kassi',
    }
  const info = await  stripe.createToken({ card })
  };

  return(
    <LiteCreditCardInput onChange={onChange} />
  );
};
