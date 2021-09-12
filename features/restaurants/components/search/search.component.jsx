import React , { useContext , useState , useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../../../services/location/location.context';

const SearchContainer = styled.View`
  padding : ${(props) => props.theme.space[3]};
`;


export const Search = () => {
  const { keyword } = useContext(LocationContext);
  const [searchKeyword , setSearchKeyword] = useState(keyword);

  useEffect(()=> {
    search(searchKeyword);
  },[])

  return(
    <SearchContainer>
      <Searchbar
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
