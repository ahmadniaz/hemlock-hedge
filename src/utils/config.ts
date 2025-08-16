export const LODGE_CONFIG = {
  name: 'Hemlock Point Lodge',
  tagline: 'Your Private Adirondack Sanctuary',
  description: 'Experience luxury and tranquility at Hemlock Point Lodge. Our 4,000 sq ft lodge on 100+ acres features a private 15-acre lake, sleeping 24 guests in complete privacy.',
  
  // Contact Information
  contact: {
    phone: '(570) 727-2065',
    email: 'info@hemlockpointlodge.com',
    address: '3159 May Road, Thompson, PA 18465',
    gpsCoordinates: {
      latitude: 41.83396,
      longitude: -75.47339,
      formatted: 'N41°50.115\' - W75°28.416\''
    },
    googleMapsPlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frY4', // Placeholder - replace with actual
  },
  
  // Property Details
  property: {
    size: '4,000 sq ft',
    acres: '100+',
    lakeSize: '15-acre private lake',
    capacity: 24,
    bedrooms: 8,
    bathrooms: 6,
  },
  
  // Image Paths - using public assets
  images: {
    hero: {
      lake: '/assets/additional/exterior1.jpg',
      interior: '/assets/interior/interior1.jpg',
      sign: '/assets/additional/additional1.jpg',
    },
    gallery: {
      activity: '/assets/activity/',
      interior: '/assets/interior/',
      kitchen: '/assets/kitchen/',
      dining: '/assets/dining/',
      bed: '/assets/bed/',
      washroom: '/assets/washroom/',
      laundry: '/assets/laundry/',
      additional: '/assets/additional/',
    },
  },
  
  // Amenities
  amenities: [
    { name: 'Private Lake Access', icon: 'WaterIcon' },
    { name: 'Fully Equipped Kitchen', icon: 'KitchenIcon' },
    { name: 'WiFi & Smart TV', icon: 'WifiIcon' },
    { name: 'Fireplace', icon: 'LocalFireDepartmentIcon' },
    { name: 'Outdoor Grill', icon: 'OutdoorGrillIcon' },
    { name: 'Sauna', icon: 'HotTubIcon' },
    { name: 'Sandy Volleyball/Badminton Court', icon: 'SportsTennisIcon' },
    { name: 'Outdoor Fire Pit', icon: 'LocalFireDepartmentIcon' },
    { name: 'Outdoor Living Room', icon: 'DeckIcon' },
    { name: 'Hiking Trails', icon: 'HikingIcon' },
    { name: 'Parking', icon: 'LocalParkingIcon' },
  ],
  
  // Activities
  activities: {
    onProperty: [
      {
        category: 'Water Activities',
        icon: 'WaterIcon',
        activities: [
          'Fishing (catch & release)',
          'Kayaking & canoeing',
          'Lakeside relaxation',
          'Boating on private lake',
        ],
        images: ['/assets/activity/activity1.jpg', '/assets/activity/activity2.jpg'],
      },
      {
        category: 'Outdoor Recreation',
        icon: 'ParkIcon',
        activities: [
          'Hiking on private trails',
          'Wildlife watching',
          'Outdoor dining',
          'Stargazing',
          'Berry picking',
        ],
        images: ['/assets/activity/activity3.jpg', '/assets/activity/activity4.jpg'],
      },
    ],
    offProperty: [
      {
        category: 'Local Attractions',
        icon: 'AttractionsIcon',
        activities: [
          'Adirondack Park exploration',
          'Local restaurants & shops',
          'Historical sites',
          'Seasonal festivals',
          'Elk Lodge (15 minutes away)',
        ],
        images: ['/assets/activity/activity5.jpg', '/assets/activity/activity6.jpg'],
      },
    ],
  },
  
  // Testimonials
  testimonials: [
    {
      name: 'Twelve People Group',
      location: 'Tri-State Area',
      rating: 5,
      text: 'Twelve people would like to thank you for the most fantastic weekend of our lives! Hemlock Point Lodge is in all honesty the BEST vacation spot in the tri-state area! The scenic drive through the "Endless mountains" is breathtaking. When you first see the Lodge itself, its simply AMAZING, words cannot describe it\'s simple yet detailed beauty. EVERY SINGLE OUNCE OF THE LODGE WAS DELIBERATELY AND CAREFULLY THOUGHT OUT AND PLACED. We all felt like we were inside a painting. My wife put it beautifully when she said "It has the feel and ambiance of a rustic log cabin, with all the modern comforts you would expect of a 5 star resort".',
      image: '/assets/interior/interior1.jpg',
    },
    {
      name: '40th Birthday Celebration',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'Your home is beautiful! We noticed new things all weekend, the details are great! The setting was perfectly serene. We hope you have endless wonderful times here. Thank you for sharing with us! My husband\'s surprise 40th weekend was lots of fun.',
      image: '/assets/interior/interior2.jpg',
    },
    {
      name: 'Returning Guest',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'Tough to describe how perfect Hemlock Point was – WOW! Plans to come back are already brewing. Until next time…..',
      image: '/assets/interior/interior3.jpg',
    },
    {
      name: 'Quality & Craftsmanship',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'Amazing……quality, craftsmanship – 5 stars. We love your place.',
      image: '/assets/interior/interior4.jpg',
    },
    {
      name: '24 Friends from NYC',
      location: 'New York City',
      rating: 5,
      text: 'We can\'t even begin to describe how much joy your house brought us this weekend. For 24 friends from New York City, this was exactly what we needed to get away and relax. Your house is absolutely stunning, from the land to the last details of construction, especially the sauna! Thanks so much for sharing your home. We can\'t wait to do it again.',
      image: '/assets/interior/interior5.jpg',
    },
    {
      name: 'Mountain Home Enthusiast',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'Easily the most beautiful mountain home we\'ve ever seen. Thank you. We can\'t wait to come back next year.',
      image: '/assets/additional/exterior1.jpg',
    },
    {
      name: 'Ski Weekend Group',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'Best house, property and ski weekend we\'ve ever experienced…..',
      image: '/assets/activity/activity1.jpg',
    },
    {
      name: 'Band Recording Session',
      location: 'New York City',
      rating: 5,
      text: 'Dear Hemlock Family – We enjoyed these 3 days of quiet and peace after spending a few days in loud and crowded NYC. We used this marvelous facility for taping a video with our band. Your house is one of the most impressive houses we\'ve ever seen!! Thank you.',
      image: '/assets/interior/interior8.jpg',
    },
    {
      name: 'Birthday Celebration',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'We would like to thank you for sharing your beautiful home with us. What a wonderful way of spending my birthday. Lots of laughs!',
      image: '/assets/dining/dining1.jpg',
    },
    {
      name: '80th Birthday Celebration',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'I didn\'t believe that there could be such a wonderful place to celebrate my 80th birthday. But here I am!!! We had a very special time in your lodge.',
      image: '/assets/dining/dining2.jpg',
    },
    {
      name: 'Mattress Enthusiast',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'Amazing place! Please let us know what those mattresses are. We had such a great time and good sleep.',
      image: '/assets/bed/bed1.jpg',
    },
    {
      name: 'Nature Explorers',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'We stayed at the lodge. We explored the trails and traveled across the lake by rowboat, canoe, paddle boat and kayak. We enjoyed the frogs, the sounds especially of the bull frogs and tree frogs. At night we searched the blueberry bushes for the tree peppers. The blend of nature and comfort far exceeded our expectations. We love the smart TV accommodations and the doored game room. The space allowed us to be together, yet be separate. Thanks for sharing your place with us.',
      image: '/assets/activity/activity2.jpg',
    },
    {
      name: 'Family with 5-Year-Old',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'We thoroughly enjoyed our vacation here at the lodge. We fished, we went boating and we spent many nights in the sauna. We also enjoyed watching our almost 5 year old enjoy everything around here with his family',
      image: '/assets/activity/activity3.jpg',
    },
    {
      name: 'Camping Family Upgrade',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'Our usual family trip is camping, so to have it here was an amazing upgrade and I couldn\'t have asked for more. Thanks for allowing us the opportunity to have one of the greatest vacations in a long time!',
      image: '/assets/activity/activity4.jpg',
    },
    {
      name: 'Second Visit Family',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'We had a wonderful time (our second visit) and look forward to many more….',
      image: '/assets/activity/activity5.jpg',
    },
    {
      name: 'L. and S.L. Family',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'L. and S.L., along with Scotty (the fish Whisperer who caught over 100 fish), Henry, the fabulous frog hunter, Keeley, the cutest 2 year old ever, and our super nanny had a tremendous family vacation at Hemlock Point. We will surely be back! Many thanks.',
      image: '/assets/activity/activity6.jpg',
    },
    {
      name: '50th Anniversary Couple',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'Our family enjoyed the peace and quiet. It was a great way to celebrate our 50th anniversary. It was a small slice of heaven. Oh, by the way, we didn\'t catch any fish. I think the people from 3 pages ago caught them all!! Best of everything….',
      image: '/assets/activity/activity7.jpg',
    },
    {
      name: 'Family with Kids',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'This place is just incredible. We loved everything about it. The details of the house are just unbelievable. We loved the house, the lake, the kayaks, the canoe, the sauna, the walking trails – and, of course, the blueberries. They were wonderful in the pancakes. Our kids didn\'t want to go home and want to know when we will be back. Love it!',
      image: '/assets/kitchen/kitchen1.jpg',
    },
    {
      name: 'Stress Relief Seekers',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'This is the perfect retreat. We came here tense and stressed and are leaving feeling like we are renewed. Thank you for sharing your wonderful home with us. We saw bear, caught fish, picked blueberries and one person saw deer. Thank you.',
      image: '/assets/activity/sauna1.jpg',
    },
    {
      name: 'Recharged Guests',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'We did it! Unwound and no longer are stressed out. Re-charged and ready for what like brings us again. Great Place – enjoyed all the details of the construction and décor. Good job – start a chain…',
      image: '/assets/interior/interior1.jpg',
    },
    {
      name: 'Second Year Family',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'We had an incredible week. The time goes by way too quickly. This is our second year here and we enjoyed our stay just as much. We really enjoyed the kayaks. They are a great addition to the house. The kids (7-11) all learned how to kayak and did it wonderfully. The wild blueberries were delicious. We made blueberry buckle 3 times. It was so delicious. Thank you for the wonderful memories.',
      image: '/assets/activity/activity1.jpg',
    },
    {
      name: 'Three Generations Family',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'Three generations gathered here for a wonderful week at Hemlock Point Lodge. The accommodations were peaceful and soothing – bringing in the outdoors and animals we love to each and every room. The kitchen was a chef\'s delight – what a joy to cook in this home away from home! We took advantage of every detail – boating, fishing, hiking, biking, berry picking, playing games and curling up with a book to enjoy. Our family finds it very difficult to leave tomorrow morning, but we have next year to look forward to. Everyone of us has decided we must make this an annual event!',
      image: '/assets/dining/dining3.jpg',
    },
    {
      name: 'Mini-Family Reunion',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'Hemlock Point Lodge turned out to be a fantastic setting for our mini-family reunion. We took advantage of all the amenities and had a wonderful time. The blueberries were amazing! We will all have great memories of our time here.',
      image: '/assets/kitchen/kitchen2.jpg',
    },
    {
      name: 'Dream Home Visitor',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'Hi – I loved every minute of this wonderful retreat. My senses exploded with all the detail and rustic luxury. I wish I could live here!! I will visit this place many times in my dreams.',
      image: '/assets/interior/interior2.jpg',
    },
    {
      name: 'Four Generations Family',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'Your house looks awesome! Four generations gathered here this past week filling your home with laughter, love and a comfortable down-deep joy that most homes never get a change to experience. We will never forget the memories made here in this incredible place. We will always remember "Hemlock Point" as the place we actually heard autumn! Thanks for the most awesome family vacation ever.',
      image: '/assets/additional/outdoor1.jpg',
    },
    {
      name: 'Charity Auction Winner',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'Bought the weekend at a charity auction – arrived, and thought I\'d won the lottery. Tough to find adjectives that describe the ambiance that the lodge exudes!! Had a wonderful weekend with family and friends and can\'t wait to return.',
      image: '/assets/interior/interior3.jpg',
    },
    {
      name: 'Snow Adventure Family',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'We arrived on Thursday; there was 14 inches of snow on the ground! We heard coyotes that first night, and searched for wildlife the rest of the weekend. The kids caught newts and we enjoyed the lake even though it was cold. We saw plenty of deer, bear, raccoon and other unidentifiable animal tracks in the snow! As for the house, it is an architectural and decorative masterpiece! The stars at night were breath taking, as was each sunset. What a wonderful family retreat. Thank you for the memories.',
      image: '/assets/additional/exterior1.jpg',
    },
    {
      name: 'Awe-Struck Visitors',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'Unbelievable! Words cannot describe the wonderful time we had at Hemlock Point Lodge. From the lake setting to the wonderful layout and décor, we were in awe!',
      image: '/assets/interior/interior4.jpg',
    },
    {
      name: 'Snowy Vacation Family',
      location: 'Guest Book Entry',
      rating: 5,
      text: 'The snow began cascading down, in a quiet peaceful game, as we arrived at our "vacation house", as my son deemed its name. Have you ever seen the wonder of small children when it snows? Or hear the sounds of full grown men? When foos ball games go slow? How about the sounds of laughter with girls "catching up" to chat? Or silence as you walk the woods? Hemlock Point provides all that. I\'m leaving with a heavy heart and so are my dear friends. It\'s times like these that matter most. Peaceful, fun times with no end.',
      image: '/assets/activity/activity5.jpg',
    },
  ],
  
  // FAQ
  faq: [
    {
      question: 'What is the check-in and check-out time?',
      answer: 'Check-in is at 4:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request.',
    },
    {
      question: 'Is the lodge pet-friendly?',
      answer: 'We welcome well-behaved pets with prior approval. A pet fee of $150 applies.',
    },
    {
      question: 'What should we bring?',
      answer: 'We provide all linens, towels, and basic amenities. Bring personal items, groceries, fishing gear for catch and release, and any specific outdoor gear you prefer.',
    },
    {
      question: 'Is there cell service and WiFi?',
      answer: 'Yes, we have reliable WiFi throughout the lodge. Cell service varies by carrier but is generally good.',
    },
    {
      question: 'Can we host events or gatherings?',
      answer: 'The lodge is perfect for family gatherings and small events. Please contact us for details about larger events.',
    },
  ],
  
  // Booking
  booking: {
    minStay: 2,
    maxStay: 14,
    cancellationPolicy: 'Full refund if cancelled 30 days before arrival',
    deposit: '50% required to confirm booking',
  },
};

export default LODGE_CONFIG;
