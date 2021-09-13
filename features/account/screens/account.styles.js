import styled from 'styled-components/native';
import { View ,  ImageBackground } from 'react-native';
export const AccountBackground = styled.ImageBackground.attrs({
  source : require('../../../../assets/home_bg.jpg'),
})`
  flex : 1;
  /*background-color : #ddd;*/
  align-items : center;
  justify-content : center;

`;

export const AccountCover = styled.View`
  position : absolute;
  width : 100%;
  height : 100%;
  background-color : rgba(255,255,255,0.3);

`;
