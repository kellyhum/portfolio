import Nav from "./components/Nav";
import Heading from "./components/Heading";
import heroData from "./data/hero.json";
import "./App.css";

export default function App() {
    return (
        <>
            <Nav />

            <section id="hero">
                <Heading
                    title={heroData.title}
                    description={heroData.description}
                />
            </section>

            <section id="about">
                <Heading title="about" description="about section passage" />
            </section>

            <section id="projects">
                <Heading
                    title="projects"
                    description="project section passage"
                />
            </section>

            <section id="experience">
                <Heading title="exp" description="experience section passage" />
            </section>
        </>
    );
}
