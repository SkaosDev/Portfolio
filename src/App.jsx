import './App.css'
import Navbar from "./components/Navbar.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

function App() {
    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />
            <main className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10">
                <section id="home" className="pb-40">accueil</section>
                <section id="projects" className="py-40">projets</section>
                <section id="about" className="py-40">à propos</section>
                <section id="contact" className="py-40">me contacter</section>
            </main>
            <CustomCursor />
        </div>
    );
}

export default App
