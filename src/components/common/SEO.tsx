import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LODGE_CONFIG } from '../../utils/config';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  url,
  type = 'website',
}) => {
  const siteTitle = title 
    ? `${title} | ${LODGE_CONFIG.name}`
    : `${LODGE_CONFIG.name} - ${LODGE_CONFIG.tagline}`;
  
  const siteDescription = description || LODGE_CONFIG.description;
  const siteImage = image || '/assets/additional/exterior1.jpg';
  const siteUrl = url || 'https://hemlockpointlodge.com';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content="Adirondack lodge, luxury vacation rental, private lake, cabin rental, New York vacation, family getaway" />
      <meta name="author" content={LODGE_CONFIG.name} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:site_name" content={LODGE_CONFIG.name} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#2D4A36" />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};

export default SEO;
