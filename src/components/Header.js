import React from "react";

import "components/Header.scss";
import { FaPastafarianism } from 'react-icons/fa';

export default function Header() {
   return ( <header className="header">
   <div className="header-text"> <FaPastafarianism /> Memory Game <FaPastafarianism /></div>
</header>);
}