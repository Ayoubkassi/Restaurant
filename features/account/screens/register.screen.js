import React , { useState , useContext } from 'react';
import { Text } from '../../../components/typography/text.component';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';


export const RegisterScreen = () => {

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [repeatedPassword , setRepeatedPassword ] = useState('');

  const { onRegister , error } = useContext(AuthenticationContext);

  return(
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
        label="Email"
        value={email}
        textContentType="emailAdress"
        keyboardType="email-adress"
        autoCapitalize="none"
        onChangeText={(u) => setEmail(u)}
        />

        <Spacer size="large">
        <AccountContainer>
          <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
          />
        </Spacer>

        <Spacer size="large">
        <AccountContainer>
          <AuthInput
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(rp) => setRepeatedPassword(rp)}
          />
        </Spacer>


        { error.length &&
        <Spacer size="large">
          <ErrorContainer>
            <Text variant="error">
              { error }
            </Text>
          </ErrorContainer>
        </Spacer>
         }
        <Spacer>
          <AuthButton
          icon="email"
          mode="contained"
          onPress={() => onRegister(email , password , repeatedPassword)}
          >
            Register
          <AuthButton>
        </Spacer>
      </AccountContainer>

      <Spacer>
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
}
