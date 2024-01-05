import Description from "../components/detailproduct/Description";
import Imagelist from "../components/detailproduct/Imagelist";
import Review from "../components/detailproduct/Review";
import Navbar from "../components/homepage/Navbar";

export default function Detailproductpage() {
  console.log(window.scrollY);
  return (
    <div className="w-full min-h-screen pb-5">
      <Navbar />
      <div className="w-11/12 mx-auto">
        <div className="w-full mx-auto gap-1 justify-between flex mt-[100px]">
          <div className="w-[40%] relative">
            <Imagelist />
          </div>
          <div className="  w-[60%]">
            <Description />
          </div>
        </div>
        <div className="">
          <Review />
        </div>
      </div>
    </div>
  );
}
