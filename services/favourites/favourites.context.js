import React , { createContext , useState , useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites , setFavourites] = useState([]);

  const storeFavourites = async (favourite) => {
    try{
      const jsonValue = JSON.stringify(favourite);
      await AsyncStorage.setItem("favourites", jsonValue);
    }catch(e){
      console.log("error storing", e);
    }
  };

  const loadFavourites = async () => {
    try{
      const value = await AsyncStorage.getItem("@favourites");
      if(value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e){
      console.log("error loading", e);
    }
  }

  const add = (restaurant) => {
    setFavourites([...favourites,restaurant]);
  }

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  }

  useEffect(()=> {
      storeFavourites(favourites);
  },[favourites]);

  useEffect(()=> {
      loadFavourites();
  },[]);

  return(
    <FavouritesContext.Provider
      value = {{ favourites
            addToFavourites : add,
            removeFromFavourites : remove
       }}
    >
      { children }
    </FavouritesContext.Provider>

  );
}
