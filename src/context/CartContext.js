import { createContext, useReducer, useContext } from "react";

// Redux Pattern: Create context to avoid prop drilling
const CartContext = createContext();

// Initial state for Redux reducer
const initialState = {
  cartItems: []
};

// Redux Reducer: Handles state updates based on action type
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };

    case "REMOVE":
      return {
        ...state,
        cartItems: state.cartItems.filter((_, i) => i !== action.payload)
      };

    case "CLEAR":
      return {
        ...state,
        cartItems: []
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  // useReducer: Redux-like state management in React
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook: Returns context value (state & dispatch) for easy access
export function useCart() {
  return useContext(CartContext);
}