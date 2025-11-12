import Head from "next/head";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Abayomi Arole Legal Practitioners | Legal Strategy, Practical
          Solutions, Trusted Results
        </title>
        <meta
          name="description"
          content="Abayomi Arole Legal Practitioners offers top-tier legal services across multiple practice areas including Corporate Law, Real Estate, and Litigation. Tailored legal solutions for your business and personal needs."
        />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Abayomi Arole Legal Practitioners | Legal Strategy, Practical Solutions, Trusted Results"
        />
        <meta
          property="og:description"
          content="Abayomi Arole Legal Practitioners offers expert legal services across Corporate Law, Real Estate, Litigation, and more. Get tailored legal solutions today."
        />
        <meta
          property="og:image"
          content="https://abayomi-arole.vercel.app/hero.png"
        />
        <meta property="og:url" content="https://abayomi-arole.vercel.app/" />
        <meta
          property="og:site_name"
          content="Abayomi Arole Legal Practitioners"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Abayomi Arole Legal Practitioners | Legal Strategy, Practical Solutions, Trusted Results"
        />
        <meta
          name="twitter:description"
          content="Abayomi Arole Legal Practitioners offers expert legal services in various fields, providing clients with solutions tailored to their needs."
        />
        <meta
          name="twitter:image"
          content="https://abayomi-arole.vercel.app/hero.png"
        />
        <meta name="twitter:site" content="@abayomiarole" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Abayomi Arole Legal Practitioners",
              url: "https://abayomi-arole.vercel.app",
              logo: "https://abayomi-arole.vercel.app/logo.png",
              description:
                "Top-tier legal services in Corporate Law, Real Estate, Immigration, and more.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "Nigeria",
                postalCode: "101001"
              },
              sameAs: [
                "https://twitter.com/abayomiarole",
                "https://www.linkedin.com/company/abayomi-arole-legal-practitioners",
                "https://www.facebook.com/abayomiarole"
              ]
            })
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
