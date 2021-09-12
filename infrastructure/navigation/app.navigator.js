import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from '../../components/safe-area/safe-area.component';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { MapScreen  } from '../../features/restaurants/screens/map-screen/map-screen';
import { SettingsScreen  } from '../../features/restaurants/screens/setting-screen/setting-screen';
import { RestaurantsNavigator } from './restaurants.navigator';

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
  <NavigationContainer>
    <Tab.Navigator
      screenOptions = {createScreenOptions}
      tabBarOptions = {{
        activeTinColor = "tomato",
        inactiveTinColor = "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  </NavigationContainer>

  )
}
