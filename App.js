import  React from 'react';
import { Text, View, StyleSheet , Platform , StatusBar } from 'react-native';
import { RestaurantsScreen  } from './features/restaurants/screens/restaurant-screen/restaurant-screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './infrastructure/theme/index';

//safe areaview katkhli lik blassa lta7t olfo9 b7al chkel iphone 11 , blassa dial lcam oblassa dial down nav
//ila gama drna flex : 1 , kib9a kikber 3la 7ssab lcontent , but flex 1 , kiyakhd all screen , without overflow
//but safe irea view gama kayna f android
//statusBar.currentHeight : katrje3 lheight f android w 0 fl ios
//so we don't need isAndroid




const isAndroid = Platform.OS === 'android';

export default function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});
