import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

import { Home } from './home/home.jsx';
import { Alphabet } from './alphabet/alphabet.jsx';

class App extends React.Component {
    render () {
        return <HashRouter>
            <div>
                <div className="container">
                    <NavLink replace exact to="/" activeClassName="activeStyle">MAIN</NavLink>
                </div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route  const path='/:kind' component={(props) => (
                        <Alphabet routeProps={props.match} />
                    )}/>
                </Switch>
            </div>
        </HashRouter>;
    }
}
export {App}