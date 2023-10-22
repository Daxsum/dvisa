import * as React from "react";
import { Helmet } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { FormPage } from "./pages/FormPage";

import { useTranslation } from "react-i18next";
import "./index.css";

export const globVar = {};

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s"
        defaultTitle=""
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="" />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page2" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}
