import Nav from "./components/Nav";
import Heading from "./components/Heading";
import Project from "./components/Project";

import heroData from "./data/hero.json";
import projectData from "./data/projects.json";

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

            <section id="projects">
                <Heading
                    title="Projects"
                    description="project section passage"
                />
                <div id="project-container">
                    {projectData.projects.map((project) => (
                        <Project
                            title={project.name}
                            tech={project.tech}
                            desc={project.desc}
                        />
                    ))}
                </div>
            </section>

            <section id="experience">
                <Heading title="exp" description="experience section passage" />
            </section>

            <footer>
                <hr />
                <div>
                    <span>Built with</span> 🍬🥲
                </div>
            </footer>
        </>
    );
}
