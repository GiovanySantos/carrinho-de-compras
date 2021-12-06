import React, { createContext, useReducer, useState } from "react";

export const ProductsContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case "remove": {
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.product !== action.payload.product
        ),
      };
    }
    case "cleanup": {
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return state;
  }
};

const initialState = { cart: [] };

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, state, dispatch }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
