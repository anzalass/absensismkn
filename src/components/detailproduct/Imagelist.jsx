export default function Imagelist() {
  return (
    <div className="rounded-lg p-2 border-[1px] border-zinc-300 ">
      <div className=" rounded-lg">
        <img
          src="https://mobilepriceall.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max.jpg"
          alt=""
          className="w-full object-contain h-[489px] rounded-lg "
        />
      </div>
      <div className="flex w-full  gap-2 mt-3">
        <div className="w-[25%]">
          <img
            src="https://phonetechx.com/wp-content/uploads/2022/09/iPhone-15-Pro-Max-1.jpg"
            alt=""
            className="w-full object-cover h-[100px] rounded-lg border-[1px] border-zinc-400"
          />
        </div>
        <div className="w-[25%]">
          <img
            src="https://th.bing.com/th/id/OIP.coI0RXdRZMzthgMXGd3BbAHaE7?rs=1&pid=ImgDetMain"
            alt=""
            className="w-full object-cover h-[100px] rounded-lg border-[1px] border-zinc-400"
          />
        </div>
        <div className="w-[25%]">
          <img
            src="https://th.bing.com/th/id/OIP.8lvgURDUeruU9-BaMwt1SwHaG3?w=1000&h=928&rs=1&pid=ImgDetMain"
            alt=""
            className="w-full object-cover h-[100px] rounded-lg border-[1px] border-zinc-400"
          />
        </div>
        <div className="w-[25%]">
          <img
            src="https://th.bing.com/th/id/OIP.g1jjYkquWZx5buTn1Tyy9QAAAA?rs=1&pid=ImgDetMain"
            alt=""
            className="w-full object-cover h-[100px] rounded-lg border-[1px] border-zinc-400"
          />
        </div>
      </div>
    </div>
  );
}
