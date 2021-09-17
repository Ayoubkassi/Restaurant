import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
// import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from '../../components/safe-area/safe-area.component';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { MapScreen  } from '../../features/maps/screens/map-screen/map-screen';
import { SettingsNavigator  } from './settings.navigator';
import { RestaurantsNavigator } from './restaurants.navigator';
import { CheckoutScreen } from '../../features/checkout/screens/checkout.screen';

import { RestaurantsContextProvider } from '../../services/services/restaurants.context';
import { LocationContextProvider } from '../..:services/location/location.context';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';
import { CartContextProvider } from '../../services/cart/cart.context';
const tabBarIcon = () => {
  return <Ionicons name ={iconName} size={size} color={color} />;
}

const TAB_ICON = {
  Restaurants : "md-restaurant",
  Checkout : "md-cart",
  Map : "md-map",
  Settings : "md-settings",
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon : ({ size , color}) => (
      <Ionicons name ={iconName} size={size} color={color} />
    ),
  }
}

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <CartContextProvider>
              <Tab.Navigator
                screenOptions = {createScreenOptions}
                tabBarOptions = {{
                  activeTinColor = "tomato",
                  inactiveTinColor = "gray",
                }}
              >
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                <Tab.Screen name="Checkout" component={CheckoutScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsNavigator} />
              </Tab.Navigator>
              </CartContextProvider>
            <RestaurantsContextProvider>
          <LocationContextProvider>
      <FavouritesContextProvider>

  )
}
