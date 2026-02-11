export default function Footer() {
    return (
        <footer className="w-full border-0 bg-white">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 py-12">
                {/* Séparateur rayé */}
                <div className="mb-10 h-[2px] w-full bg-repeating-linear-gradient bg-[length:40px_2px]"
                     style={{
                         backgroundImage: 'repeating-linear-gradient(90deg, black 0px, black 20px, transparent 20px, transparent 40px)'
                     }}>
                </div>

                {/* Nom en gros */}
                <div className="mb-8">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-black">
                        clément royer.
                    </h2>
                </div>

                {/* Réseaux sociaux */}
                <div className="flex items-center justify-between flex-wrap gap-4 font-satoshi">
                    <p className="text-sm text-black/60">
                        © {new Date().getFullYear()} clément royer
                    </p>
                    <div className="flex gap-2 sm:gap-6">
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href="https://instagram.com/clement_levrai"
                            aria-label="Instagram"
                        >
                            <div className="icon-small icon-instagram bg-black"></div>
                        </a>
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href="https://linkedin.com/in/clementroyer2007"
                            aria-label="LinkedIn"
                        >
                            <div className="icon-small icon-linkedin bg-black"></div>
                        </a>
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href="mailto:clement@royer-perso.fr"
                            aria-label="Email"
                        >
                            <div className="icon-small icon-mail bg-black"></div>
                        </a>
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href="https://github.com/SkaosDev"
                            aria-label="GitHub"
                        >
                            <div className="icon-small icon-github bg-black"></div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
