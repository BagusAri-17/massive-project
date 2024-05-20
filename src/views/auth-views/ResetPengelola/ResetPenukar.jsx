import LogoWeb from "../../assets/auth-views/reset-password/logoWeb.png";
import { FaArrowLeft } from "react-icons/fa";
import Iresetpenukar from "../../assets/auth-views/reset-password/Iresetpenukar.png";

export const ResetPenukar = () => {
  return (
    <>
      <section className="h-screen flex justify-center items-center ">
        <div className="container border-solid">
          <div className="grid grid-cols-12 justify-center items-center">
            {/*ilustrasi*/}
            <div className="col-span-7">
              <div className="flex  items-center gap-x-8">
                <img src={LogoWeb} alt="" className="w-[140px]" />
                <div className="flex flex-col justify-center itmes-center text-center gap-y-4">
                  <h2 className="text-7xl">Waste Wise</h2>
                  <p className="teks-xs">
                    Ketika kita merawat bumi, kita merawat diri kita sendiri.
                  </p>
                </div>
              </div>
              <div>
                <img src={Iresetpenukar} alt="" className="mx-auto" />
              </div>
            </div>

            {/*form*/}
            <div className="col-span-5 flex flex-col gap-y-10">
              <button>
                <FaArrowLeft className="text-4xl " />
              </button>
              <div className="">
                <h2 className="font-semibold text-[25px]"> Reset Password</h2>
              </div>
              <form action="" className="flex flex-col gap-y-5">
                <div>
                  <input
                    type="email"
                    placeholder="Email/nomor telepon"
                    className="w-full border border-[#000000] p-4 rounded-[10px]"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-[#000000] p-4 rounded-[10px]"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Ulangi Password"
                    className="w-full border border-[#000000] p-4 rounded-[10px]"
                  />
                </div>
                <div>
                  <button
                    type="sumbit"
                    className="w-full bg-primary py-4 px-30 rounded-[10px]"
                  >
                    Submit
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-base">
                    Belum Punya Akun?{" "}
                    <a href="" className="font-bold text-base">
                      Daftar
                    </a>
                  </p>
                </div>
                <div>
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="">
                    Saya menyetujui perjanjian pengguna dan kebijakan privasi
                    yang berlaku.
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
