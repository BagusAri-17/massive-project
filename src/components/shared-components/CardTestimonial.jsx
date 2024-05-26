export default function CardTestimonial(props) {
    return (
        <>
            <div className="p-6 bg-white shadow-lg rounded-2xl">
                <div className="flex flex-col gap-y-6">
                    <p className="text-sm">{props.comment}</p>
                    <div className="flex gap-x-4">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="" className="rounded-full size-12" />
                        <div className="flex flex-col gap-y-1">
                            <p className="font-bold">{props.name}</p>
                            <p className="text-xs">{props.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
