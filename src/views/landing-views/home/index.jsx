import Footer from "../../../components/layout-components/Footer";
import Header from "../../../components/layout-components/Header";
import AboutUs from "./components/AboutUs";
import Article from "./components/Article";
import Hero from "./components/Hero";
import OurProgram from "./components/OurProgram";
import Testimonial from "./components/Testimonial";

export default function Home() {
    return (
        <>
            {/* <Header /> */}
            {/* <Hero /> */}
            <AboutUs />
            <OurProgram />
            <Testimonial />
            <Article />
            <Footer />
        </>
    )
}
