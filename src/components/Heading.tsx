type Heading = {
    title: string;
    desc: string[];
};

const Heading = ({ title, desc }: Heading) => {
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

export default Heading;
