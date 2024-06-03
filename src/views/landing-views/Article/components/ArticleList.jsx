import CardArticle from "../../../../components/shared-components/CardArticle";

export default function ArticleList() {
    const articleData = [
        {
            id: 1,
            title: "CARA MENGURANGI SAMPAH DALAM KEHIDUPAN SEHARI...",
            description: "Belakangan banyak yang mengeluhkan bahwa bumi semakin panas, bahkan mendekati kondisi neraka. ",
            date: "March 01, 2021",
            link: "#"
        },
        {
            id: 2,
            title: "Fesyen Cepat (Fast Fashion)",
            description: "Seringkali kita terdorong untuk membeli pakaian yang sebenarnya tidak dibutuhkan, terpengaruh oleh prom...",
            date: "March 01, 2021",
            link: "#"
        },
        {
            id: 3,
            title: "Pandemi Plastik: Ungkap Dampak Global Penggun...",
            description: "menginvestigasi dampak global dari penggunaan plastik sekali pakai, termasuk kontaminasi lingkunga...",
            date: "March 01, 2021",
            link: "#"
        },
        {
            id: 4,
            title: "Mengenal Dampak Sampah Elektronik: Tantangan da...",
            description: "Dampak lingkungan dan kesehatan dari limbah elektronik yang terus meningkat, serta inisiatif-inisiatif untuk mendau...",
            date: "March 01, 2021",
            link: "#"
        },
        {
            id: 5,
            title: "Sampah Organik: Dari Membusuk Menjadi Berkah",
            description: "potensi besar sampah organik yang dapat diolah menjadi pupuk kompos dan energi biogas. Sampah organik...",
            date: "March 01, 2021",
            link: "#"
        },
        {
            id: 6,
            title: "Menuju Kota Bebas Sampah: Mimpi atau Real...",
            description: "Berbagai kota di Indonesia untuk mewujudkan mimpi kota bebas sampah. Dari gerakan pilah sampah...",
            date: "March 01, 2021",
            link: "#"
        },
    ]

    return (
        <>
            <section className="py-10">
                <div className="container">
                    <div className="flex flex-col gap-y-8 md:gap-y-12">
                        <div className="flex flex-col gap-y-4 md:gap-y-8">
                            <div className="grid grid-cols-1 gap-2 py-20 md:gap-4 lg:grid-cols-2">
                                {articleData.map((items) => (
                                    <CardArticle key={items.id} title={items.title} description={items.description} date={items.date} link={items.link} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center">
                        <nav className="inline-flex -space-x-px rounded-md shadow-sm isolate" aria-label="Pagination">
                            <a href="#" className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                <span className="sr-only">Previous</span>
                                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" aria-current="page" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">1</a>
                            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                            <a href="#" className="relative items-center hidden px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                            <a href="#" className="relative items-center hidden px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                            <a href="#" className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                <span className="sr-only">Next</span>
                                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    )
}
