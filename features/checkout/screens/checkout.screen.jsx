import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../components/typography/text.component';
import { CreditCardInput } from '../components/credit-card.component';
import  { SafeArea } from '../../../components/safe-area/safe-area.component';

export const CheckoutScreen = () =>  {
  return (
      <SafeArea>
        <CreditCardInput />
      </SafeArea>
  );
}
