
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Logo from '../assets/images/gaon.jpeg';

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <Helmet titleTemplate={`%s | Saludando.cl`}>
      <html lang="en" />
      <title>{site.siteMetadata.title}</title>
      {/* Fav Icons */}
      <link rel="icon" href={Logo} />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* Open Graph */}
      <meta property="og:type" content="website"></meta>
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:image" content="../../assets/images/human-skeleton.jpg"></meta>
      <meta property="twitter:card" content="website" />
      {location && <meta property="twitter:url" content={location.href} />}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="../../assets/images/human-skeleton.jpg"></meta>
      {children}
      
    </Helmet>
  );
}