import "../styling/Page.css";
import StatsCard from "../planets/statsCard/StatsCard";

function Jupiter() {
  const text =
    'Name: Jupiter\n\nType: Gas Giant\n\nDiameter: 86,881 mi\n\nDistance from Earth: 453.2 million mi\n\nTemperature: -166° F\n\nJupiter is the largest planet in the solar system. It\'s so big that you can fit over 1,300 Earths inside of it. Jupiter is home to a massive storm called the "Great Red Spot", which has been raging for at least 150 years. It is also the home to the largest moon in the solar system, Ganymede.';
  return (
    <>
      <div className="Sun">
        <br />
        <StatsCard imageSrc="./PlanetImages/Jupiter.jpg" cardText={text} />
        <br />
      </div>
    </>
  );
}

export default Jupiter;
