import HeaderSection from "@/components/shared-components/HeaderSection"

export default function Message() {
    return (
        <>
            <section className="py-20">
                <div className="container">
                    <div className="flex flex-col gap-y-8 md:gap-y-12">
                        <HeaderSection title="Message" />
                        <div className="flex flex-col justify-between lg:flex-row gap-y-4 md:gap-y-8">
                            <div className="flex flex-col gap-y-2 md:gap-y-4">
                                <h2 className="title-section">Kirimkan Pesan kepada Kami</h2>
                                <p className="text-sm leading-6 md:leading-8 text-secondary md:text-base">Kirimkan pesan Anda dan biarkan kami tahu apa yang bisa kami bantu.</p>
                            </div>
                            <form action="" className="flex flex-col w-full lg:max-w-xl gap-y-2 md:gap-y-4">
                                <div>
                                    <input type="text" name="name" id="name" className="w-full p-4 rounded-lg bg-[#13A94F]/25 text-secondary outline-none focus:outline-primary" placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" name="email" id="email" className="w-full p-4 rounded-lg bg-[#13A94F]/25 text-secondary outline-none focus:outline-primary" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" name="subject" id="subject" className="w-full p-4 rounded-lg bg-[#13A94F]/25 text-secondary outline-none focus:outline-primary" placeholder="Subject" />
                                </div>
                                <div>
                                    <textarea name="message" id="message" rows={4} className="w-full p-4 rounded-lg bg-[#13A94F]/25 text-secondary outline-none focus:outline-primary" placeholder="Message"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="px-4 py-2 text-sm font-semibold text-white rounded-full md:px-6 md:py-3 md:text-base bg-primary">Kirim</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
