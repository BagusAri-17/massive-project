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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-8">
                    {informationData.map((items) => (
                        <div key={items.id} className="p-6 bg-white rounded-lg shadow">
                            <div className="flex flex-col gap-y-4">
                                {items.icon}
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-bold">{items.amount}</h3>
                                    <p className="text-sm">{items.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
