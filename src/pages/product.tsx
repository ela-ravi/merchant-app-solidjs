import { useParams } from "@solidjs/router";
import { createResource, Show } from "solid-js";
import { ICartProduct, IProduct } from "./types";
import { useCartContext } from "../context/cartContext";

export const Product = () => {
  const params = useParams();
  const fetchData = async (productId: string): Promise<IProduct> => {
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    return response.json();
  };
  const [product] = createResource(params.id, fetchData);
  const { items, setItems } = useCartContext();
  const addProductToCart = () => {
    if (!product.loading && !product.error) {
      const cartIndex = items.findIndex((item) => item.id === product()?.id);
      if (cartIndex >= 0) setItems(cartIndex, "quantity", (q) => q + 1);
      else {
        const x: ICartProduct = { ...(product() as IProduct), quantity: 1 };
        setItems([...items, x]);
      }
    }
  };
  return (
    <Show when={product()} fallback={<p>Loading ...</p>}>
      <div class="grid grid-cols-5 gap-7 my-7">
        <div class="col-span-2">
          <img src={product()?.img} alt={product()?.title} />
        </div>
        <div class="col-span-3">
          <h1 class="text-3xl font-bold mb-7">{product()?.title}</h1>
          <p>{product()?.description}</p>
          <p class="my-7 text-2xl">Only $ {product()?.price}</p>
          <button class="btn" onClick={addProductToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </Show>
  );
};
