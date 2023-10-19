/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { FormPage } from './pages/FormPage';
import { QuizPage } from './pages/QuizPage/QuizPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useTranslation } from 'react-i18next';
import './index.css';
import { ThankYouPage } from './pages/ThankYouPage';
import { ServicesBlock } from './pages/QuizPage/blocks/ServicesBlock';

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
        {/* <Route path="/form" element={<FormPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/services" element={<ServicesBlock />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
