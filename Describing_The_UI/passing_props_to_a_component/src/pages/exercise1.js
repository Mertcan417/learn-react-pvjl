// Challenge 1 of 3: Extract a component
// This Gallery component contains some very similar markup for two profiles.
// Extract a Profile component out of it to reduce the duplication.
// You’ll need to choose what props to pass to it.

function Profile({ name, imageUrl, profession, awards, discovered }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageUrl}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: 4 </b>({awards})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name={"Maria Skłodowska-Curie"}
        imageUrl={getImageUrl("szV5sdG")}
        profession={"physicist and chemist"}
        awards="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
            Matteucci Medal"
        discovered={"polonium (chemical element)"}
      ></Profile>

     
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl("YfeOqp2")}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}
