
import React,{ useState , useEffect} from 'react'
import {BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { Link } from 'react-router-dom'


function RandomQuote({quoteText,quoteAuthor,quoteGenre, handleClick}) {

        return (
            <>
            <header>
                <h1>Random quotes generator</h1>
            </header>
            <div className="refresh">
                <button onClick={handleClick}>
                    <span>random</span>
                    <svg width="20px" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </button>
            </div>
            
            <div className="description">
                <p>"{quoteText}"</p>
            </div>
            <div className="more--quotes">
                <Link to={`/authors/${quoteAuthor}`}>
                    <div className="more">
                        <h4>{quoteAuthor}</h4>
                        <button>
                            <svg width="20px" className="w-6 h-6" fill="white" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                        <span>{quoteGenre}</span>
                    </div>
                </Link>
            </div>
            </>
        )
}

export default RandomQuote