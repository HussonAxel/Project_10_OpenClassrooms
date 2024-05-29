import { AboutPage } from "@pages/AboutPage";
import { ErrorPage } from "@pages/ErrorPage";
import { FicheLogementPage } from "@pages/FicheLogementPage";
import { HomePage } from "@pages/HomePage";

import { Route, Routes, Navigate } from "react-router-dom";

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/house/:id" element={<FicheLogementPage />} />
      <Route path="/404" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};


