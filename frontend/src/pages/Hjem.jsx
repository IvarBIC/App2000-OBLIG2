/*
 * APP2000 – Happy Trails
 *
 * Denne komponenten er utviklet med hjelp fra ChatGPT (OpenAI).
 * KI ble brukt til forslag til forside, React-komponenter,
 * navigasjon, innhold og styling.
 *
 * Koden er tilpasset prosjektets behov.
 */

import { Link } from "react-router";

const Hjem = () => {
  return (
    <div className="hjem-side">

      <section className="hero">
        <h1>Velkommen til Happy Trails! 🏔️</h1>

        <p>
          Oppdag Norges vakre natur, finn spennende turer
          og planlegg ditt neste eventyr!
        </p>

        <Link to="/turer" className="tur-knapp">
          Utforsk turer
        </Link>
      </section>

      <section className="hjem-innhold">
        <h2>Hva kan du gjøre hos oss?</h2>

        <div className="hjem-kort-liste">

          <article className="hjem-kort">
            <h3>🥾 Finn turer</h3>
            <p>
              Utforsk flotte turmuligheter med informasjon
              om lengde, varighet og vanskelighetsgrad.
            </p>
            <Link to="/turer">Se alle turer →</Link>
          </article>

          <article className="hjem-kort">
            <h3>🏡 Oppdag hytter</h3>
            <p>
              Finn koselige hytter og overnattingsmuligheter
              til din neste naturopplevelse.
            </p>
            <Link to="/hytter">Se alle hytter →</Link>
          </article>

          <article className="hjem-kort">
            <h3>🌲 Opplev naturen</h3>
            <p>
              La deg inspirere til å utforske norsk natur
              og finne nye steder å besøke.
            </p>
          </article>

        </div>
      </section>

      <section className="hjem-info">
        <h2>Planlegg ditt neste eventyr!</h2>
        <p>
          Enten du foretrekker korte skogsturer eller
          lengre fjellturer, hjelper Turapp deg
          med å finne din neste naturopplevelse.
        </p>
      </section>

    </div>
  );
};

export default Hjem;