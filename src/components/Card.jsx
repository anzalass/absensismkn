import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Card() {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav("/detail/abc")}
      className="w-[200px] hover:border-[2px] bg-[#fff] mt-5 shadow-md hover:shadow-lg rounded-lg"
    >
      <div className="w-full mx-auto">
        <div className="w-full mx-auto p-1">
          <img
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
            className="w-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full p-2 -mt-1 mb-3">
          <p className="text-sm">
            Lorem, ipsum dolor sit amet lorem ipsum consectetur...
          </p>
          <h1 className="font-Poppins mt-2 font-[600]">Rp89.000</h1>
          <div className="flex">
            <p className="text-xs text-gray-500 line-through">Rp100.000</p>
            <p className="text-red-500 text-[11px] rounded-sm font-[600] ml-2">
              35%
            </p>
          </div>
          <div className="relative mt-2 flex">
            <FaStar size={14} color="gold" />{" "}
            <p className="text-xs ml-1 text-gray-400">4.9/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
