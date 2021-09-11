import React from 'react';
import { Text , View , StyleSheet } from 'react-native';
import { Card }  from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Text } from '../../../../components/typography/text.component';
import { Image } from 'react-native';
import { Spacer } from '../../../../components/spacer/spacer.component';

import { RestaurantCard,
         RestaurantCardCover,
         Info,
         Adress,
         Rating,
         Section,
         SectionEnd,
         Open,
         Icon
       } from './restaurant-info-card.styles';


export const RestaurantInfoCard = ({restaurant = {} }) => {
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
        <Text variant="label">{name}</Text>
        <Section>
        <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error" >
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon  source={{ uri: icon }} />
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
