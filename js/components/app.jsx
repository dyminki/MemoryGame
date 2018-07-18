import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

import { Home } from './home/home.jsx';
import {LevelsList} from './levelsList/levelsList.jsx'
import {Game} from './game/game.jsx'


class App extends React.Component {
    render () {
        return <HashRouter>
            <div>
                <div className="container">
                    <NavLink replace exact to="/" activeClassName="activeStyle">MAIN</NavLink>
                </div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/:kind' component={LevelsList}/>
                    <Route path={`/:kind/:level`} component={Game} />
                </Switch>
            </div>
        </HashRouter>;
    }
}
export {App}