export default function ButtonNavigation(props) {
    return (
        <>
            <button>
                <a href={props.link} className="text-sm font-bold bg-primary text-white px-5 py-2.5 rounded-full">{props.name}</a>
            </button>
        </>
    )
}
