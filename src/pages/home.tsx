import { createResource, For, Show } from "solid-js";
import Card from "../components/Card";
import { A } from "@solidjs/router";
import { IProduct } from "./types";

export const Home = () => {
  const fetchData = async (): Promise<IProduct[]> => {
    const response = await fetch("http://localhost:4000/products");
    return response.json();
  };
  const [products] = createResource(fetchData);
  return (
    <Show when={products()} fallback={<p>Loading ...</p>}>
      <div class="grid grid-cols-4 gap-10 my-4">
        <For each={products()}>
          {(product) => {
            return (
              <Card rounded={true} flat={false}>
                <img src={product.img} alt={product.title} />
                <h2>{product.title} black</h2>
                <A class="btn" href={`/product/${product.id}`}>View</A>
              </Card>
            );
          }}
        </For>
      </div>
    </Show>
  );
};
