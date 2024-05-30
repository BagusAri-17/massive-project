import { FaHome } from "react-icons/fa";

export default function ContactUs() {
    return (
        <>
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center gap-y-2 md:gap-y-4">
                            <FaHome className="text-5xl text-secondary" />
                            <h2 className="text-4xl font-bold text-primary">Address</h2>
                            <p className="max-w-xs text-center text-secondary">2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                        </div>
                        <div className="flex flex-col items-center gap-y-2 md:gap-y-4">
                            <FaHome className="text-5xl text-secondary" />
                            <h2 className="text-4xl font-bold text-primary">Phone</h2>
                            <p className="max-w-xs text-center text-secondary">(229) 555-0109</p>
                        </div>
                        <div className="flex flex-col items-center gap-y-2 md:gap-y-4">
                            <FaHome className="text-5xl text-secondary" />
                            <h2 className="text-4xl font-bold text-primary">Email</h2>
                            <p className="max-w-xs text-center text-secondary">sinergitani@stansa.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
