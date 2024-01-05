export default function AktivasiPage({ email }) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[50%] mx-auto shadow-md justify-center items-center p-3">
        <p className="text-center mx-auto">email:{email}</p>
        <div className="w-[80%] mx-auto">
          <input
            type="text"
            placeholder="Masukan OTP"
            className="h-[35px] w-full pl-3 border-[1px]"
          />
        </div>
      </div>
    </div>
  );
}
