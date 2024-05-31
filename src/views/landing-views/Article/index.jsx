import Footer from "../../../components/layout-components/Footer";
import Header from "../../../components/layout-components/Header";
import BackNav from "./components/BackNav";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Article from "./components/Article";

export default function Contact() {
    return (
        <>
            <Header />
            <BackNav />
            <Hero />
            <SearchBar />
            <Article />
            <Footer />
        </>
    )
}