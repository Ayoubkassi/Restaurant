import React , { createContext , useState} from 'react';


export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites , setFavourites] = useState([]);

  const add = (restaurant) => {
    setFavourites([...favourites,restaurant]);
  }

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  }

  return(
    <FavouritesContext.Provider
      value = {{ favourites
            addFavourites : add,
            removeFavourites : remove
       }}
    >
      { children }
    </FavouritesContext.Provider>

  );
}
