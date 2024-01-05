export default function Alamat() {
  return (
    <div className="p-3">
      <div className="w-full  flex gap-3">
        <div className="w-full">
          <select
            name=""
            id=""
            className="w-full border-2 rounded-md h-[40px] "
          >
            <option value="">Provinsi</option>
          </select>
        </div>
        <div className="w-full">
          <select
            name=""
            id=""
            className="w-full  border-2 rounded-md h-[40px]"
          >
            <option value="">Kabupaten / Kota</option>
          </select>
        </div>
        <div className="w-full">
          <select
            name=""
            id=""
            className="w-full  border-2 rounded-md h-[40px]"
          >
            <option value="">Kecamatan</option>
          </select>
        </div>
        <div className="w-full">
          <select
            name=""
            id=""
            className="w-full  border-2 rounded-md h-[40px]"
          >
            <option value="">Desa</option>
          </select>
        </div>
      </div>
      <div className="w-[50%] mt-5">
        <div className="w-full flex gap-3">
          <textarea
            name=""
            placeholder="Alamat Detail"
            id=""
            className="w-full h-[80px] border-2 rounded-md p-2"
          ></textarea>
          <button className="px-3  bg-gray-400 border-2 border-black rounded-md font-Poppins">
            Tambah alamat
          </button>
        </div>
      </div>
      <div className="w-full mt-[50px]">
        <h1 className="font-Poppins">Daftar Alamat</h1>
        <div className="w-full flex justify-between">
          <div className="w-[80%] mt-5">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iure
              sequi dignissimos id modi alias saepe incidunt, sapiente vel
              distinctio, facere repudiandae ex veniam quidem voluptatum.
              Repellendus quam consequatur molestias possimus, laboriosam quia
              sequi ipsum, laborum odit dolore consequuntur voluptatibus!
            </h1>
          </div>
          <div className="w-[10%] mt-5">
            <button className="border-2 p-3 bg-red-400 border-black font-Poppins rounded-md">
              Hapus
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[80%] mt-5">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iure
              sequi dignissimos id modi alias saepe incidunt, sapiente vel
              distinctio, facere repudiandae ex veniam quidem voluptatum.
              Repellendus quam consequatur molestias possimus, laboriosam quia
              sequi ipsum, laborum odit dolore consequuntur voluptatibus!
            </h1>
          </div>
          <div className="w-[10%] mt-5">
            <button className="border-2 p-3 bg-red-400 border-black font-Poppins rounded-md">
              Hapus
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[80%] mt-5">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iure
              sequi dignissimos id modi alias saepe incidunt, sapiente vel
              distinctio, facere repudiandae ex veniam quidem voluptatum.
              Repellendus quam consequatur molestias possimus, laboriosam quia
              sequi ipsum, laborum odit dolore consequuntur voluptatibus!
            </h1>
          </div>
          <div className="w-[10%] mt-5">
            <button className="border-2 p-3 bg-red-400 border-black font-Poppins rounded-md">
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
