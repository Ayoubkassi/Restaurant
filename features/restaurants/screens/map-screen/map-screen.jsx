import React  , {useState , useEffect , useContext} from 'react';
import { View , Text } from 'react-native';
import { SafeArea } from '../../../../components/safe-area/safe-area.component';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';


export const MapContainer = styled(MapView)`
  height : 00%;
`;


export const MapScreen = () => {
  return (

        <MapContainer />

  );
}
