import HeroBanner from '../components/HeroBanner/HeroBanner';
import LocationGalery  from '../components/LocationCardGrid/LocationCardGrid';


import banner_home from '../assets/banner_home.png';

export const HomePage = () => {
  return (
    <>
      <HeroBanner
        title={"Chez vous, partout et ailleurs"}
        url={banner_home}
        alt={"Bannière de la page d'accueil"}
      />
      <LocationGalery />
    </>
  );
};

