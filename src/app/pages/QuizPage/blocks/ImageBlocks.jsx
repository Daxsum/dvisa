import React from 'react';
import exampleImg from '../../HomePage/assets/example.png';
import { globVar } from 'app';

export const Display2 = ({ setVal, attributes, next }) => {
  const [file, setFile] = React.useState('');
  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    sessionStorage.setItem('img', URL.createObjectURL(fileUploaded));
    globVar.img = fileUploaded;
    setFile(fileUploaded);
    setVal(fileUploaded);
  };

  const { line1, line2, line3, line4, line5, example, btn2Text, btn3Text } =
    attributes;

  return (
    <div className="custom-block">
      <div
        style={{
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
        className="uploader-wrapper"
      >
        <div>
          <div
            style={{ width: '400px', marginRight: '20px' }}
            dangerouslySetInnerHTML={{
              __html: `
            <div style="margin-bottom: 15px; width: 344px; text-align: justify; color: #535353; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#333333"/>
            <path d="M10.297 16.2963C10.057 16.2963 9.82897 16.2003 9.66097 16.0323L6.26491 12.6363C5.91691 12.2883 5.91691 11.7123 6.26491 11.3643C6.61291 11.0163 7.18891 11.0163 7.53691 11.3643L10.297 14.1243L16.465 7.95631C16.813 7.60831 17.389 7.60831 17.737 7.95631C18.085 8.30431 18.085 8.88031 17.737 9.22831L10.933 16.0323C10.765 16.2003 10.537 16.2963 10.297 16.2963Z" fill="#333333"/>
            </svg>
            
            ${line1}</div>
<div style="margin-bottom: 15px; width: 448px; text-align: justify; color: #535353; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#333333"/>
<path d="M10.297 16.2963C10.057 16.2963 9.82897 16.2003 9.66097 16.0323L6.26491 12.6363C5.91691 12.2883 5.91691 11.7123 6.26491 11.3643C6.61291 11.0163 7.18891 11.0163 7.53691 11.3643L10.297 14.1243L16.465 7.95631C16.813 7.60831 17.389 7.60831 17.737 7.95631C18.085 8.30431 18.085 8.88031 17.737 9.22831L10.933 16.0323C10.765 16.2003 10.537 16.2963 10.297 16.2963Z" fill="#333333"/>
</svg>
${line2}</div>
<div style="margin-bottom: 15px; width: 344px; text-align: justify; color: #535353; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#333333"/>
<path d="M10.297 16.2963C10.057 16.2963 9.82897 16.2003 9.66097 16.0323L6.26491 12.6363C5.91691 12.2883 5.91691 11.7123 6.26491 11.3643C6.61291 11.0163 7.18891 11.0163 7.53691 11.3643L10.297 14.1243L16.465 7.95631C16.813 7.60831 17.389 7.60831 17.737 7.95631C18.085 8.30431 18.085 8.88031 17.737 9.22831L10.933 16.0323C10.765 16.2003 10.537 16.2963 10.297 16.2963Z" fill="#333333"/>
</svg>
${line3}</div>
<div style="margin-bottom: 15px; width: 448px; text-align: justify; color: #535353; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#333333"/>
<path d="M10.297 16.2963C10.057 16.2963 9.82897 16.2003 9.66097 16.0323L6.26491 12.6363C5.91691 12.2883 5.91691 11.7123 6.26491 11.3643C6.61291 11.0163 7.18891 11.0163 7.53691 11.3643L10.297 14.1243L16.465 7.95631C16.813 7.60831 17.389 7.60831 17.737 7.95631C18.085 8.30431 18.085 8.88031 17.737 9.22831L10.933 16.0323C10.765 16.2003 10.537 16.2963 10.297 16.2963Z" fill="#333333"/>
</svg>
${line4}</div>
<div style="margin-bottom: 15px; width: 344px; text-align: justify"><span style="color: #535353; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#333333"/>
<path d="M10.297 16.2963C10.057 16.2963 9.82897 16.2003 9.66097 16.0323L6.26491 12.6363C5.91691 12.2883 5.91691 11.7123 6.26491 11.3643C6.61291 11.0163 7.18891 11.0163 7.53691 11.3643L10.297 14.1243L16.465 7.95631C16.813 7.60831 17.389 7.60831 17.737 7.95631C18.085 8.30431 18.085 8.88031 17.737 9.22831L10.933 16.0323C10.765 16.2003 10.537 16.2963 10.297 16.2963Z" fill="#333333"/>
</svg>
${line5} </span><span style="color: #535353; font-size: 16px; font-family: Inter; font-weight: 400; text-decoration: underline; word-wrap: break-word"><a style="font-size: 16px" href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html" target="_blank"></a></span></div>
              `,
            }}
          />
          <input
            type="file"
            onChange={handleChange}
            ref={hiddenFileInput}
            style={{ display: 'none' }} // Make the file input element invisible
          />
          <label
            onClick={handleClick}
            style={{
              color: '#01264A',
              border: '1px solid #01264A',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '10px',
              borderRadius: '14px',
            }}
          >
            <div style={{ marginBottom: '20px' }} />
            {file ? file.name : btn2Text}
          </label>
          <label
            onClick={next}
            style={{
              color: 'white',
              border: '1px solid #4AC97D',
              background: '#4AC97D',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '10px',
              borderRadius: '14px',
              marginTop: '10px',
            }}
            for="upload"
          >
            <div style={{ marginBottom: '20px' }} />
            {btn3Text}
          </label>
        </div>
        <div className="photo-centered" style={{ marginLeft: '20px' }}>
          <img width={360} height={360} src={exampleImg} alt="fds" />
          <div style={{ textAlign: 'right', color: '#ccc' }}>{example}</div>
        </div>{' '}
      </div>
    </div>
  );
};

export const Display3 = ({ attributes, next }) => {
  const img = sessionStorage.getItem('img');
  const { line1, line2, line3, line4, line5, example, btn2Text, btn3Text } =
    attributes;

  return (
    <div className="custom-block">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '60px',
        }}
        className="custom-3-wrapper"
      >
        <div>
          <div
            style={{ width: '400px', marginRight: '20px' }}
            dangerouslySetInnerHTML={{
              __html: `
              <div style="margin-bottom: 15px; width: 344px; text-align: justify; color: #535353; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#333333"/>
              <path d="M10.297 16.2963C10.057 16.2963 9.82897 16.2003 9.66097 16.0323L6.26491 12.6363C5.91691 12.2883 5.91691 11.7123 6.26491 11.3643C6.61291 11.0163 7.18891 11.0163 7.53691 11.3643L10.297 14.1243L16.465 7.95631C16.813 7.60831 17.389 7.60831 17.737 7.95631C18.085 8.30431 18.085 8.88031 17.737 9.22831L10.933 16.0323C10.765 16.2003 10.537 16.2963 10.297 16.2963Z" fill="#333333"/>
              </svg>
              ${line1}</div>
<div style="margin-bottom: 15px; width: 448px; text-align: justify; color: #535353; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#333333"/>
<path d="M10.297 16.2963C10.057 16.2963 9.82897 16.2003 9.66097 16.0323L6.26491 12.6363C5.91691 12.2883 5.91691 11.7123 6.26491 11.3643C6.61291 11.0163 7.18891 11.0163 7.53691 11.3643L10.297 14.1243L16.465 7.95631C16.813 7.60831 17.389 7.60831 17.737 7.95631C18.085 8.30431 18.085 8.88031 17.737 9.22831L10.933 16.0323C10.765 16.2003 10.537 16.2963 10.297 16.2963Z" fill="#333333"/>
</svg>
${line2}</div>
<div style="margin-bottom: 15px; width: 344px; text-align: justify; color: #535353; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#333333"/>
<path d="M10.297 16.2963C10.057 16.2963 9.82897 16.2003 9.66097 16.0323L6.26491 12.6363C5.91691 12.2883 5.91691 11.7123 6.26491 11.3643C6.61291 11.0163 7.18891 11.0163 7.53691 11.3643L10.297 14.1243L16.465 7.95631C16.813 7.60831 17.389 7.60831 17.737 7.95631C18.085 8.30431 18.085 8.88031 17.737 9.22831L10.933 16.0323C10.765 16.2003 10.537 16.2963 10.297 16.2963Z" fill="#333333"/>
</svg>
${line3}</div>
<div style="margin-bottom: 15px; width: 448px; text-align: justify; color: #535353; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#333333"/>
<path d="M10.297 16.2963C10.057 16.2963 9.82897 16.2003 9.66097 16.0323L6.26491 12.6363C5.91691 12.2883 5.91691 11.7123 6.26491 11.3643C6.61291 11.0163 7.18891 11.0163 7.53691 11.3643L10.297 14.1243L16.465 7.95631C16.813 7.60831 17.389 7.60831 17.737 7.95631C18.085 8.30431 18.085 8.88031 17.737 9.22831L10.933 16.0323C10.765 16.2003 10.537 16.2963 10.297 16.2963Z" fill="#333333"/>
</svg>
${line4}</div>
<div style="margin-bottom: 15px; width: 344px; text-align: justify"><span style="color: #535353; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#333333"/>
<path d="M10.297 16.2963C10.057 16.2963 9.82897 16.2003 9.66097 16.0323L6.26491 12.6363C5.91691 12.2883 5.91691 11.7123 6.26491 11.3643C6.61291 11.0163 7.18891 11.0163 7.53691 11.3643L10.297 14.1243L16.465 7.95631C16.813 7.60831 17.389 7.60831 17.737 7.95631C18.085 8.30431 18.085 8.88031 17.737 9.22831L10.933 16.0323C10.765 16.2003 10.537 16.2963 10.297 16.2963Z" fill="#333333"/>
</svg>
${line5} </span><span style="color: #535353; font-size: 16px; font-family: Inter; font-weight: 400; text-decoration: underline; word-wrap: break-word"><a style="font-size: 16px" href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html" target="_blank"></a></span></div>
              `,
            }}
          />
          <label
            onClick={next}
            style={{
              color: 'white',
              border: '1px solid #4AC97D',
              background: '#4AC97D',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '10px',
              borderRadius: '14px',
              marginTop: '10px',
            }}
            for="upload"
          >
            <div style={{ marginBottom: '20px' }} />
            {btn3Text}
          </label>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <img width={360} height={360} src={img} alt="Logo" />
        </div>
      </div>
    </div>
  );
};
