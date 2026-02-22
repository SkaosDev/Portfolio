const TECHNOLOGIES = {
    react: { label: "React", icon: "react" },
    html: { label: "HTML", icon: "html" },
    css: { label: "CSS", icon: "css" },
    js: { label: "JavaScript", icon: "js" },
    python: { label: "Python", icon: "python" },
    express: { label: "Express", icon: "express" },
    node: { label: "Node.js", icon: "node" },
    mongodb: { label: "MongoDB", icon: "mongodb" },
    mysql: { label: "MySQL", icon: "mysql" },
    tailwindcss: { label: "Tailwind CSS", icon: "tailwindcss" },
    bootstrap: { label: "Bootstrap", icon: "bootstrap" },
    php: { label: "Php", icon: "php" },
    cpp: { label: "C++", icon: "cpp" },
    java: { label: "Java", icon: "java" },
    electron: { label: "Electron", icon: "electron" },
};

/** @typedef {"react" | "html" | "css" | "js" | "python" | "express" | "node" | "mongodb" | "mysql" | "tailwindcss" | "bootstrap" | "php" | "cpp" | "java" | "electron"} TechnologyKey */
/** @typedef {"losange" | "demi-losange" | "demi-losange-reverse" | "cercle" | "demi-cercle" | "demi-cercle-reverse" | "triangle" | "triangle-reverse" | "carre" } ShapeKey */
/** @typedef {"orange" | "pink" | "black" } ColorKey */

/**
 * @param {Object} props
 * @param {string} props.projectId
 * @param {string} props.title
 * @param {string} props.startDate
 * @param {string} props.endDate
 * @param {string} props.description
 * @param {TechnologyKey[]} props.technologies
 * @param {ShapeKey[]} props.shape
 * @param {ColorKey[]} props.color
 */
export default function ProjectHeader(
    {
        projectId,
        title,
        startDate,
        endDate,
        description,
        technologies,
        shape,
        color
    })
{
    const techList = technologies
        .map(key => TECHNOLOGIES[key])
        .filter(Boolean);

    return (
        <section className="project-header" id={projectId}>
            <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 w-full">
                <div className="draw flex mb-5">
                    <div className={`${shape[0]} bg-${color[0]}-custom`}></div>
                    <div className={`${shape[1]} bg-${color[1]}-custom`}></div>
                    <div className={`${shape[2]} bg-${color[2]}-custom`}></div>
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-light">{title}</h2>
                <p className="text-lg sm:text-xl md:text-2xl font-satoshi font-light sm:max-w-2/3">{description}</p>
                <ul className="mt-3 flex flex-wrap flex-row gap-2">
                    <p className="italic font-satoshi font-normal">{startDate} - {endDate}</p>
                    <span className="font-normal mx-1">⋅</span>
                    {techList.map(tech => (
                        <li key={tech.label} title={tech.label}>
                            <div className={`icon-small icon-${tech.icon} bg-black`}></div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
