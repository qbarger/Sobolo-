import "../styling/Page.css";
import StatsCard from "../planets/statsCard/StatsCard";

function Uranus() {
  const text =
    "Name: Uranus\n\nType: Ice Giant\n\nDiameter: 31,518 mi\n\nDistance from Earth: 1.83 billion mi\n\nTemperature: -320° F\n\nUranus is one of two ice giants in our solar system. It is blue-ish green in color because of the abundant methane in its atmosphere. Uranus actually rotates on its side (like a rolling ball) and holds the record for the coldest temperature in our solar system. It also has 13 rings orbiting it, but they are faint compared to Saturn's rings.";
  return (
    <>
      <div className="Sun">
        <br />
        <StatsCard imageSrc="./PlanetImages/Uranus.webp" cardText={text} />
        <br />
      </div>
    </>
  );
}

export default Uranus;
