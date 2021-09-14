import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
// import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from '../../components/safe-area/safe-area.component';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { MapScreen  } from '../../features/maps/screens/map-screen/map-screen';
import { SettingsNavigator  } from './settings.navigator';
import { RestaurantsNavigator } from './restaurants.navigator';

import { RestaurantsContextProvider } from '../../services/services/restaurants.context';
import { LocationContextProvider } from '../..:services/location/location.context';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';

const tabBarIcon = () => {
  return <Ionicons name ={iconName} size={size} color={color} />;
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
              <Tab.Navigator
                screenOptions = {createScreenOptions}
                tabBarOptions = {{
                  activeTinColor = "tomato",
                  inactiveTinColor = "gray",
                }}
              >
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                <Tab.Screen name="Settings" component={SettingsNavigator} />
                <Tab.Screen name="Map" component={MapScreen} />
              </Tab.Navigator>

            <RestaurantsContextProvider>
          <LocationContextProvider>
      <FavouritesContextProvider>

  )
}
