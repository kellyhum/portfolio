type HeadingProps = {
    title: string;
    description: string;
};

export default function Heading({ title, description }: HeadingProps) {
    return (
        <>
            <h1>{title}</h1>
            <div>{description}</div>
        </>
    );
}
