import { FiGift } from "react-icons/fi";

export default function ChangePoint() {
    const changePointData = [
        {
            id: 1,
            amount: "50.000",
            point: "50",
        },
        {
            id: 2,
            amount: "100.000",
            point: "100",
        },
    ]

    return (
        <>
            <section>
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl font-bold md:text-3xl text-secondary">Tukarkan Poinmu</h2>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:gap-8">
                        {changePointData.map((items) => (
                            <div key={items.id} className="p-4 bg-white rounded-lg shadow md:p-6">
                                <div className="flex flex-row gap-4 lg:flex-col">
                                    <div className="flex flex-col gap-2">
                                        <FiGift className="size-12 text-primary" />
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-start">
                                                <span className="text-xs font-bold text-secondary">Rp</span>
                                                <h3 className="text-xl font-bold md:text-2xl text-secondary">{items.amount}</h3>
                                            </div>
                                            <p className="text-base font-bold md:text-lg text-primary">{items.point} Poin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
