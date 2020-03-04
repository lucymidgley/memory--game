import React from "react";
import CardListItem from "./CardListItem.js";

export default function CardList(props) {
  const cards = props.cards.map( card => {
    return <CardListItem 
    key = {card.id}
    icon = {card.icon}
    selected_1={card.id === props.card_1}
    selected_2={card.id === props.card_2}
    setCard={(event) => {
      if(props.card_1 && props.card_2){
        console.log( (props.card_1) + 6 )
        if(card.id === Number(props.card_1) + 6 || card.id === Number(props.card_2) + 6){
          props.setText("wooooo!")
        }
        else {
          props.setText("")
        }
      }
      
      props.setCard(card.id)} }  />
  })
  return cards;
 }