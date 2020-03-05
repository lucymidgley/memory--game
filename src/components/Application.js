import React, {Fragment, useState, useEffect } from "react";

import "components/Application.scss";
import CardList from "./CardList"
import Header from "./Header"
import { cards } from './cards'
export default function Application(props) {
 const initial = {
    card_1: null,
    card_2: null,
  }
  const [state, setState] = useState(initial)
  const [counter, setCounter] = useState(0)
  const [score, setScore] = useState(0)
  const [text, setText] = useState("")

  return (
    <Fragment>
    <Header score={score} text={text} />
      <main className="layout">
      <CardList
        cards = {cards}
        card_1 = {state.card_1}
        card_2 = {state.card_2}
        counter = {counter}
        setText = {setText}
        setCard = {(card) => {
          if(counter % 2 === 0){
            setCounter(counter + 1)
            if( state.card_2 === (card + 6) || state.card_2 === (card - 6) ){
              setText("Yippee")
            }else {
              setText("")
            }
            setState({...state, card_1:card})
          } else {
            setCounter(counter + 1)
            if(state.card_1 === (card + 6) || state.card_1 === (card - 6)  ){
              setText("Yippee")
            }else {
              setText("")
            }
            setState({...state, card_2:card})}
      }
      }
         
      />
    </main>
    </Fragment>
  );
}
