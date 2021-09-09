import React from 'react';
import { Text , View , StyleSheet } from 'react-native';
import { Card }  from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
  padding : 16px;
`;

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
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source= {{ uri : photos[0]}} />
      <Title>{name}</Title>
    </Card>
  );
}


const styles = StyleSheet.create({
  card : {
    backgroundColor : 'white'
  },
  cover : {
    padding : 20,
    backgroundColor : 'white'
  }
})
