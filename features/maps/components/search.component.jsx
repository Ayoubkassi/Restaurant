import React , { useContext , useState , useEffect  } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../../../services/location/location.context';

const SearchContainer = styled.View`
  padding : ${(props) => props.theme.space[3]};
  position : absolute;
  z-index : 999;
  top : 40px;
  width : 100%;
`;


export const Search = () => {
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
        placeholder = "Search for a location"
        icon = "map"
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
