/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import "./index.css";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Product } from "./pages/product";
import { App } from "./app/App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/product/:id" component={Product} />
    </Router>
  ),
  root!
);
