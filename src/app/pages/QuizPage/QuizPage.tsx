/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from 'react';
import { Form, useFieldAnswer } from '@quillforms/renderer-core';
import '@quillforms/renderer-core/build-style/style.css';
import { registerCoreBlocks } from '@quillforms/react-renderer-utils';
import './quiz.css';
import { Arrow, ArrowDown, defaultLangs } from '../HomePage';
import img from '../HomePage/assets/logo.png';
import { useCountries } from 'use-react-countries';
import { Display2, Display3 } from './blocks/ImageBlocks';
import { registerBlockType } from '@quillforms/blocks';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

export const notEligibleCountries = [
  'Brazil',
  'Colombia',
  'Dominican Republic',
  'El Salvador',
  'Haiti',
  'Honduras',
  'Jamaica',
  'Mexico',
  'Venezuela',
  'Canada',
  'Mexico',
  'Bangladesh',
  'India',
  'Pakistan',
  'South Korea',
  'Philippines',
  'Vietnam',
  'Nigeria',
];

registerCoreBlocks();

registerBlockType('image-block1', {
  supports: {
    editable: false,
  },
  attributes: {
    btnText: { type: 'string' },
    btn3Text: { type: 'string' },
    btn2Text: { type: 'string' },
    line1: { type: 'string' },
    line2: { type: 'string' },
    line3: { type: 'string' },
    line4: { type: 'string' },
    line5: { type: 'string' },
    example: { type: 'string' },
  },
  // @ts-ignore
  display: Display2,
});
registerBlockType('image-block2', {
  supports: {
    editable: false,
  },
  attributes: {
    btnText: { type: 'string' },
    btn3Text: { type: 'string' },
    btn2Text: { type: 'string' },
    line1: { type: 'string' },
    line2: { type: 'string' },
    line3: { type: 'string' },
    line4: { type: 'string' },
    line5: { type: 'string' },
    example: { type: 'string' },
  },
  // @ts-ignore
  display: Display3,
});

