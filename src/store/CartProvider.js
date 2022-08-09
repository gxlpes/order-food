import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    let updatedItems;

    const existingCartItemIndex = state.items.findIndex(
      // finding/checking if there is a existing item in state.items context
      (item) => item.id === action.itemCart.id // item.id is the item in the context array and action.item.id is the item being sent
    );

    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      // if is part of the array already in the cartContext
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.itemCart.amount, // existingCartItem is the "old" item and action.item.amount is the new item being added to the array, summing the amount of the item
      };
      updatedItems = [...state.items]; // copy of the state.items
      updatedItems[existingCartItemIndex] = updatedItem; // catch the old item and update it with their new amount
    } else {
      // if the item is being added in a first time inside of the array of objects
      updatedItems = state.items.concat(action.itemCart);
    }

    const updatedTotalAmount =
      state.totalAmount + action.itemCart.price * action.itemCart.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.idCart
    );

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      //check if is the last item
      updatedItems = state.items.filter((item) => item.id !== action.idCart); // maintain other items that are not being removed
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }; // updated the amount of the item in the cart
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem; // overwritting the old item with a new item with a new amount
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", itemCart: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", idCart: id });
  };

  const cartContext = {
    // it's going to be updated by reducer
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  // this component is going to provide all Context to all components
  return (
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
