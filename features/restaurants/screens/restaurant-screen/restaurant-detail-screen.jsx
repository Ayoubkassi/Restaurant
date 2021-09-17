import React , { useState , useContext} from 'react';
import { RestaurantInfoCard } from '../../components/restaurant-info/restaurant-info-card.component';
import { SafeArea } from '../../../../components/safe-area/safe-area.component';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { OrderButton } from '../../components/restaurant-list.styles';
import { CartContext } from '../../../services/cart/cart.context';

export const RestaurantDetailScreen = ({ route }) => {
    const [breakfastExpanded , setBreakfastExpanded] = useState(false);
    const [lunchExpanded , setLunchExpanded] = useState(false);
    const [dinnerExpanded , setDinnerExpanded] = useState(false);
    const [drinksExpanded , setDrinksExpanded] = useState(false);

    const { restaurant } = route.params;
    const { cart , addToCart } = useContext(CartContext);

    <SafeArea>
     <ScrollView>
      <RestaurantInfoCard restaurant={restaurant} />
      <List.Accordion
        title = "Breakfast"
        left={(props) => <List.Icon {...props} icon = "bread-slice" />}
        expanded={breakfastExpanded}
        onPress={()=> setBreakfastExpanded(!breakfastExpanded)}>

        <List.Item  title="Bed blkhli3"/>
        <List.Item  title="chfenj m3a Atay"/>
      </List.Accordion>

      <List.Accordion
        title = "Lunch"
        left={(props) => <List.Icon {...props} icon = "hamburger" />}
        expanded={breakfastExpanded}
        onPress={()=> setLunchExpanded(!lunchExpanded)}>
        <List.Item  title="Rfissa"/>
        <List.Item  title="Couscous"/>
      </List.Accordion>

      <List.Accordion
        title = "Dinner"
        left={(props) => <List.Icon {...props} icon = "food-variant" />}
        expanded={breakfastExpanded}
        onPress={()=> setDinnerExpanded(!dinnerExpanded)}>
        <List.Item  title="7rira w mo9abilat"/>
        <List.Item  title="Pizza"/>
        <List.Item title="l7ima dial nufi" />
      </List.Accordion>

      <List.Accordion
        title = "Drinks"
        left={(props) => <List.Icon {...props} icon = "cup" />}
        expanded={breakfastExpanded}
        onPress={()=> setDrinksExpanded(!drinksExpanded)}>
        <List.Item  title="Jiby dial Nufi"/>
        <List.Item  title="Abtal dial doudou"/>
      </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
        mode="contained"
        icon="cash-usd"
        onPress={()=> {
          addToCart({item : "special", price : 1299 })
        }}
        >
          ORDER ONLY SPECIAL 12.99!
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
