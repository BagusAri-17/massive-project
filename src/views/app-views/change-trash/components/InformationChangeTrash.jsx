export default function InformationChangeTrash() {
    return (
        <>
            <section>
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl font-bold md:text-3xl text-secondary">Informasi Penukaran Sampah</h2>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <form className="flex flex-col gap-y-4">
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="" className="text-sm font-medium md:text-base text-secondary">Kategori Sampah</label>
                                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-8">
                                    <div>
                                        <input type="radio" id="anorganik" name="kategori-sampah" value="anorganik" className="hidden peer" />
                                        <label htmlFor="anorganik" className="inline-flex items-center justify-between w-full p-5 text-gray-300 bg-white border border-gray-300 rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-white peer-checked:bg-primary hover:text-secondary hover:bg-gray-100">
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">Anorganik</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" id="organik" name="kategori-sampah" value="organik" className="hidden peer" />
                                        <label htmlFor="organik" className="inline-flex items-center justify-between w-full p-5 text-gray-300 bg-white border border-gray-300 rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-white peer-checked:bg-primary hover:text-secondary hover:bg-gray-100">
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">Organik</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="" className="text-sm font-medium md:text-base text-secondary">Estimasi Berat</label>
                                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-8">
                                    <div>
                                        <input type="radio" id="ten-kg" name="estimasi-berat" value="ten-kg" className="hidden peer" />
                                        <label htmlFor="ten-kg" className="inline-flex items-center justify-between w-full p-5 text-gray-300 bg-white border border-gray-300 rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-white peer-checked:bg-primary hover:text-secondary hover:bg-gray-100">
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">10 KG</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" id="twenty-kg" name="estimasi-berat" value="twenty-kg" className="hidden peer" />
                                        <label htmlFor="twenty-kg" className="inline-flex items-center justify-between w-full p-5 text-gray-300 bg-white border border-gray-300 rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-white peer-checked:bg-primary hover:text-secondary hover:bg-gray-100">
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">20 KG</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" id="thirty-kg" name="estimasi-berat" value="thirty-kg" className="hidden peer" />
                                        <label htmlFor="thirty-kg" className="inline-flex items-center justify-between w-full p-5 text-gray-300 bg-white border border-gray-300 rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-white peer-checked:bg-primary hover:text-secondary hover:bg-gray-100">
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">30 KG</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <button type="submit" className="px-4 py-2 text-sm font-semibold text-white rounded-full md:px-6 md:py-3 md:text-base bg-primary">Kirim</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
