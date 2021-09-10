import React from 'react';
import { Text , View , StyleSheet } from 'react-native';
import { Card }  from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

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

const SectionEnd = styled.View`
  flex : 1;
  flex-direction : row,
  justify-content : flex-end;
`;

const Section = styled.View`
  flex-direction : row;
  align-items : center;
`;

const Open = styled(SvgXml)`
  flex-direction : row;
`;

export const RestaurantInfoCard = ({restaurant}) => {
  const {
    name = 'Some Restaurant',
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [ "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",],
    adress = '100 Hay Nahda 1 Gr Al Ahd B03',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true
  } = restaurant;

  const ratingARray = Array.from(new Array(Math.floor(rating)));
  return(
    <RestaurantCard elevation={5} >
      <RestaurantCardCover key={name}  source= {{ uri : photos[0]}} />
      <Info>
        <Title>{name}</Title>
        <Section>
        <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Adress>{adress}</Adress>
      </Info>
    </RestaurantCard>
  );
}


const styles = StyleSheet.create({

})
