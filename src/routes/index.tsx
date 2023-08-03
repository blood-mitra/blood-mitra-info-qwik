import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="h-screen flex items-center justify-center">
      <h1 class="text-5xl">Coming soon!</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Blood Mitra",
  meta: [
    {
      name: "description",
      content: "Landing page of Blood Mitra",
    },
  ],
};
