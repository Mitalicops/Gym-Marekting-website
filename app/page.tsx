import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import OurMessage from "./components/our_message/ourMessage";
import Services from "./components/Services/Services";
import Brands from "./components/Brands/Brands";
import Resources from "./components/Resources/Resources";
import Plan from "./components/Plan/Plan";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <About />
      <OurMessage />
      <Services />
      <Brands />
      <Resources />
      <Plan />
      <Footer />
    </>
  );
}
