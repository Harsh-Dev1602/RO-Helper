import React from "react";
import { Helmet } from "react-helmet";

const AddStructuredData = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
         {         
            "@context": "https://schema.org/",         
            "@type": "LocalBusiness",         
            "@id": "#LocalBusiness",         
            "url": "https://www.rohelper.com",          
            "legalName": "Shambhulal  Suryavanshi",
            "name": "RO Helper",
            "description": "Looking for the best RO service in Indore We’ve got you covered! Our expert technicians provide top-quality RO repair, installation, and maintenance to ensure pure and safe drinking water.",
            "image": "https://www.rohelper.com/assets/BG-IMG3-pdCVrVyF.png",
            "logo": "https://www.rohelper.com/assets/LOGO-DBt3i4X8.png",
            "telephone": "9926052876",
            "faxNumber": "",
            "email": "rohelper2025@gmail.com",
            "address": {             
              "@type": "PostalAddress",             
              "streetAddress": "B-301 Shree Vinayak tower  satellite junction kelod hala",             
              "addressLocality": "Indore",             
              "addressRegion": "Madhya pradesh",             
              "addressCountry": "India",             
              "postalCode": "451020"        
             }
          }
          } 
        
        `
}  
      </script>
    </Helmet>
  );
};

export default AddStructuredData;