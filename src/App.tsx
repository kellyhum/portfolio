import Nav from "./components/Nav";
import Project from "./components/Project";

import projectData from "./data/projects.json";

import "./App.css";

export default function App() {
    return (
        <>
            <Nav />

            <section id="hero">
                <h1>Hi, I'm Kelly</h1>
            </section>

            <section id="projects">
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

            <section id="experience"></section>

            <footer>
                <hr />
                <div>
                    <span>Built with</span> 🍬🥲
                </div>
            </footer>
        </>
    );
}
