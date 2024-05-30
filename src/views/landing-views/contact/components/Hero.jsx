import heroImage from "../../../../assets/landing-views/home/hero-image.png"

export default function Hero() {
    return (
        <>
            <section className="py-20 mt-20">
                <div className="container">
                    <div className="p-10 bg-center bg-cover h-[320px] rounded-[20px] flex items-center" style={{ backgroundImage: `url(${heroImage})` }}>
                        <div className="flex flex-col items-center gap-y-4">
                            <h1 className="font-bold text-[60px] w-1/2 text-white text-center">Hubungi Kami</h1>
                            <p className="w-1/2 text-lg text-center text-white">Butuh bantuan untuk menggunakan website kami? Kunjungi halaman FAQ kami atau kirimkan pertanyaan Anda melalui formulir kontak.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
