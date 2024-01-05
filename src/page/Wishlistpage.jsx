import Card from "../components/Card";
import Navbar from "../components/homepage/Navbar";

export default function Wishlistpage() {
  return (
    <div>
      <Navbar />
      <div className="w-full">
        <div className="w-11/12 mt-[100px] mx-auto">
          <h1 className="text-center font-Poppins text-xl">Your Wishlist</h1>
          <div className="grid grid-cols-6 gap-1">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
