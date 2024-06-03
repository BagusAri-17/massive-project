export default function TransactionHistoryTable() {
    return (
        <>
            <section>
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl font-bold md:text-3xl text-secondary">Riwayat Transaksi</h2>
                    <div className="p-6 bg-white rounded-lg shadow">

                        <div className="overflow-auto">
                            <table className="w-full text-sm text-left text-gray-400 rtl:text-right">
                                <thead className="text-xs uppercase bg-gray-100 text-secondary">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3">
                                            No.
                                        </th>
                                        <th className="px-3 py-3">
                                            Nama
                                        </th>
                                        <th className="px-3 py-3">
                                            Alamat
                                        </th>
                                        <th className="px-3 py-3">
                                            Poin
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100">
                                        <td className="px-3 py-2">
                                            1
                                        </td>
                                        <td className="px-3 py-2">
                                            Bagus Ari
                                        </td>
                                        <td className="px-3 py-2">
                                            Jalan. Pahlawan 
                                        </td>
                                        <td className="px-3 py-2">
                                            10
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
