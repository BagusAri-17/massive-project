export default function ButtonNavigation(props) {
    return (
        <>
            <button>
                <a href={props.link} className="px-4 py-2 text-sm font-semibold text-white rounded-full md:px-6 md:py-3 md:text-base bg-primary">{props.name}</a>
            </button>
        </>
    )
}
