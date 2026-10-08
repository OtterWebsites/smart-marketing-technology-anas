import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Solutions from "./components/Solutions";
import SuccessStories from "./components/SuccessStories";
import ClientFeedback from "./components/ClientFeedback";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div id="content">
        <Hero />
        <Vision />
        <Solutions />
        <SuccessStories />
        <ClientFeedback />
        <WhyChooseUs />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
