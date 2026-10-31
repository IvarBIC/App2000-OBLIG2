/*
 * APP2000 – Happy Trails
 *
 * Denne komponenten er tilpasset med hjelp fra ChatGPT (OpenAI).
 * KI ble brukt til forslag til navigasjonslenker
 * og tilpasning fra nettbutikkeksempelet til turappen.
 *
 * Koden bygger på undervisningseksempelet.
 */

import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="navbar">
      <p>
        <Link to="/">Hjem</Link> &nbsp;&#9734;&nbsp;
        <Link to="/turer">Turer</Link> &nbsp;&#9734;&nbsp;
        <Link to="/hytter">Hytter</Link> &nbsp;&#9734;&nbsp;
        <Link to="/om">Om oss</Link>
      </p>
    </nav>
  );
};

export default NavBar;