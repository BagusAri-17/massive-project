export default function CardTestimonial(props) {
    return (
        <>
            <div className="p-6 bg-white shadow-lg rounded-2xl">
                <div className="flex flex-col gap-y-4">
                    <p className="text-sm leading-6 text-secondary">{props.comment}</p>
                    <div className="flex items-center gap-x-4">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="" className="rounded-full size-12" />
                        <div className="flex flex-col">
                            <p className="font-bold leading-6 text-secondary">{props.name}</p>
                            <p className="text-xs leading-6 text-secondary">{props.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
