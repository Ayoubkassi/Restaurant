import  React , { useState, useEffect } from 'react';
import { Text, View, StyleSheet , Platform , StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './infrastructure/theme/index';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from './components/safe-area/safe-area.component';
import { Ionicons } from 'react-native-vector-icons/Ionicons';

import { Navigation } from './infrastructure/navigation/index';
// import { RestaurantsContextProvider } from './services/services/restaurants.context';
// import { LocationContextProvider } from './services/location/location.context';
// import { FavouritesContextProvider } from './services/favourites/favourites.context';
import { AuthenticationContextProvider } from './services/authentication/authentication.context';

import * as firebase from 'firebase';
//safe areaview katkhli lik blassa lta7t olfo9 b7al chkel iphone 11 , blassa dial lcam oblassa dial down nav
//ila gama drna flex : 1 , kib9a kikber 3la 7ssab lcontent , but flex 1 , kiyakhd all screen , without overflow
//but safe irea view gama kayna f android
//statusBar.currentHeight : katrje3 lheight f android w 0 fl ios
//so we don't need isAndroid

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';


const isAndroid = Platform.OS === 'android';

const TAB_ICON = {
  Restaurants : "md-restaurant",
  Map : "md-map",
  Settings : "md-settings"
}

const Tab = createBottomTabNavigator();

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

/*({ route }) => ({
  tabBarIcon : ({ color , size}) => {
    let iconName;

    if(route.name === "Restaurants"){
      iconName = "md-restaurant";
    }
    else if(route.name === "Settings"){
      iconName = "md-settings";
    }
    else if (route.name === "Map"){
      iconName = "md-map";
    }


  },
})*/

// const MyTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions = {createScreenOptions}
//       tabBarOptions = {{
//         activeTinColor = "tomato",
//         inactiveTinColor = "gray",
//       }}
//     >
//       <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//       <Tab.Screen name="Map" component={MapScreen} />
//     </Tab.Navigator>
//   )
// }


const firebaseConfig = {
  apiKey: "AIzaSyDj9j2OBGChaxq2gnsJJ-XGHsu8qMy6rsI",
  authDomain: "portfolio-db0c3.firebaseapp.com",
  projectId: "portfolio-db0c3",
  storageBucket: "portfolio-db0c3.appspot.com",
  messagingSenderId: "276966195460",
  appId: "1:276966195460:web:37889653a985edc4b95051",
  measurementId: "G-SN8MXDGPPV"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default function App() {



const [oswaldLoaded] = useOswald({
  Oswald_400Regular,
});

const [latoLoaded] = useLato({
  Lato_400Regular,
});

if(!oswaldLoaded || !latoLoaded){
  return null;
}
// if(!isAuthenticated){
//   return null;
// }
  return (

  <>
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
            <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
  </>
  );
}

const styles = StyleSheet.create({

});
