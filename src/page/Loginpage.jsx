import { Link } from "react-router-dom";
import regisimg from "../assets/regisimg.webp";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useRef, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useCookies } from "react-cookie";
import Cookies from "universal-cookie";
import { server } from "../server";

export default function Registerpage() {
  const handlerCallback = async (res) => {
    const decode = jwtDecode(res.credential);
    console.log("test", decode);
    await axios
      .post(
        `${server}auth/login-google`,
        {
          social_id: decode.sub,
          email: decode.email,
          name: decode.name,
          photo_profile: decode.picture,
          is_verified: decode.email_verified,
        },
        { withCredentials: true }
      )

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "1093690086226-lca18stqn3algkllc786he4258p9561f.apps.googleusercontent.com",
      callback: handlerCallback,
      login_uri: "https://localhost:5173/",
    });

    google.accounts.id.renderButton(document.getElementById("btnggl"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return (
    <div className="w-full  bg-[#fff]">
      <div className="w-11/12 mx-auto">
        <div className="w-full mt-6">
          <h1 className="font-Poppins text-2xl text-center">Ya Beginilah.</h1>
        </div>
        <div className="w-[80%] mx-auto justify-center flex mt-12">
          <div className="w-[50%] ">
            <img
              src={regisimg}
              alt=""
              className="w-[90%] h-full  object-cover"
            />
          </div>
          <div className="w-[50%] p-3">
            <div className="bg-white shadow-xl  rounded-sm pt-7  pb-12 ">
              <h1 className="w-full text-center font-[700] text-2xl">Masuk</h1>
              <p className="w-full text-[13px] text-center">
                Belum Punya Akun?{" "}
                <Link to={"/register"}>
                  <span className="text-blue-500">Daftar</span>
                </Link>
              </p>
              <div className="w-full mx-auto mt-5 ">
                <div className="w-[50%]  mx-auto  ">
                  <div className="w-full mx-auto" id="btnggl"></div>
                </div>
              </div>
              <div className="w-full mt-5 "></div>
              <div className="w-full mt-4">
                <h1 className="text-center w-full text-sm text-gray-500">
                  Atau Masuk Dengan
                </h1>
              </div>
              <div className="w-full mt-5">
                <div className="w-[80%] mx-auto">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-3 h-[40px] border-[1px] border-zinc-300 rounded-md"
                  />
                </div>
                <div className="w-[80%] mx-auto mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-3 h-[40px] border-[1px] border-zinc-300 rounded-md"
                  />
                </div>
                <div className="w-[80%] mx-auto mt-5">
                  <button className="w-full h-[40px] border-[1px] bg-zinc-300 font-[500] border-zinc-300 rounded-lg">
                    Masuk
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
