# Arbeidskrav 4 – Kom i gang med npm

## Beskrivelse
Dette prosjektet er laget som en del av arbeidskrav 4, hvor målet er å lære å bruke npm (Node Package Manager), installere eksterne JavaScript-biblioteker og bruke Git og GitHub til versjonskontroll.

## Teknologier
- JavaScript
- Node.js
- npm
- mathjs
- Git og GitHub

## Funksjonalitet
Prosjektet bruker biblioteket mathjs til å utføre enkle matematiske beregninger:

- Regne ut kvadratroten av 16.
- Avrunde pi til to desimaler.
- Evaluere et matematisk uttrykk.
- Regne ut 5 opphøyd i 2.

## Hvordan kjøre prosjektet
1. Last ned eller klon prosjektet fra GitHub.
2. Åpne prosjektmappen i Visual Studio Code.
3. Åpne terminalen og installer avhengighetene:

   `npm install`

4. Kjør JavaScript-filen:

   `node index.js`

Resultatene vises i terminalen.

## Git og .gitignore
Prosjektet bruker Git til versjonskontroll og GitHub til lagring av kildekoden.

Filen `.gitignore` inneholder `node_modules/`, slik at installerte biblioteker ikke lastes opp til GitHub. Bibliotekene kan installeres lokalt ved hjelp av `npm install`.