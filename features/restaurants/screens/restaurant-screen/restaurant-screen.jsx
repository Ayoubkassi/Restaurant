import React from 'react';
import { Text , View , SafeAreaView , StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../../components/restaurant-info/restaurant-info.component';
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
  flex : 1;
  margin-top : ${StatusBar.currentHeight}px;

`;

const SearchContainer = styled.View`
  padding : 16px;
`;

const RestaurantListContainer = styled.View`
  flex : 1;
  padding : 16px;
  background-color : blue;
`;


export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
}


const styles = StyleSheet.create({


});
