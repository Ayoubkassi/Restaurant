import { mocks } from './mock/index';
import camelize from 'camelize';

const restaurantRequest = (location = "51.219448,4.402464") => {
  return new Promise((resolve , reject) => {
    const mock = mocks[location];
    if (!mock){
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantTransform = (result) => {
  return camelize(result);
}

restaurantRequest().then(restaurantTransform)
                   .then(transformedResponse => {
                     console.log(transformedResponse);
                   })
                   .catch((err) => {
                  console.log(err)
});
