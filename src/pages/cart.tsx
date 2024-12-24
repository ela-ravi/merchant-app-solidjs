import { For } from "solid-js";
import Card from "../components/Card";
import { useCartContext } from "../context/cartContext";

export const Cart = () => {
  const { items } = useCartContext();
  let totalCost = 0;
  return (
    <div class="my-4">
      <Card rounded={true} flat={false}>
        <h2 class="font-bold text-4xl my-10">Your Cart Items</h2>
        <For each={items}>
          {(item) => {
            const cost = item.quantity * item.price;
            totalCost += cost;
            return (
              <p class="my-3">{`${item.title} - ${item.quantity} x ${item.price} = ${cost}`}</p>
            );
          }}
        </For>
        <p class="border-t-2 pt-4 font-bold text-2xl my-7">Total Cost: {totalCost} </p>
      </Card>
    </div>
  );
};
