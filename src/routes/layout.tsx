import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import { ScrollToTop } from "~/components/scroll-to-top";
import WhatsappButton from "~/components/WhatsappButton/WhatsappButton";

export default component$(() => {
  return (
    <>
      <Header />
      <Slot />
      <ScrollToTop />
      <WhatsappButton />
      <Footer />
    </>
  );
});