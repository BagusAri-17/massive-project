import ButtonNavigation from "./ButtonNavigation"

export default function CardArticle(props) {
    return (
        <>
            <a href={props.link} className="flex flex-col items-center bg-white shadow-lg md:flex-row rounded-2xl">
                <img src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" className="object-cover w-full h-64 rounded-t-2xl md:rounded-t-none md:rounded-tl-2xl md:rounded-bl-2xl" />
                <div className="flex flex-col items-start p-6 gap-y-4">
                    <div className="flex flex-col gap-y-2">
                        <p className="text-xs text-secondary">{props.date}</p>
                        <h3 className="text-lg font-bold leading-7 md:text-xl text-secondary line-clamp-2">{props.title}</h3>
                        <p className="text-sm leading-6 text-secondary line-clamp-3">{props.description}</p>
                    </div>
                    <div className="mt-2 md:mt-3">
                        <ButtonNavigation link={props.link} name="Baca Selengkapnya" />
                    </div>
                </div>
            </a>
        </>
    )
}
