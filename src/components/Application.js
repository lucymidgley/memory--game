import React from "react";

import "components/Application.scss";
import CardListItem from "./CardListItem"
import Header from "./Header"

export default function Application(props) {
  return (
    <main className="layout">
      <Header />
      <CardListItem/>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}
