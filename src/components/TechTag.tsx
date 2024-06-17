type TechTagType = {
    name: string;
};

export default function TechTag({ name }: TechTagType) {
    return <div className="project-tech-tag">{name}</div>;
}
