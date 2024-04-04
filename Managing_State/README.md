# Reacting to Input with State
- Denk na over welke states je component kan zijn.
- Denk na over welke dingen de changes in state triggeren (clicks, hovers door gebruikers of netwerk door computer).
- Hoe ga je de state gaat representeren.
- Welke event handlers je gaat koppelen om de state te updaten.


# Choosing the State Structure
- Groepeer gerelateerde state.
- Vermijd niet relevante states.
- Vermijd duplicaties in state.
- Vermijd diepe geneste state.
- Als twee state variables altijd samen veranderen, is het een goed idee om deze te vormen tot één state variable.

# Sharing State Between Components
- Met het delen van state, kun je het beste dezelfde parent component gebruiken en daar de state beheren.
- Als je de state voor de child component wilt gebruiken kun je deze in de props zetten.

# Preserving and Resetting State
- Elke component heeft zijn eigen state, zelfs als je 2x dezelfde component rendert. Elk heeft zijn eigen state.
- Een component blijft zijn state behouden zolang deze niet van positie veranderd in de UI tree.
- Wanneer dezelfde component in dezelfde positie, blijft React de state behouden.
- In sommige gevallen wil je je component de state laten verwijderen, dan kun je keys of een andere plaats voor de component gebruiken.

# Extracting State Logic into a Reducer
- Components met veel state updates verspreidt over meerdere event handlers kunnen vermoeiend zijn. Het kan vergemakkelijkt worden door het gebruiken van functie, namelijk de reducer.
- Het gebruiken van reducers is een andere manier om state te managen. I.p.v het setten van state, dispatch je actions. 
- Het dispatchen van actions is anders dan het setten van state. Bij het setten van state gaat het voornamelijk om wat React moet doen. Maar bij het dispatchen gaat het juist om wat de gebruiker heeft gedaan.
- Aan het action object die je dispatched gebruik je voornamelijk een type, voor wat er is gebeurd. En nog extra identieke info.
- In de reducer functie zet je je state logica. Deze heeft twee parameters, een state en een action. De functie returnt de nieuwe state voor React.

# Passing Data Deeply with Context
- Context maakt info beschikbaar vanuit de parent component aan de child componenten. I.p.v elke keer via props info geven aan components.
- Eerst hoor je een context te maken, Daarna gebruik je de context van de component die de data nodig heeft. Vervolgens zet je de context bij de component die de data aanduidt.
- Je gebruikt createContext(value) functie, als parameter kan je alles erin zetten wat je wilt objecten, etc.
- Vervolgens gebruik je de use context hook en je context die je hebt aangemaakt.
- Met Context kun je componenten schrijven die “zich aanpassen”, afhankelijk waar in welke context ze worden weergegeven.

# Scaling Up with Reducer and Context
- Je kan een reducer met de context gebruiken om een component state te lezen en te wijzigen, i.p.v dit elke keer via props door te geven.
- Maak 2 contexts, een state context en een context voor dispatch de functies.
