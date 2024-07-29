import Tag from "./Tag";

type AccordionItemType = {
    title: string;
    tag: string;
    date: string;
    desc: string;
};

const AccordionItem = ({ title, tag, date, desc }: AccordionItemType) => {
    return (
        <div className="accordion-container">
            <div className="accordion-visible">
                <h3>{title}</h3>
                <Tag name={tag} />

                <div>{date}</div>
            </div>

            <div>{desc}</div>
        </div>
    );
};

export default AccordionItem;
