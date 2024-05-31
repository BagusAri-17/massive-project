import heroImage from "../../../../assets/landing-views/campaign/hero-campaign-image.png"

export default function Hero() {
    return (
        <>
            <section className="py-20 mt-20">
                <div className="container">
                    <div className="grid grid-cols-12">
                        {/* text */}
                        <div className="col-span-7">
                            <div>
                                <h1 className="font-bold text-[60px] text-black">Program Waste Wise</h1>
                                <p className="font-bold text-[25px] text-black">Waste Wise Indonesia memiliki kampanye dan program yang juga dapat kamu dukung dan ikuti.</p>
                            </div>
                        </div>

                        {/* illustrasi */}
                        <div className="col-span-5">
                            <div>
                                <img src={heroImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}