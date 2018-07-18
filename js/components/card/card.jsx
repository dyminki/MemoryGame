import React from 'react';
import hiragana from '../../cards/hiragana'
import katakana from '../../cards/katakana'

class Card extends React.Component {
    constructor(props){
        super(props)

        const file = this.props.text.includes('hiragana') ? hiragana : katakana;
        const levelArray = this.whatLevel([...file]);
        const shuffleA = this.shuffleArray([...levelArray, ...levelArray]);
        
        this.state = {
            level: this.props.level,
            text: this.props.text,
            file: shuffleA,
            class: 'panel ',
            activeElements: [],
            tab: [],
            comparingId: [],
            score: 0
        }
    }
    whatLevel = (arr) => {
        if(this.props.level === "easy") {
            let halfLength = Math.ceil(arr.length / 5)
            let newArr = arr.splice(0,halfLength)
            return newArr;
        }
        if(this.props.level === "medium") {
            let halfLength = Math.ceil(arr.length / 3)
            let newArr = arr.splice(0,halfLength)
            return newArr;
        }
        if(this.props.level === "hard") {
            return arr;
        }
    }
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    onClick = (e, i, j) => {
        this.flipTheCard(e, i);
        this.checkTheId(e, j)
    }
    flipTheCard = (e, i, j) => {
        this.setState({
            activeElements: this.state.activeElements.length < 2 ?[...this.state.activeElements, i] : [],
        })    
    }
    checkTheId = (e, j) => {
        console.log(j);
        if (this.state.comparingId.length > -1) {
            this.setState({
                comparingId: this.state.comparingId.length < 2 ?[...this.state.comparingId, j] : []
            })
           
        }
        if (this.state.comparingId[0] === this.state.comparingId[1] && this.state.comparingId.length !== 0) {
            this.setState({
            score: this.state.score + 1
            })
            console.log(this.state.score)
        }
        console.log(this.state.comparingId);
    }
    getTheCards = (kind) => {
        let tab = []
        for (let i=0; i < kind.length; i++) {   
            let boxBack = {
                backgroundImage: `url('${kind[i].url}')`
            }
            let classElem = "panel "
            classElem += this.state.activeElements.indexOf(i) > -1 ? 'flip' : ""

            const elem = <div key={i} 
                            className={classElem} 
                            onClick={(e) => this.onClick(e, i, kind[i].id)}>

                        <div className="front">
                            <div className="box-card box-front"></div>
                        </div>
                        <div className="back">
                            <div className={`box-card`} style={boxBack}></div>
                        </div>
            </div> 
            
            tab.push(elem);
        }
        return tab;
    }
    render () {
        let tab = this.getTheCards(this.state.file)
        return <div>
            {tab}
        </div>
    }
}
export {Card}