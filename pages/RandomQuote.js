
import React,{ useState , useEffect} from 'react'
const random_url = "https://quote-garden.herokuapp.com/api/v2/quotes/random";

function RandomQuote() {
    const [ randomQuote, setRandomQuote ] = useState({});

    async function GetRandomQuote() {
        const res1 = await fetch(random_url);
        const randomRespons = await res1.json()
        setRandomQuote(randomRespons.quote)
        console.log(randomRespons)

        }

        useEffect(() => {
            GetRandomQuote();

        },[])
        return (
            <>
            <h1>{randomQuote.quoteAuthor}</h1>
            <p>{randomQuote.quoteText}</p>
            <span>{randomQuote.quoteGenre}</span>
            </>
        )
}

export default RandomQuote