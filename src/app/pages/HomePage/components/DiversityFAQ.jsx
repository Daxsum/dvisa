export const DiversityFAQ = ({ html }) => {
  return (
    <div
      style={{ maxWidth: 1369 }}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    ></div>
  );
};
