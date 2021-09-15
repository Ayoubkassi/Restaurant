import React , {useContext} from 'react';
import { View , TouchableOpacity } from 'react-native';
import { SafeArea } from '../../../../components/safe-area/safe-area.component';
import {AuthenticationContext } from '../../../../services/authentication/authentication.context';
import { List , Avatar } from 'react-native-paper';
import styled from 'styled-components/native';
import { Text } from '../../../../components/typography/text.component';
import { Spacer } from '../../../../components/spacer/spacer.component';
import {CameraScreen } from './camera.screen';


const ListItem = styled(List.Item)`
  padding :  props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items : center;
`;

export const SettingsScreen = ({ navigation }) => {

  const { onLogout , user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
    <TouchableOpacity
      onPress={() => navigation.navigate("Camera")}
    >
    <AvatarContainer>
      <Avatar.Icon
        size={180}
        icon="human"
        backgrounColor="#2182BD"
       />
       </TouchableOpacity>

       <Spacer position="top" size="large" >
         <Text variant="caption">
           { user.email }
         </Text>
       </Spacer>

      </AvatarContainer>

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
