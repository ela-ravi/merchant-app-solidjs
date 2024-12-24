import { RouteSectionProps } from "@solidjs/router";
import { CartContextProvider } from "../context/cartContext";
import AppTemplate from "./AppTemplate";
import { Component } from "solid-js";

export const App: Component<RouteSectionProps> = (props) => {
  return (
    <CartContextProvider>
      <AppTemplate {...props} />
    </CartContextProvider>
  );
};
