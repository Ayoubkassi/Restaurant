import React , {useContext} from 'react';
import { View , Text , Button } from 'react-native';
import { SafeArea } from '../../../../components/safe-area/safe-area.component';
import {AuthenticationContext } from '../../../../services/authentication/authentication.context';

export const SettingsScreen = () => {

  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <View>
        <Text>Settings Screen</Text>
        <Button
          title="logout"
          onPress={() => onLogout()}
        >Logout</Button>
      </View>
    </SafeArea>
  );
}
