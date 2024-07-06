import Nav from "./components/Nav";
import Project from "./components/Project";
import AboutSection from "./components/AboutSection";

import aboutData from "./data/about.json";
import projectData from "./data/projects.json";

import "./App.css";

import Two from "two.js";

import { useRef, useEffect } from "react";

export default function App() {
    const domElement = useRef() as React.MutableRefObject<HTMLElement>;

    useEffect(setup, []);

    function setup() {
        const two = new Two({
            fullscreen: false,
        }).appendTo(domElement.current);
        two.renderer.setSize(1800, 800); // change the two js screen size to 1500 by 900 px

        let innerOrbit = two.makeEllipse(
            two.width / 2,
            two.height / 2,
            350,
            250
        );
        innerOrbit.stroke = "#000";
        innerOrbit.fill = "transparent";

        let outerOrbit = two.makeEllipse(
            two.width / 2,
            two.height / 2,
            650,
            400
        );
        outerOrbit.stroke = "#000";
        outerOrbit.fill = "transparent";

        for (let i: number = 0; i < aboutData["hero-bullets"].length; i++) {
            let fontStyles = {
                size: 22,
                family: "Lato",
            };

            let ellipseShape = two.makeEllipse(
                aboutData["hero-bullets"][i].x,
                aboutData["hero-bullets"][i].y,
                aboutData["hero-bullets"][i].ellipseX,
                aboutData["hero-bullets"][i].ellipseY
            );
            ellipseShape.fill = "#fff";
            ellipseShape.stroke = "#000";

            let ellipseText = two.makeText(
                aboutData["hero-bullets"][i].text,
                aboutData["hero-bullets"][i].x,
                aboutData["hero-bullets"][i].y,
                fontStyles
            );

            let bulletGroup = two.makeGroup();
            bulletGroup.add(ellipseShape, ellipseText);
        }

        two.update();
    }

    return (
        <>
            <Nav />

            <section id="hero" ref={domElement}>
                <h1>Hi, I'm Kelly</h1>
            </section>

            <section id="about">
                {aboutData.about.map((item) => (
                    <AboutSection title={item.title} desc={item.desc} />
                ))}
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
