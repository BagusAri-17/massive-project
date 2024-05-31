import {FaSearch} from "react-icons/fa"

export default function SearchBar() {
    return (
        <>
        <div className="container">
            <div className="grid grid-cols-12 items-center border border-[#B9CCD0] rounded-[10px] p-10">
                <div className="col-span-3 font-bold text-[30px] text-[#053F33]">Cari Artikel</div>
                <input type="text" className="col-span-8 border border-[#B9CCD0] rounded-[20px] p-4"/>
                <button className="col-span-1 items-center p-10">
                    <FaSearch className="text-gray-400" />
                </button>
            </div>
        </div>
        </>
    )
}