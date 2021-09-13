import React  , {useState , useEffect , useContext} from 'react';
import { View , Text } from 'react-native';
import { SafeArea } from '../../../../components/safe-area/safe-area.component';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import { Search } from '../../components/search.component';

import { LocationContext } from '../../../../services/loaction/location.context';
import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context';

export const Map = styled(MapView)`
  height : 100%;
  width : 100%;
`;


export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [ latDelta , setLatDelta] = useState(0);
  const { viewport , lat , lng } = location;

  useEffect(()=> {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const latDelta = northeastLat è southwestLat;
    setLatDelta(latDelta);
  },[location , viewport]);
  return (
    <>
        <Search />
        <Map
          region = {{
            latitude : lat,
            longitude : lng,
            latitudeDelta : latDelta,
            longitudeDelta : 0.02,
          }}
        >
          { restaurants.map((restaurant)=> {
            return <MapView.Marker
                    coordinate = {{
                      longitude : ,
                      latitude :
                    }}
                  >

                  </MapView.Marker>;
          }) }
        </Map>
    </>
  );
}
