import React from 'react';
import { Text , View , SafeAreaView , StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../../components/restaurant-info/restaurant-info-card.component';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Spacer } from '../../../../components/spacer/spacer.component';
import { SafeArea } from '../../../../components/safe-area/safe-area.component';
import { useContext } from 'react';
import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context';
import { ActivityIndicator , Colors } from 'react-native-paper';
import { Search } from '../../components/search/search.component';


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

const LoadingContainer = styled.View`
  position : absolute;
  top : 50%;
  left : 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left : -25px;
`;


export const RestaurantsScreen = () => {
  const { restaurants, isLoading , error } = useContext(RestaurantsContext);


  return (
    <SafeArea>
    {
      isLoading && (
        <LoadingContainer>
          <Loading
            size={50}
            animating = {true}
            color = {Colors.blue300}
          />
        </LoadingContainer>
      )
    }
      <Search />
      <RestaurantList
        data= { restaurants }
        renderItem = {({ item }) => {

                  return(
                        <Spacer position="bottom" size="large">
                          <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                      );
                      }}
        keyExtractor = {(item) => item.name }
      />

    </SafeArea>
  );
}


const styles = StyleSheet.create({


});
