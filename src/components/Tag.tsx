type TagType = {
    name: string;
};

type AllColorsType = {
    Research: string;
    Software: string;
};

const Tag = ({ name }: TagType) => {
    // change color based on value
    let allColors: AllColorsType = {
        Research: "blue",
        Software: "purple",
    };

    const isInAllColorsType = (key: string): key is keyof AllColorsType => {
        return key in allColors;
    };

    let selectedColor: string = isInAllColorsType(name)
        ? allColors[name]
        : "default";

    let classes: string = `tag tag-${selectedColor}`;

    return <div className={classes}>{name}</div>;
};

export default Tag;
