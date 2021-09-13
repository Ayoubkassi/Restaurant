import React , { useContext , useState  } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../../../services/location/location.context';

const SearchContainer = styled.View`
  padding : ${(props) => props.theme.space[3]};
`;


export const Search = ({ isFavouritesToggled , onFavouritesToggle }) => {
  const { keyword } = useContext(LocationContext);
  const [searchKeyword , setSearchKeyword] = useState(keyword);

  // useEffect(()=> {
  //   search(searchKeyword);
  // },[])

  useEffect(()=> {
    setSearchKeyword(keyword);
  },[keyword]);

  return(
    <SearchContainer>
      <Searchbar
        icon={ isFavouritesToggled ? "heart" : "heart-outline" }
        onIconPress={ onFavouritesToggle }
        placeholder = "Search for a location"
        value={searchKeyword}
        onSubmitEddiing= {() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
}
