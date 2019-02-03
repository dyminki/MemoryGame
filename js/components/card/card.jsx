import React from "react";
import hiragana from "../../cards/hiragana";
import katakana from "../../cards/katakana";

class Card extends React.Component {
  constructor(props) {
    super(props);

    const file = this.props.text.includes("hiragana") ? hiragana : katakana;
    const fileSuffled = this.shuffleArray([...file]);
    const levelArray = this.whatLevel([...fileSuffled]);
    const shuffleA = this.shuffleArray([...levelArray, ...levelArray]);

    this.state = {
      level: this.props.level,
      text: this.props.text,
      file: shuffleA,
      class: this.props.class,
      activeElements: [],
      comparingId: [],
      matchedCards: []
    };
  }
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({
        class: "panel "
      });
    }, 2000);
  }
  whatLevel = arr => {
    if (this.props.level === "easy") {
      let halfLength = Math.ceil(arr.length / 5);
      let newArr = arr.splice(0, halfLength);
      return newArr;
    }
    if (this.props.level === "medium") {
      let halfLength = Math.ceil(arr.length / 3);
      let newArr = arr.splice(0, halfLength);
      return newArr;
    }
    if (this.props.level === "hard") {
      return arr;
    }
  };
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  onClick = (e, index, cardId) => {
    this.flipTheCard(e, index);
    this.checkTheId(e, cardId);
  };
  flipTheCard = (e, index) => {
    this.setState({
      activeElements:
        this.state.activeElements.length < 2
          ? [...this.state.activeElements, index]
          : []
    });
  };
  checkTheId = (e, cardId) => {
    if (this.state.comparingId.length > -1) {
      this.setState(
        {
          comparingId:
            this.state.comparingId.length < 2
              ? [...this.state.comparingId, cardId]
              : []
        },
        () => {
          if (
            this.state.comparingId.length !== 0 &&
            this.state.comparingId[0] === this.state.comparingId[1] &&
            this.state.activeElements.length === 2 &&
            this.state.activeElements[0] !== this.state.activeElements[1]
          ) {
            this.setState({
              matchedCards: [...this.state.matchedCards, cardId]
            });
          }
        }
      );
    }
  };
  getTheCards = kind => {
    let tab = [];
    for (let i = 0; i < kind.length; i++) {
      let divCliked = false;
      let boxBack = {
        backgroundImage: `url('${kind[i].url}')`
      };
      let classElem = this.state.class;
      classElem += this.state.activeElements.indexOf(i) > -1 ? "flip" : "";

      if (this.state.matchedCards.indexOf(kind[i].id) > -1) {
        classElem += " color";
        divCliked = true;
      }
      const elem = (
        <div
          key={i}
          className={!divCliked ? classElem : "panel flip color"}
          onClick={!divCliked ? e => this.onClick(e, i, kind[i].id) : null}
        >
          <div className="front">
            <div className="box-card box-front" />
          </div>
          <div className="back">
            <div className={`box-card`} style={boxBack} />
          </div>
        </div>
      );
      tab.push(elem);
    }
    return tab;
  };
  gameOver = () => {
    const gameOver = "gameover";
    if (this.state.level === "easy" && this.state.matchedCards.length === 10) {
      return gameOver;
    }
    if (
      this.state.level === "medium" &&
      this.state.matchedCards.length === 16
    ) {
      return gameOver;
    }
    if (this.state.level === "hard" && this.state.matchedCards.length === 46) {
      return gameOver;
    }
  };
  render() {
    let tab = this.getTheCards(this.state.file);
    return <div className={this.gameOver()}>{tab}</div>;
  }
}
export { Card };
