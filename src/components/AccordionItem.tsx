import { useState } from "react";
import Tag from "./Tag";
import { FiPlus } from "react-icons/fi";

type AccordionItemType = {
    title: string;
    tag: string;
    date: string;
    desc: string;
};

const AccordionItem = ({ title, tag, date, desc }: AccordionItemType) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`accordion-container ${open ? "invisible-is-open" : ""}`}
            onClick={() => setOpen((prevState) => !prevState)}
        >
            <div className="accordion-visible">
                <div>
                    <h3>{title}</h3>
                    <div className="accordion-date">{date}</div>
                </div>
                <Tag name={tag} />

                <FiPlus className="accordion-icon" />
            </div>

            {open && <div className="accordion-invisible">{desc}</div>}
        </div>
    );
};

export default AccordionItem;
