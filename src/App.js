import Articles from "./components/Articles";
import BottomLinks from "./components/BottomLinks";
import Brands from "./components/Brands";
import Cards from "./components/Cards";
import Consumers from "./components/Consumers";
import CustomerNetwork from "./components/CustomerNetwork";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import OptimizedPayment from "./components/OptimizedPayment";
import Plateform from "./components/Plateform";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="text-themeBlack">
      <Navbar />
      <Herosection />
      <Consumers />
      <Features />
      <Plateform />
      <CustomerNetwork />
      <OptimizedPayment />
      <Brands />
      <Testimonial />
      <Articles />
      <Cards />
      <BottomLinks />
      <Footer />
      {/* <div className="h-screen w-full"></div> */}
    </div>
  );
}

export default App;
