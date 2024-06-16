import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
    const aboutRef = useRef<HTMLAnchorElement>(null);
    const projectsRef = useRef<HTMLAnchorElement>(null);
    const experienceRef = useRef<HTMLAnchorElement>(null);
    const documentElement: HTMLElement = document.documentElement;
    const [dataTheme, setDataTheme] = useState(
        localStorage.getItem("data-theme")
            ? localStorage.getItem("data-theme")
            : "light"
    );

    const linkClicked = (event: React.FormEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // prevent url from changing to '.../#id_name'
        if (aboutRef.current != null) {
            aboutRef.current.scrollIntoView(false);
        }
    };

    const toggleDarkMode = () => {
        let mode: string = "";

        if (dataTheme == "light") {
            mode = "dark";
        } else {
            mode = "light";
        }

        setDataTheme(mode); // update state
        localStorage.setItem("data-theme", mode); // update localstorage
        documentElement.setAttribute("data-theme", mode); // update dom element
    };

    // use theme on render
    useEffect(() => {
        if (dataTheme) {
            documentElement.setAttribute("data-theme", dataTheme);
        }
    }, [dataTheme]);

    return (
        <nav>
            <a href="#about" onClick={linkClicked} ref={aboutRef}>
                About
            </a>
            <a href="#projects" onClick={linkClicked} ref={projectsRef}>
                Projects
            </a>
            <a href="#experience" onClick={linkClicked} ref={experienceRef}>
                Experience
            </a>
            <div className="icon" onClick={toggleDarkMode}>
                {dataTheme == "light" ? (
                    <FiSun size={25} />
                ) : (
                    <FiMoon size={25} />
                )}
            </div>
        </nav>
    );
}
