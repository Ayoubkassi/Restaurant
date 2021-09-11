import React from 'react';
import { Text , View , SafeAreaView , StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../../components/restaurant-info/restaurant-info-card.component';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Spacer } from '../../../../components/spacer/spacer.component';


const SafeArea = styled(SafeAreaView)`
  flex : 1;
  ${StatusBar.currentHeight && `margin-top : ${StatusBar.currentHeight}px`};

`;

const SearchContainer = styled.View`
  padding : ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentConatinerStyle : {
    padding : 16,
  },
})``;


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
