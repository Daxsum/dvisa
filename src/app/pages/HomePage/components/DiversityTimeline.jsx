import { translations } from 'locales/translations';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const DiversityTimeline = () => {
  const push = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="diversity-wrapper">
      <div className="diversity-top">
        <h3>{t(translations.faq.section2.title)}</h3>
        <button onClick={() => push('/form')}>
          {t(translations.faq.section2.btnText)}
        </button>
      </div>
      <div>
        <table className="diversity-table" style={{ width: '100%' }}>
          <tr>
            <th>{t(translations.faq.section2.line11)}</th>
            <th>{t(translations.faq.section2.line12)}</th>
            <th>{t(translations.faq.section2.line13)}</th>
          </tr>
          <tr>
            <td>{t(translations.faq.section2.line21)}</td>
            <td
              dangerouslySetInnerHTML={{
                __html: t(translations.faq.section2.line22),
              }}
            />
            <td>{t(translations.faq.section2.line23)}</td>
          </tr>
          <tr>
            <td>{t(translations.faq.section2.line31)}</td>
            <td>{t(translations.faq.section2.line32)}</td>
            <td>{t(translations.faq.section2.line33)}</td>
          </tr>
          <tr>
            <td>{t(translations.faq.section2.line41)}</td>
            <td>{t(translations.faq.section2.line42)}</td>
            <td>{t(translations.faq.section2.line43)}</td>
          </tr>
          <tr>
            <td>{t(translations.faq.section2.line51)}</td>
            <td>{t(translations.faq.section2.line52)}</td>
            <td>{t(translations.faq.section2.line53)}</td>
          </tr>
          <tr>
            <td>{t(translations.faq.section2.line61)}</td>
            <td>{t(translations.faq.section2.line62)}</td>
            <td>{t(translations.faq.section2.line63)}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
