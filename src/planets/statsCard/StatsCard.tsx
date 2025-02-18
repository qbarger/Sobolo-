import "../../styling/Page.css";

interface StatsProps {
  imageSrc: string;
  cardText: string;
}

function StatsCard(props: StatsProps) {
  return (
    <div className="d-flex justify-content-center">
      <div className="card">
        <img
          src={props.imageSrc}
          className="card-img-top"
          alt="Image of the Sun..."
        />
        <div className="card-body">
          <br />
          <p className="stats-card-text">{props.cardText}</p>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
