import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="container">
      <h1 class="text-5xl text-left mb-4">Account Removal</h1>
      <p class="text-base">
        You can remove your account from the app by clicking on your profile
        button on the top of the app and clicking on the{" "}
        <span class="text-red-500">Delete Account</span> button.
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Account Removal Request | Blood Mitra",
  meta: [
    {
      name: "description",
      content: "Instructions to remove account in Blood Mitra App",
    },
  ],
};
