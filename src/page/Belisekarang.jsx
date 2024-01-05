import { useEffect, useState } from "react";
import Navbar from "../components/homepage/Navbar";

export default function Belisekarang() {
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
      <div className="w-full mx-auto mt-[130px] min-h-screen ">
        <div className="w-11/12  mx-auto">
          <div className="w-[80%] mx-auto ">
            <h1 className="font-Poppins mb-5 text-xl ">Beli Sekarang</h1>
            <div className=" w-full mx-auto gap-3 border-[1px] p-3 rounded-md">
              <div className="w-[100%] my-auto mx-auto flex">
                <div className="w-[25%] h-[200px] p-3">
                  <img
                    src="https://mobilepriceall.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max.jpg"
                    alt=""
                    className="w-full h-full rounded-md  object-contain"
                  />
                </div>
                <div className="w-[70%] p-4 ">
                  <h1 className="font-[400]">
                    {" "}
                    iPhone 14 Pro Max 128GB 256GB 512GB 1TB Black Silver Gold
                    Purple 5G - INDO 512GB, Silver Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Cum, dolorum.
                  </h1>
                  <div className="flex mt-4 w-full justify-between">
                    <div className="flex">
                      <h1 className="font-[500] text-xl">
                        Rp25.000.0000000000000000
                      </h1>{" "}
                      <p className="ml-3 text-gray-500">x1</p>
                    </div>
                    <div className="  flex font-[400]">
                      <div className="w-[20%]">
                        <button
                          onClick={() => setValue(value - 1)}
                          className="h-[30px] w-full border-[1px] border-zinc-400 border-r-0  text-center rounded-l-md"
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
                          className="w-full h-[30px] border-[1px]  text-center border-zinc-400 "
                        />
                      </div>
                      <div className="w-[20%]">
                        <button
                          onClick={() => setValue(value + 1)}
                          className="h-[30px] w-full border-[1px] border-l-0 border-zinc-400 text-center rounded-r-md"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-4">
                    <textarea
                      name=""
                      id=""
                      className="p-2 h-[70px] w-full border-[1px] rounded-md"
                      placeholder="catatan untuk penjual..."
                    ></textarea>
                  </div>

                  <div className="w-full mt-4 flex">
                    <button className="py-2 px-3 border-2 font-Poppins">
                      Pilih Alamat
                    </button>
                    <button className="py-2 px-3 border-2 font-Poppins">
                      Pilih Jasa Kirim
                    </button>
                  </div>
                  <div className="w-full mt-4 flex-col">
                    <div className="">
                      <h1 className="font-[600]">Alamat</h1>
                      <p>
                        Lorem, ipsum. Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Sint aut nobis corrupti voluptas odio
                        ducimus facilis quas veritatis unde deleniti. Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Vel
                        veritatis corporis sapiente excepturi minus nisi ab
                        iusto id in iste.
                      </p>
                    </div>
                    <div className="mt-3">
                      <h1 className="font-[600]">Jasa Kirim</h1>
                      <p>JNE Reguler</p>
                      <p>Rp10.000</p>
                    </div>
                    <div className="mt-3 font-[600] text-xl">
                      <h1 className="">Total</h1>
                      <p>Rp300.000</p>
                    </div>
                  </div>

                  <div className="w-full justify-end mt-3 items-end">
                    <button className="py-2 w-full px-8  bg-zinc-300 font-[500] rounded-md font-Poppins border-2 border-black ">
                      Bayar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
