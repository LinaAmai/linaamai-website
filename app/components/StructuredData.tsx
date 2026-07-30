import { lina } from "../data/lina";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${lina.officialWebsite}/#lina-amai`,

    name: lina.name,
    alternateName: lina.alternateName,
    url: lina.officialWebsite,
    image: lina.image,
    description: lina.description,

    jobTitle: "AI Idol e artista musical",

    sameAs: lina.profiles,

    affiliation: {
      "@type": "Organization",
      name: lina.affiliation.name,
      url: lina.affiliation.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}