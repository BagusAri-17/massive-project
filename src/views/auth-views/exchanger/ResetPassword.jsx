import logoImage from "../../../assets/auth-views/logo.png"
import illustrationImage from "../../../assets/auth-views/illustration_exchanger.png"
import { FaArrowLeft } from "react-icons/fa";

const ResetPassword = () => {
  return (
    <>
      <section className="flex items-center justify-center h-screen ">
        <div className="container border-solid">
          <div className="grid items-center justify-center grid-cols-12">
            {/*ilustrasi*/}
            <div className="col-span-7">
              <div className="flex items-center gap-x-8">
                <img src={logoImage} alt="" className="w-[140px]" />
                <div className="flex flex-col justify-center text-center itmes-center gap-y-4">
                  <h2 className="text-7xl">Waste Wise</h2>
                  <p className="teks-xs">
                    Ketika kita merawat bumi, kita merawat diri kita sendiri.
                  </p>
                </div>
              </div>
              <div>
                <img src={illustrationImage} alt="" className="mx-auto" />
              </div>
            </div>

            {/*form*/}
            <div className="flex flex-col col-span-5 gap-y-10">
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
                    <a href="" className="text-base font-bold">
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

export default ResetPassword