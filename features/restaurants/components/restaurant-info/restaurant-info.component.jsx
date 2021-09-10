import React from 'react';
import { Text , View , StyleSheet } from 'react-native';
import { Card }  from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';

const Title = styled.Text`
  color : ${props => props.theme.colors.ui.primary};
  font-familly : ${(props) => props.theme.fonts.heading};
  font-size : ${(props) => props.theme.fontSizes.body};
`;

const RestaurantCard = styled(Card)`
  background-color : ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding :  ${(props) => props.theme.space[3]};
  background-color : ${(props) => props.theme.colors.bg.primary};
`

const Info = styled.View`
  padding : ${(props) => props.theme.space[3]};
`;

const Adress = styled.Text`
  font-familly : ${(props) => props.theme.fonts.body};
  font-size : ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  flex-direction : row;
  padding-top : ${(props) => props.theme.space[2]};
  padding-bottom : ${(props) => props.theme.space[2]};
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

  const ratingARray = Array.from(new Array(Math.floor(rating)));
  return(
    <RestaurantCard elevation={5} >
      <RestaurantCardCover key={name}  source= {{ uri : photos[0]}} />
      <Info>
        <Title>{name}</Title>
        <Rating>
        { rattinArray.map(() => (
          <SvgXml  xml={star} width={20} height={20} />
        ))}
        </Rating>
        <Adress>{adress}</Adress>
      </Info>
    </RestaurantCard>
  );
}


const styles = StyleSheet.create({

})
