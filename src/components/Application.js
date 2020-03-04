import React, {Fragment} from "react";

import "components/Application.scss";
import CardList from "./CardList"
import Header from "./Header"
import { cards } from './cards'
export default function Application(props) {
  return (
    <Fragment>
    <Header />
      <main className="layout">
      <CardList
        cards = {cards}
      />
    </main>
    </Fragment>
  );
}
