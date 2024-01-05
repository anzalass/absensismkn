import { FaUserAlt } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="w-full mx-auto bg-[#fff] z-40 h-[80px] shadow-lg fixed top-0">
      <div className="w-[100%] justify-between mx-auto flex h-full my-auto p-3 bg-[#fff]">
        <div className="w-[20%] h-full my-auto pt-2 ">
          <Link to={"/"}>
            <h1 className="font-Poppins font-[600] text-center text-xl">
              Toko Senjata Api.
            </h1>
          </Link>
        </div>
        <div className="w-[55%]">
          <div className="w-full pt-1 relative">
            <input
              type="text"
              className="w-full border-zinc-100 border-[2px] h-[40px] rounded-lg placeholder:font-thin pl-10"
              placeholder="Ini Buat Nyari"
            />
            <FiSearch className="absolute top-4 left-3" color="grey" />
          </div>
        </div>
        <div className="w-[20%] justify-center flex mx-auto gap-2 ">
          <Link to={"/keranjang"}>
            <div className="font-Poppins pt-2 relative ">
              <PiShoppingCartBold className=" mr-3" size={25} />
              <div className="absolute bg-red-500 rounded-full w-[20px] h-[20px] text-center text-sm text-white top-0 right-1">
                9
              </div>
            </div>
          </Link>
          <Link to={"/wish"}>
            <div className="font-Poppins pt-2 relative ">
              <IoMdHeartEmpty className=" mr-3" size={25} />
              <div className="absolute bg-red-500 rounded-full w-[20px] h-[20px] text-center text-sm text-white top-0 right-1">
                3
              </div>
            </div>
          </Link>
          <div className="font-Poppins pt-1 text-sm ">
            <Link to={"/register"}>
              <button className="p-2 flex rounded-lg border-[1px] border-zinc-200">
                <FaUserAlt className=" mr-1 mt-[1px]" size={15} /> Masuk /
                Daftar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
