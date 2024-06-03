import Footer from "../../../components/layout-components/Footer";
import Header from "../../../components/layout-components/Header";
import BackNav from "./components/BackNav";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";

export default function Article() {
    return (
        <>
            <Header />
            <BackNav />
            <Hero />
            <SearchBar />
            <ArticleList />
            <Footer />
        </>
    )
}