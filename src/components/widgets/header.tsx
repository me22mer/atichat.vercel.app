import { $, component$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ToggleTheme from "../common/ToggleTheme";
import IconClose from "../icons/IconClose";
import IconMenu from "../icons/IconMenu";

export default component$(() => {
  const store = useStore({ isCollapse: false });
  const toggleMenu = $(() => (store.isCollapse = !store.isCollapse));

  return (
    <header class="w-full py-8 flex justify-center dark:bg-slate-800  dark:text-white transition-all duration-300">
      <nav class="w-[85%] h-[5rem] fixed z-50 border rounded-xl shadow-sm backdrop-blur-lg dark:border-slate-600 dark:bg-slate-800  ">
        <div class="max-md:grid-cols-2 h-full px-10 grid grid-cols-3 items-center">
          <div class="max-md:hidden text-start text-xl font-semibold space-x-12">
            <Link href="/" type="button">
              Works
            </Link>
            <Link href="/blog/">Blog</Link>
          </div>
          <div class="max-md:text-start text-center text-2xl font-bold">
            <Link href="/">Y3sterd4y</Link>
          </div>
          <div class="text-end space-x-4">
            <ToggleTheme Iconclass="toggle-nav" />
            <button onClick$={toggleMenu} class="toggle-nav md:hidden">
              <span>{!store.isCollapse ? <IconMenu /> : <IconClose />}</span>
            </button>
          </div>
        </div>
      </nav>
      {store.isCollapse ? (
        <nav class="md:hidden fixed w-[85%] h-max flex justify-end inset-y-36">
          <span class="w-max px-10 py-7 space-y-6 flex flex-col text-start text-lg bg-white border rounded-lg shadow-lg">
            <Link href="/portofilio" class=" hover:underline hover:underline-offset-4">
              Works
            </Link>
            <Link href="/works" class=" hover:underline hover:underline-offset-4">
              Blog
            </Link>
          </span>
        </nav>
      ) : null}
    </header>
  );
});
