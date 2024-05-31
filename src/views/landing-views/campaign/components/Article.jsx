import CardArticle from "../../../../components/shared-components/CardArticle";

export default function Article() {
    const articleData = [
        {
            id: 1,
            title: "Pilah Sampah Jaga Bumi.",
            description: "Kampanye 'Pilah Sampah, Jaga Bumi Kita!' bertujuan untuk meningkatkan kesadaran masyarakat tentang...",
            date: "March 01, 2021",
            link: "#"
        },
        {
            id: 2,
            title: "Kurangi Plastik Selamatkan Lautan",
            description: "Kampanye Kurangi Plastik Selamatkan Lautan bertujuan untuk mengurangi penggunaan plastik sekali pakai...",
            date: "March 01, 2021",
            link: "#"
        },
        {
            id: 3,
            title: "Sampah Jadi Karya",
            description: "Kampanye 'Pilah Sampah, Jaga Bumi Kita!' bertujuan untuk meningkatkan kesadaran masyarakat tentang...",
            date: "March 01, 2021",
            link: "#"
        },
        {
            id: 4,
            title: "Hemat Sumber Daya",
            description: ".Meningkatkan kesadaran masyarakat tentang pentingnya pengurangan konsumsi (reduce) untuk melestarik...",
            date: "March 01, 2021",
            link: "#"
        },
    ]

    return (
        <>
            <section className="py-20">
                <div className="container">
                    <div className="flex flex-col gap-y-8 md:gap-y-12">
                        <div className="flex flex-col gap-y-4 md:gap-y-8">
                            <h1 className="font-bold text-[25px] text-black">Tujuan Kami</h1>
                            <p className="text-base">
                            "Program Waste Wise" adalah inisiatif yang ditawarkan oleh Waste Wise Indonesia untuk mendorong partisipasi aktif masyarakat dalam upaya pengelolaan sampah yang bertanggung jawab dan berkelanjutan. 
                            Melalui program ini, pengguna dapat mendukung kampanye dan program-program yang ditawarkan oleh Waste Wise Indonesia, termasuk edukasi tentang pemilahan sampah, kegiatan pemilahan sampah bersama, 
                            workshop dan pelatihan, serta tantangan-tantangan kreatif untuk mendaur ulang sampah. Bergabung dengan Program Waste Wise memungkinkan pengguna untuk berkontribusi secara nyata dalam menciptakan 
                            lingkungan yang lebih bersih, sehat, dan berkelanjutan untuk masa depan yang lebih baik.
                            </p>
                            <div className="grid grid-cols-1 gap-2 md:gap-4 lg:grid-cols-2 py-20">
                                {articleData.map((items) => (
                                    <CardArticle key={items.id} title={items.title} description={items.description} date={items.date} link={items.link} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
