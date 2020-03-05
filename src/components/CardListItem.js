import React from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import "components/Card.scss";
import classNames from "classnames";

export default function CardListItem(props) {
   const cardClass = classNames("card", {
      "card--selected_1": props.selected_1,
      "card--selected_2": props.selected_2,
    });
   return ( <Flippy className={cardClass} onClick={props.setCard}
      
      flipDirection="horizontal" // horizontal or vertical
      
      // to use toggle method like this.flippy.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      /// these are optional style, it is not necessary
    >
      <FrontSide
      >
         <main className={cardClass} onClick={() => {
            props.setCard()
         }
         } >
</main>
        {props.isFlipped}
      </FrontSide>
      <BackSide >
       <main className={cardClass} onClick={props.setCard}>
   <div className="card-text">{props.icon}</div>
   {props.selected_1} {props.selected_2} {props.isFlipped}
</main>
      </BackSide>
    </Flippy>);
}

