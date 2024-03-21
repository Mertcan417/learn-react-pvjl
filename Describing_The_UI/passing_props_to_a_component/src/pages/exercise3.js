// Challenge 3 of 3: Passing JSX in a children prop
// Extract a Card component from the markup below, and use the children prop to pass different JSX to it:

export default function Profile3() {
  return (
    <div>
      <Card title={"Photo"}>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card title={"About"}>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}
