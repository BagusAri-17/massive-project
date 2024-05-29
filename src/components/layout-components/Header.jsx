import { useState } from "react";
import ButtonNavigation from "../shared-components/ButtonNavigation";
import logoImage from "../../assets/auth-views/logo.png";

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
            <header className="absolute top-0 left-0 z-20 flex items-center w-full h-20 bg-transparent border-gray-200">
                <div className="container">
                    <nav className="flex items-center justify-between">
                        <a href="/">
                            <img src={logoImage} alt="logo" className="w-16" />
                        </a>

                        <ul className="flex gap-x-8">
                            <li><a href="" className="font-bold">Home</a></li>
                            <li><a href="" className="font-bold">Bank Sampah</a></li>
                            <li><a href="" className="font-bold">Artikel</a></li>
                            <li><a href="" className="font-bold">Campaign</a></li>
                            <li><a href="" className="font-bold">Edukasi</a></li>
                            <li><a href="" className="font-bold">Contact</a></li>
                            <li><a href="" className="font-bold">About Us</a></li>
                            <li><div className="w-0.5 h-6 bg-black"></div></li>
                            <li><ButtonNavigation name="Masuk" /></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
