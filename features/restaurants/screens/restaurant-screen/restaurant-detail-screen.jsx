import React from 'react';
import { RestaurantInfoCard } from '../../components/restaurant-info/restaurant-info-card.component';
import { SafeArea } from '../../../../components/safe-area/safe-area.component';

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
