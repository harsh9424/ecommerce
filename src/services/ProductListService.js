import * as api from './BaseApiService';

export const getProducts = () => {
  return new Promise(resolve => {
    const payload = {
      restUrl: 'products'
    };
    api.get(payload).then(resp => resolve(resp));
  });
};

export const getProductByProductId = productId => {
  return new Promise(resolve => {
    const payload = {
      restUrl: `product/${productId}`
    };
    api.get(payload).then(resp => resolve(resp));
  });
};
