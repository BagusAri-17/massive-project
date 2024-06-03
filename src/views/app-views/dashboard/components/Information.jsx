import { FiGift } from "react-icons/fi";

export default function Information() {

    const informationData = [
        {
            id: 1,
            amount: "50",
            title: "Total Poinmu",
            icon: <FiGift className="size-12 text-primary" />
        },
        {
            id: 2,
            amount: "50",
            title: "Pengelola Bank Sampah",
            icon: <FiGift className="size-12 text-primary" />
        },
        {
            id: 3,
            amount: "50",
            title: "Riwayat Transaksi",
            icon: <FiGift className="size-12 text-primary" />
        },
    ]

    return (
        <>
            <section>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-8">
                    {informationData.map((items) => (
                        <div key={items.id} className="p-6 bg-white rounded-lg shadow">
                            <div className="flex flex-row gap-4 lg:flex-col">
                                {items.icon}
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold md:text-2xl text-secondary">{items.amount}</h3>
                                    <p className="text-sm md:text-base text-secondary">{items.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
