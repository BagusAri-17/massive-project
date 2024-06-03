import { FiMapPin, FiInstagram, FiPhone } from "react-icons/fi";

export default function Location() {
    return (
        <>
            <section>
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl font-bold md:text-3xl text-secondary">Pilih Lokasi Pengelola Bank Sampah</h2>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 xl:grid-cols-4 xl:gap-8">
                        <div className="p-4 bg-white rounded-lg shadow">
                            <div className="flex flex-col gap-y-4">
                                <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="rounded-lg" />
                                <div className="flex flex-col gap-y-4">
                                    <h3 className="text-lg font-bold text-secondary">Bank Sampah Cipta Abadi</h3>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-medium text-secondary">Lokasi</p>
                                        <p className="text-xs text-secondary">Lapangan Bola RW.12, BIP, Blk. F, Kota Serang, Banten 42112</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-medium text-secondary">Jam</p>
                                        <p className="text-xs text-secondary">Buka Pukul 09.00 - 17.00</p>
                                    </div>
                                    <div className="inline-flex flex-wrap items-center gap-2 group">
                                        <a href="" className="cursor-pointer rounded-full border border-secondary/5 bg-secondary/5 p-2 text-secondary transition-colors hover:border-secondary/10 hover:bg-secondary/10 hover:!opacity-100 group-hover:opacity-70">
                                            <FiPhone className="size-4" />
                                        </a>
                                        <a href="" className="cursor-pointer rounded-full border border-secondary/5 bg-secondary/5 p-2 text-secondary transition-colors hover:border-secondary/10 hover:bg-secondary/10 hover:!opacity-100 group-hover:opacity-70">
                                            <FiInstagram className="size-4" />
                                        </a>
                                        <a href="" className="cursor-pointer rounded-full border border-secondary/5 bg-secondary/5 p-2 text-secondary transition-colors hover:border-secondary/10 hover:bg-secondary/10 hover:!opacity-100 group-hover:opacity-70">
                                            <FiMapPin className="size-4" />
                                        </a>
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
