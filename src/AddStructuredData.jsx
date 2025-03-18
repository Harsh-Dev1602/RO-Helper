import React from "react";
import { Helmet } from "react-helmet";

const AddStructuredData = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`{
          "@context": "Ro Helper",
          "@type": "WebSite",
          "name": "Ro Helper  Call Us 9926052876",
          "url": "https://www.rohelper.com"
        }`}  
      </script>
    </Helmet>
  );
};

export default AddStructuredData;