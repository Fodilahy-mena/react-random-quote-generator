import React,{ useState , useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import RandomQuote from './RandomQuote'
import Detail from './DetailQuote'
function App() {
    return (
        <div>
            <Router>
				<Switch>
					{/* <Route path="/">
                        <Detail/>
					</Route> */}
					<Route path="/">
                        <RandomQuote/>
					</Route>
				</Switch>
			</Router>
        </div>
    )
}

export default App;