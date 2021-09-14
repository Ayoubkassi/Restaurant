import React , { useEffect } from 'react';
import { createStackNavigator , CardStyleInterpolators } from '@react-navigation/stack';
import { SettingsScreen  } from '../../features/settings/screens/setting-screen';


const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route , navigation }) => {
  return(
      <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        CardStyleInterpolators : CardStyleInterpolators.forHorizontalIOS,
      }}
      >

        <SettingsStack.Screen
          options={{
            header : () => null,
          }}
          name="Settings"
          component={ SettingsScreen }
        />

        <SettingsStack.Screen
          name="Favourites"
          component={() => null }
        />

      </SettingsStack.Navigator>

  );
}
