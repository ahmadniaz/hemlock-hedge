import React from 'react';
import SEO from '../components/common/SEO';
import GalleryComponent from '../components/gallery/ImageGallery';

const Gallery: React.FC = () => {
  // Gallery images using local assets
  const galleryImages = [
    // Interior images
    {
      id: 'interior-1',
      src: '/assets/interior/interior1.jpg',
      thumbnail: '/assets/interior/interior1.jpg',
      alt: 'Lodge interior with fireplace',
      category: 'interior',
      caption: 'Cozy great room with stone fireplace',
    },
    {
      id: 'interior-2',
      src: '/assets/interior/interior2.jpg',
      thumbnail: '/assets/interior/interior2.jpg',
      alt: 'Lodge interior detail',
      category: 'interior',
      caption: 'Rustic elegance in every detail',
    },
    {
      id: 'interior-3',
      src: '/assets/interior/interior3.jpg',
      thumbnail: '/assets/interior/interior3.jpg',
      alt: 'Lodge interior view',
      category: 'interior',
      caption: 'Spacious and inviting interiors',
    },
    {
      id: 'interior-4',
      src: '/assets/interior/interior4.jpg',
      thumbnail: '/assets/interior/interior4.jpg',
      alt: 'Lodge interior space',
      category: 'interior',
      caption: 'Perfect for family gatherings',
    },
    {
      id: 'interior-5',
      src: '/assets/interior/interior5.jpg',
      thumbnail: '/assets/interior/interior5.jpg',
      alt: 'Lodge interior detail',
      category: 'interior',
      caption: 'Handcrafted details throughout',
    },
    {
      id: 'interior-8',
      src: '/assets/interior/interior8.jpg',
      thumbnail: '/assets/interior/interior8.jpg',
      alt: 'Lodge interior view',
      category: 'interior',
      caption: 'Warm and welcoming atmosphere',
    },

    // Kitchen images
    {
      id: 'kitchen-1',
      src: '/assets/kitchen/kitchen1.jpg',
      thumbnail: '/assets/kitchen/kitchen1.jpg',
      alt: 'Fully equipped kitchen',
      category: 'kitchen',
      caption: 'Gourmet kitchen with premium appliances',
    },
    {
      id: 'kitchen-2',
      src: '/assets/kitchen/kitchen2.jpg',
      thumbnail: '/assets/kitchen/kitchen2.jpg',
      alt: 'Kitchen detail',
      category: 'kitchen',
      caption: 'Perfect for preparing family meals',
    },
    {
      id: 'kitchen-3',
      src: '/assets/kitchen/kitchen3.jpg',
      thumbnail: '/assets/kitchen/kitchen3.jpg',
      alt: 'Kitchen workspace',
      category: 'kitchen',
      caption: 'Spacious and functional design',
    },
    {
      id: 'kitchen-4',
      src: '/assets/kitchen/kitchen4.jpg',
      thumbnail: '/assets/kitchen/kitchen4.jpg',
      alt: 'Kitchen area',
      category: 'kitchen',
      caption: 'Modern amenities in rustic setting',
    },

    // Dining images
    {
      id: 'dining-1',
      src: '/assets/dining/dining1.jpg',
      thumbnail: '/assets/dining/dining1.jpg',
      alt: 'Dining area',
      category: 'dining',
      caption: 'Elegant dining space',
    },
    {
      id: 'dining-2',
      src: '/assets/dining/dining2.jpg',
      thumbnail: '/assets/dining/dining2.jpg',
      alt: 'Dining room',
      category: 'dining',
      caption: 'Perfect for memorable meals',
    },
    {
      id: 'dining-3',
      src: '/assets/dining/dining3.jpg',
      thumbnail: '/assets/dining/dining3.jpg',
      alt: 'Dining space',
      category: 'dining',
      caption: 'Comfortable and inviting',
    },

    // Bedroom images
    {
      id: 'bed-1',
      src: '/assets/bed/bed1.jpg',
      thumbnail: '/assets/bed/bed1.jpg',
      alt: 'Master bedroom',
      category: 'bedroom',
      caption: 'Luxurious master suite',
    },
    {
      id: 'bed-2',
      src: '/assets/bed/bed2.jpg',
      thumbnail: '/assets/bed/bed2.jpg',
      alt: 'Bedroom',
      category: 'bedroom',
      caption: 'Comfortable guest rooms',
    },
    {
      id: 'bed-3',
      src: '/assets/bed/bed3.jpg',
      thumbnail: '/assets/bed/bed3.jpg',
      alt: 'Bedroom detail',
      category: 'bedroom',
      caption: 'Peaceful sleeping quarters',
    },
    {
      id: 'bed-4',
      src: '/assets/bed/bed4.jpg',
      thumbnail: '/assets/bed/bed4.jpg',
      alt: 'Bedroom view',
      category: 'bedroom',
      caption: 'Restful accommodations',
    },
    {
      id: 'bed-5',
      src: '/assets/bed/bed5.jpg',
      thumbnail: '/assets/bed/bed5.jpg',
      alt: 'Bedroom space',
      category: 'bedroom',
      caption: 'Spacious and comfortable',
    },

    // Bathroom images
    {
      id: 'bath-1',
      src: '/assets/washroom/bath1.jpg',
      thumbnail: '/assets/washroom/bath1.jpg',
      alt: 'Bathroom',
      category: 'bathroom',
      caption: 'Modern bathroom amenities',
    },
    {
      id: 'bath-2',
      src: '/assets/washroom/bath2.jpg',
      thumbnail: '/assets/washroom/bath2.jpg',
      alt: 'Bathroom detail',
      category: 'bathroom',
      caption: 'Luxurious bathroom design',
    },
    {
      id: 'bath-3',
      src: '/assets/washroom/bath3.jpg',
      thumbnail: '/assets/washroom/bath3.jpg',
      alt: 'Bathroom space',
      category: 'bathroom',
      caption: 'Spa-like bathroom experience',
    },
    {
      id: 'bath-5',
      src: '/assets/washroom/bath5.jpg',
      thumbnail: '/assets/washroom/bath5.jpg',
      alt: 'Bathroom view',
      category: 'bathroom',
      caption: 'Elegant bathroom fixtures',
    },

    // Activity images
    {
      id: 'activity-1',
      src: '/assets/activity/activity1.jpg',
      thumbnail: '/assets/activity/activity1.jpg',
      alt: 'Lake activities',
      category: 'activities',
      caption: 'Private lake for water activities',
    },
    {
      id: 'activity-2',
      src: '/assets/activity/activity2.jpg',
      thumbnail: '/assets/activity/activity2.jpg',
      alt: 'Outdoor activities',
      category: 'activities',
      caption: 'Outdoor recreation opportunities',
    },
    {
      id: 'activity-3',
      src: '/assets/activity/activity3.jpg',
      thumbnail: '/assets/activity/activity3.jpg',
      alt: 'Nature activities',
      category: 'activities',
      caption: 'Connect with nature',
    },
    {
      id: 'activity-4',
      src: '/assets/activity/activity4.jpg',
      thumbnail: '/assets/activity/activity4.jpg',
      alt: 'Recreation area',
      category: 'activities',
      caption: 'Plenty of space for activities',
    },
    {
      id: 'activity-5',
      src: '/assets/activity/activity5.jpg',
      thumbnail: '/assets/activity/activity5.jpg',
      alt: 'Outdoor space',
      category: 'activities',
      caption: 'Beautiful outdoor surroundings',
    },
    {
      id: 'activity-6',
      src: '/assets/activity/activity6.jpg',
      thumbnail: '/assets/activity/activity6.jpg',
      alt: 'Recreation',
      category: 'activities',
      caption: 'Endless recreation possibilities',
    },
    {
      id: 'activity-7',
      src: '/assets/activity/activity7.jpg',
      thumbnail: '/assets/activity/activity7.jpg',
      alt: 'Lake view',
      category: 'activities',
      caption: 'Stunning lake views',
    },
    {
      id: 'sauna-1',
      src: '/assets/activity/sauna1.jpg',
      thumbnail: '/assets/activity/sauna1.jpg',
      alt: 'Sauna',
      category: 'activities',
      caption: 'Relaxing sauna experience',
    },

    // Additional/Exterior images
    {
      id: 'additional-1',
      src: '/assets/additional/additional1.jpg',
      thumbnail: '/assets/additional/additional1.jpg',
      alt: 'Lodge exterior',
      category: 'exterior',
      caption: 'Beautiful lodge exterior',
    },
    {
      id: 'additional-2',
      src: '/assets/additional/additional2.jpg',
      thumbnail: '/assets/additional/additional2.jpg',
      alt: 'Exterior view',
      category: 'exterior',
      caption: 'Stunning mountain views',
    },
    {
      id: 'exterior-1',
      src: '/assets/additional/exterior1.jpg',
      thumbnail: '/assets/additional/exterior1.jpg',
      alt: 'Lodge grounds',
      category: 'exterior',
      caption: 'Pristine lodge grounds',
    },
    {
      id: 'outdoor-1',
      src: '/assets/additional/outdoor1.jpg',
      thumbnail: '/assets/additional/outdoor1.jpg',
      alt: 'Outdoor space',
      category: 'exterior',
      caption: 'Beautiful outdoor spaces',
    },

    // Laundry
    {
      id: 'laundry-1',
      src: '/assets/laundry/laundary.jpg',
      thumbnail: '/assets/laundry/laundary.jpg',
      alt: 'Laundry facilities',
      category: 'amenities',
      caption: 'Convenient laundry facilities',
    },
  ];

  const categories = ['interior', 'kitchen', 'dining', 'bedroom', 'bathroom', 'activities', 'exterior', 'amenities'];

  return (
    <>
      <SEO 
        title="Gallery"
        description="Explore the beauty and luxury of Hemlock Point Lodge through our curated collection of images showcasing our stunning interiors, amenities, and natural surroundings."
        image="/assets/interior/interior1.jpg"
      />
      
      <GalleryComponent images={galleryImages} categories={categories} />
    </>
  );
};

export default Gallery;
