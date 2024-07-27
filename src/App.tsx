import Nav from "./components/Nav";
import Heading from "./components/Heading";

import aboutData from "./data/about.json";
import heroData from "./data/hero.json";

import "./App.css";

import { useRef } from "react";

export default function App() {
    const domElement = useRef() as React.MutableRefObject<HTMLElement>;

    // format data
    let formattedReads = heroData.currents["current-reads"]
        .map((book) => `${book.title} (${book.author})`)
        .join(", ");

    return (
        <>
            <Nav />

            <section id="hero" ref={domElement}>
                <div>
                    <h1>Hi, I'm Kelly!</h1>
                    <p>{heroData["one-liner"]}</p>
                </div>

                <div>
                    {heroData.paragraph.map((sentence) => (
                        <>
                            <p>{sentence}</p>
                            <br />
                        </>
                    ))}
                </div>

                <div>
                    <p>Current reads: {formattedReads}</p>
                    <p>Current goal: {heroData.currents["current-goal"]}</p>
                    <p>
                        ----&gt; If any of the above sparks your interest, feel
                        free to reach out!
                    </p>
                </div>
            </section>

            <section id="about">
                {aboutData.about.map((item) => (
                    <Heading title={item.title} desc={item.desc} />
                ))}
            </section>

            <section id="projects">
                {/* <h1>Projects</h1> */}
                <div id="project-container">
                    {/* {projectData.projects.map((project) => (
                        <Project
                            title={project.name}
                            tech={project.tech}
                            desc={project.desc}
                        />
                    ))} */}
                </div>
            </section>

            <section id="experience"></section>

            <footer>
                <hr />
                <div>Kelly Hum, copyright 2024</div>
            </footer>
        </>
    );
}
