import { useState } from "react";

export default function Filterlist() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  return (
    <div className="w-11/12 mx-auto mt-[150px] font-Poppins">
      <div className="flex w-full mx-auto justify-center">
        <div className="">
          <button className="bg-[#fff] p-3 rounded-md shadow-lg">
            Kategori
          </button>
        </div>
        <div className="flex ml-2 ">
          <input
            value={min < 0 ? 0 : min}
            onChange={(e) => setMin(e.target.value)}
            type="number"
            placeholder="price min"
            className="pl-2 w-[110px] text-center rounded-md shadow-lg"
          />

          <input
            value={max < 0 ? 0 : max}
            onChange={(e) => setMax(e.target.value)}
            type="number"
            placeholder="price max"
            className="pl-2 w-[110px] text-center ml-2 rounded-md  shadow-lg"
          />
        </div>
        <div className="">
          <select name="" id="" className="p-3 rounded-md ml-2  shadow-lg">
            <option value="">Terbaru</option>
            <option value="">Terlama</option>
            <option value="">Terpopuler</option>
          </select>
        </div>
        <div className="">
          <select name="" id="" className="p-3 rounded-md ml-2   shadow-lg">
            <option value="">Rating</option>
            <option value="">Terendah</option>
            <option value="">Tertinggi</option>
          </select>
        </div>
      </div>
    </div>
  );
}
