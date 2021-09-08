import React from 'react';
import { Text , View , StyleSheet } from 'react-native';

export const RestaurantInfo = ({restaurant}) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos,
    adress = '100 Hay Nahda 1 Gr Al Ahd B03',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
  } = restaurant;
  return(
    <Text>{name}</Text>
  );
}
