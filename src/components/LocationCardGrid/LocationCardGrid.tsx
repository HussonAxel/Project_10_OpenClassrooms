import logements from "@data/api.json";
import { Link } from "react-router-dom";


const LocationCardGrid: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        {logements.map((logement) => (
          <Link to={`/house/${logement.id}`} key={logement.id}>
            <div
              className="item"
              style={{ backgroundImage: `url(${logement.cover})` }}
            >
              <p className="title">{logement.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LocationCardGrid
