import React from 'react';
import hiragana from '../../cards/hiragana'
import katakana from '../../cards/katakana'

class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: this.props.text,
            class: 'panel ',
            activeElements: []
        }
    }
    flipTheCard = (e, i) => {
        console.log(i);
        
        this.setState({
            activeElements: this.state.activeElements.length < 2 ?[...this.state.activeElements, i] : []
        })    
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    getTheCards = (kind, tab) => {
        for (let i=0; i < kind.length; i++) {   
            let boxBack = {
                backgroundImage: `url('${kind[i].url}')`
            }
            let classElem = "panel "
            classElem += this.state.activeElements.indexOf(i) > -1 ? 'flip' : ""
        
            if (this.state.activeElements[0] === this.state.activeElements[1]){
                console.log("takie same");
            }
            
            const elem = <div key={i} 
                            className={classElem} 
                            onClick={(e) => this.flipTheCard(e, kind[i].id)}>

                        <div className="front">
                            <div className="box-card box-front"></div>
                        </div>
                        <div className="back">
                            <div className={`box-card`} style={boxBack}></div>
                        </div>
            </div> 
            
            tab.push(elem);
        }

    }


    render () {
        let tab =[];
        this.state.text.includes('hiragana') ?
        this.getTheCards(hiragana, tab) :
        this.getTheCards(katakana, tab)
       
        
        
        return <div>
            {tab}
        </div>
    }
}
export {Card}



// import React from 'react';
// import hiragana from '../../cards/hiragana'
// import katakana from '../../cards/katakana'

// class Card extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             text: this.props.text,
//             class: 'panel ',
//             activeElements: [],
//             tab: []
//         }
//     }

//     componentDidMount(){
//         let tab =[];
//         this.state.text.includes('hiragana') ?
//             this.getTheCards(hiragana, tab) :
//             this.getTheCards(katakana, tab);
//         this.shuffleArray(tab)
//         this.setState({
//             tab: [...this.state.tab, tab]
//         })
//     }
//     shuffleArray(array) {
//         for (let i = array.length - 1; i > 0; i--) {
//           let j = Math.floor(Math.random() * (i + 1));
//           [array[i], array[j]] = [array[j], array[i]];
//         }
//         return array;
//     }
//     flipTheCard = (e, i) => {
//         console.log(i);
//         this.setState({
//             activeElements: this.state.activeElements.length < 2 ?[...this.state.activeElements, i] : [],
//             class: "panel flip"
//         })    
//     }
//     getTheCards = (kind, tab) => {
//         for (let i=0; i < kind.length; i++) {   
            
//             let boxBack = {
//                 backgroundImage: `url('${kind[i].url}')`
//             }
//             let classElem = "panel "
//             classElem += this.state.activeElements.indexOf(i) > -1 ? 'flip' : ""
        
//             if (this.state.activeElements[0] === this.state.activeElements[1]){
//                 console.log("takie same");
//             }
//             const elem = <div key={i} 
//                             className={classElem} 
//                             onClick={(e) => this.flipTheCard(e, kind[i].id)}>

//                         <div className="front">
//                             <div className="box-card box-front"></div>
//                         </div>
//                         <div className="back">
//                             <div className={`box-card`} style={boxBack}></div>
//                         </div>
//             </div> 
            
//             tab.push(elem);
//         }
//     }

//     render () {
//         return <div>
//             {this.state.tab}
//         </div>
//     }
// }
// export {Card}