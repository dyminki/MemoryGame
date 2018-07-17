import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

import {LevelsList} from '../levelsList/levelsList.jsx'

class Alphabet extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: this.props.routeProps.params.kind,
            url: this.props.routeProps.url
        }
    }
    render () {
        return <LevelsList url={this.state.url} text={this.state.text} />
    }
}
export {Alphabet}