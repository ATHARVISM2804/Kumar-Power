const SEOJsonLD = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kumar Power',
    url: 'https://example.com/',
    description:
      'Kirloskar-certified generators and turnkey power solutions across India.',
    brand: {
      '@type': 'Brand',
      name: 'Kirloskar',
    },
    sameAs: [
      'https://www.linkedin.com',
      'https://www.facebook.com',
      'https://twitter.com',
    ],
  } as const;

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kumar Power',
    url: 'https://example.com/',
  } as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
};

export default SEOJsonLD;
