import { useEffect, useState } from "react";
import Navbar from "../components/homepage/Navbar";

export default function Cartpage() {
  const [value, setValue] = useState(1);

  const ValueTidakBoleh0 = () => {
    if (value < 1) {
      setValue(1);
    }
  };

  useEffect(() => {
    ValueTidakBoleh0();
  }, [value === 1]);
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen">
        <div className="w-11/12 mx-auto mt-[100px]">
          <h1 className="font-Poppins text-xl text-center">Keranjang</h1>
          <div className="mt-[50px] w-full justify-between gap-3 flex border-2 border-r-0 border-l-0 p-3">
            <div className="w-[3%]">
              <input type="checkbox" className="w-[20px] h-[20px]" />
            </div>
            <div className="w-[7%]">
              <img
                src="https://mobilepriceall.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max.jpg"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="my-auto w-[70%]  h-full">
              <div className="w-[100%]">
                <h1>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h1>
              </div>
              <div className="flex w-[70%] justify-between">
                <div className="flex">
                  <h1 className="font-[500] ">Rp25.000.000</h1>{" "}
                  <p className="ml-3 text-gray-500">x1</p>
                </div>
                <div className=" mt-3 flex font-[400]">
                  <div className="w-[20%]">
                    <button
                      onClick={() => setValue(value - 1)}
                      className=" w-full border-[1px] border-r-0 border-zinc-400  text-center rounded-l-md"
                    >
                      -
                    </button>
                  </div>
                  <div className="w-[40%]">
                    <input
                      type="number"
                      value={value < 1 ? 1 : value}
                      disabled
                      name=""
                      id=""
                      className="w-full  border-[1px]  text-center border-zinc-400 "
                    />
                  </div>
                  <div className="w-[20%]">
                    <button
                      onClick={() => setValue(value + 1)}
                      className=" w-full border-[1px] border-l-0 border-zinc-400 text-center rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[20%] justify-end items-end font-Poppins ">
              <button className="px-3 self-end items-end py-2 border-2 ml-[50%] w-[50%] bg-red-400 border-black rounded-md">
                Hapus
              </button>
            </div>
          </div>

          <div className="w-full mt-12 items-end justify-end">
            <button className="w-[30%] self-end ml-[70%]  font-Poppins px-3 items-en  bg-zinc-300 font-[500] border-black rounded-md py-2 border-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
