import React from 'react';

import { Card } from '../card/card.jsx';

class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           text: this.props.match.url.includes('hiragana')? 'hiragana': 'katakana',
           level: this.props.match.url
        }
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
                <div className="box game">
                    <Card text={this.state.text} level={checkTheLevel()}/>
                </div>
            </div>
        </div>
    }
}
export {Game}