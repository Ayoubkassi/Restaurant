import React from 'react';
import { Text , View , SafeAreaView , StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../../components/restaurant-info/restaurant-info-card.component';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { SafeArea } from '../../../../components/safe-area/safe-area.component';


const SearchContainer = styled.View`
  padding : ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentConatinerStyle : {
    padding : 16,
  },
})`
 /*margin-bottom : ${(props) => props.theme.space[5]}; */
 /*using this one up if we want to remove flex 1 from the SafeArea */
`;


export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[1,2,3]}
        renderItem = {() => <>
                        <Spacer position="bottom" size="large">
                        <RestaurantInfoCard />
                        </Spacer>
                        </> }
        keyExtractor = {(item) => item.name }
      />

    </SafeArea>
  );
}


const styles = StyleSheet.create({


});
