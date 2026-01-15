// Product.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncgetProdcut } from './appStore/actions/ProductActions';

const Product = () => {
  const dispatch = useDispatch();  
  const products = useSelector((state) => state.product.items);

  useEffect(() => {
    dispatch(asyncgetProdcut());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-around p-5">
      {products.map((product) => (
        <div className="border border-gray-300 h-64 rounded-lg p-4 m-2 w-72 shadow-md hover:shadow-lg transition-shadow duration-200" key={product.id}>
          <h2 className="text-lg font-bold mb-2">{product.title}</h2>
          <p className="text-sm text-gray-600 mb-2">{product.description}</p>
          <p className="text-xl text-green-600 mb-2">${product.price.toFixed(2)}</p>
          <p className="text-xs text-gray-500">{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
