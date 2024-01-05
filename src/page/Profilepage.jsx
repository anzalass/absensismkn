import { useState } from "react";
import Navbar from "../components/homepage/Navbar";
import Biodata from "../components/profile/Biodata";
import Alamat from "../components/profile/Alamat";

export default function Profilepage() {
  const [menu, setMenu] = useState(0);
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="w-full ">
        <div className=" mt-[100px] w-11/12 mx-auto">
          <div className="w-full mx-auto  mb-[100px] rounded-lg ">
            <div className="w-full  flex overflow-auto font-Poppins ">
              <div
                onClick={() => setMenu(0)}
                className={`${
                  menu === 0
                    ? "border-b-black border-l-0 border-r-0 border-t-0 border-2"
                    : null
                } h-full w-full   text-center px-3 py-2`}
              >
                Biodata Diri
              </div>
              <div
                onClick={() => setMenu(1)}
                className={`${
                  menu === 1
                    ? "border-b-black border-l-0 border-r-0 border-t-0 border-2"
                    : null
                } h-full w-full   text-center px-3 py-2`}
              >
                Alamat
              </div>
              <div
                className={`${
                  menu === 2
                    ? "border-b-black border-l-0 border-r-0 border-t-0 border-2"
                    : null
                } h-full w-full   text-center px-3 py-2`}
              >
                Pesanan
              </div>
              <div
                className={`${
                  menu === 3
                    ? "border-b-black border-l-0 border-r-0 border-t-0 border-2"
                    : null
                } h-full w-full   text-center px-3 py-2`}
              >
                Notifikasi
              </div>
            </div>
            <div className="mt-5">
              {menu === 0 ? <Biodata /> : menu === 1 ? <Alamat /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
