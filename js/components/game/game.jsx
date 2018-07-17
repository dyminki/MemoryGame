import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';
  
import { Card } from '../card/card.jsx';

class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           text: this.props.text,
           level: this.props.routeProps
        }
    }

    render () {
        const checkTheLevel = () => {
            if(this.state.level.url.includes('easy')) 
            {return "Easy"}
            if(this.state.level.url.includes('medium')) 
            {return "medium"}
            if(this.state.level.url.includes('hard')) 
            {return "hard"}
        }

        return <div>
            <div className="container">
                <h3>LEVEL {checkTheLevel()}</h3>
            </div>
            <div className="container">
                <div className="box game">
                    <Card text={this.state.text}/>
                </div>
            </div>
        </div>
    }
}
export {Game}