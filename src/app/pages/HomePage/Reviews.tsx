import React from 'react';

export const Reviews = ({ reviews }) => {
  const [current, setCurrent] = React.useState(0);

  const review = reviews.find(r => current === r.id) || {};

  const handleLeft = () => {
    const last = (current - 1) % reviews.length;
    setCurrent(last < 0 ? current : last);
  };
  const handleRight = () => {
    const next = (current + 1) % reviews.length;
    setCurrent(next);
  };
  return (
    <section>
      <div className="review" key={review.id}>
        <div className="top">
          <div className="top-bottom">
            <a href="{review.link}" target="_blank" rel="noreferrer">
              <div>{review.author}</div>
            </a>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ marginRight: 50 }}>1 review</div>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM18 10.2C18 6.57 15.35 4 12 4C8.65 4 6 6.57 6 10.2C6 12.54 7.95 15.64 12 19.34C16.05 15.64 18 12.54 18 10.2ZM12 2C16.2 2 20 5.22 20 10.2C20 13.52 17.33 17.45 12 22C6.67 17.45 4 13.52 4 10.2C4 5.22 7.8 2 12 2Z"
                    fill="#535353"
                  />
                </svg>
                <span>{review.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 20, textAlign: 'right' }}>{review.date}</div>

        <svg
          width="206"
          height="37"
          viewBox="0 0 206 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36.6365" height="36.6365" fill="#00B87C" />
          <path
            d="M30.74 15.588L21.2821 15.588L18.3707 6.59521L15.442 15.588L5.98413 15.5707L13.6331 21.1352L10.7045 30.128L18.3535 24.5635L26.0025 30.128L23.091 21.1352L30.74 15.588Z"
            fill="#FDFEFE"
          />
          <path
            d="M23.7461 23.1671L23.0914 21.1343L18.3711 24.5625L23.7461 23.1671Z"
            fill="#4BBD97"
          />
          <rect x="42.1323" width="36.6365" height="36.6365" fill="#00B87C" />
          <path
            d="M72.8721 15.588L63.4142 15.588L60.5028 6.59521L57.5741 15.588L48.1162 15.5707L55.7652 21.1352L52.8365 30.128L60.4855 24.5635L68.1346 30.128L65.2231 21.1352L72.8721 15.588Z"
            fill="#FDFEFE"
          />
          <path
            d="M65.8779 23.1671L65.2233 21.1343L60.5029 24.5625L65.8779 23.1671Z"
            fill="#4BBD97"
          />
          <rect x="84.2642" width="36.6365" height="36.6365" fill="#00B87C" />
          <path
            d="M115.004 15.588L105.546 15.588L102.635 6.59521L99.7059 15.588L90.248 15.5707L97.8971 21.1352L94.9684 30.128L102.617 24.5635L110.266 30.128L107.355 21.1352L115.004 15.588Z"
            fill="#FDFEFE"
          />
          <path
            d="M108.01 23.1671L107.355 21.1343L102.635 24.5625L108.01 23.1671Z"
            fill="#4BBD97"
          />
          <rect x="126.396" width="36.6365" height="36.6365" fill="#00B87C" />
          <path
            d="M157.136 15.588L147.678 15.588L144.766 6.59521L141.838 15.588L132.38 15.5707L140.029 21.1352L137.1 30.128L144.749 24.5635L152.398 30.128L149.487 21.1352L157.136 15.588Z"
            fill="#FDFEFE"
          />
          <path
            d="M150.142 23.1671L149.487 21.1343L144.767 24.5625L150.142 23.1671Z"
            fill="#4BBD97"
          />
          <rect x="168.528" width="36.6365" height="36.6365" fill="#00B87C" />
          <path
            d="M199.268 15.588L189.81 15.588L186.899 6.59521L183.97 15.588L174.512 15.5707L182.161 21.1352L179.233 30.128L186.882 24.5635L194.531 30.128L191.619 21.1352L199.268 15.588Z"
            fill="#FDFEFE"
          />
          <path
            d="M192.274 23.1671L191.619 21.1343L186.899 24.5625L192.274 23.1671Z"
            fill="#4BBD97"
          />
        </svg>

        <div className="review-title">{review.title}</div>
        <div className="review-text">
          <span dangerouslySetInnerHTML={{ __html: review.text }} />
        </div>
        <div className="review-exp">
          Date of experience: {review.experience}
        </div>
      </div>

      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: 130 }}
        className="review-btns"
      >
        <div>
          <svg
            onClick={handleLeft}
            width="16"
            height="27"
            viewBox="0 0 16 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: 50 }}
          >
            <path
              d="M12.5228 24.2528L3.77484 15.5048C2.74172 14.4717 2.74172 12.7811 3.77484 11.748L12.5228 3"
              stroke-width="4.98658"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            onClick={handleRight}
            width="15"
            height="27"
            viewBox="0 0 15 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.52295 24.1265L10.7906 15.4825C11.7671 14.4617 11.7671 12.7913 10.7906 11.7704L2.52295 3.12646"
              stroke-width="4.98662"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
