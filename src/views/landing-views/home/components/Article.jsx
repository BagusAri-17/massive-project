import HeaderSection from "@/components/shared-components/HeaderSection";
import CardArticle from "../../../../components/shared-components/CardArticle";

export default function Article() {
    const articleData = [
        {
            id: 1,
            title: "Cara Mengurangi Sampah Dalam Kehidupan Sehari",
            description: "Belakangan banyak yang mengeluhkan bahwa bumi semakin panas, bahkan mendekati kondisi neraka.",
            date: "March 01, 2021",
            link: "/about-us"
        },
        {
            id: 2,
            title: "Cara Mengurangi Sampah Dalam Kehidupan Sehari",
            description: "Belakangan banyak yang mengeluhkan bahwa bumi semakin panas, bahkan mendekati kondisi neraka.",
            date: "March 01, 2021",
            link: "/about-us"
        },
    ]

    return (
        <>
            <section className="py-20">
                <div className="container">
                    <div className="flex flex-col gap-y-8 md:gap-y-12">
                        <HeaderSection title="Artikel" />
                        <div className="flex flex-col gap-y-4 md:gap-y-8">
                            <h2 className="max-w-xl title-section">Artikel Unggulan Waste Wise</h2>
                            <div className="grid grid-cols-1 gap-2 md:gap-4 lg:grid-cols-2">
                                {articleData.map((items) => (
                                    <CardArticle title={items.title} description={items.description} date={items.date} link={items.link} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
