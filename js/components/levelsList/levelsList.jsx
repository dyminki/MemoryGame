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
            text: this.props.text,
            url: this.props.url
        }
    }
    disapear = (e) => {
        this.setState({
            class: 'invisible'
        })
    }
    render () {
        return <div>
            <div className="container">
                <h1>{this.state.text}</h1>
            </div>
            <div className="container">
                <div className={this.state.class}>
                    <Link replace to={`${this.state.url}easy`} className="levels" onClick={(e) => this.disapear(e)} >Easy</Link>
                    <Link replace to={`${this.state.url}medium`} className="levels" onClick={(e) => this.disapear(e)} >Medium</Link>
                    <Link replace to={`${this.state.url}hard`} className="levels" onClick={(e) => this.disapear(e)} >Hard</Link>
                </div>
                <Route   const path={`${this.state.url}easy`} component={(props) => (
                    <Game routeProps={props.match} text={this.state.text}/>
                )}/> 
                <Route   const path={`${this.state.url}medium`} component={(props) => (
                    <Game routeProps={props.match} text={this.state.text}/>
                )}/> 
                <Route   const path={`${this.state.url}hard`} component={(props) => (
                    <Game routeProps={props.match} text={this.state.text}/>
                )}/> 
            </div>
        </div>
    }
}
export {LevelsList}