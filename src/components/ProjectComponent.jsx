export default function ProjectComponent({ id, title, startDate, endDate, onClickRef }) {
    return (
        <details className="px-4 py-3" onClick={() => onClickRef(id, true)}>
            <summary
                className="flex cursor-pointer items-center justify-between gap-4 font-medium text-black">
                <span>{title} | {startDate} - {endDate}</span>

                <svg
                    className="size-5 shrink-0"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 5v14M5 12h14"></path>
                </svg>
            </summary>
        </details>
    )
}
