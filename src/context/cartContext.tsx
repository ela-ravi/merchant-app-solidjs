import { Context, createContext, createMemo, JSX, useContext } from "solid-js";
import { createStore, type Store, type SetStoreFunction } from "solid-js/store";
import { ICartProduct, ICartContext } from "../pages/types";

const initialCartContextValue = {
  items: [] as unknown as Store<ICartProduct[]>,
  setItems: (() => {}) as unknown as SetStoreFunction<ICartProduct[]>,
};
const CartContext: Context<ICartContext> = createContext(
  initialCartContextValue
);

export const CartContextProvider = (props: { children: JSX.Element }) => {
  const [items, setItems] = createStore<ICartProduct[] | []>([]);
  const value = createMemo(() => ({
    items,
    setItems,
  }));
  return (
    <CartContext.Provider value={value()}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
