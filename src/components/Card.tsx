import { CardInterface } from "../types";

export default function Card({ img, tag, title, desc }: CardInterface) {
    return (
        <div>
            <img src={img || "../assets/card.jpg"} />
            <div className="tag">{tag}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}
