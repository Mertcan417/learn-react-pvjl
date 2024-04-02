/*Challenge 5 of 5: Fix misplaced state in the list 
In this list, each Contact has state that determines whether “Show email” has been pressed for it. Press “Show email” for Alice, and then tick the “Show in reverse order” checkbox. You will notice that it’s Taylor’s email that is expanded now, but Alice’s—which has moved to the bottom—appears collapsed.

Fix it so that the expanded state is associated with each contact, regardless of the chosen ordering. */

import { useState } from "react";

const contacts = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
];

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          value={reverse}
          onChange={(e) => {
            setReverse(e.target.checked);
          }}
        />{" "}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}

function Contact({ contact }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
      {expanded && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "Hide" : "Show"} email
      </button>
    </>
  );
}
