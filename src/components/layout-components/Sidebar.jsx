import Logo from "../../assets/logo-white.png"
import { FiArrowLeft, FiAirplay, FiRefreshCw, FiShoppingBag, FiClock, FiGift } from "react-icons/fi";

export default function Sidebar({setmenu, menu}) {
    

    return (
        <>
            <aside className={`absolute left-0 top-0 z-[9999] flex h-screen w-72 flex-col overflow-y-hidden bg-[#053F33] duration-300 ease-linear lg:static lg:translate-x-0  ${menu ? "" : "-translate-x-full"}`}>
                <div className="flex items-center justify-between gap-2 px-6 py-5 border-b-2 lg:justify-center lg:py-6 border-primary">
                    <a href="" className="flex items-center gap-2">
                        <img src={Logo} alt="" className="w-12" />
                        <h1 className="text-xl text-white">WasteWase</h1>
                    </a>
                    <button className="block lg:hidden">
                        <FiArrowLeft onClick={setmenu} className="text-2xl text-white" />
                    </button>
                </div>
                
                <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
                    <nav className="px-4 py-4 mt-5 lg:mt-9 lg:px-6">
                        <div>
                            <ul className="flex flex-col gap-0 lg:gap-2">
                                <li>
                                    <a href="" className="relative flex items-center gap-3 px-4 py-4 text-white duration-300 ease-in-out rounded-lg lg:gap-4 group hover:bg-primary">
                                        <FiAirplay className="text-lg lg:text-2xl" />
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="relative flex items-center gap-3 px-4 py-4 text-white duration-300 ease-in-out rounded-lg lg:gap-4 group hover:bg-primary">
                                        <FiRefreshCw className="text-lg lg:text-2xl" />
                                        <span>Tukar Sampah</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="relative flex items-center gap-3 px-4 py-4 text-white duration-300 ease-in-out rounded-lg lg:gap-4 group hover:bg-primary">
                                        <FiShoppingBag className="text-lg lg:text-2xl" />
                                        <span>Transaksi</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="relative flex items-center gap-3 px-4 py-4 text-white duration-300 ease-in-out rounded-lg lg:gap-4 group hover:bg-primary">
                                        <FiClock className="text-lg lg:text-2xl" />
                                        <span>Riwayat Transaksi</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="relative flex items-center gap-3 px-4 py-4 text-white duration-300 ease-in-out rounded-lg lg:gap-4 group hover:bg-primary">
                                        <FiGift className="text-lg lg:text-2xl" />
                                        <span>Poinku</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </aside>
        </>
    )
}
