import heroImage from "../../../../assets/landing-views/home/hero-image.png"
import ButtonNavigation from "../../../../components/shared-components/ButtonNavigation"

export default function Hero() {
    return (
        <>
            <section className="flex items-center justify-center h-screen">
                <div className="container">
                    <div className="p-6 md:p-12 bg-center bg-cover h-[440px] md:h-[600px] rounded-[20px] flex items-center" style={{ backgroundImage: `url(${heroImage})` }}>
                        <div className="flex flex-col items-start gap-y-8">
                            <h1 className="w-full text-4xl font-bold text-white lg:w-3/5 md:text-5xl lg:text-6xl">Ketika kita merawat bumi, kita merawat diri kita sendiri.</h1>
                            <p className="w-full text-sm leading-7 text-white lg:w-1/2 md:text-lg">Bersihkan bumi kita, mulai dari hal kecil Setiap langkah kecil kita bisa membuat perbedaan besar.</p>
                            <ButtonNavigation name="Lihat Selengkapnya" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
