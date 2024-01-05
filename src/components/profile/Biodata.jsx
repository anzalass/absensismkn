import { IoCameraOutline } from "react-icons/io5";
export default function Biodata() {
  return (
    <div>
      <div className="w-full p-4 flex gap-3 justify-between  ">
        <div className="w-[30%] border-[1px]  p-2 rounded-md">
          <img
            src="https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/785ac6cb-d67b-42bd-97f8-6a06b9269130.jpg"
            alt=""
            className="w-full h-[400px] object-contain rounded-md"
          />
          <p className="font-thin text-sm">
            Besar file: maksimum 5.000.000 bytes (5 Megabytes). Ekstensi file
            yang diperbolehkan: .JPG .JPEG .PNG
          </p>
          <div className="w-full mt-4 ">
            <button className="w-full relative p-3 bg-gray-400 border-[1px] font-Poppins border-black rounded-md">
              Upload Gambar
              <IoCameraOutline
                className="absolute right-[70px] bg-gray-400 top-3"
                size={25}
              />
            </button>
          </div>
        </div>
        <div className="w-[60%] p-3 border-[1px]">
          <div className="mt-4">
            <input
              type="text"
              className=" h-[50px] rounded-md w-full focus:border-sky-500  pl-3 border-[1px] border-zinc-500"
              placeholder="Nama"
            />
          </div>
          <div className="mt-10">
            <input
              type="text"
              className=" h-[50px] rounded-md w-full  pl-3 border-[1px] border-zinc-500"
              placeholder="Email"
            />
          </div>
          <div className="mt-10">
            <input
              type="password"
              className=" h-[50px] rounded-md w-full  pl-3 border-[1px] border-zinc-500"
              placeholder="Password"
            />
          </div>
          <div className="mt-10">
            <button className="font-Poppins border-2 bg-gray-400 border-black rounded-md p-3">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
