import { JSX } from "solid-js/jsx-runtime";

export default function Card({
  rounded,
  flat,
  children,
}: {
  rounded: boolean;
  flat: boolean;
  children: JSX.Element;
}) {
  return (
    <div
      class="bg-white p-4 text-center"
      classList={{ "rounded-md": rounded, "shadow-md": !flat }}
    >
      {children}
    </div>
  );
}
