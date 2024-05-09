import logements from "@data/api.json";
import HeroBanner from "@components/HeroBanner/HeroBanner";
import { Link } from "react-router-dom";

const LocationCardGrid = () => {
  return (
    <>
      <HeroBanner
        title={"Chez vous, partout et ailleurs"}
        url={"banner_home"}
        alt={"Bannière de la page d'accueil"}
      />
    </>
  );
};

export default LocationCardGrid;
