import "../styling/Page.css";
import StatsCard from "../planets/statsCard/StatsCard";

function Venus() {
  const text =
    "Name: Venus\n\nType: Terrestrial\n\nDiameter: 7,520.8 mi\n\nDistance from Earth: 37.637 million mi\n\nTemperature: ~867° F\n\nVenus is the hottest planet in the solar system with temperatures up to almost 900° F. This is because Venus has a thick CO₂ atmosphere. Venus rotates the opposite direction that Earth rotates. A day on Venus is also longer than a year on Venus (Day: 243 Earth days / Year: 225 Earth days).";
  return (
    <>
      <div className="Sun">
        <br />
        <StatsCard imageSrc="./PlanetImages/Venus.webp" cardText={text} />
        <br />
      </div>
    </>
  );
}

export default Venus;
