import footerImage from "../../assets/landing-views/home/hero-image.png"
import ButtonNavigation from "../shared-components/ButtonNavigation"
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import logoImage from "../../assets/logo-white.png"

export default function Footer() {
    return (
        <footer>
            <div className="bg-center bg-cover h-[300px] lg:h-[600px] flex items-center justify-center" style={{ backgroundImage: `url(${footerImage})` }}>
                <div className="container flex flex-col gap-y-8">
                    <h2 className="text-2xl font-bold text-center text-white md:text-4xl lg:text-6xl">Bergabunglah Bersama Kami Untuk Lingkungan Yang Lebih Indah</h2>
                    <ButtonNavigation name="Join Us" />
                </div>
            </div>
            <div className="bg-[#053F33]">
                <div className="container">
                    <div className="flex flex-col py-16 gap-y-12">
                        <div className="flex flex-col items-center justify-between lg:flex-row">
                            <p className="text-xl text-white">support@wastewise.co.id</p>
                            <div className="flex items-center gap-8">
                                <p className="text-xl text-white">Kontak Kami</p>
                                <div className="flex items-center gap-4 text-2xl text-white">
                                    <a href="">
                                        <FaLinkedin />
                                    </a>
                                    <a href="">
                                        <FaInstagram />
                                    </a>
                                    <a href="">
                                        <FaXTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-between lg:flex-row">
                            <div className="flex items-center gap-x-4">
                                <img src={logoImage} alt="logo-image" />
                                <div className="flex flex-col gap-y-2">
                                    <p className="text-5xl font-bold text-white">Waste Wise</p>
                                    <p className="text-white">Ketika kita merawat bumi, <br></br>kita merawat diri kita sendiri.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className="text-white">2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                                <p className="text-white">(229) 555-0109</p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-4">
                        <p className="text-center text-white"> © 2024 PT. WasteWise</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
