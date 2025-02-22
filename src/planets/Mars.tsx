import "../styling/Page.css";
import StatsCard from "../planets/statsCard/StatsCard";

function Mars() {
  const text =
    'Name: Mars\n\nType: Terrestrial\n\nDiameter: 4,212.3 mi\n\nDistance from Earth: 140 million mi\n\nTemperature: -225° to 70° F\n\nMars is popularly known as "The Red Planet". It has a thin CO₂ atmosphere that is not conducive to complex life. However, Mars has many ancient riverbeds and ice caps, which point to the possibility of prior life on Mars. It is also home to the largest volcano in the solar system, Olympus Mons!';
  return (
    <>
      <div className="Sun">
        <br />
        <StatsCard imageSrc="./PlanetImages/Mars.jpg" cardText={text} />
        <br />
      </div>
    </>
  );
}

export default Mars;
