import "../styling/Page.css";
import StatsCard from "../planets/statsCard/StatsCard";

function Saturn() {
  const text =
    "Name: Saturn\n\nType: Gas Giant\n\nDiameter: 74,898 mi\n\nDistance from Earth: 981.44 million mi\n\nTemperature: -220° F\n\nSaturn is orbited by a ring system made of ice and rock. Saturn is the secong largest planet in the solar system, and is home to over 100 moons. It is the least dense planet, being even less dense than water! Saturn has a unique, hexagonal atmospheric feature at it's north pole consisting of six jet streams and a raging storm in the center.";
  return (
    <>
      <div className="Sun">
        <br />
        <StatsCard imageSrc="./PlanetImages/Saturn.avif" cardText={text} />
        <br />
      </div>
    </>
  );
}

export default Saturn;
