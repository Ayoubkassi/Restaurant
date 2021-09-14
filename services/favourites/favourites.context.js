import React , { createContext , useState , useEffect , useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/authentication.context';
export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites , setFavourites] = useState([]);
  const { user } = useContext( AuthenticationContext );

  const storeFavourites = async (favourite, uid) => {
    try{
      const jsonValue = JSON.stringify(favourite);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    }catch(e){
      console.log("error storing", e);
    }
  };

  const loadFavourites = async (uid) => {
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
    if(user){
      storeFavourites(favourites, user.id);
    }
  },[favourites, user]);

  useEffect(()=> {
    if(user){
      loadFavourites(user.uid);
    }
  },[user]);

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
