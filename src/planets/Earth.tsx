import "../styling/Page.css";
import StatsCard from "./statsCard/statsCard";

function Earth() {
  const text =
    "Name: Mercury\n\nType: Terrestrial\n\nDiameter: 3,039.1 mi\n\nDistance from Earth: 48 million mi\n\nTemperature: -290° to 800° F\n\nMercury is the smallest planet and the closest to the Sun. It's temperature varies greatly (ranging from extremely hot during the day to extremely cold during the night) because Mercury has no atmosphere. It has the fastest orbit of any planet, completing one cycle in about 88 days.";
  return (
    <>
      <div className="Sun">
        <br />
        <StatsCard imageSrc="./PlanetImages/Earth.jpg" cardText={text} />
        <br />
      </div>
    </>
  );
}

export default Earth;
