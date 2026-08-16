import { Helmet } from 'react-helmet-async'

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Derech Ayson Rabbinical Seminary",
    "alternateName": "DARS",
    "url": "https://www.derech-ayson-rabbinical-seminary.sbs",
    "logo": "https://www.derech-ayson-rabbinical-seminary.sbs/logo.svg",
    "email": "admin@derech-ayson-rabbinical-seminary.sbs",
    "telephone": "+1-718-555-0100",
    "taxID": "11-2611716",
    "nonprofitStatus": "Nonprofit501c3",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "802 Hicksville Rd",
      "addressLocality": "Far Rockaway",
      "addressRegion": "NY",
      "postalCode": "11691-5219",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/derechayson",
      "https://www.twitter.com/derechayson",
      "https://www.instagram.com/derechayson",
      "https://www.linkedin.com/company/derech-ayson-rabbinical-seminary"
    ]
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default OrganizationSchema