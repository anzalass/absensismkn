import Card from "../Card";

export default function Productlist() {
  return (
    <div className="w-11/12 mt-4 mx-auto">
      <div className="grid grid-cols-6 gap-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-full mt-[50px] flex mx-auto justify-center items-center">
        <button className="p-3 border-[1px] mx-auto border-zinc-400 rounded-md font-Poppins ">
          Muat Lebih Banyak
        </button>
      </div>
    </div>
  );
}
