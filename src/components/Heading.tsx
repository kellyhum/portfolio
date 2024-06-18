type HeadingProps = {
    title: string;
    description: string;
    hero?: boolean;
    past?: string[];
    present?: string[];
};

export default function Heading({
    title,
    description,
    hero,
    past,
    present,
}: HeadingProps) {
    return (
        <>
            <h1>{title}</h1>

            {hero ? (
                <>
                    <div className="hero-desc">
                        As of late...
                        {present?.map((bullet) => (
                            <li>{bullet}</li>
                        ))}
                    </div>

                    <div className="hero-desc">
                        In past eras I...
                        {past?.map((bullet) => (
                            <li>{bullet}</li>
                        ))}
                    </div>
                </>
            ) : (
                <div>{description}</div>
            )}
        </>
    );
}
