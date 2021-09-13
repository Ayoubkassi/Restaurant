import React frrom 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text , View } from 'react-native';

const stack = createStackNavigator();


export const AccountNavigatot = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={()=>
      <View>
        <Text>Account Screen</Text>
      </View>
     } />
    <Stack.Screen name="Login" component={()=>
      <View>
        <Text>Login Screen</Text>
      </View>
    } />
  </Stack.Navigator>
)
