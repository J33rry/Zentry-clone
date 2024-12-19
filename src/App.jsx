import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Nav />
            <Hero />
            <About />
            <Features />
            <Story />
            <Contact />
            <Footer />

            {/* <section className="z-0 min-h-screen bg-blue-500"></section> */}
        </main>
    );
}

export default App;
