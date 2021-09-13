import React from 'react';
import styled from 'styled-components/native';
import { View , ScrollView , TouchableOpacity } from 'react-native';
import { Spacer } from '../spacer/spacer.component';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Text } from '../typography/text.component';
const FavouritesWrapper = styled.View`
  padding : 10px;
`;



export const FavouritesBar = ({ favourites , onNavigate }) => {

  if(!favourites.length){
    return null;
  }

  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showHorizontalScrollIndicator={false}>
        {
          favourites.map((restaurant) => {
            const key = restaurant.name.split(" ").join("");
            return(
              <Spacer key={key} position="left" sizeo="medium" >
                <TouchableOpacity
                  onPress={() => onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
                >
                  <CompactRestaurantInfo restaurant={restaurant} />
                </TouchableOpacity>
              </Spacer>
            );
          })
        }
      </ScrollView>
    </FavouritesWrapper>
  );
}
