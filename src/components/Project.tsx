type ProjectData = {
    title: string;
    tech: string[];
    desc: string;
};

export default function Project({ title, tech, desc }: ProjectData) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <div>{tech}</div>
            <div>{desc}</div>
        </div>
    );
}
