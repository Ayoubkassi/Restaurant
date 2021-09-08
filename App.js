import  React from 'react';
import { Text, View, StyleSheet , Platform , SafeAreaView , StatusBar } from 'react-native';
import Constants from 'expo-constants';


//safe areaview katkhli lik blassa lta7t olfo9 b7al chkel iphone 11 , blassa dial lcam oblassa dial down nav
//ila gama drna flex : 1 , kib9a kikber 3la 7ssab lcontent , but flex 1 , kiyakhd all screen , without overflow
//but safe irea view gama kayna f android
//statusBar.currentHeight : katrje3 lheight f android w 0 fl ios
//so we don't need isAndroid




const isAndroid = Platform.OS === 'android';

export default function App() {

  return (
    <>
      <SafeAreaView style={styles.container , marginTop : StatusBar.currentHeight >
        <View style={{ padding: 16 , backgroundColor : "green"}}>
          <Text>Search</Text>
        </View>
        <View style={{ flex : 1,padding : 16 , backgroundColor : "blue"}}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1
  }

});
