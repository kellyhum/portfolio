import Nav from "./components/Nav";
import Card from "./components/Card";
import "./styles/App.css";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { CardInterface } from "./types";

const currentCards: CardInterface[] = [
    // array of cards
    {
        img: "",
        tag: "project",
        title: "Project Title",
        desc: "project 1",
    },
    {
        tag: "side hobby",
        title: "Project Title",
        desc: "testing no image",
    },
];

export default function App() {
    return (
        <>
            <Nav />

            <main>
                <div id="landingHeading">
                    <h1>Kelly Hum</h1>
                    <p>
                        2nd year Computer Science student, aspiring keyboard
                        wizard, and software engineer
                    </p>

                    <FaLinkedin />
                    <FaGithub />
                </div>

                <div id="landingCurrent">
                    <h2>Current</h2>
                    <div id="landingCurrentCards">
                        {currentCards.map((item) => (
                            <Card
                                img={item.title}
                                tag={item.tag}
                                title={item.title}
                                desc={item.desc}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
