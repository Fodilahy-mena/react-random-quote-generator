import React,{ useState , useEffect} from 'react'
import {BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
const author_url = 'https://quote-garden.herokuapp.com/api/v2/authors/';
const maxPage = "?page=1&limit=10"

function Detail() {
    const { authorName } = useParams()
    const [ quotesByName, setQuotesByName] = useState([]);

    async function GetAuthor() {
        const res2 = await fetch(author_url + authorName + maxPage);
        console.log(res2);
        const authorResponse = await res2.json()
        setQuotesByName(authorResponse.quotes)
        console.log(authorResponse.quotes)
    }
    useEffect(() => {
        GetAuthor();
    },[])
    console.log("Quotes", quotesByName)
    return (
        <div>
            <header>
                <h5>More quotes from the Author</h5>
            </header>
            {quotesByName.map((quote, index) => (
                <div key={index} className="description">
                    <p>"{quote.quoteText}"</p>
                </div>
            ))}
            <div className="link" style={{position: 'relative',
            left: '5rem'}}>
                <Link to="/">Link back to the main page</Link>
            </div>
        </div>
    )
}

export default Detail