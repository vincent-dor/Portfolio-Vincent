import Header from "../src/components/Header/index";
import Home from "../src/components/Home/index";
import Projects from "../src/components/Projects/index";
import Skills from "../src/components/Skills/index";
import Contact from "../src/components/Contact/index";
import Footer from "../src/components/Footer/index";
import ScrollToTop from "./components/ScrollUp/index";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
