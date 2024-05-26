export default function HeaderSection(props) {
    return (
        <>
            <div className="flex items-center gap-x-4">
                <div className="w-20 border-2 border-[#91B0B6]"></div>
                <div>
                    <h3 className="font-bold uppercase text-[#91B0B6]">{props.title}</h3>
                </div>
            </div>
        </>
    )
}
