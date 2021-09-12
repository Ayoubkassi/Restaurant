import React , { useState , useContext ,createContext , useEffect , useMemo } from 'react';
import { restaurantRequest , restaurantTransform } from './restaurant.service';
import { LocationContext } from '../location/location.context';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {

  const [restaurants,setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error , setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(()=>{
      restaurantRequest(loc).then(restaurantTransform).then((results)=> {
        setIsLoading(false);
        setRestaurants(results);
      }).catch(err => {
        setIsLoading(false);
        setError(err);
      })
    }, 2000)
  };

  useEffect(()=> {
    if(location){
    const locationString = `${location.lat},${location.lng}`;
    retrieveRestaurants(locationString);
  }
},[location]);

  return (
    <RestaurantsContext.Provider value={{
      restaurants,
      isLoading,
      error
    }}>
      {children}
    </RestaurantsContext.Provider>

  )
}
