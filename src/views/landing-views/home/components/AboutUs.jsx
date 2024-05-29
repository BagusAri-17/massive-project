import HeaderSection from "@/components/shared-components/HeaderSection";
import aboutImage from "@/assets/landing-views/home/image_about-us.png";
import ButtonNavigation from "@/components/shared-components/ButtonNavigation";

export default function AboutUs() {
    return (
        <>
            <section className="py-20">
                <div className="container">
                    <div className="flex flex-col gap-y-8 md:gap-y-12">
                        <HeaderSection title="About Us" />
                        <div className="flex flex-col items-center justify-between md:flex-row gap-y-16 gap-x-8">
                            <div className="flex flex-col gap-y-4 md:gap-y-8">
                                <div className="flex flex-col max-w-3xl gap-y-2 md:gap-y-4">
                                    <h2 className="title-section">Tentang Waste Wise</h2>
                                    <p className="text-sm leading-6 md:leading-8 text-secondary md:text-base">Kami bertujuan menjadi platform  pusat informasi tentang gaya hidup ramah lingkungan di Indonesia. Kami menjadi tempat bagi individu, aktivis lingkungan, komunitas, dan semua yang peduli terhadap kelestarian lingkungan untuk berkumpul dan berbagi.</p>
                                </div>
                                <div className="mt-2 md:mt-3">
                                    <ButtonNavigation link="/about-us" name="Lihat Selengkapnya" />
                                </div>
                            </div>
                            <img src={aboutImage} alt="about-us-image" className="hidden md:block" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
