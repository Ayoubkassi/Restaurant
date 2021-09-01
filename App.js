import  React , {useState} from 'react';
import { Text, View, StyleSheet , Platform } from 'react-native';
import Constants from 'expo-constants';




export default function App() {

    const [focusSubject , setFocusSubject ] = useState('Fitness');


  return (
    <View style={styles.container}>
     	<Text style={styles.text}>Hey And Welcome Again</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : colors.color1,
    paddingTop :Platform.OS === 'ios' ? paddingSizes.sm : paddingSizes.md,
    
  },
  text : {
    color : '#ffffff',
    fontSize : '21px',
    textAlign : "center",
  }
});
