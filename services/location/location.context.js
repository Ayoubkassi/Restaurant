import React , { useState , createContext , useEffect} from 'react';

import { locationRequest , locationTransform } from './location-service';


export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {

  const [isLoading , setIsLoading] = useState(false);
  const [error , setError] = useState(null);
  const [loaction , setLocation] = useState(null);
  const [keyword , setKeyword] = useState("san francisco");

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(()=>{
    if(!keyword.length){
      //do nothing
      return;
    }
    locationRequest(keyword.toLowerCase()).then(locationTransform)
    .then(result => {
      setIsLoading(false);
      setLocation(result);
    }).catch(err => {
      setIsLoading(false);
      setError(err);
    })

  },[keyword]);

  useEffect(()=> {
    onSearch(keyword);
  },[keyword]);

  return (
    <LocationContext.Provider
      value = {{
        isLoading,
        error,
        location,
        search : onSearch,
        keyword,
      }}
    >
      { children }
    </LocationContext.Provider>
  )
}
