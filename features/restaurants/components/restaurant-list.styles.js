import { FlatList  } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';

export const RestaurantList = styled(FlatList).attrs({
  contentConatinerStyle : {
    padding : 16,
  },
})``;


export const OrderButton = styled(Button).attrs({
  color : colors.brand.primary,
})`
  padding : ${(props) => props.thme.space[2]};
  width : 80%;
  align-self : center;
`;
