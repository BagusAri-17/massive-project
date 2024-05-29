import HeaderSection from "@/components/shared-components/HeaderSection";
import ourProgramImage from "@/assets/landing-views/home/image_our-program.png";
import ButtonNavigation from "@/components/shared-components/ButtonNavigation";

export default function OurProgram() {
    return (
        <section className="py-20">
            <div className="container">
                <div className="flex flex-col gap-y-8 md:gap-y-12">
                    <HeaderSection title="Our Program" />
                    <div className="flex flex-col justify-between lg:items-center lg:flex-row lg:gap-x-16 gap-y-8">
                        <img src={ourProgramImage} alt="our-program-image" className="rounded-tr-[80px] rounded-bl-[80px] hidden md:block" />
                        <div className="flex flex-col gap-y-4 md:gap-y-8">
                            <div className="flex flex-col gap-y-2 md:gap-y-4">
                                <h2 className="title-section">Tujuan Waste Wise</h2>
                                <p className="text-sm leading-6 md:leading-8 text-secondary md:text-base">Kami bertujuan menjadi platform  pusat informasi tentang gaya hidup ramah lingkungan di Indonesia. Kami menjadi tempat bagi individu, aktivis lingkungan, komunitas, dan semua yang peduli terhadap kelestarian lingkungan untuk berkumpul dan berbagi.</p>
                            </div>
                            <div className="mt-2 md:mt-3">
                                <ButtonNavigation link="/about-us" name="Lihat Selengkapnya" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
