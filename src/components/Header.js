import React from "react";

import "components/Header.scss";
import { FaPastafarianism } from 'react-icons/fa';

export default function Header(props) {
   return ( <header className="header">
   <div className="header-text"> <FaPastafarianism /> score = {props.score} {props.text} <FaPastafarianism /> </div>
</header>);
}