import { mocks } from './mock/index';

const restaurantRequest = (location = "51.219448,4.402464") => {
  return new Promise((resolve , reject) => {
    const mock = mocks[location];
    if (!mock){
      reject("not found");
    }
    resolve(mock);
  });
};

restaurantRequest.then((result) => {
  console.log(reslut);
}).catch((err) => {
  console.log(err)
});
