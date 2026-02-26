/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her

// short version

function checkOddOrEven(someNumber) {
  return someNumber % 2 === 0 ? "Partall" : "Oddetall"
}

// a more explicit version

function checkOddOrEvenAgain(someNumber) {
  if (someNumber % 2 === 0) {
    return "Partall"
  } else {
    return "Oddetall"
  }
}

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her

function scream(someString) {
  return `${someString.toUpperCase()}!`
}

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her

function greetMe(name, hour) {
  if (hour < 0 || hour > 23) {
    return `Ugyldig tid`
  } else if (hour <= 5) {
    return `God natt, ${name}`
  } else if (hour <= 11) {
    return `God morgen, ${name}`
  } else if (hour <= 17) {
    return `God dag, ${name}`
  } else if (hour <= 23) {
    return `God kveld, ${name}`
  } else {
    return `OOps, something went wrong!`
  }
}

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her
function removeFirstAndLast(someArray) {
  return someArray.slice(1, -1)
}

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her

function cheerUp(aString) {
  return aString.toLowerCase().includes("vanskelig")
    ? aString.replace("vanskelig", "gøy").trim("")
    : aString
}

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"]

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her

let steg1 = items.shift()

let steg2 = items.map((item) => (item === "Viskelær" ? "Linjal" : item))

let steg3 = items.splice(1, 2, "Markeringspenn")

let steg4 = items.join(" | ")
console.log(steg4)

let wordsWithE = items.filter((item) => item.includes("e"))
/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her

// Without mutating the original array
function addOrRemove(anArray, aString) {
  let newArray = []
  if (anArray.some((item) => item.toLowerCase() === aString.toLowerCase())) {
    newArray = anArray.filter(
      (item) => item.toLowerCase() !== aString.toLowerCase()
    )
    return newArray
  } else {
    newArray = [...anArray, aString]
    return newArray
  }
}

// Mutating the original array
function addOrRemoveMutating(anArray, aString) {
  const stringPassed = aString.toLowerCase()
  const index = anArray.findIndex((item) => item.toLowerCase() === stringPassed)

  if (index !== -1) {
    anArray.splice(index, 1)
  } else {
    anArray.push(aString)
  }

  return anArray
}

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".




******************************************************************************/

// Skriv koden for oppgave 8 her

const smileNow = (something) => {
  switch (typeof something) {
    case "string":
      return `$😎${something}😎`

    case "number":
      return `😎${(something * 2).toString()}😎`
    case "boolean":
      return something ? `😎Ja😎` : `😎Slap av😎`
    default:
      return `😎Kun primitive verdier😎`
  }
}

console.log("Heyyy! 😎")
