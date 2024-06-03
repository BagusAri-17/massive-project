export default function ProfileForm() {
    return (
        <>
            <section>
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl font-bold md:text-3xl text-secondary">Profil Saya</h2>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <form className="flex flex-col gap-y-4">
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="" className="text-sm font-medium md:text-base text-secondary">Nama Lengkap</label>
                                <input type="text" placeholder="Isi nama lengkap Anda" className="w-full px-5 py-3 text-sm transition duration-300 bg-transparent border border-gray-300 rounded-lg outline-none focus:border-primary text-secondary" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="" className="text-sm font-medium md:text-base text-secondary">Email</label>
                                <input type="email" placeholder="Isi email Anda" className="w-full px-5 py-3 text-sm transition duration-300 bg-transparent border border-gray-300 rounded-lg outline-none focus:border-primary text-secondary" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="" className="text-sm font-medium md:text-base text-secondary">Alamat</label>
                                <input type="text" placeholder="Isi alamat Anda" className="w-full px-5 py-3 text-sm transition duration-300 bg-transparent border border-gray-300 rounded-lg outline-none focus:border-primary text-secondary" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="" className="text-sm font-medium md:text-base text-secondary">No. Telepon</label>
                                <input type="number" placeholder="Isi nomor telepon Anda" className="w-full px-5 py-3 text-sm transition duration-300 bg-transparent border border-gray-300 rounded-lg outline-none focus:border-primary text-secondary" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="" className="text-sm font-medium md:text-base text-secondary">Jenis Kelamin</label>
                                <select name="" id="" className="w-full px-5 py-3 text-sm transition duration-300 bg-transparent border border-gray-300 rounded-lg outline-none focus:border-primary text-secondary">
                                    <option value="" className="text-gray-300">Pilih jenis kelamin Anda</option>
                                    <option value="">Laki-laki</option>
                                    <option value="">Perempuan</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="" className="text-sm font-medium md:text-base text-secondary">Tanggal Lahir</label>
                                <input type="date" placeholder="Isi tanggal lahir Anda" className="w-full px-5 py-3 text-sm transition duration-300 bg-transparent border border-gray-300 rounded-lg outline-none focus:border-primary text-secondary" />
                            </div>
                            <div>
                                <button type="submit" className="px-4 py-2 text-sm font-semibold text-white rounded-full md:px-6 md:py-3 md:text-base bg-primary">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
