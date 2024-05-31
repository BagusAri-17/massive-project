import { FaArrowLeft } from "react-icons/fa"

export default function BackNav() {
    return (
        <>
        <div className="container">
            <div className="flex gap-x-10 items-center mt-[120px]">
                <button>
                <FaArrowLeft className="text-3xl" />
                </button>
                <p>Kembali Ke Halaman Utama</p>
            </div>
        </div>
        </>
    )
}