import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

export default function Description() {
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
    <div className="w-full p-3 border-[1px]">
      <div className="w-full">
        <h1 className="text-[19px] font-[600] font-Roboto">
          iPhone 14 Pro Max 128GB 256GB 512GB 1TB Black Silver Gold Purple 5G -
          INDO 512GB, Silver
        </h1>
        <div className="flex text-[15px] mt-3 w-[118px] pl-2 p-1 border-[1px] border-zinc-400 rounded-md">
          <h3>Rating </h3>
          <div className="relative ml-3">
            <FaStar color="gold" className="absolute top-1 left-0" />
            <h3 className="ml-5">4.9</h3>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-3xl font-[700]">Rp 29.899.999</h1>
        </div>
        <div className="w-[90%] mt-5">
          <h1 className="font-[600] text-[16px]">Deskripsi</h1>
          <div className="h-[40vh] mt-4 overflow-auto border-[1px] border-zinc-300 p-2 rounded-md  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum
            iste quibusdam, quaerat maiores itaque, in corrupti fugit dicta
            minus, consectetur ad atque eveniet tenetur! Animi ab, et vel
            necessitatibus adipisci doloribus rerum? Fugit, minus at sit a animi
            repellat quod neque, quos sed inventore eius provident, quae ipsam
            doloremque vel quibusdam amet veniam saepe atque nostrum
            reprehenderit rerum tempora distinctio? Labore libero nobis, ad,
            aperiam molestias nemo beatae quae voluptatum doloremque eaque
            iusto! Blanditiis qui repellat, debitis cum adipisci nisi, sunt nemo
            reiciendis, beatae ipsa earum illum. Ducimus soluta explicabo quod,
            dolorem sint vero odio nisi nulla maiores quis. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Veritatis voluptatum delectus
            dolores asperiores libero sed nobis fuga quam quasi tempora dolorum
            aspernatur vitae ut fugiat ducimus, voluptatem vero perferendis
            aliquam rerum cupiditate suscipit deleniti nostrum? Atque nulla
            saepe illo eius perferendis odio suscipit commodi, ipsam quis qui
            culpa sunt optio necessitatibus? Consequuntur, voluptatum ipsam
            velit nihil iusto id consequatur autem adipisci suscipit quaerat nam
            in reprehenderit quia optio maiores blanditiis nisi? Maxime eius
            eveniet iusto! Recusandae eum minus necessitatibus error asperiores,
            deleniti quas ducimus maxime voluptates provident autem, nesciunt
            iure officiis cumque aut assumenda quibusdam ut eveniet unde
            placeat. Dolore.
          </div>
        </div>
        <div className="mt-5  flex w-full gap-3 ">
          <div className="w-[66%]">
            <div className="w-[100%] flex font-[600]">
              <div className="w-[10%]">
                <button
                  onClick={() => setValue(value - 1)}
                  className="h-[40px] w-full border-[1px] border-zinc-400 px-3 rounded-lg"
                >
                  -
                </button>
              </div>
              <div className="w-[80%]">
                <input
                  type="number"
                  value={value < 1 ? 1 : value}
                  disabled
                  name=""
                  id=""
                  className="w-full h-[40px] border-[1px]  text-center border-zinc-400 rounded-lg"
                />
              </div>
              <div className="w-[10%]">
                <button
                  onClick={() => setValue(value + 1)}
                  className="h-[40px] w-full border-[1px] border-zinc-400 px-3 rounded-lg"
                >
                  +
                </button>
              </div>
            </div>
            <div className="w-[100%] mt-4 font-Poppins">
              <div className="flex w-full gap-2">
                <button className="p-3 border-[1px] w-[50%] rounded-md border-zinc-400">
                  + Keranjang
                </button>
                <button className="p-3 border-[1px]  w-[50%] rounded-md border-zinc-400">
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
          <div className="w-[20%] border-[1px] border-zinc-400 flex items-center rounded-md">
            <div className="w-full">
              <IoMdHeart size={60} color="red" className=" mx-auto my-auto" />
              <p className="text-center font-Poppins">Wishlist +</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
