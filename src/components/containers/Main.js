import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Trails from './Trails'
import TrailFinder from './TrailFinder'

const Main = () => {
    return (
        <Router>
            <main className="background">
                <div className="overlay">
                    <Switch>
                        <Route path="/" exact component={Trails} />
                        <Route path="/trails" component={Trails} />
                        <Route path="/trailfinder" component={TrailFinder} />
                        <Route path="/about" component={About} />
                    </Switch>
                </div>
            </main>
        </Router>
    )
}

export default Main
