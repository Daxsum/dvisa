import * as React from "react";
import { Helmet } from "react-helmet-async";
import img from "../HomePage/assets/logo.png";
import { Arrow, ArrowDown, defaultLangs } from "../HomePage";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { translations } from "locales/translations";

export function FormPage() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [languages, setLang] = React.useState(defaultLangs(i18n.language));
  const handleLang = (activeLang) => {
    setLang(
      languages.map((data) => ({ ...data, active: data.lang === activeLang }))
    );
    setOpen((t) => !t);
  };

  const changLanguageButtonClicked = (language: string) => {
    i18n.changeLanguage(language);
  };

  const activeLang = languages.find((l) => l.active);

  return (
    <>
      <Helmet>
        <title>Form Page</title>
      </Helmet>
      <main className="form-start">
        <div className="form-start-left">
          <img alt="logo" onClick={() => navigate("/")} width={131} src={img} />
          <h1>
            {t(translations.fp.title1)}{" "}
            <span className="green">{t(translations.fp.title2)}</span>{" "}
            {t(translations.fp.title3)}
          </h1>
          <h2>{t(translations.fp.description)}</h2>
          <p
            style={{ display: "flex", alignItems: "center" }}
            className="form-start-iconed-text"
          >
            <svg
              style={{ marginRight: "5px" }}
              width="32"
              height="35"
              viewBox="0 0 32 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1181 5.94436L16 2.05469"
                stroke="white"
                stroke-width="2.34791"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.6139 25.6126C26.362 30.3055 21.5589 33.5496 15.9999 33.5496C8.26767 33.5496 2 27.2819 2 19.5497C2 11.8175 8.26767 5.5498 15.9999 5.5498C17.0707 5.5498 18.1101 5.69161 19.118 5.92783"
                stroke="white"
                stroke-width="2.34791"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27.166 11.1885C28.914 13.5192 30.0008 16.4009 30.0008 19.5505"
                stroke="#4AC97D"
                stroke-width="2.34791"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.1259 23.9756V15.5664L9.76367 18.1963"
                stroke="white"
                stroke-width="2.34791"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.1496 15.5664C20.8818 15.5664 22.2991 16.9837 22.2991 18.716V20.8419C22.2991 22.5742 20.8818 23.9915 19.1496 23.9915C17.4173 23.9915 16 22.5742 16 20.8419V18.716C16 16.968 17.4173 15.5664 19.1496 15.5664Z"
                stroke="white"
                stroke-width="2.34791"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {t(translations.fp.deadline)}
          </p>
          <p className="form-start-last">{t(translations.fp.description2)}</p>
        </div>
        <div className="form-start-right">
          <nav className="">
            <div className="dropdown">
              <button onClick={(l) => setOpen(!l)} className="dropbtn">
                <span className="form-page-icon">{activeLang?.icon}</span>
                <span className="opened-icon-lang">
                  <Arrow />
                </span>
              </button>
              <div className={`dropdown-content ${open ? "hide" : "open"}`}>
                <p style={{ margin: 0, padding: "7px 0" }}>
                  {activeLang?.icon} <ArrowDown />
                </p>
                {languages
                  .filter((l) => !l.active)
                  .map((lang) => (
                    <p style={{ margin: 0, padding: "7px 0" }} id={lang.lang}>
                      {lang.icon} {lang.active && <ArrowDown />}
                    </p>
                  ))}
              </div>
            </div>
            <button className="live-chat chat-button">
              {t(translations.liveChat)}
            </button>
          </nav>
          <div className="form-right-flex">
            <h2>{t(translations.fp.titleRight)}</h2>
            <button onClick={() => navigate("/")} className="form-start-btn">
              {t(translations.fp.btnText)}
            </button>
            <p className="copyright">{t(translations.copyright.description)}</p>
          </div>
        </div>
      </main>
      <div className="mobile-footer">
        {t(translations.copyright.description)}
      </div>
    </>
  );
}
