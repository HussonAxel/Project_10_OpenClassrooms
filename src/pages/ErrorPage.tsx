import Error from "@components/Error/Error";

export const ErrorPage = () => {
  return (
    <Error
      message="Oups! La page que vous demandez n'existe pas"
      status={404}
      link="Retourner sur la page d'accueil"
    />
  );
};
