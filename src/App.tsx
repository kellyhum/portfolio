import parse from "html-react-parser";

import Nav from "./components/Nav";
import Heading from "./components/Heading";
import AccordionItem from "./components/AccordionItem";
import Project from "./components/Project";

import aboutData from "./data/about.json";
import heroData from "./data/hero.json";
import expData from "./data/experience.json";
import projectData from "./data/projects.json";

import { IconContext } from "react-icons";

import "./App.css";

import { useRef } from "react";

export default function App() {
    const domElement = useRef() as React.MutableRefObject<HTMLElement>;

    return (
        <>
            <Nav />

            <section id="hero" ref={domElement}>
                <div>
                    <h1>Hi, I'm Kelly!</h1>
                    <p>{heroData["one-liner"]}</p>
                </div>

                <div>{parse(heroData.paragraph)}</div>

                <div>
                    <p>
                        Current reads:{" "}
                        {heroData.currents["current-reads"].map((book) => (
                            <li>
                                <i>{book.title}</i> by {book.name}
                            </li>
                        ))}
                    </p>
                    <p>
                        Currently pondering:
                        <li>{heroData.currents["current-question"]}</li>
                    </p>
                    <br />
                    <p>
                        If any of the above sparks your interest, feel free to
                        reach out!
                    </p>
                </div>
            </section>

            <section id="about">
                {aboutData.about.map((item) => (
                    <Heading title={item.title} desc={item.desc} />
                ))}
            </section>

            <section id="experience">
                <h1>Experience</h1>
                <IconContext.Provider value={{ size: "35px" }}>
                    {expData.experience.map((exp) => (
                        <AccordionItem
                            title={exp.title}
                            tag={exp.tag}
                            date={exp.date}
                            desc={exp.desc}
                        />
                    ))}
                </IconContext.Provider>
            </section>

            <section id="projects">
                <h1>Projects</h1>
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

            <footer>
                <hr />
                <div>Kelly Hum, copyright 2024</div>
            </footer>
        </>
    );
}
