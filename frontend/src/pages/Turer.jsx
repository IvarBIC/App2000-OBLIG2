/*
 * APP2000 – Happy Trails
 *
 * Denne komponenten er utviklet med hjelp fra ChatGPT (OpenAI).
 * KI ble brukt til forslag til React-kode, turoversikt,
 * søkefunksjon, visning av turdetaljer og forklaringer
 * under utviklingen.
 *
 * Koden er utviklet for turappen med utgangspunkt
 * i undervisningens React-eksempler.
 */

// Eksempeldata for turer
import { useState } from "react";
const turer = [
  {
    id: 1,
    navn: "Gaustatoppen",
    sted: "Rjukan, Telemark",
    lengde: "8 km",
    varighet: "4 timer",
    vanskelighetsgrad: "Middels",
  },
  {
    id: 2,
    navn: "Preikestolen",
    sted: "Lysefjorden, Rogaland",
    lengde: "8 km",
    varighet: "4–5 timer",
    vanskelighetsgrad: "Middels",
  },
  {
    id: 3,
    navn: "Besseggen",
    sted: "Jotunheimen",
    lengde: "14 km",
    varighet: "6–8 timer",
    vanskelighetsgrad: "Krevende",
  },
];

const Turer = () => {
  const [valgtTur, setValgtTur] = useState(null);
  const [sok, setSok] = useState("");

const filtrerteTurer = turer.filter((tur) =>
  tur.navn.toLowerCase().includes(sok.toLowerCase()) ||
  tur.sted.toLowerCase().includes(sok.toLowerCase())
);
  return (
    <section>
      <h1>Oppdag våre turer</h1>
      <p>Finn din neste naturopplevelse!</p>
<div className="tur-sok">
  <label htmlFor="sok-tur">Søk etter tur:</label>

  <input
    id="sok-tur"
    type="search"
    placeholder="Søk etter navn eller sted..."
    value={sok}
    onChange={(e) => setSok(e.target.value)}
  />
</div>

      <div className="tur-liste">
        {filtrerteTurer.map((tur) => ( 
          <article key={tur.id} className="tur-kort">
            <h2>{tur.navn}</h2>
            <p>📍 Sted: {tur.sted}</p>
            <p>🥾 Lengde: {tur.lengde}</p>
            <p>⏱️ Varighet: {tur.varighet}</p>
            <p>⛰️ Vanskelighetsgrad: {tur.vanskelighetsgrad}</p>
            <button
  type="button"
  onClick={() => setValgtTur(tur)}
  className="tur-knapp"
>
  Se detaljer
</button>
          </article>
        ))}
        {filtrerteTurer.length === 0 && (
  <p>Ingen turer funnet. Prøv et annet søkeord.</p>
)}
      </div>
      {valgtTur && (
  <section className="tur-detaljer">
    <h2>Detaljer om {valgtTur.navn}</h2>
    <p>Sted: {valgtTur.sted}</p>
    <p>Lengde: {valgtTur.lengde}</p>
    <p>Varighet: {valgtTur.varighet}</p>
    <p>Vanskelighetsgrad: {valgtTur.vanskelighetsgrad}</p>

    <button type="button" onClick={() => setValgtTur(null)}>
      Lukk detaljer
    </button>
  </section>
)}
    </section>
  );
};

export default Turer;