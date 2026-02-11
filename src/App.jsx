import './App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

function App() {
    return (
        <div className="bg-white min-h-[100dvh] text-black">
            <Navbar />
            <main className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10">
                <section id="home">
                    <div className="absolute bottom-6 sm:bottom-8 md:bottom-10">
                        <div className="draw flex mb-5">
                            <div className="demi-cercle bg-orange-custom"></div>
                            <div className="demi-cercle bg-yellow-custom"></div>
                            <div className="cercle bg-black"></div>
                        </div>
                        <h2 className="text-6xl sm:text-7xl md:text-8xl font-normal md:font-light">clément royer.</h2>
                        <p className="font-extralight text-2xl sm:text-3xl md:text-4xl sm:max-w-2/3">je crée des espaces où les gens se retrouvent, s’amusent et s’entraident.</p>
                    </div>
                </section>
                <section id="citation" className="flex justify-center items-end flex-col text-right">
                    <div className="relative font-extralight text-[22px] sm:text-3xl md:text-4xl max-w-5/6 md:max-w-3/4 lg:max-w-2/3 leading-none">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 z-0">
                            <div className="big-cercle bg-yellow-custom"></div>
                        </div>
                        <span className="relative z-2">
                            "the people who are crazy enough to think they can change the world, are the ones who do."
                        </span>
                    </div>
                    <p className="z-2 font-satoshi sm:text-lg">— Steve Jobs</p>
                </section>
                <section id="projects" className="mb-80">projets</section>
                <section id="about" className="mb-80">à propos</section>
                <section id="contact" className="mb-80">me contacter</section>
            </main>
            <Footer />
            <CustomCursor />
        </div>
    );
}

export default App
