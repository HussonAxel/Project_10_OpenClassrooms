import HeroBanner from "@components/HeroBanner/HeroBanner";
import LocationCardGrid from "@components/LocationCardGrid/LocationCardGrid";


import bannerHomePicture from "@assets/banner_home.png";

export const HomePage = () => {
  return (
    <>
      <HeroBanner
        title={"Chez vous, partout et ailleurs"}
        url={bannerHomePicture}
        alt={"Bannière de la page d'accueil"}
        className="HeroBanner--picture--Home"
      />
      <LocationCardGrid />
    </>
  );
};

