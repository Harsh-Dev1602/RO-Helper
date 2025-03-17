import React from "react";

const AddStructuredData = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://rohelper.com,
            "@type": "WebSite",
            "name": "Ro Helper",
            "url": "https://www.rohelper.com"
          }`,
        }}
      />
    </>
  );
};

export default AddStructuredData;
