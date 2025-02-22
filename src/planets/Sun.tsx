import "../styling/Page.css";
import StatsCard from "../planets/statsCard/StatsCard";

function Sun() {
  const text =
    "Name: Sun\n\nType: Yellow Dwarf (G2V)\n\nDiameter: 865,370 mi\n\nDistance from Earth: 92.96 million mi\n\nTemperature: 9,930° F\n\nThe Sun is the center of our solar system. It is a source of warmth, and a major source of energy for all of us here on Earth. The Sun's energy comes from nuclear fusion, converting hydrogen into helium.";
  return (
    <>
      <div className="Sun">
        <br />
        <StatsCard imageSrc="./PlanetImages/Sun.jpg" cardText={text} />
        <br />
      </div>
    </>
  );
}

export default Sun;
