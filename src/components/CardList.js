import React, { useState } from "react";
import CardListItem from "./CardListItem.js";


export default function CardList(props) {
  const cards = props.cards.map( card => {
    return <CardListItem 
    key = {card.id}
    icon = {card.icon}
    counter = {props.counter}
    selected_1={card.id === props.card_1}
    selected_2={card.id === props.card_2}
    isFlipped={card.id === props.card_2 || card.id === props.card_2}
    setCard={(event) => {
      props.setCard(card.id)
    } }  />
  })
  return cards;
 }