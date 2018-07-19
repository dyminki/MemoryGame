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
           text: this.props.match.url.includes('hiragana')? 'hiragana': 'katakana',
           level: this.props.match.url,
           class: 'panel flip',
           boxClass: 'box game'
        }
    }
    componentDidMount() {
        this.timeoutId = setTimeout( () => {
            this.setState({
                class: 'panel '
            })
        }, 4000)
        if( this.props.match.url.includes('easy')) 
        this.setState({
            boxClass: 'box game easy'
        })
        if( this.props.match.url.includes('medium')) 
        this.setState({
            boxClass: 'box game medium'
        })
        if( this.props.match.url.includes('hard')) 
        this.setState({
            boxClass: 'box game hard'
        })
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutId)
    }

    render () {
        const checkTheLevel = () => {
            if( this.props.match.url.includes('easy')) 
            {return "easy"}
            if( this.props.match.url.includes('medium')) 
            {return "medium"}
            if( this.props.match.url.includes('hard')) 
            {return "hard"}
        }
        return <div>
            <div className="container">
                <h1>{this.state.text}</h1>
                <h3>LEVEL {checkTheLevel()}</h3>
            </div>
            <div className="container-game">
                <div className={this.state.boxClass}>
                    <Card text={this.state.text} level={checkTheLevel()} class={this.state.class} />
                </div>
            </div>
        </div>
    }
}
export {Game}