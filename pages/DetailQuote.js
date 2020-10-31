import React,{ useState , useEffect} from 'react'
import {BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
const author_url = 'https://quote-garden.herokuapp.com/api/v2/authors/';
const maxPage = "?page=1&limit=10"

function Detail({quoteAuthor}) {
    const { authorName } = useParams()
    const [ quotesByName, setQuotesByName] = useState([]);

    async function GetAuthor() {
        const res2 = await fetch(author_url + authorName + maxPage);
        console.log(res2);
        const authorResponse = await res2.json()
        setQuotesByName(authorResponse.quotes)
        console.log(authorResponse.quotes)
    }
    console.log(quoteAuthor)
    useEffect(() => {
        GetAuthor();
    },[])

    function handleGetQuotesByAuthor(e) {
        e.preventDefault();
        GetAuthor();
    }
    console.log("Quotes", quotesByName)
    return (
        <div>
            <header>
            <h1>{quoteAuthor}</h1>
            </header>
            {/* <div className="refresh">
                <button onClick={handleGetQuotesByAuthor}>
                    <span>random</span>
                    <svg width="20px" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </button>
            </div> */}
            {quotesByName.map((quote, index) => (
                <div key={index} className="description">
                    <p>"{quote.quoteText}"</p>
                </div>
            ))}
            <div className="link">
                <Link to="/">
                <svg
                 className="w-6 h-6" width="20px" fill="blue" stroke="blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                </svg>
                    Back
                </Link>
            </div>
        </div>
    )
}

export default Detail