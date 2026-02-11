import './App.css'
import Navbar from "./components/Navbar.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

function App() {
    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />
            <main className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10">
                <section id="home">

                    <div className="absolute bottom-6 sm:bottom-8 md:bottom-10">
                        <div className="draw flex mb-5">
                            <div className="demi-cercle bg-orange-custom"></div>
                            <div className="demi-cercle bg-yellow-custom"></div>
                            <div className="cercle bg-black"></div>
                        </div>
                        <h2 className="text-8xl font-light">clément royer.</h2>
                        <p className="font-extralight text-4xl max-w-2/3">Je code des espaces où les gens se retrouvent, s’amusent et s’entraident.</p>
                    </div>
                </section>
                <section id="projects" className="">projets</section>
                <section id="about" className="py-40">à propos</section>
                <section id="contact" className="py-40">me contacter</section>
            </main>
            <CustomCursor />
        </div>
    );
}

export default App
