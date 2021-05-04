import { Link } from "react-router-dom";

export default function Article({ id, title, imageUrl, newsSite, publishedAt }) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={imageUrl} alt={title} style={{width: "300px"}}/>
            <h3>{newsSite}</h3>
            <Link to={`/articles/${id}`}>Details</Link>
            <h3>{publishedAt}</h3>
        </div>
    );
}