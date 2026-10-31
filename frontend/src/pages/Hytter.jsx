/*
 * APP2000 – Happy Trails
 *
 * Denne komponenten er utviklet med hjelp fra ChatGPT (OpenAI).
 * KI ble brukt til forslag til React-kode, hytteoversikt,
 * visning av hyttedetaljer og forklaringer under utviklingen.
 *
 * Koden er utviklet for turappen med utgangspunkt
 * i undervisningens React-eksempler.
 */

import { useState } from "react";

// Eksempeldata for hytter
const hytter = [
  {
    id: 1,
    navn: "Gaustatoppen Turisthytte",
    sted: "Rjukan, Telemark",
    sengeplasser: 12,
    fasiliteter: "Kjøkken, toalett og oppholdsrom",
    beskrivelse: "En koselig turisthytte med flott utsikt over fjellene.",
  },
  {
    id: 2,
    navn: "Fjellro Hytte",
    sted: "Jotunheimen",
    sengeplasser: 8,
    fasiliteter: "Kjøkken, peis og soverom",
    beskrivelse: "En fin hytte for deg som ønsker å oppleve norsk fjellnatur.",
  },
  {
    id: 3,
    navn: "Skogstua",
    sted: "Telemark",
    sengeplasser: 6,
    fasiliteter: "Kjøkken, vedovn og terrasse",
    beskrivelse: "En liten og koselig hytte omgitt av skog og natur.",
  },
];

const Hytter = () => {
  const [valgtHytte, setValgtHytte] = useState(null);

  return (
    <section>
      <h1>Våre hytter</h1>
      <p>Finn en koselig hytte til din neste tur!</p>

      <div className="hytte-liste">
        {hytter.map((hytte) => (
          <article key={hytte.id} className="hytte-kort">
            <h2>{hytte.navn}</h2>
            <p>📍 Sted: {hytte.sted}</p>
            <p>🛏️ Sengeplasser: {hytte.sengeplasser}</p>
            <p>🏡 Fasiliteter: {hytte.fasiliteter}</p>

            <button
              type="button"
              className="tur-knapp"
              onClick={() => setValgtHytte(hytte)}
            >
              Se detaljer
            </button>
          </article>
        ))}
      </div>

      {valgtHytte && (
        <section className="hytte-detaljer">
          <h2>{valgtHytte.navn}</h2>
          <p>{valgtHytte.beskrivelse}</p>
          <p>Sted: {valgtHytte.sted}</p>
          <p>Sengeplasser: {valgtHytte.sengeplasser}</p>
          <p>Fasiliteter: {valgtHytte.fasiliteter}</p>

          <button
            type="button"
            className="tur-knapp"
            onClick={() => setValgtHytte(null)}
          >
            Lukk detaljer
          </button>
        </section>
      )}
    </section>
  );
};

export default Hytter;