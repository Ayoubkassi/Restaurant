import React  , {useState , useEffect , useContext} from 'react';
import { View , Text } from 'react-native';
import { SafeArea } from '../../../../components/safe-area/safe-area.component';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import { Search } from '../../components/search.component';

export const Map = styled(MapView)`
  height : 100%;
  width : 100%;
`;


export const MapScreen = () => {
  return (
    <>
        <Search />
        <Map />
    </>
  );
}
