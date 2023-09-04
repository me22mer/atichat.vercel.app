import { $, component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import IconMoon from "../icons/IconMoon";
import IconSun from "../icons/IconSun";

interface ItemProps {
  Iconclass?: string;
}

export default component$((props: ItemProps) => {
  const { Iconclass } = props;
  const store = useStore({
    theme:
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      (typeof window !== "undefined" && window?.localStorage?.theme) ||
      undefined,
  });

  useVisibleTask$(() => {
    store.theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });

  const toggleTheme = $(() => {
    if (store.theme === "dark") {
      document.documentElement.classList.remove("dark");
      store.theme = window.localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      store.theme = window.localStorage.theme = "dark";
    }
  });

  return (
    <button type="button" onClick$={toggleTheme} class={Iconclass}>
      <span>{store.theme == "dark" ? <IconSun /> : <IconMoon />}</span>
    </button>
  );
});
