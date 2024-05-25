import logoImage from "../../../assets/auth-views/logo.png"
import illustrationImage from "../../../assets/auth-views/illustration_exchanger.png"
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {
    return (
        <>
            <section className="flex items-center justify-center h-screen">
                <div className="container">
                    <div className="grid items-center justify-center grid-cols-12">
                        {/* Illustration */}
                        <div className="flex flex-col col-span-7 gap-y-8">
                            <div className="flex items-center gap-x-8">
                                <img src={logoImage} alt="" />
                                <div className="flex flex-col items-center gap-y-4">
                                    <h2 className="text-7xl text-[#053F33]">Waste Wise</h2>
                                    <p className="text-xs text-[#053F33]">Ketika kita merawat bumi, kita merawat diri kita sendiri.</p>
                                </div>
                            </div>
                            <div>
                                <img src={illustrationImage} alt=""/>
                            </div>
                        </div>
                        {/* Form */}
                        <div className="flex flex-col col-span-5 gap-y-6">
                            <button>
                                <FaArrowLeft className="text-3xl"/>
                            </button>
                            <div className="">
                                <h2 className="font-semibold text-[30px]">Masuk Akun</h2>
                                <p className="text-xs text-[#91B0B6]">Sebagai penukar</p>
                            </div>
                            <form action="" className="flex flex-col gap-y-4">
                                <div>
                                    <input type="email" placeholder='Email' className="w-full border border-[#000000] p-4 rounded-[10px]"/>
                                </div>
                                <div>
                                    <input type="email" placeholder='Password' className="w-full border border-[#000000] p-4 rounded-[10px]"/>
                                </div>
                                <a href="">Lupa kata Sandi</a>
                                <button className="py-4 px-30 bg-primary rounded-[10px] text-white">Masuk</button>
                                <a href="" className="text-center">Sudah punya akun? <b>Masuk</b></a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login