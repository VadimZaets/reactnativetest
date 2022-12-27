import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
    totalPrice: 0,
    itemsQuntity: 0,
  },
  reducers: {
    getTotalPrise: (state, { payload }) => {
      state.totalPrice = payload;
    },
    setItemsInCart: (state, action) => {
      state.itemsQuntity += 1;
      const item = state.itemsInCart.find(
        (item) => item.id === action.payload.id
      );
      if (!item) {
        state.itemsInCart.push({
          ...action.payload,
          quntity: 1,
          totalItemPrice: action.payload.price,
        });
      } else {
        const items = state.itemsInCart.map((cart) => {
          if (cart.id === item.id) {
            return {
              ...cart,
              quntity: cart.quntity + 1,
              totalItemPrice: cart.price * (cart.quntity + 1),
            };
          } else {
            return cart;
          }
        });
        state.itemsInCart = items;
      }
    },
    removeItem: (state, action) => {
      state.itemsQuntity -= 1;
      const carts = state.itemsInCart.find(
        (item) => item.id === action.payload
      );

      if (carts) {
        const items = state.itemsInCart.map((cart) => {
          if (cart.id === carts.id) {
            return {
              ...cart,
              quntity: cart.quntity ? cart.quntity - 1 : 0,
              totalItemPrice: cart.quntity
                ? cart.price * (cart.quntity - 1)
                : 0,
            };
          } else {
            return cart;
          }
        });
        state.itemsInCart = items;
      }
    },
    deleteItemsFromCart: (state, action) => {
      const items = state.itemsInCart.find(
        (products) => products.id === action.payload.id
      );

      state.itemsQuntity =
        state.itemsQuntity - (items?.quntity ? items?.quntity : 0);

      state.itemsInCart = state.itemsInCart.filter(
        (products) => products.id !== action.payload.id
      );
    },
    clearCart: (state, action) => {
      state.itemsInCart = [];
      state.itemsQuntity = 0;
    },
  },
});

export const {
  setItemsInCart,
  deleteItemsFromCart,
  removeItem,
  clearCart,
  getTotalPrise,
} = cartSlice.actions;
export default cartSlice.reducer;
