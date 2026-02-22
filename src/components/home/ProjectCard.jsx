export default function ProjectCard({ id, title, startDate, endDate, onClickRef }) {
    return (
        <details className="py-8" onClick={() => onClickRef(id, true)}>
            <summary
                className="flex page-button cursor-pointer items-center justify-between gap-4 font-medium text-black">
                <span className="flex flex-col sm:flex-row sm:items-center mt-1">
                    <span className="text-2xl/6 sm:text-3xl/7 font-extralight">{title}</span>
                    <span className="text-sm sm:text-base sm:ml-10 font-satoshi italic">{startDate} - {endDate}</span>
                </span>

                <svg
                    className="size-8 shrink-0"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                          d="M12 5v14M5 12h14"></path>
                </svg>
            </summary>
        </details>
    )
}
