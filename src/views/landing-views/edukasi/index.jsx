import Footer from "../../../components/layout-components/Footer";
import Header from "../../../components/layout-components/Header";
import Heroedukasi from "./components/Heroedukasi";
import Ourefforts from "./components/Oureffots";
import Startlittle from "./components/Startlittle";

export default function Edukasi() {
  return (
    <>
      <Header></Header>
      <Heroedukasi></Heroedukasi>
      <Ourefforts></Ourefforts>
      <Startlittle></Startlittle>
      <Footer></Footer>
    </>
  );
}
