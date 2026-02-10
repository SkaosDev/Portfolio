import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
    { label: "accueil", href: "#home" },
    { label: "projets", href: "#projects" },
    { label: "à propos", href: "#about" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const panelRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === "Escape") setOpen(false);
        }
        if (open) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        if (open) panelRef.current?.focus();
    }, [open]);

    useEffect(() => {
        const setVar = () => {
            const el = navRef.current;
            const height = el ? `${el.offsetHeight}px` : getComputedStyle(document.documentElement).getPropertyValue('--navbar-height') || '64px';
            document.documentElement.style.setProperty('--navbar-height', height);
        };

        setVar();

        let ro;
        if (typeof ResizeObserver !== "undefined") {
            ro = new ResizeObserver(setVar);
            if (navRef.current) ro.observe(navRef.current);
        }

        window.addEventListener('resize', setVar);

        return () => {
            if (ro) ro.disconnect();
            window.removeEventListener('resize', setVar);
        };
    }, []);

    function close(id) {
        setOpen(false);
        if (!id) return;
        setTimeout(() => {
            const target = document.getElementById(id);
            if (!target) return;
            const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'), 10) || 0;
            const top = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }, 80);
    }

    return (
        <>
        <header ref={navRef} className="sticky top-0 z-50 border-white/10 font-satoshi">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 sm:p-8 md:p-10 ">
                <a href="#home"
                   className="grid place-items-center rounded-full bg-black text-white px-6 py-4 whitespace-nowrap"
                >
                    <span className="relative leading-none">clément royer.</span>
                </a>

                <div className="hidden items-center gap-10 md:flex">
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="relative text-black whitespace-nowrap"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="grid w-full place-items-center rounded-full bg-black text-white p-4 px-6 whitespace-nowrap"
                    >
                        <span className="relative leading-none">me contacter</span>
                    </a>
                </div>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-black p-3 text-white transition md:hidden"
                    aria-label="Ouvrir le menu"
                    aria-haspopup="dialog"
                    aria-expanded={open}
                    onClick={() => setOpen(true)}
                >
                    <BurgerIcon/>
                </button>
            </nav>

            <div
                className={[
                    "fixed inset-0 z-[60] md:hidden",
                    "transition-opacity duration-300",
                    open ? "opacity-100" : "pointer-events-none opacity-0",
                ].join(" ")}
                aria-hidden={!open}
            >
                <div
                    className={[
                        "absolute inset-0 bg-black/30",
                        "transition-opacity duration-300",
                        open ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    onClick={() => close()}
                />

                <div
                    role="dialog"
                    aria-modal="true"
                    tabIndex={-1}
                    ref={panelRef}
                    className="absolute inset-0 bg-white text-black outline-none"
                >
                    <div className="flex h-screen bg-white flex-col px-6 sm:px-8 md:px-10">
                        <div className="flex items-center justify-between py-6 sm:py-8 md:py-10">
                            <a href="#home" onClick={() => close('home')}
                               className="grid place-items-center rounded-full bg-black text-white px-6 py-4 whitespace-nowrap"
                            >
                                <span className="relative leading-none">clément royer.</span>
                            </a>

                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full bg-black text-white p-3 transition"
                                aria-label="Fermer le menu"
                                onClick={() => close()}
                            >
                                <CloseIcon/>
                            </button>
                        </div>

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
                                            onClick={() => close(l.href.slice(1))}
                                            className="block text-4xl font-normal tracking-tight text-black"
                                        >
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a
                                        href="#contact"
                                        onClick={() => close('contact')}
                                        className="block text-4xl font-normal tracking-tight text-black"
                                    >
                                        me contacter
                                    </a>
                                </li>
                            </ul>

                        </div>

                        <div className="py-6 text-sm text-black/60 ">
                            <div className="flex items-center justify-between">
                                <span>© {new Date().getFullYear()} clément royer</span>
                                <span className="xs:inline flex gap-2">
                                    <a target="_blank" href="https://instagram.com/clement_levrai">
                                        <div className="icon-small icon-instagram bg-black/60"></div>
                                    </a>
                                    <a target="_blank" href="https://linkedin.com/in/clementroyer2007">
                                        <div className="icon-small icon-linkedin bg-black/60"></div>
                                    </a>
                                    <a target="_blank" href="mailto:clement@royer-perso.fr">
                                        <div className="icon-small icon-mail bg-black/60"></div>
                                    </a>
                                    <a target="_blank" href="https://github.com/SkaosDev">
                                        <div className="icon-small icon-github bg-black/60"></div>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="gradient-blur">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </>
    );
}

function BurgerIcon() {
    return (
        <svg
            width="24"
            height="24"
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
            width="24"
            height="24"
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