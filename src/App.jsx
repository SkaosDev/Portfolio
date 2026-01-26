import './App.css'
import Navbar from "./components/Navbar.jsx";

function App() {
    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />
            <main className="mx-auto max-w-6xl px-6 py-16">
                <section id="home" className="py-24">Home</section>
                <section id="projects" className="py-24">Projects</section>
                <section id="about" className="py-24">About</section>
                <section id="contact" className="py-24">Contact</section>
            </main>
        </div>
    );
}

export default App
