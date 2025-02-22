import "../styling/Page.css";
import StatsCard from "../planets/statsCard/StatsCard";

function Earth() {
  const text =
    "Name: Earth\n\nType: Terrestrial\n\nDiameter: 7,926.2 mi\n\nDistance from the Sun: 91.965 million mi\n\nTemperature: 59° F\n\nEarth is our home. About 71% of Earth's surface is covered with water, and it is the only known planet with life. Earth has a rich atmosphere that protects us from solar radiation, and is orbited by our moon.";
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
