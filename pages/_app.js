import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />

      <div className="h-[72px] xl:h-[80px]" />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
      <Toaster />
    </>
  );
}
