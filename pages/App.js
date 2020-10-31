import React,{ useState , useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import RandomQuote from './RandomQuote'
import Detail from './DetailQuote'

const random_url = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
function App() {
    const [ randomQuote, setRandomQuote ] = useState({});

    async function GetRandomQuote() {
        const res1 = await fetch(random_url);
        const randomRespons = await res1.json()
        setRandomQuote(randomRespons.quote)
        }
        useEffect(() => {
            GetRandomQuote();
        },[])

        function handleClick(e) {
            GetRandomQuote();
        }
    return (
        <div>
            <Router>
				<Switch>
                    <Route path="/authors/:authorName">
                        <Detail {...randomQuote}/>
					</Route>
                    <Route path="/">
                        <RandomQuote handleClick={handleClick} {...randomQuote}/>
					</Route>
				</Switch>
			</Router>
        </div>
    )
}

export default App;