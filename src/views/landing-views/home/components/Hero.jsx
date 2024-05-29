import heroImage from "../../../../assets/landing-views/home/hero-image.png"
import ButtonNavigation from "../../../../components/shared-components/ButtonNavigation"

export default function Hero() {
    return (
        <>
            <section className="flex items-center justify-center h-screen">
                <div className="container">
                    <div className="p-10 bg-center bg-cover h-[600px]" style={{ backgroundImage: `url(${heroImage})` }}>
                        <div className="flex flex-col items-start gap-y-8">
                            <h1 className="font-bold text-[60px] w-1/2 text-white">Ketika kita merawat bumi, kita merawat diri kita sendiri.</h1>
                            <p className="w-1/2 text-lg text-white">Bersihkan bumi kita, mulai dari hal kecil Setiap langkah kecil kita bisa membuat perbedaan besar.</p>
                            <ButtonNavigation name="Lihat Selengkapnya" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
