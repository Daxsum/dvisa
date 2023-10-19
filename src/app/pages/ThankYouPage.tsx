import React from 'react';
import {
  Arrow,
  ArrowDown,
  DeutshIcon,
  EnglishIcon,
  SpainIcon,
  defaultLangs,
} from './HomePage';
import img from './HomePage/assets/light-logo.png';

import '../pages/QuizPage/quiz.css';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { useNavigate } from 'react-router-dom';

export const ThankYouPage = () => {
  const [open, setOpen] = React.useState(true);
  const { t, i18n } = useTranslation();
  const changLanguageButtonClicked = (language: string) => {
    i18n.changeLanguage(language);
  };

  const [languages, setLang] = React.useState(defaultLangs(i18n.language));
  const handleLang = activeLang => {
    setLang(
      languages.map(data => ({ ...data, active: data.lang === activeLang })),
    );
    setOpen(t => !t);
  };

  const activeLang = languages.find(l => l.active);
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="ty-main"
        style={{ width: '100%', display: 'flex', padding: '55px 84px' }}
      >
        <img
          style={{ marginBottom: '50px', marginRight: 'auto' }}
          alt="logo"
          onClick={() => navigate('/')}
          width={131}
          src={img}
        />
        <nav className="">
          <div className="dropdown ty-dropdown">
            <button onClick={l => setOpen(!l)} className="dropbtn">
              <span className="form-page-icon">{activeLang?.icon}</span>
              <span className="opened-icon-lang">
                <Arrow />
              </span>
            </button>
            <div className={`dropdown-content ${open ? 'hide' : 'open'}`}>
              <p
                style={{ margin: 0, padding: '7px 0' }}
                onClick={() => {
                  handleLang(activeLang?.lang);
                  changLanguageButtonClicked(activeLang?.value as string);
                }}
              >
                {activeLang?.icon} <ArrowDown />
              </p>
              {languages
                .filter(l => !l.active)
                .map(lang => (
                  <p
                    style={{ margin: 0, padding: '7px 0' }}
                    onClick={() => {
                      handleLang(lang.lang);
                      changLanguageButtonClicked(lang?.value as string);
                    }}
                    id={lang.lang}
                  >
                    {lang.icon} {lang.active && <ArrowDown />}
                  </p>
                ))}
            </div>
          </div>
          <button
            onClick={() => {
              document
                ?.querySelector('#grs-chat-widget .chat-button') // @ts-ignore
                ?.click();
            }}
            className="live-chat chat-button"
          >
            {t(translations.liveChat)}
          </button>
        </nav>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '40px',
        }}
      >
        <svg
          width="85"
          height="85"
          viewBox="0 0 85 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9 18.8C5.9625 25.3965 3 33.6125 3 42.5C3 64.304 20.696 82 42.5 82C64.304 82 82 64.304 82 42.5C82 20.696 64.304 3 42.5 3C36.8515 3 31.44 4.185 26.5815 6.3575"
            stroke="#4AC97D"
            stroke-width="4.01695"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M54.3477 36.1007L58.7717 31.6372"
            stroke="#4AC97D"
            stroke-width="4.01695"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.2266 42.5L37.0497 53.3625L47.1222 43.3295"
            stroke="#4AC97D"
            stroke-width="4.01695"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div
          style={{
            width: 536,
            textAlign: 'center',
            color: '#4AC97D',
            fontSize: 54,
            fontFamily: 'Inter',
            fontWeight: '300',
            lineHeight: 1.4,
            wordWrap: 'break-word',
          }}
          className="ty-title"
        >
          {t(translations.ty.title)}
        </div>
      </div>

      <div className="thank-you-bor">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          className="ty-w"
        >
          <div>
            <p className="ty-p" style={{ position: 'relative' }}>
              <svg
                style={{ position: 'absolute', left: '-25px' }}
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0484 9.45361C13.3522 11.7574 13.3522 15.4845 11.0484 17.778C8.74458 20.0716 5.01758 20.0818 2.72402 17.778C0.43045 15.4742 0.420211 11.7472 2.72402 9.45361"
                  stroke="url(#paint0_linear_700_3345)"
                  stroke-width="1.53587"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.0039 1.49805C14.5295 1.52876 16.0449 2.13287 17.202 3.30014C19.5979 5.69609 19.5979 9.58695 17.202 11.9931"
                  stroke="url(#paint1_linear_700_3345)"
                  stroke-width="1.53587"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.51959 11.983C6.12368 9.58709 6.12368 5.69624 8.51959 3.29004"
                  stroke="#4AC97D"
                  stroke-width="1.53587"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_700_3345"
                    x1="12.7762"
                    y1="9.45361"
                    x2="-0.691165"
                    y2="16.0486"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#002A54" />
                    <stop offset="1" stop-color="#001C33" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_700_3345"
                    x1="18.9989"
                    y1="1.49805"
                    x2="10.957"
                    y2="3.41751"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#002A54" />
                    <stop offset="1" stop-color="#001C33" />
                  </linearGradient>
                </defs>
              </svg>
              {t(translations.ty.question1)}
            </p>
            <p className="ty-s">{t(translations.ty.answer1)}</p>
          </div>
          <div>
            <div
              style={{
                width: 167,
                height: 67,
                paddingLeft: 40,
                paddingRight: 40,
                paddingTop: 24,
                paddingBottom: 24,
                background: '#4AC97D',
                borderRadius: 14,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 40,
                display: 'inline-flex',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  wordWrap: 'break-word',
                }}
              >
                {t(translations.ty.btnText1)}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: '40px 0',
            width: '100%',
            height: 0,
            border: '1px #D8D8D8 solid',
          }}
        ></div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          className="ty-w"
        >
          <div>
            <p className="ty-p" style={{ position: 'relative' }}>
              <svg
                style={{ position: 'absolute', left: '-25px' }}
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.30078 12.6152V15.0002L9.10078 13.2002"
                  stroke="#4AC97D"
                  stroke-width="1.35"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.30078 9.6001V10.5001"
                  stroke="#4AC97D"
                  stroke-width="1.35"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.3 14.9997L5.5 13.1997"
                  stroke="#4AC97D"
                  stroke-width="1.35"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 7.8C1 3.3 2.8 1.5 7.3 1.5H11.8"
                  stroke="url(#paint0_linear_700_3355)"
                  stroke-width="1.35"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 8.69971V13.1997C19 17.6997 17.2 19.4997 12.7 19.4997H7.3C2.8 19.4997 1 17.6997 1 13.1997V11.3817"
                  stroke="url(#paint1_linear_700_3355)"
                  stroke-width="1.35"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.4008 8.7C12.7008 8.7 11.8008 7.8 11.8008 5.1V1.5L19.0008 8.7"
                  stroke="url(#paint2_linear_700_3355)"
                  stroke-width="1.35"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_700_3355"
                    x1="11.8"
                    y1="1.5"
                    x2="1.67989"
                    y2="8.74915"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#002A54" />
                    <stop offset="1" stop-color="#001C33" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_700_3355"
                    x1="19"
                    y1="8.69971"
                    x2="1.81387"
                    y2="20.6684"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#002A54" />
                    <stop offset="1" stop-color="#001C33" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_700_3355"
                    x1="19.0008"
                    y1="1.5"
                    x2="10.3097"
                    y2="5.13155"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#002A54" />
                    <stop offset="1" stop-color="#001C33" />
                  </linearGradient>
                </defs>
              </svg>
              {t(translations.ty.question2)}
            </p>
            <p className="ty-s">{t(translations.ty.answer2)}</p>
          </div>
          <div>
            <div
              style={{
                width: 167,
                height: 67,
                paddingLeft: 40,
                paddingRight: 40,
                paddingTop: 24,
                paddingBottom: 24,
                background: '#4AC97D',
                borderRadius: 14,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 40,
                display: 'inline-flex',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  wordWrap: 'break-word',
                }}
              >
                {t(translations.ty.btnText2)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="copyright"
        style={{
          marginTop: '50px',
          textAlign: 'right',
          marginRight: '46px',
          marginBottom: '20px',
        }}
      >
        {t(translations.copyright.description)}
      </div>
      <div style={{ marginTop: '30px' }} className="mobile-footer">
        {t(translations.copyright.description)}
      </div>
    </div>
  );
};
