import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

import { Alphabet } from '../alphabet/alphabet.jsx';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            classH: 'box-hiragana',
            classK: 'box-katakana',
            textH: 'ひらがな',
            textK: 'カタカナ',
        }
    }
    levels(e) {
        e.preventDefault(e)
        this.setState({
            classK: 'invisible',
            classH: 'invisible'
        })
    }
    render () {
        return <div>
        <div className="container">
            <h1> Hiragana </h1>
            <h1> & </h1>
            <h1> Katakana </h1>
        </div>
        <div className="container">
            <div className="box">
                <Link to="/hiragana/" className={this.state.classH} >{this.state.textH}</Link>
                <Link to="/katakana/" className={this.state.classK} >{this.state.textK}</Link>
                <div> 
                    {this.state.text}
                </div>
            </div>
        </div>
        <div className="container">
            <div className="lotos"></div>
        </div>
        </div>;
    }
}
export {Home}