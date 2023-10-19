import React from 'react';

const Closed = () => (
  <svg
    width="33"
    height="18"
    viewBox="0 0 33 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L16.5 16L32 1" stroke="#170A61" stroke-width="2" />
  </svg>
);

const Opened = () => (
  <svg
    width="33"
    height="18"
    viewBox="0 0 33 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M32 17L16.5 2L1 17" stroke="#170A61" stroke-width="2" />
  </svg>
);

const FAQ = ({ faq }) => {
  const [isOpen, setIsOpen] = React.useState(faq.open || false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <dt
        className="faq-wrapper"
        aria-expanded={isOpen ? 'true' : 'false'}
        onClick={toggle}
      >
        <span className={faq.className}>{faq.question}</span>
        {isOpen ? <Opened /> : <Closed />}
      </dt>
      <dd
        style={{
          height: isOpen ? 'auto' : '0px',
          opacity: isOpen ? '1' : '0',
          visibility: isOpen ? 'visible' : 'hidden',
          animation: '300ms ease-in-out all',
        }}
      >
        {isOpen && <faq.Answer />}
      </dd>
      <div
        style={{
          width: '100%',
          height: '1px',
          background: '#CECECE',
          margin: '30px 0',
        }}
      ></div>
    </React.Fragment>
  );
};

export const FAQS = ({ faqs }) => {
  return (
    <dl style={{ marginTop: '70px' }}>
      {faqs.map((faq, index) => (
        <FAQ faq={faq} key={index} />
      ))}
    </dl>
  );
};
