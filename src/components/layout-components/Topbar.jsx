import { FiAlignJustify, FiUser, FiLogOut, FiChevronDown } from "react-icons/fi";

export default function Topbar({setmenu, setprofile, profile }) {

    return (
        <>
            <header className="sticky top-0 flex w-full bg-white z-[999]">
                <div className="flex items-center justify-between flex-grow px-4 py-4 shadow md:px-6 2xl:px-11">
                    <div className="flex items-center gap-4">
                        <button onClick={setmenu} className="flex items-center justify-center bg-white border border-gray-300 lg:hidden size-9">
                            <FiAlignJustify className="text-3xl text-secondary" />
                        </button>
                        <h2 className="text-xl font-bold text-secondary">Bank Sampah</h2>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 lg:hidden"></div>
                    <div className="flex items-center gap-3 2xsm:gap-7">
                        <div className="relative">
                            <div onClick={setprofile} className="flex items-center gap-4">
                                <span className="hidden text-right lg:block">
                                    <span className="block text-sm font-medium text-secondary">Thomas</span>
                                    <span className="block text-xs text-gray-500">UX Designer</span>
                                </span>
                                <span>
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="" className="rounded-full size-12" />
                                </span>
                                <span className="hidden text-right lg:block">
                                    <FiChevronDown className="text-2xl text-gray-500" />
                                </span>
                            </div>

                            {/* Dropdown Profile */}
                            <div className={`absolute right-0 w-48 lg:w-64 mt-4 bg-white border rounded-sm shadow ${profile ? "block" : "hidden"}`}>
                                <ul className="flex flex-col gap-2 px-4 py-4 border-b lg:gap-4 lg:px-6 lg:py-6">
                                    <li>
                                        <a href="" className="flex items-center gap-2 text-gray-500 duration-300 ease-in-out lg:gap-4 hover:text-primary">
                                            <FiUser className="text-lg lg:text-2xl" />
                                            <span className="text-sm lg:text-base">My Profile</span>
                                        </a>
                                    </li>
                                </ul>
                                <button className="flex items-center gap-2 px-4 py-4 text-gray-500 duration-300 ease-in-out lg:gap-4 lg:px-6 lg:py-6 hover:text-primary">
                                    <FiLogOut className="text-lg rotate-180 lg:text-2xl" />
                                    <span className="text-sm lg:text-base">Log Out</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
