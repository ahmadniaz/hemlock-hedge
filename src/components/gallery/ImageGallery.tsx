import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  useTheme,
  useMediaQuery,
  Skeleton,
  IconButton,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ImageGallery from 'react-image-gallery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Close } from '@mui/icons-material';
import 'react-image-gallery/styles/css/image-gallery.css';
import Reveal from '../common/Reveal';

interface GalleryImage {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  category: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  categories: string[];
}

const GalleryComponent: React.FC<ImageGalleryProps> = ({ images, categories }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') {
      return images;
    }
    return images.filter(img => img.category === selectedCategory);
  }, [images, selectedCategory]);

  const galleryImages = useMemo(() => {
    return filteredImages.map(img => ({
      original: img.src,
      thumbnail: img.thumbnail,
      description: img.caption,
    }));
  }, [filteredImages]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Playfair Display", serif',
                mb: 2,
                color: 'primary.main',
              }}
            >
              Lodge Gallery
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Explore the beauty and luxury of Hemlock Point Lodge through our curated collection of images
            </Typography>

            {/* Category Filter */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                justifyContent: 'center',
                mb: 4,
              }}
            >
              {['all', ...categories].map((category) => (
                <Chip
                  key={category}
                  label={category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                  onClick={() => handleCategoryChange(category)}
                  variant={selectedCategory === category ? 'filled' : 'outlined'}
                  color={selectedCategory === category ? 'secondary' : 'default'}
                  sx={{
                    fontWeight: 600,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Reveal>

        {/* Masonry Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                columnCount: { xs: 1, sm: 2, md: 3 },
                columnGap: 2,
                '& > *': {
                  breakInside: 'avoid',
                  mb: 2,
                },
              }}
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Box
                    onClick={() => handleImageClick(index)}
                    sx={{
                      position: 'relative',
                      borderRadius: 3,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
                        '& .overlay': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <LazyLoadImage
                      src={image.src}
                      alt={image.alt}
                      effect="blur"
                      placeholder={
                        <Skeleton
                          variant="rectangular"
                          width="100%"
                          height={Math.random() * 200 + 200}
                          sx={{ borderRadius: 3 }}
                        />
                      }
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                      }}
                    />
                    
                    {/* Overlay */}
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(45, 74, 54, 0.8) 0%, rgba(184, 134, 11, 0.6) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'white',
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 600,
                          textAlign: 'center',
                          px: 2,
                        }}
                      >
                        {image.caption || image.alt}
                      </Typography>
                    </Box>

                    {/* Category Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: 2,
                        px: 1.5,
                        py: 0.5,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          fontSize: '0.75rem',
                        }}
                      >
                        {image.category}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Lightbox */}
        {lightboxOpen && (
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              zIndex: 1300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleCloseLightbox}
              sx={{
                position: 'absolute',
                top: 20,
                right: 20,
                zIndex: 1400,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Close />
            </IconButton>

            <Box
              sx={{
                width: '100%',
                height: '100%',
                '& .image-gallery': {
                  height: '100%',
                },
                '& .image-gallery-slide': {
                  backgroundColor: 'transparent',
                },
                '& .image-gallery-image': {
                  objectFit: 'contain',
                },
                '& .image-gallery-thumbnail': {
                  border: '2px solid transparent',
                  '&.active': {
                    borderColor: 'secondary.main',
                  },
                },
                '& .image-gallery-icon': {
                  color: 'white',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                },
              }}
            >
              <ImageGallery
                items={galleryImages}
                startIndex={selectedImageIndex}
                showPlayButton={false}
                showFullscreenButton={true}
                showNav={true}
                showThumbnails={!isMobile}
                slideInterval={0}
                slideOnThumbnailOver={true}
                showIndex={true}
                indexSeparator=" / "
                lazyLoad={true}
              />
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default GalleryComponent;
