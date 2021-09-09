import React from 'react';
import { Text , View , StyleSheet } from 'react-native';
import { Card }  from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
  padding : ${(props) => props.theme.space[3]};
  color : ${props => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color : ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding :  ${(props) => props.theme.space[3]};
  background-color : ${(props) => props.theme.colors.bg.primary};
`


export const RestaurantInfoCard = ({restaurant}) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos,
    adress = '100 Hay Nahda 1 Gr Al Ahd B03',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
  } = restaurant;

  return(
    <RestaurantCard elevation={5} >
      <RestaurantCardCover key={name}  source= {{ uri : photos[0]}} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
}


const styles = StyleSheet.create({

})
