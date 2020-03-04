import React from "react";

import "components/Card.scss";
import classNames from "classnames";

export default function CardListItem(props) {

   const cardClass = classNames("card", {
      "card--selected_1": props.selected_1,
      "card--selected_2": props.selected_2,
    });

   return ( <main className={cardClass} onClick={props.setCard}>
   <div className="card-text">{props.icon}</div>
   {props.selected_1} {props.selected_2}
</main>);
}
