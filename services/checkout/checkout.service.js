import createStripe from 'stripe-client';

const stripe = createStripe("pk_test_51I0jtGF0TFxEW4qmG3adUE89QtZzhPjD23Dwj77euxrHMcj07IauercWEe7PIGFbo2K9CH4rqOE8neRR9OwlXKKY00Il7jZKDL
");

export const cardTokenRequest = (card) => {
  stripe.createToken(card);
}
