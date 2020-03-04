import React from "react";
import CardListItem from "./CardListItem.js";

export default function CardList(props) {
  const cards = props.cards.map( card => {
    return <CardListItem 
    key = {card.id}
    icon = {card.icon} />
  })
  return cards;
 }