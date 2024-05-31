import heroImage from "../../../../assets/landing-views/article/hero-article-image.png";

export default function Hero() {
    return (
        <>
            <section className="py-20">
                <div className="container">
                    <div className="p-10 bg-center bg-cover h-[320px] rounded-[20px]" style={{ backgroundImage: `url(${heroImage})` }}>
                        <div className="grid grid-cols-12">
                            <div className="col-span-5">
                                <h1 className="font-bold text-5xl text-white py-4">Article Overview</h1>
                                <p className="font-bold text-sm text-white">Ketahui lebih banyak tentang penanganan sampah melalui artikel-artikel di bawah ini. It’s progress over perfection! mulai dengan langkah kecil tidak harus sempurna namun harus dimulai. Yuk kita mulai bersama!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}