export const QuizPage = () => {
  const { t, i18n } = useTranslation();

  const { countries } = useCountries();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const ifYes = useFieldAnswer('51');
  const menuItems = React.useMemo(
    () => [
      {
        name: t(translations.quiz.menu.name),
        active: true,
      },
      {
        name: t(translations.quiz.menu.contact),
        active: false,
      },
      {
        name: t(translations.quiz.menu.gender),
        active: false,
      },
      {
        name: t(translations.quiz.menu.birth),
        active: false,
      },
      {
        name: t(translations.quiz.menu.country),
        active: false,
      },
      {
        name: t(translations.quiz.menu.photo),
        active: false,
      },
      {
        name: t(translations.quiz.menu.mail),
        active: false,
      },
      {
        name: t(translations.quiz.menu.additional),
        active: false,
      },
      {
        name: t(translations.quiz.menu.payment),
        active: false,
      },
    ],
    [t],
  );
  const [activeMenuItems, setMenuItems] = useState(() => menuItems);

  const [languages, setLang] = React.useState(defaultLangs(i18n.language));
  const handleLang = activeLang => {
    setLang(
      languages.map(data => ({ ...data, active: data.lang === activeLang })),
    );
    setOpen(t => !t);
  };

  useEffect(() => {
    // @ts-ignore
    setMenuItems(items => {
      return items.map((i, idx) => {
        return { ...i, name: menuItems?.[idx]?.name };
      });
    });
  }, [menuItems]);

  const changLanguageButtonClicked = (language: string) => {
    i18n.changeLanguage(language);
  };

  const activeLang = languages.find(l => l.active);

  const active = activeMenuItems.find(a => a.active);
  const activeIdx = activeMenuItems.findIndex(a => a.active);

  return (
    <>
      <div className="quiz-wrapper" style={{ width: '100%', height: '100vh' }}>
        <div className="quiz-left">
          <img
            style={{ marginBottom: '50px' }}
            alt="logo"
            onClick={() => navigate('/')}
            width={131}
            src={img}
          />

          <div className="active-menu">
            {activeMenuItems.map((item, idx) => (
              <div style={{ position: 'relative' }}>
                {activeMenuItems.length - 1 > idx && (
                  <hr className={activeIdx > idx ? 'filled' : 'dotted'} />
                )}
                <div
                  className="active-wrap"
                  style={{
                    display: 'inline-block',
                    width: '100%',
                    minWidth: '200px',
                    paddingBottom: '50px',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: '18px',
                      height: '18px',
                      background: '#01264A',
                      borderRadius: '9999px',
                      border: '2px white solid',
                      marginRight: '10px',
                      backgroundColor: item.active ? 'white' : 'transparent',
                    }}
                  />
                  <span
                    className="active-title"
                    style={{ color: item.active ? '#FFFFFF' : '#D2D2D2' }}
                  >
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mobile-active-item" style={{ textAlign: 'center' }}>
            {active?.name}
          </div>
        </div>
        <div className="quiz-right">
          <nav className="">
            <div className="dropdown">
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
                        changLanguageButtonClicked(lang.value as string);
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
          {/* @ts-ignore */}
          <Form
            formId={1}
            beforeGoingNext={({
              goNext,
              currentBlockId,
              answers,
              setIsFieldValid,
              setFieldValidationErr,
              setIsCurrentBlockSafeToSwipe,
            }) => {
              setMenuItems(me =>
                me.map((m, idx) =>
                  idx + 1 === +currentBlockId[0]
                    ? { ...m, active: true }
                    : { ...m, active: false },
                ),
              );

              if (
                currentBlockId === '22' &&
                // @ts-ignore
                answers[currentBlockId].value.length < 5
              ) {
                setIsFieldValid(currentBlockId, false);
                setFieldValidationErr(
                  currentBlockId,
                  'Minimum number of digits should be 5!',
                );
                setIsCurrentBlockSafeToSwipe(false);
              } else {
                currentBlockId === '10' &&
                  // @ts-ignore
                  localStorage.setItem('landing-surname', answers['10'].value);
                currentBlockId === '11' &&
                  // @ts-ignore
                  localStorage.setItem('landing-fname', answers['11'].value);
                currentBlockId === '21' &&
                  // @ts-ignore
                  localStorage.setItem('landing-mname', answers['21'].value);
                currentBlockId === '22' &&
                  // @ts-ignore
                  localStorage.setItem('landing-pnumber', answers['22'].value);
                currentBlockId === '23' &&
                  // @ts-ignore
                  localStorage.setItem('landing-email', answers['23'].value);
                currentBlockId === '30' &&
                  // @ts-ignore
                  localStorage.setItem('landing-email2', answers['30'].value);
                currentBlockId === '40' &&
                  // @ts-ignore
                  localStorage.setItem('landing-gender', answers['40'].value);
                currentBlockId === '41' &&
                  // @ts-ignore
                  localStorage.setItem('landing-date', answers['41'].value);
                currentBlockId === '50' &&
                  // @ts-ignore
                  localStorage.setItem('landing-country', answers['50'].value);
                currentBlockId === '51' &&
                  localStorage.setItem(
                    'landing-eligibility',
                    // @ts-ignore
                    answers['51'].value,
                  );
                currentBlockId === '60' &&
                  localStorage.setItem(
                    'landing-eligibleCountry',
                    // @ts-ignore
                    answers['60'].value,
                  );
                currentBlockId === '71' &&
                  localStorage.setItem(
                    'landing-incare',
                    // @ts-ignore
                    answers['71'].value,
                  );
                currentBlockId === '81' &&
                  localStorage.setItem(
                    'landing-highschool',
                    // @ts-ignore
                    answers['81'].value,
                  );
                currentBlockId === '90' &&
                  localStorage.setItem(
                    'landing-marital',
                    // @ts-ignore
                    answers['90'].value,
                  );
                if (currentBlockId === '80') {
                  localStorage.setItem(
                    'landing-address-line-1',
                    // @ts-ignore
                    answers['111'].value,
                  );
                  localStorage.setItem(
                    'landing-address-line-2',
                    // @ts-ignore
                    answers['112'].value,
                  );
                  // @ts-ignore
                  localStorage.setItem('landing-postal', answers['113'].value);
                  // @ts-ignore
                  localStorage.setItem('landing-region', answers['114'].value);
                  localStorage.setItem(
                    'landing-country2',
                    // @ts-ignore
                    answers['115'].value,
                  );
                }

                goNext();
              }
            }}
            formObj={{
              blocks: [
                {
                  name: 'short-text',
                  id: '10',
                  attributes: {
                    required: true,
                    label: t(translations.quiz.form.lname),
                    defaultValue: localStorage.getItem('landing-surname'),
                  },
                },
                {
                  name: 'short-text',
                  id: '11',
                  attributes: {
                    required: true,
                    label: t(translations.quiz.form.fname),
                    defaultValue: localStorage.getItem('landing-fname'),
                  },
                },
                {
                  name: 'short-text',
                  id: '21',
                  attributes: {
                    required: false,
                    label: t(translations.quiz.form.mname),
                    defaultValue: localStorage.getItem('landing-mname'),
                  },
                },
                {
                  name: 'short-text',
                  id: '22',
                  attributes: {
                    required: true,
                    label: t(translations.quiz.form.phone),
                    defaultValue: localStorage.getItem('landing-pnumber'),
                  },
                },
                {
                  name: 'email',
                  id: '23',
                  attributes: {
                    required: true,
                    label: t(translations.quiz.form.email),
                    defaultValue: localStorage.getItem('landing-email'),
                  },
                },
                {
                  name: 'email',
                  id: '30',
                  attributes: {
                    required: true,
                    label: t(translations.quiz.form.email1),
                    defaultValue: localStorage.getItem('landing-email2'),
                  },
                },
                {
                  name: 'multiple-choice',
                  id: '40',
                  attributes: {
                    required: true,
                    multiple: false,
                    verticalAlign: false,
                    label: t(translations.quiz.form.gender.name),
                    defaultValue: localStorage.getItem('landing-gender'),
                    choices: [
                      {
                        label: t(translations.quiz.form.gender.male),
                        value: t(translations.quiz.form.gender.male),
                      },
                      {
                        label: t(translations.quiz.form.gender.female),
                        value: t(translations.quiz.form.gender.female),
                      },
                    ],
                  },
                },
                {
                  name: 'date',
                  id: '41',
                  attributes: {
                    required: true,
                    label: t(translations.quiz.form.date),
                    defaultValue: localStorage.getItem('landing-date'),
                  },
                },
                {
                  name: 'dropdown',
                  id: '50',
                  attributes: {
                    required: true,
                    multiple: false,
                    verticalAlign: false,
                    defaultValue: localStorage.getItem('landing-country'),
                    label: t(translations.quiz.form.country),
                    choices: countries
                      .sort(function (a, b) {
                        if (a.name < b.name) {
                          return -1;
                        }
                        if (a.name > b.name) {
                          return 1;
                        }
                        return 0;
                      })
                      .map(({ name }) => ({
                        label: name,
                        value: name,
                      })),
                  },
                },
                {
                  name: 'multiple-choice',
                  id: '51',
                  attributes: {
                    defaultValue: localStorage.getItem('landing-eligibility'),
                    required: true,
                    multiple: false,
                    verticalAlign: false,
                    label: t(translations.quiz.form.eligibility.name),
                    choices: [
                      {
                        label: t(translations.quiz.form.eligibility.yes),
                        value: t(translations.quiz.form.eligibility.yes),
                      },
                      {
                        label: t(translations.quiz.form.eligibility.not),
                        value: t(translations.quiz.form.eligibility.not),
                      },
                    ],
                  },
                },
                // @ts-ignore
                ...(ifYes?.includes(t(translations.quiz.form.eligibility.yes))
                  ? []
                  : [
                      {
                        name: 'dropdown',
                        id: '60',
                        attributes: {
                          defaultValue: localStorage.getItem(
                            'landing-eligibleCountry',
                          ),
                          required: false,
                          multiple: false,
                          verticalAlign: false,
                          label: t(translations.quiz.form.notEligibility),
                          choices: countries
                            .sort(function (a, b) {
                              if (a.name < b.name) {
                                return -1;
                              }
                              if (a.name > b.name) {
                                return 1;
                              }
                              return 0;
                            })
                            .map(({ name }) => ({
                              label: name,
                              value: name,
                            })),
                        },
                      },
                    ]),
                {
                  id: '63',
                  name: 'image-block1',
                  attributes: {
                    label: t(translations.quiz.form.photo.second.label),
                    description: t(
                      translations.quiz.form.photo.second.description,
                    ),
                    buttonText: t(translations.quiz.form.photo.first.btnText),
                    btn3Text: t(translations.quiz.form.photo.second.btn3Text),
                    btn2Text: t(translations.quiz.form.photo.second.btn2Text),
                    line1: t(translations.quiz.form.photo.second.line1),
                    line2: t(translations.quiz.form.photo.second.line2),
                    line3: t(translations.quiz.form.photo.second.line3),
                    line4: t(translations.quiz.form.photo.second.line4),
                    line5: t(translations.quiz.form.photo.second.line5),
                    example: t(translations.quiz.form.photo.second.example),
                  },
                },
                {
                  id: '70',
                  name: 'image-block2',
                  attributes: {
                    label: t(translations.quiz.form.photo.second.label),
                    description: t(
                      translations.quiz.form.photo.second.description,
                    ),
                    buttonText: t(translations.quiz.form.photo.first.btnText),
                    btn3Text: t(translations.quiz.form.photo.second.btn3Text),
                    btn2Text: t(translations.quiz.form.photo.second.btn2Text),
                    line1: t(translations.quiz.form.photo.second.line1),
                    line2: t(translations.quiz.form.photo.second.line2),
                    line3: t(translations.quiz.form.photo.second.line3),
                    line4: t(translations.quiz.form.photo.second.line4),
                    line5: t(translations.quiz.form.photo.second.line5),
                    example: t(translations.quiz.form.photo.second.example),
                  },
                },
                {
                  name: 'short-text',
                  id: '71',
                  attributes: {
                    required: false,
                    label: t(translations.quiz.form.inCareOf),
                    defaultValue: localStorage.getItem('landing-incare'),
                  },
                },
                {
                  name: 'group',
                  id: '80',
                  attributes: {
                    label: 'Mailing Address',
                  },
                  innerBlocks: [
                    {
                      name: 'short-text',
                      id: '111',
                      attributes: {
                        required: true,
                        label: t(translations.quiz.form.shipping.address1),
                        defaultValue: localStorage.getItem(
                          'landing-address-line-1',
                        ),
                      },
                    },
                    {
                      name: 'short-text',
                      id: '112',
                      attributes: {
                        required: true,
                        label: t(translations.quiz.form.shipping.address2),
                        defaultValue: localStorage.getItem(
                          'landing-address-line-2',
                        ),
                      },
                    },
                    {
                      name: 'short-text',
                      id: '113',
                      attributes: {
                        required: true,
                        label: t(translations.quiz.form.shipping.postal),
                        defaultValue: localStorage.getItem('landing-postal'),
                      },
                    },
                    {
                      name: 'short-text',
                      id: '114',
                      attributes: {
                        defaultValue: localStorage.getItem('landing-region'),
                        required: true,
                        label: t(translations.quiz.form.shipping.region),
                      },
                    },
                    {
                      name: 'dropdown',
                      id: '115',
                      attributes: {
                        defaultValue: localStorage.getItem('landing-country2'),
                        required: true,
                        multiple: false,
                        verticalAlign: false,
                        label: t(translations.quiz.form.shipping.country),
                        choices: countries
                          .sort(function (a, b) {
                            if (a.name < b.name) {
                              return -1;
                            }
                            if (a.name > b.name) {
                              return 1;
                            }
                            return 0;
                          })
                          .map(({ name }) => ({
                            label: name,
                            value: name,
                          })),
                      },
                    },
                  ],
                },
                {
                  name: 'dropdown',
                  id: '81',
                  attributes: {
                    required: true,
                    multiple: false,
                    verticalAlign: false,
                    defaultValue: localStorage.getItem('landing-highschool'),
                    description: t(translations.quiz.form.school.description),
                    label: t(translations.quiz.form.school.label),
                    choices: [
                      {
                        label: t(translations.quiz.form.school.choice1),
                        value: t(translations.quiz.form.school.choice1),
                      },
                      {
                        label: t(translations.quiz.form.school.choice2),
                        value: t(translations.quiz.form.school.choice2),
                      },
                      {
                        label: t(translations.quiz.form.school.choice3),
                        value: t(translations.quiz.form.school.choice3),
                      },
                      {
                        label: t(translations.quiz.form.school.choice4),
                        value: t(translations.quiz.form.school.choice4),
                      },
                      {
                        label: t(translations.quiz.form.school.choice5),
                        value: t(translations.quiz.form.school.choice5),
                      },
                      {
                        label: t(translations.quiz.form.school.choice6),
                        value: t(translations.quiz.form.school.choice6),
                      },
                      {
                        label: t(translations.quiz.form.school.choice7),
                        value: t(translations.quiz.form.school.choice7),
                      },
                      {
                        label: t(translations.quiz.form.school.choice8),
                        value: t(translations.quiz.form.school.choice8),
                      },
                      {
                        label: t(translations.quiz.form.school.choice9),
                        value: t(translations.quiz.form.school.choice9),
                      },
                      {
                        label: t(translations.quiz.form.school.choice10),
                        value: t(translations.quiz.form.school.choice10),
                      },
                    ],
                  },
                },
                {
                  name: 'dropdown',
                  id: '90',
                  attributes: {
                    required: true,
                    multiple: false,
                    verticalAlign: false,
                    defaultValue: localStorage.getItem('landing-marital'),
                    label: t(translations.quiz.form.marital.label),
                    description: t(translations.quiz.form.marital.description),
                    choices: [
                      {
                        label: t(translations.quiz.form.marital.choice1),
                        value: t(translations.quiz.form.marital.choice1),
                      },
                      {
                        label: t(translations.quiz.form.marital.choice2),
                        value: t(translations.quiz.form.marital.choice2),
                      },
                      {
                        label: t(translations.quiz.form.marital.choice3),
                        value: t(translations.quiz.form.marital.choice3),
                      },
                      {
                        label: t(translations.quiz.form.marital.choice4),
                        value: t(translations.quiz.form.marital.choice4),
                      },
                      {
                        label: t(translations.quiz.form.marital.choice5),
                        value: t(translations.quiz.form.marital.choice5),
                      },
                      {
                        label: t(translations.quiz.form.marital.choice6),
                        value: t(translations.quiz.form.marital.choice6),
                      },
                    ],
                  },
                },
              ],
              settings: {
                animationDirection: 'vertical',
                disableWheelSwiping: false,
                disableNavigationArrows: false,
                disableProgressBar: false,
              },
              theme: {
                font: 'Inter',
                buttonsBgColor: '#4AC97D',
                logo: {
                  src: '',
                },
                questionsColor: '#01264A',
                answersColor: '#535353',
                buttonsFontColor: '#fff',
                buttonsBorderRadius: 14,
                errorsFontColor: '#fff',
                errorsBgColor: '#f00',
                progressBarFillColor: '#000',
                progressBarBgColor: '#ccc',
                // : '#01264A',
              },
              messages: {
                'label.button.ok': t(
                  translations.quiz.form.photo.second.btnText,
                ),
              },
            }}
            onSubmit={data => {
              // window.location.href = `https://payments.govassist.com/323?email=${data.answers['23'].value}&name=${data.answers['11'].value}&phone=${data.answers['22'].value}`;
              localStorage.setItem(
                'form-api',
                JSON.stringify({
                  // @ts-ignore
                  email: data.answers['23'].value, // @ts-ignore
                  name: data.answers['11'].value, // @ts-ignore
                  phone: data.answers['22'].value,
                }),
              );
              navigate('/services');
            }}
          />
        </div>
      </div>
      <div
        className="copyright"
        style={{ position: 'absolute', right: 20, bottom: 20 }}
      >
        {t(translations.copyright.description)}
      </div>
      <div className="mobile-footer">
        {t(translations.copyright.description)}
      </div>
    </>
  );
};
