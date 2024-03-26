## Responding to Events
- Je kan event handles toevoegen aan je JSX. Je kan door event handlers reacties teruggeven wanneer er een interactie is, zoals klikken etc.
- Om een event handler toe te voegen, moet er eerst een functie worden aangemaakt en deze als prop naar de JSX tag worden toegevoegd.
- Event handlers hebben beginnen meestal als naam met "handle".
- De functie zelf moet worden toegewezen als prop, deze moet niet worden aangeroepen in haakjes ().
- Events kunnen verspreiden, dit kan je voorkomen e.stopPropagarion() te gebruiken en in je functie een e (event) als parameter op te nemen.
- Met e.preventDefault() kan je onbedoelde browser acties voorkomen.

## State: A Component's Memory
- Een component die informatie moet onthouden wordt in React state genoemd.
- React houdt local variables niet in het geheugen, bij het renderen van een component voor de 2de keer kan dat gemerkt worden.
- Wijzigingen in local variables zorgen niet voor renders.
- De useState hook van React zorgt ervoor dat een component een variable kan onthouden ongeacht de render en kan met de setter functie een re-render triggeren.
- Hooks zijn speciale functies in React en beginnen met de naam "use".
- State is geisoleerd en is prive. Het veranderen van een state van een component heeft geeft invloed op  andere componenten.
  
## Render and Commit
#### Triggeren van een render
- Om een render te triggeren zijn er verschillende redenen, zoals de initiele render van de component of wanneer een component zijn state is veranderd.
- Updaten van de state zorgt ervoor dat er een render wordt geque-ed.

#### Renderen van een component
- Nadat er een render is getriggered, roept React je component om te zien wat er op het scherm moet worden weergegeven.
- Rendering is dat React je componenten aanroept.

#### Committen naar de DOM
- React zal bij veranderingen de nodige handelingen uitvoeren om de DOM te matchen met de meest recente render.
- Als er een verschil is tussen de renders, zal React de DOM nodes veranderen.
  
## State as a Snapshot
- State is a snapshot, een state updaten veranderen zorgt niet voor het wijzigen van een state variable. Maar juist voor het triggeren van een re-render.
- Het wijzigen van state, zorgt ervoor dat de state alleen voor de volgende render wordt veranderd.
- Een state variable veranderd nooit binnen een render.
  
## Queueing a Series of State Updates
- React wacht totdat alle code in de event handlers zijn gerund voordat de state wordt geupdate.
- Als je de state meerdere keren wilt veranderen vlak voor de volgende render, kan je gebruik maken van de setUpdate(state => state) functie.
  
## Updating Objects in State
## Updating Arrays in State

