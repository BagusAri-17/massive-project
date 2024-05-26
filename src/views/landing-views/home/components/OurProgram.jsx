import HeaderSection from "@/components/shared-components/HeaderSection";
import ourProgramImage from "@/assets/landing-views/home/image_our-program.png";
import ButtonNavigation from "@/components/shared-components/ButtonNavigation";

export default function OurProgram() {
    return (
        <section className="py-20">
            <div className="container">
                <div className="flex flex-col gap-y-8">
                    <HeaderSection title="Our Program" />
                    <div className="flex items-center justify-between gap-x-24">
                        <img src={ourProgramImage} alt="our-program-image" className="rounded-tr-[80px] rounded-bl-[80px]" />
                        <div className="flex flex-col gap-y-6">
                            <div className="flex flex-col gap-y-3">
                                <h2 className="font-bold text-5xl text-[#2B3D40]">Tujuan Waste Wise</h2>
                                <p className="text-[#2B3D40]">Kami bertujuan menjadi platform  pusat informasi tentang gaya hidup ramah lingkungan di Indonesia. Kami menjadi tempat bagi individu, aktivis lingkungan, komunitas, dan semua yang peduli terhadap kelestarian lingkungan untuk berkumpul dan berbagi.</p>
                            </div>
                            <div className="mt-2.5">
                                <ButtonNavigation link="/about-us" name="Lihat Selengkapnya" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
