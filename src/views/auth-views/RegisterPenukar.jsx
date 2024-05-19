import logoImage from '../../assets/auth-views/logo.png'
import illustrationImage from '../../assets/auth-views/illustration_penukar.png'
import { FaArrowLeft } from "react-icons/fa";

const RegisterPenukar = () => {
    return (
        <>
			<section className="h-screen flex justify-center items-center">
				<div className="container">
                    <div className="grid grid-cols-12 justify-center items-center">
                        {/*illustrasi*/}
                        <div className="col-span-7">
                            <div className="flex items-center gap-x-8">
                                <img src={logoImage} alt="" />
                                <div className="flex flex-col gap-y-4 items-center">
                                    <h2 className="text-7xl">Waste Wise</h2>
                                    <p className="text-xs">Ketika kita merawat bumi, kita merawat diri kita sendiri.</p>
                                </div>
                            </div>
                            <div>
                                <img src={illustrationImage} alt=""/>
                            </div>
                        </div>

                        {/*form*/}
                        <div className="col-span-5">
                            <button>
                                <FaArrowLeft className="text-4xl"/>
                            </button>
                            <div>
                                <h2 className="font-semibold text-[25px]">Daftar Akun</h2>
                            </div>
                            <form action="" className="flex flex-col gap-y-4">
                                <div className="flex gap-x-4">
                                    <input type="text" placeholder="Nama Depan" className="w-1/2 border border-[#000000] p-4 rounded-[10px]" />
                                    <input type="text" placeholder="Nama Belakang" className="w-1/2 border border-[#000000] p-4 rounded-[10px]" />
                                </div>
                                <div>
                                    <input type="email" placeholder='Email' className="w-full border border-[#000000] p-4 rounded-[10px]"/>
                                </div>
                                <div>
                                    <input type="tel" placeholder='Nomor Telepon' className="w-full border border-[#000000] p-4 rounded-[10px]"/>
                                </div>
                                <div>
                                    <input type="password" placeholder='Password' className="w-full border border-[#000000] p-4 rounded-[10px]"/>
                                </div>
                                <button className="py-4 px-30  bg-primary rounded-[10px]">Daftar</button>
                                <a href="" className="text-center">Sudah punya akun? <b>Masuk</b></a>
                                <div>
                                    <input type="checkbox" id="terms" className="mr-2" />
                                    <label htmlFor="">Saya menyetujui perjanjian pengguna dan kebijakan privasi yang berlaku.</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
			</section>
		</>
    )
}

export default RegisterPenukar