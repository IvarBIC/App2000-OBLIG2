# Happy Trails 🏔️

## APP2000 – Arbeidskrav 2: Frontend for turapp med React

Happy Trails er en frontend-prototype for en turapplikasjon, utviklet som en del av APP2000 ved Universitetet i Sørøst-Norge (USN).

Prosjektet tar utgangspunkt i React- og Vite-klienten fra nettbutikkeksempelet i undervisningen, som er tilpasset til en turapplikasjon.

## Funksjonalitet

Applikasjonen inneholder:

- **Forside:** Introduksjon til Happy Trails.
- **Turer:** Oversikt over turer med informasjon om sted, lengde, varighet og vanskelighetsgrad.
- **Søk:** Mulighet til å søke etter turer basert på navn og sted.
- **Turdetaljer:** Mulighet til å vise mer informasjon om en valgt tur.
- **Hytter:** Oversikt over hytter med informasjon om beliggenhet, sengeplasser og fasiliteter.
- **Hyttedetaljer:** Mulighet til å vise mer informasjon om en valgt hytte.
- **Om oss:** Informasjon om applikasjonen og skoleprosjektet.

## Teknologier

- React
- JavaScript (JSX)
- Vite
- React Router
- CSS

## Slik kjører du applikasjonen

Du trenger Node.js og npm installert.

Åpne prosjektmappen i VS Code, og kjør følgende kommandoer i terminalen:

```bash
npm install
npm run dev
```

Åpne deretter adressen som vises i terminalen, vanligvis `http://localhost:5173`.

**Merk:** På Windows kan du bruke `npm.cmd` i stedet for `npm` dersom PowerShell blokkerer kjøring av npm-skript.

## Bygging

For å kontrollere at prosjektet kan bygges:

```bash
npm run build
```

## Prosjektstatus

Dette er en frontend-prototype. Turene og hyttene bruker foreløpig eksempeldata som er definert direkte i React-komponentene.

Applikasjonen er ikke koblet til backend eller database ennå.

Prosjektet er utviklet som en skoleoppgave ved USN og er ikke en kommersiell tjeneste.

## Bruk av kunstig intelligens

ChatGPT (OpenAI) er brukt som hjelpemiddel under frontend-utviklingen.

KI er blant annet brukt til:

- Forklaringer av React, JSX, komponenter og React Router.
- Forslag til kode for tur- og hytteoversikter.
- Implementering av søkefunksjon og visning av detaljer.
- Tilpasning av navigasjon og forsiden.
- Forslag til CSS-styling.
- Feilsøking og testing av prosjektet.
- Utforming av denne README-filen.

Kodeforslagene er brukt og tilpasset i prosjektet. Bruk av KI dokumenteres også i relevante kildefiler.

## Videre utvikling

Ved videre arbeid kan frontend kobles til en backend og database, slik at turer og hytter kan hentes fra en datakilde i stedet for å bruke eksempeldata.