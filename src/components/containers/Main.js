import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Trails from './Trails'

const Main = () => {
    return (
        <Router>
            <main className="background">
                <div className="overlay">
                    <Switch>
                        <Route path="/" exact component={Trails} />
                    </Switch>
                </div>
            </main>
        </Router>
    )
}

export default Main
