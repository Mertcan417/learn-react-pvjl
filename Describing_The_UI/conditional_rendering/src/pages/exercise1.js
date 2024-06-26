// Challenge 1 of 3: Show an icon for incomplete items with ? : 
// Use the conditional operator (cond ? a : b) to render a ❌ 
// if isPacked isn’t true.

function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked? '✔' : '❌'}
      </li>
    );
  }
  
  export default function PackingList1() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  