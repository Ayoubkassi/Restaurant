import React , { useState , createContext , useEffect , useMemo } from 'react';
import { restaurantRequest , restaurantTransform } from './restaurant.service';


export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  return (
    <RestaurantsContext.Provider value={{ restaurants : [1,2,3]}}>
      {children}
    </RestaurantsContext.Provider>

  )
}
