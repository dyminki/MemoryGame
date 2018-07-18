import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

import {Game} from '../game/game.jsx'

class LevelsList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            class: "box game",
            text: this.props.match.params.kind,
            url: this.props.match.url
        }
    }

    render () {
        return <div>
            <div className="container">
                <h1>{this.state.text}</h1>
            </div>
            <div className="container-game">
                <div className={this.state.class}>
                    <Link  to={`${this.props.match.url}/easy`} className="levels">Easy</Link>
                    <Link  to={`${this.props.match.url}/medium`} className="levels">Medium</Link>
                    <Link  to={`${this.props.match.url}/hard`} className="levels">Hard</Link>
                </div>
            </div>
        </div>
    }
}
export {LevelsList}