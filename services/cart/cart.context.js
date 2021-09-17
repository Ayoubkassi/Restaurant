import React , { useEffect , useState , useContext , createContext } from 'react' ;
import { AuthenticationContext } from '../authentication/authentication.context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();


export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [ cart , setCart ] = useState([]);
  const [restaurant, setRestaurant] = useState(null);


  const add = (item , rst) => {
    if(!restaurant || restaurant.placeId !== rst.placeId){
      setRestaurant(rst);
      setCart([item]);
    }

    setCart([...cart,item]);
  };



  const clear = () => {
    setCart([]);
    setRestaurant(null);
  }
  return (
    <CartContext.Provider
    values={{
      addToCart : add,
      clearCart : clear,
      restaurant,
      cart,
    }}
    >
      { children }
    </CartContext.Provider>
  );
};
