import { mocks } from './mock/index';
import camelize from 'camelize';

export const restaurantRequest = (location = "51.219448,4.402464") => {
  return new Promise((resolve , reject) => {
    const mock = mocks[location];
    if (!mock){
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow : restaurant.opening_hours && restaurant.opening_hours.open_now;

    };
  })

  return camelize(mappedResults);
}

/*restaurantRequest().then(restaurantTransform)
                   .then(transformedResponse => {
                     console.log(transformedResponse);
                   })
                   .catch((err) => {
                  console.log(err)
});*/
