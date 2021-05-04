import axios from 'axios';
import {useState, useEffect} from "react";

export default function ArticleDetails(props) {
    const params = props.match.params;
    const [articleI, setArticleI] = useState([]);

    useEffect(() => {
        axios
            .get(`https://test.spaceflightnewsapi.net/api/v2/articles/${params.id}`)
            .then((response) => response.data)
            .then((data) => setArticleI(data))
    }, [])

    return (
        <div>
            <h1>{articleI.title}</h1>
            <img src={articleI.imageUrl} alt={articleI.title} style={{width: "600px"}}/>
            <h3>{articleI.newsSite}</h3>
            <p>{articleI.summary}</p>
            <h3>{articleI.publishedAt}</h3>
        </div>
    );
}