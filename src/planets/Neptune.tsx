import "../styling/Page.css";
import StatsCard from "../planets/statsCard/StatsCard";

function Neptune() {
  const text =
    "Name: Neptune\n\nType: Ice Giant\n\nDiameter: 30,599 mi\n\nDistance from Earth: 2.86 billion mi\n\nTemperature: -330° F\n\nNeptune is the last planet in our solar system. The second of the ice giants, it is also the windiest planet with supersonic storms up to 1,500 miles per hour. Neptune also possesses a strong magnetic field that is believed to be about 27 times more powerful than Earth's own.";
  return (
    <>
      <div className="Sun">
        <br />
        <StatsCard imageSrc="./PlanetImages/Neptune.jpg" cardText={text} />
        <br />
      </div>
    </>
  );
}

export default Neptune;
