import {  component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {


  return (
    <section class="w-full pt-[4.5rem] overflow-hidden flex justify-center dark:text-white dark:bg-slate-800 transition-all duration-300">
      <div class="w-[85%] h-full max-lg:flex-wrap flex justify-between gap-3">
        <div class="h-max w-full p-10 flex flex-col border rounded-xl shadow-sm  dark:border-slate-600">
          <article class="w-full flex flex-col items-center">
           
            <div class="w-[85%] flex flex-col ">
              <span class=" py-4 my-7 text-center text-lg font-semibold border rounded-xl dark:border-slate-600">
                <p>HI, I'm a web developer from Thailand.</p>
              </span>
              <span class="">
                <h1 class="mb-4 text-2xl font-bold text-start">
                  Atichat Thongnak
                </h1>
                <p class="indent-8  text-lg font-medium leading-relaxed">
                  Atichat is a student || Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Facere omnis unde, sit, harum,
                  doloremque incidunt molestiae in id accusantium reiciendis
                  debitis eaque eos qui neque quae eveniet. Nemo, pariatur
                  tempore.
                </p>
              </span>
            </div>
          </article>
        </div>
        <div class="h-full w-full max-lg:flex-warp flex flex-col gap-3">
          <div class="h-full border rounded-xl shadow-sm dark:border-slate-600"></div>
          <div class="h-full border rounded-xl shadow-sm dark:border-slate-600"></div>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
