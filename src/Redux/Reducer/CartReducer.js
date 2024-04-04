// cart reducer

export const addToCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyproductexist = state.cartItems.find(
        (item) => item?.id === action.payload?.id
      );
      if (alreadyproductexist) {
        return {
          ...state,
          cartItems: state.cartItems?.map(
            (item) => (item?.id === action?.payload?.id ? action.payload : item)
            // item?.id === action.payload?.id ? { ...alreadyproductexist, qty: alreadyproductexist.qty  } : item double click qty add
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }



    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};

export const addToServiceCartReducer = (state = { cartItemService: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART_SERVICE":
      const alreadyproductexist = state.cartItemService?.find(
        (item) => item?.id === action.payload?.id
      );
      if (alreadyproductexist) {
        return {
          ...state,
          cartItemService: state.cartItemService?.map(
            (item) => (item?.id === action?.payload?.id ? action.payload : item)
            // item?.id === action.payload?.id ? { ...alreadyproductexist, qty: alreadyproductexist.qty  } : item double click qty add
          ),
        };
      } else {
        return {
          ...state,
          cartItemService: [...state.cartItemService, action.payload],
        };
      }



    case "DELETE_FROM_CART_SERVICE":
      return {
        ...state,
        cartItemService: state.cartItemService.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};

