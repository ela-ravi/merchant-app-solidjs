import { Component, createSignal } from "solid-js";
import banner from "../assets/banner.png";
import { A, RouteSectionProps } from "@solidjs/router";
import { useCartContext } from "../context/cartContext";

const AppTemplate: Component<RouteSectionProps> = (props) => {
  const [darkTheme, setDarkTheme] = createSignal(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme());
  };
  const { items } = useCartContext();
  const quantity = () => {
    return items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  };
  return (
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4 rounded-md"
        classList={{
          "bg-neutral-900": darkTheme(),
          "text-white": darkTheme(),
        }}
      >
        <button
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}
        >
          light_mode
        </button>
        <h1>Ninja Merch</h1>
        <A href="/">Home</A>
        <A href="/cart">Cart ({quantity()})</A>
      </header>

      <img class="rounded-md" src={banner} alt="site banner" />
      {props.children}
    </div>
  );
};

export default AppTemplate;
