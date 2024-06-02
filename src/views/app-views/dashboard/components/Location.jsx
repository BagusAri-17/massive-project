export default function Location() {
    return (
        <>
            <section>
                <div className="">
                    <div className="flex flex-col gap-y-4">
                        <h3 className="text-2xl font-bold">Pilih Lokasi Pengelola Bank Sampah</h3>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-8">
                            <div className="p-6 bg-white rounded-lg shadow">
                                <div className="flex flex-col gap-y-4">
                                    <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="rounded-lg" />
                                    <div className="flex flex-col gap-y-2">
                                        <h3 className="text-lg font-bold">Bank Sampah Cipta Abadi</h3>
                                        <div className="flex flex-col gap-y-1">
                                            <p className="text-xs text-secondary">Lokasi</p>
                                            <p className="text-xs text-secondary">Lapangan Bola RW.12, BIP, Blk. F, Kota Serang, Banten 42112</p>
                                        </div>
                                        <div className="flex flex-col gap-y-1">
                                            <p className="text-xs text-secondary">Jam</p>
                                            <p className="text-xs text-secondary">Buka Pukul 09.00 - 17.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
