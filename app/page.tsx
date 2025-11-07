import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}
