import NavBar from "./NavBar";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

function MainScreen(props) {
  return (
    <div>
      <NavBar {...props}></NavBar>
      <Hero></Hero>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
}

export default MainScreen;
