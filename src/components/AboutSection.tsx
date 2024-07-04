type AboutSection = {
    title: string;
    desc: string[];
};

const AboutSection = ({ title, desc }: AboutSection) => {
    return (
        <div className="about-column">
            <h1>{title}</h1>
            <ul>
                {desc.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default AboutSection;
