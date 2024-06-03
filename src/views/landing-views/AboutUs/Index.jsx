import Header from "../../../components/layout-components/Header";
import Footer from "../../../components/layout-components/Footer";
import Tagline from "./Components/Tagline";
import Hero from "./Components/Hero";
import VisiMisi from "./Components/VisiMisi";
import HowWeWork from "./Components/HowWeWork";
import Team from "./Components/Team";

export const AboutUs = () => {
  return (
    <>
      <section>
        <Header />
        <Tagline />
        <Hero />
        <VisiMisi />
        <HowWeWork />
        <Team />
        <Footer />
      </section>
    </>
  );
};

export default AboutUs;
