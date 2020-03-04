import React from "react";

import "components/Card.scss";

export default function CardListItem(props) {
   return ( <main className="card">
   <div className="card-text">{props.icon}</div>
</main>);
}
