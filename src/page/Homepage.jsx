import Footer from "../components/Footer";
import Filterlist from "../components/homepage/Filterlist";
import Navbar from "../components/homepage/Navbar";
import Productlist from "../components/homepage/Productlist";

export default function Homepage() {
  return (
    <div className="w-full bg-[#f8f8f8]">
      <Navbar />
      <div className="w-full -mt-10 h-[200vh] ">
        <Filterlist />
        <Productlist />
      </div>
      <Footer />
    </div>
  );
}
