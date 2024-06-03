import { useState } from "react";
import ButtonNavigation from "../shared-components/ButtonNavigation";
import logoImage from "../../assets/auth-views/logo.png";
import { FaAlignRight } from "react-icons/fa";

export default function Header() {

    const [isOpen, setOpen] = useState(false);

    window.onscroll = () => {
        const header = document.querySelector("header");
        const fixedHeader = header.offsetTop;
    
        if (window.scrollY > fixedHeader) {
            header.classList.add("navbar-fixed");
        } else {
            header.classList.remove("navbar-fixed");
        }
    };

    return (
        <>
            <header className="absolute top-0 left-0 z-20 flex items-center w-full h-16 bg-transparent border-gray-200 lg:h-20">
                <div className="container">
                    <nav className="flex items-center justify-between">
                        <a href="/">
                            <img src={logoImage} alt="logo" className="w-12 lg:w-16" />
                        </a>
                        <div className="flex items-center lg:hidden">
                            <button className="block lg:hidden" onClick={() => setOpen(!isOpen)}>
                                <FaAlignRight className="text-2xl text-primary" />
                            </button>
                            <div>
                                <ul className={isOpen ? 'absolute right-0 top-full w-full rounded-lg bg-white py-4 md:py-8 shadow-lg duration-500 ease-in-out space-y-2 md:space-y-4': 'fixed left-[-100%] duration-500 ease-in-out'}>
                                    <li className="text-center"><a href="/" className="text-sm font-medium transition-all duration-300 text-secondary hover:text-primary">Home</a></li>
                                    <li className="text-center"><a href="" className="text-sm font-medium transition-all duration-300 text-secondary hover:text-primary">Bank Sampah</a></li>
                                    <li className="text-center"><a href="/article" className="text-sm font-medium transition-all duration-300 text-secondary hover:text-primary">Artikel</a></li>
                                    <li className="text-center"><a href="/campaign" className="text-sm font-medium transition-all duration-300 text-secondary hover:text-primary">Campaign</a></li>
                                    <li className="text-center"><a href="/edukasi" className="text-sm font-medium transition-all duration-300 text-secondary hover:text-primary">Edukasi</a></li>
                                    <li className="text-center"><a href="/contact" className="text-sm font-medium transition-all duration-300 text-secondary hover:text-primary">Contact</a></li>
                                    <li className="text-center"><a href="/about-us" className="text-sm font-medium transition-all duration-300 text-secondary hover:text-primary">About Us</a></li>
                                    <li className="pt-4 text-center"><ButtonNavigation name="Masuk" /></li>
                                </ul>
                            </div>
                        </div>

                        <ul className="hidden lg:flex gap-x-8">
                            <li><a href="/" className="font-medium transition-all duration-300 text-secondary hover:text-primary">Home</a></li>
                            <li><a href="" className="font-medium transition-all duration-300 text-secondary hover:text-primary">Bank Sampah</a></li>
                            <li><a href="/article" className="font-medium transition-all duration-300 text-secondary hover:text-primary">Artikel</a></li>
                            <li><a href="/campaign" className="font-medium transition-all duration-300 text-secondary hover:text-primary">Campaign</a></li>
                            <li><a href="/edukasi" className="font-medium transition-all duration-300 text-secondary hover:text-primary">Edukasi</a></li>
                            <li><a href="/contact" className="font-medium transition-all duration-300 text-secondary hover:text-primary">Contact</a></li>
                            <li><a href="/about-us" className="font-medium transition-all duration-300 text-secondary hover:text-primary">About Us</a></li>
                            <li><div className="w-0.5 h-6 bg-secondary"></div></li>
                            <li><ButtonNavigation name="Masuk" /></li>
                        </ul>

                    </nav>
                </div>
            </header>
        </>
    )
}
