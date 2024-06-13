import { FiSun, FiMoon } from "react-icons/fi";
import { useRef } from "react";

export default function Nav() {
    const aboutRef = useRef<HTMLAnchorElement>(null);
    const projectsRef = useRef<HTMLAnchorElement>(null);
    const experienceRef = useRef<HTMLAnchorElement>(null);
    const documentElement: HTMLElement = document.documentElement;

    const linkClicked = (event: React.FormEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // prevent url from changing to '.../#id_name'
        if (aboutRef.current != null) {
            aboutRef.current.scrollIntoView();
        }
    };

    const toggleDarkMode = () => {
        // add localstorage later
        let mode: string | null = documentElement.getAttribute("data-theme");

        if (mode == "light") {
            mode = "dark";
        } else {
            mode = "light";
        }

        documentElement.setAttribute("data-theme", mode);
        console.log(documentElement);
    };

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
                {documentElement.getAttribute("data-theme") == "light" ? (
                    <FiSun size={25} />
                ) : (
                    <FiMoon size={25} />
                )}
            </div>
        </nav>
    );
}
