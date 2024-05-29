import HeaderSection from "@/components/shared-components/HeaderSection";
import CardTestimonial from "../../../../components/shared-components/CardTestimonial";

export default function Testimonial() {
    const testimonialData = [
        {
            id: 1,
            name: "Jane Cooper",
            address: "1901 Thornridge Cir.",
            comment: '"Saya sangat mendukung kampanye lingkungan ini! Bank sampah adalah inovasi yang luar biasa untuk mengurangi sampah plastik."',
        },
        {
            id: 2,
            name: "Jane Cooper",
            address: "1901 Thornridge Cir.",
            comment: '"Saya sangat mendukung kampanye lingkungan ini! Bank sampah adalah inovasi yang luar biasa untuk mengurangi sampah plastik."'
        },
        {
            id: 3,
            name: "Jane Cooper",
            address: "1901 Thornridge Cir.",
            comment: '"Saya sangat mendukung kampanye lingkungan ini! Bank sampah adalah inovasi yang luar biasa untuk mengurangi sampah plastik."'
        }
    ]

    return (
        <>
            <section className="py-20">
                <div className="container">
                    <div className="flex flex-col gap-y-8 md:gap-y-12">
                        <HeaderSection title="Testimoni" />
                        <div className="flex flex-col items-center gap-y-4 md:gap-y-8">
                            <h2 className="max-w-3xl text-center title-section">Kami Dipercaya Lebih dari 1000+</h2>
                            <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {testimonialData.map((items) => (
                                    <CardTestimonial name={items.name} address={items.address} comment={items.comment} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
