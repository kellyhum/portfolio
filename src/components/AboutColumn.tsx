type Column = {
    title: string;
    desc: string[];
};

const AboutColumn = ({ title, desc }: Column) => {
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

export default AboutColumn;
