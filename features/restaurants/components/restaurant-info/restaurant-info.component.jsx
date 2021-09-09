import React from 'react';
import { Text , View , StyleSheet } from 'react-native';
import { Card }  from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
  padding : 16px;
  color : ${props => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color : 'white';
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding : 20px;
  background-color : 'white';
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
