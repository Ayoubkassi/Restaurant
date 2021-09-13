import React from 'react';
import { AccountBackground,
         AccountCover,
         AccountContainer,
        AuthButton,
        Title
  } from './account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';

export const AccountScreen = ({ navigation }) => {
  return(
    <AccountBackground>
       <AccountCover />
       <Title>Ayoub Restaurant</Title>
       <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={()=> navigation.navigate('Login')}
        >Login</AuthButton>

        <Spacer size="large">
        <AuthButton
          icon="email"
          mode="contained"
          onPress={()=> navigation.navigate('Register')}
        >Register</AuthButton>
        </Spacer>
       </AccountContainer>
    </AccountBackground>
  );
}
