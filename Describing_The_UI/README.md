# Your First Component
- Een component is een herbruikbare UI element voor een Applicatie. Het is een JavaScript functie die je kan bestrooien met markup.
- Door JSX kan je markup gebruiken binnen JavaScript.
- Components kunnen andere components bevatten.
- Een JS file kan uit een hoofdcomponent door export default te gebruiken, maar ook uit een subcomponent door deze alleen binnen de file te gebruiken.

# Importing and Exporting Components
- Een file kan maar één default export bevatten, maar wel meerdere benaamde exports. Andere files kunnen deze componenten weer gebruiken.
- Default export kunnen met elke benaming worden geimporteerd.
- Benaamde exports moeten met brackets en de juiste naam worden geimporteerd. 

# Writing markup with JSX

- JSX is een syntax waarbij je html lijkende markup kan schrijven in een JavaScript file.
- HTML is geen JSX en JSX is geen HTML, maar JSX lijkt wel op HTML.
- Volgens JSX mag je maar één parent element returnen met daarin child elementen. (Je kan hiervoor div gebruiken of alleen <> </>)
- De meeste elementen moeten in camelCase.
- Je kan een converter gebruiken om HTML naar JSX om te zetten.

# Javascript in JSX with curly braces
- Wanneer je een string attribuut wilt toevoegen in JSX, gebruik je één of dubbele aanhalingstekens.   
- Als je een javascript waarde wilt gebruiken als string, gebruik je brackets {}, dit kun je gebruiken voor zowel in elementen als attributen.
- Elke javascript expressie kan worden gebruikt tussen de brackets, zelfs het aanroepen van functies.
- Wanneer je een object of stijl wilt toevoegen zet je dit in dubbele brackets, bij het gebruiken van een bestaande object hoeft dat niet en kan je de variabel gelijk toewijzen in de bracket. 

# Passing props to a component
- React components kunnen met elkaar communiceren door het gebruiken van props.
- Elke javascript value kan erin worden gezet, denk aan objecten, lijsten en functies.
- Een prop is informatie die je in een JSX tag kan zetten, denk daarbij aan de width, height, src etc.
- De child component kan de props weer lezen, door de namen die door de parent component erin is gezet over te nemen in de constructor van de child component. 
- Props kan je destructueren door namen met {} i.p.v. props te gaan gebruiken.
- Props kan je default values geven.
- Props veranderen over tijd en kunnen niet veranderd worden. Het veranderen kan alleen door de state te updaten.

# Conditional Rendering
- Je kan net als JavaScript in React if statements gebruiken die JSX returnt voor een bepaalde conditie.
- Je kan gebruik maken van een ternary operator, dit is een andere syntax voor het schrijven van een if en else statement.
- Wanneer je alleen JSX wilt returnen als iets alleen true is kan je gebruik maken van de && operator.
- Je kan JSX toewijzen aan een variabel.

# Rendering Lists
- Je kan de javascript functies map en filter gebruiken om een lijst van elementen met JSX te genereren. 
- Elk list element moet zijn eigen key hebben, deze key moet uniek zijn. React kan door keys weten welk list itemen bij welk component hoort. Dit is voornamelijk belangrijk als de list items veranderen door toevoeging of verwijdering.
- De key kun je genereren of uit een database halen.

  
