import ButtonNavigation from "./ButtonNavigation"

export default function CardArticle(props) {
    return (
        <>
            <a href={props.link} className="flex items-center bg-white shadow-lg rounded-2xl">
                <img src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" className="object-cover w-full h-64 rounded-tl-2xl rounded-bl-2xl" />
                <div className="flex flex-col items-start p-6 gap-y-4">
                    <div className="flex flex-col gap-y-2">
                        <p className="text-xs">{props.date}</p>
                        <p className="text-xl font-bold">{props.title}</p>
                        <p className="text-sm">{props.description}</p>
                    </div>
                    <div className="mt-2.5">
                        <ButtonNavigation link={props.link} name="Lihat Selengkapnya" />
                    </div>
                </div>
            </a>
        </>
    )
}
