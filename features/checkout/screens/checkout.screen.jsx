import React , { useContext } from 'react';
import { View } from 'react-native';
import { Text } from '../../../components/typography/text.component';
import { CreditCardInput } from '../components/credit-card.component';
import  { SafeArea } from '../../../components/safe-area/safe-area.component';
import { CartContext } from '../../../services/cart/cart.context';

export const CheckoutScreen = () =>  {
  const { cart } = useContext(CartContext);
  return (
      <SafeArea>
        <CreditCardInput />
      </SafeArea>
  );
}
