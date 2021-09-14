import React , {useContext} from 'react';
import { View } from 'react-native';
import { SafeArea } from '../../../../components/safe-area/safe-area.component';
import {AuthenticationContext } from '../../../../services/authentication/authentication.context';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';

const ListItem = styled(List.Item)`
  padding : 16px;
`;

export const SettingsScreen = ({ navigation }) => {

  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <List.Section>
      <ListItem
        title="Favourites"
        left={(props) => <List.Icon {...props} color="black" icon="heart" /> }
        onPress={() => navigation.navigate('Favourites')}
      />

      <ListItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" /> }
          onPress={onLogout}
      />
      </List.Section>
    </SafeArea>
  );
}
