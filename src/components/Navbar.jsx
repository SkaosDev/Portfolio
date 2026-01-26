import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
    { label: "Accueil", href: "#home" },
    { label: "Projets", href: "#projects" },
    { label: "À propos", href: "#about" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const panelRef = useRef(null);

    // Fermer avec Escape
    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === "Escape") setOpen(false);
        }
        if (open) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    // Bloquer le scroll du body quand le menu est ouvert
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // Focus sur le panel à l’ouverture (accessibilité de base)
    useEffect(() => {
        if (open) panelRef.current?.focus();
    }, [open]);

    function close() {
        setOpen(false);
    }

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-white/90 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between p-6">
                {/* Brand */}
                <a href="#home" className="grid place-items-center rounded-full bg-black text-white transition hover:bg-blue-800 px-6 py-4 text-sm font-light whitespace-nowrap"
                >
                    <span className="relative top-[1px] leading-none">Clément Royer</span>
                </a>

                {/* Desktop links */}
                <div className="hidden items-center gap-10 md:flex">
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="font-light relative top-[1px] text-sm text-black transition hover:text-blue-800 whitespace-nowrap"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={close}
                        className="grid w-full place-items-center rounded-full bg-black text-white transition hover:bg-blue-800 p-4 px-6 text-sm font-light whitespace-nowrap"
                    >
                        <span className="relative top-[1px] leading-none">Me contacter</span>
                    </a>
                </div>

                {/* Mobile burger */}
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-black p-3 text-white transition md:hidden"
                    aria-label="Ouvrir le menu"
                    aria-haspopup="dialog"
                    aria-expanded={open}
                    onClick={() => setOpen(true)}
                >
                    <BurgerIcon />
                </button>
            </nav>

            {/* Offcanvas mobile (plein écran) */}
            <div
                className={[
                    "fixed inset-0 z-[60] md:hidden",
                    "transition-opacity duration-300",
                    open ? "opacity-100" : "pointer-events-none opacity-0",
                ].join(" ")}
                aria-hidden={!open}
            >
                {/* Backdrop */}
                <div
                    className={[
                        "absolute inset-0 bg-black/30", // <- ajoute un voile sinon c'est brut
                        "transition-opacity duration-300",
                        open ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    onClick={close}
                />

                {/* Panel (statique, pas d'animation) */}
                <div
                    role="dialog"
                    aria-modal="true"
                    tabIndex={-1}
                    ref={panelRef}
                    className="absolute inset-0 bg-white text-black outline-none"
                >
                    <div className="flex h-screen bg-white flex-col px-6">
                        {/* Top row - FIXE (pas d'animation) */}
                        <div className="flex items-center justify-between py-6">
                            <a href="#home" className="grid place-items-center rounded-full bg-black text-white transition hover:bg-blue-800 px-6 py-4 text-sm font-light whitespace-nowrap"
                            >
                                <span className="relative top-[1px] leading-none">Clément Royer</span>
                            </a>

                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full bg-black text-white p-3 transition"
                                aria-label="Fermer le menu"
                                onClick={close}
                            >
                                <CloseIcon />
                            </button>
                        </div>

                        {/* Contenu - ANIMÉ seulement */}
                        <div
                            className={[
                                "flex flex-1 flex-col items-start justify-center",
                                "transition-transform duration-300 ease-out",
                                open ? "translate-x-0" : "translate-x-full",
                            ].join(" ")}
                        >
                            <ul className="space-y-8 mb-5">
                                {NAV_LINKS.map((l) => (
                                    <li key={l.href}>
                                        <a
                                            href={l.href}
                                            onClick={close}
                                            className="block text-4xl font-semibold tracking-tight text-black transition hover:text-blue-800"
                                        >
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a
                                        href="#contact"
                                        onClick={close}
                                        className="block text-4xl font-semibold tracking-tight text-black transition hover:text-blue-800"
                                    >
                                        Me contacter
                                    </a>
                                </li>
                            </ul>

                        </div>

                        {/* Footer (optionnel) : si tu veux qu'il ne bouge pas, laisse-le ici hors du bloc animé */}
                        <div className="py-6 text-sm text-black/60">
                            <div className="flex items-center justify-between">
                                <span>© {new Date().getFullYear()} Clément Royer</span>
                                <span className="xs:inline">Insta Mail Linkedin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function BurgerIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}
