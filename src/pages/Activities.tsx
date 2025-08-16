import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  List, 
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Divider,
  Link,
} from '@mui/material';
import {
  SportsEsports,
  DirectionsWalk,
  DirectionsBike,
  ShoppingCart,
  Nature,
  Water,
  SportsGolf,
  DownhillSkiing,
  ExpandMore,
  Restaurant,
  Museum,
  LocalPhone,
  LocationOn,
  LocalActivity,
  Store,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Activities: React.FC = () => {
  const onPropertyActivities = [
    { 
      icon: DownhillSkiing, 
      title: 'Skiing', 
      description: 'World-class skiing at Elk Mountain Ski Resort, just 15 minutes away. Perfect for winter adventures.',
      bgColor: '#8B0000', // Burgundy
      iconBgColor: '#FFFFFF'
    },
    { 
      icon: Water, 
      title: 'Fishing', 
      description: 'Great fishing on Pine Lake with perch, pickerel, and catfish. PA license required. Catch and release.',
      bgColor: '#2D6A4F', // Green
      iconBgColor: '#FFFFFF'
    },
    { 
      icon: Water, 
      title: 'Boating & Canoeing', 
      description: 'Canoe, row boat, paddle boat, and several kayaks available on the private lake.',
      bgColor: '#1B4332', // Dark Green
      iconBgColor: '#FFFFFF'
    },
    { 
      icon: DirectionsWalk, 
      title: 'Hiking & Berry Picking', 
      description: 'Numerous trails bordered by blueberry bushes and diverse ecology. Wild blueberries usually ripe mid-August.',
      bgColor: '#D4A574', // Beige
      iconBgColor: '#1B4332'
    },
    { 
      icon: Nature, 
      title: 'Wildlife Viewing', 
      description: 'Deer, beaver, bear, and various woodland creatures share the habitat.',
      bgColor: '#8B6508', // Dark Gold
      iconBgColor: '#FFFFFF'
    },
    { 
      icon: SportsEsports, 
      title: 'Indoor Fun and Games', 
      description: 'Pool table, air hockey, foosball, chess, video games, and 60" smart TV.',
      bgColor: '#A52A2A', // Light Burgundy
      iconBgColor: '#FFFFFF'
    },
  ];

  const localActivities = {
    antiquing: {
      title: 'Antiquing',
      icon: Store,
      activities: [
        { name: 'Docktor\'s Treasures & Trees', phone: '(570) 869-1500', owners: 'Willard & Alice Docktor' },
        { name: 'Brooks Farm Antiques & Collectibles', phone: '(570) 278-9313', owners: 'Ron & Diane Brooks' },
        { name: 'Mary\'s Home Furnishings', phone: '(570) 278-2187', owner: 'Mary B. Gere' },
        { name: 'Lee & Son Furniture & Antiques', phone: '(570) 965-2121', owners: 'Donald & Rebekah Lee', website: 'http://www.americana-roads.com' },
        { name: 'Aqua Inn Antiques \'n more', phone: '(570) 289-4984', owners: 'Jack & Carol Masters', address: 'Kingley, PA' },
        { name: 'The Black Cat', phone: '(570) 465-3327', owner: 'Kate Hari', address: 'New Milford PA' },
        { name: 'Never Too Old Antiques & Things', phone: '(570) 465-7613', owners: 'Marion Leorard & Lil Davies', address: 'Rt. 11 between Hallstead & New Milford, PA at Summersville (in Precision Glass Bldg.)' },
        { name: 'Not Just Antiques', phone: '(570) 756-GIFT', owner: 'Pat Green', address: 'Rt. 22, Jackson, PA 18825. Exit 211 on I-81' },
        { name: 'The Treasure Chest', phone: '(570) 222-4020', owner: 'Sandy Yannotta', address: 'South Gibson, PA' },
        { name: 'The Marten Creek Switch Shoppes', phone: '(570) 942-4105', owner: 'Jan Watkins', address: 'Rt. 11 between Nicholson & Hop Bottom' },
        { name: 'Lucy\'s Corner Cabinet', phone: '(570) 222-3737', owners: 'Lucy & Fred Vierling', address: 'Rt. 22, Lenox, PA 18826. Six miles North of Nicholson, 4 miles South of Exit 211 on I-81' },
        { name: 'The Carriage Barn Antiques', phone: '(570) 587-5405' },
      ]
    },
    berryPicking: {
      title: 'Berry Picking',
      icon: Nature,
      activities: [
        { name: 'Wild Blueberries', description: 'The property is loaded with wild blueberry bushes. They usually are ripe around mid August.' },
      ]
    },
    biking: {
      title: 'Biking',
      icon: DirectionsBike,
      activities: [
        { name: 'D & H Rail-Trails of NEPA', description: 'Great bike ride for the family. You can do the entire run from Simpson PA to the NY border or just a section.', website: 'http://www.nepa-rail-trails.org' },
        { name: 'Merli-Sarnoski Park', description: 'For the hard core mountain biker. It has lots of single track with rocks, down trees, and roots. Great scenery around the lake.', website: 'http://www.lackawannacounty.org/attractions_mspark.aspx' },
        { name: 'Great mountain bike riding about 45 minutes south', description: 'Follow this link and click on directions: http://www.hubbardbicycleclub.com/', website: 'http://www.hubbardbicycleclub.com/' },
        { name: 'New Milford Bike', phone: '570-465-2169', website: 'http://www.newmilfordbike.com/' },
      ]
    },
    boating: {
      title: 'Boating & Canoeing',
      icon: Water,
      activities: [
        { name: 'Pine Lake', description: 'You can boat and canoe on the lake in front of the lodge.' },
        { name: 'Delaware River', description: 'The Delaware River is just 10 miles to the east.' },
        { name: 'Public Lakes', description: 'There are numerous public lakes in the area. Refer to the fishing section.' },
      ]
    },
    bowling: {
      title: 'Bowling',
      icon: SportsEsports,
      activities: [
        { name: 'Valley Lanes Carbondale', phone: '570-282-3960' },
        { name: 'Belvedere Lanes', phone: '570-942-6868' },
      ]
    },
    golf: {
      title: 'Golf',
      icon: SportsGolf,
      activities: [
        { name: 'Scottish Glen at Fern Hall', phone: '(570) 222-3676', address: 'RR1 Box 1095 Crystal Lake, Carbondale, PA 18446' },
        { name: 'Panorama Golf Course', phone: '(570)222-3525', address: 'RR1 Rt. 247, Forest City, PA 18421' },
        { name: 'Rock Creek Golf Course & Practice Range', phone: '(570) 222-2500', address: 'Exit 206 off Rt. 81, Lenoxville, PA' },
        { name: 'Homestead Golf Course', phone: '(570) 282-5197', address: 'RR 1, Rt. 106, Carbondale, PA 18407' },
        { name: 'Skyline Golf Course', phone: '(570) 282-5993', address: 'RR1, Rt. 247, Carbondale, PA 18407' },
        { name: 'Sleepy Hollow Golf Course', phone: '(570) 254-4653', address: 'Chapel Lake Road, Carbondale, PA 18407' },
        { name: 'Lake Lorain Golf Club', phone: '(570) 448-2232', address: 'Rt. 370, Poyntelle, PA 18454', description: '9 holes, driving range, pro shop, snack bar, restaurant/bar, club/cart rental.' },
        { name: 'Memorial Links', phone: '(570) 448-9200', address: 'Rt. 170, Pleasant Mount, PA 18453', description: '9 holes, reservations on weekends.' },
        { name: 'Shadowbrook Golf Course', phone: '(570) 836-5417', address: 'Rt. 6, Tunkhannock, PA 18657', description: '18 holes, reservations April - Sept., driving range, pro shop, golf school, snack bar, club/cart rental.' },
      ]
    },
    grocery: {
      title: 'Grocery Stores',
      icon: ShoppingCart,
      activities: [
        { name: 'Hobbs Market', phone: '570-727-2090', address: 'Thompson PA' },
        { name: 'Weis Market', phone: '570-253-9797', address: '1199 Texas Palmyra Hwy Ste N, Honesdale PA' },
        { name: 'Weis Market', phone: '570-281-3300', address: '97 Brooklyn St. Carbondale PA' },
        { name: 'Schneider\'s Market', phone: '570-853-4415', address: '250 Erie Blvd, Susquehanna, PA' },
        { name: 'Zazzera\'s Grocery', phone: '570-785-3128', address: '600 Main St Forest City PA' },
      ]
    },
    fishing: {
      title: 'Fishing',
      icon: Water,
      activities: [
        { name: 'Pine Lake', description: 'What better way to go fishing than right in the back yard. Pine Lake, which is 100 feet from the lodge has great fishing.' },
        { name: 'Upper Delaware River', description: 'The upper Delaware offers world renown trout fishing.' },
        { name: 'Lackawanna River Corridor Association', website: 'http://www.lrca.org' },
        { name: 'PA Fish and Boat Commission Lakes', description: 'Several lakes in the area that are open to public fishing and boating. A few are Belmont Lake, Miller Pond, Upper Woods Pond, and Lower Woods Pond.', website: 'http://www.fish.state.pa.us/Fish/lakes.htm' },
        { name: 'Additional Access Points', website: 'http://sites.state.pa.us/PA_Exec/Fish_Boat/access.htm' },
      ]
    },
    fishingGuides: {
      title: 'Fishing Guides',
      icon: Water,
      activities: [
        { name: 'Jerry Hadden\'s Guide Service', description: 'Delaware River Float Trips, Up to Date Hatch info on the Upper Delaware River', website: 'http://www.jerryhadden.com' },
        { name: 'Michael Padua', website: 'http://www.sweetwaterguide.com' },
        { name: 'L.D. Guide Service', phone: '(570) 250-1147', website: 'http://www.ldguideservice.com' },
        { name: 'Rick Murphy: No Lodge Guide Service', website: 'http://nolodgeguideservice.com/Contact.html' },
      ]
    },
    kidsCamps: {
      title: 'Local Camps for the Kids',
      icon: LocalActivity,
      activities: [
        { name: 'Camp Tioga', website: 'http://www.camptioga.com/' },
        { name: 'Independent Lake', website: 'http://www.independentlake.com/' },
        { name: 'Lake Greeley', website: 'http://www.lakegreeley.com/' },
        { name: 'Camp Watonka', website: 'http://www.watonka.com/' },
        { name: 'Pine Forest Camp', website: 'http://www.pineforestcamp.com/' },
        { name: 'Camp Cayuga', website: 'http://www.campcayuga.com/' },
        { name: 'Y Camp Skycrest', website: 'http://www.ycampskycrest.org/' },
        { name: 'Summit Camp', website: 'http://www.summitcamp.com/' },
        { name: 'Indian Head', website: 'http://www.indianhead.com/' },
      ]
    },
    hiking: {
      title: 'Hiking',
      icon: DirectionsWalk,
      activities: [
        { name: 'Property Trails', description: 'There are trails on the property' },
        { name: 'Florence Shelly Preserve', phone: '570-756-2429', address: 'Thompson', description: 'Self-guided trails that lead visitors throughout 357 acres of thriving plant species, diverse wildlife, and nature viewing.', website: 'http://www.nature.org/wherewework/northamerica/states/pennsylvania/preserves/art827.html' },
        { name: 'Lacawac Sanctuary', phone: '570-689-9494', address: 'Lake Ariel', description: 'Nature walks on a 500-acre sanctuary preserve.' },
        { name: 'Rail-Trail Council of Northeast PA', website: 'http://www.nepa-rail-trails.org/' },
        { name: 'Archbald Pothole State Park', website: 'http://www.dcnr.state.pa.us/stateparks/parks/archbaldpothole.aspx' },
        { name: 'Salt Springs State Park', website: 'http://www.dcnr.state.pa.us/stateparks/parks/saltsprings.aspx' },
        { name: 'Lackawanna State Park', website: 'http://www.dcnr.state.pa.us/stateparks/parks/lackawanna.aspx' },
        { name: 'Nescopeck State Park', website: 'http://www.dcnr.state.pa.us/stateparks/parks/nescopeck.aspx' },
        { name: 'Ricketts Glen State Park', description: 'Famous waterfall trail with 22 waterfalls.' },
        { name: 'Varden Conservation Area', website: 'http://www.dcnr.state.pa.us/stateparks/parks/varden.aspx' },
      ]
    },
    hunting: {
      title: 'Hunting',
      icon: SportsEsports,
      activities: [
        { name: 'Pennsylvania Game Commission', website: 'http://www.pgc.state.pa.us/' },
        { name: 'Spruce Hill Guide Service', phone: '(570) 224-4191', website: 'http://www.twinsprucelodge.com/' },
        { name: 'Rick Murphy: No Lodge Guide Service', website: 'http://nolodgeguideservice.com/Contact.html' },
      ]
    },
    attractions: {
      title: 'Local Attractions',
      icon: Museum,
      activities: [
        { name: 'The Electric City Trolley Museum', website: 'http://www.ectma.org' },
        { name: 'Dorflinger Glass Museum', website: 'http://www.dorflinger.com/' },
        { name: 'Callender\'s Sugar House', phone: '570-727-2982', address: 'Thompson' },
        { name: 'Cider Mill Playhouse', website: 'http://www.cidermillplayhouse.com/' },
        { name: 'Elk Mountain Area Guide', website: 'http://www.elkmtnarea.com/' },
        { name: 'Elk Mountain Ski Resort', website: 'http://www.elkskier.com' },
        { name: 'Everhart Museum', website: 'http://www.everhart-museum.org/' },
        { name: 'Houdini Museum', website: 'http://www.houdini.org' },
        { name: 'J.E.M. Classic Car Museum', phone: '570-386-3554', address: 'Andreas' },
        { name: 'Lackawanna Coal Mine Tour', website: 'http://www.visitnepa.org/coalmine' },
        { name: 'Northeast PA Visitors Bureau', website: 'http://www.visitnepa.org/' },
        { name: 'Old Mill Village', website: 'http://www.oldmillvillage.com' },
        { name: 'Pocono Downs', website: 'http://www.poconodowns.com' },
        { name: 'Pocono International Raceway', website: 'http://www.poconoraceway.com' },
        { name: 'Red Barons Baseball', description: 'Phillies AAA', website: 'http://www.redbarons.com' },
        { name: 'Stourbridge Rail Excursions', phone: '570-253-1960', address: 'Honesdale' },
        { name: 'Steamtown National Historic Site', website: 'http://www.nps.gov/stea/' },
        { name: 'Wilkes-Barre Scranton Penguins', website: 'http://www.wbspenguins.com' },
      ]
    },
    restaurants: {
      title: 'Restaurants',
      icon: Restaurant,
      activities: [
        { name: 'Chet\'s Place', phone: '570-679-2129', address: 'Union Dale, PA', description: 'Offers a variety of sandwiches and entrées ranging from $2.75 to $12.95 in price, along with live music on Wednesdays and weekends. Take-Out Available. Directions: I-81 to Exit 206 (formerly Exit 63) to Route 374 East, head towards Elk Mountain and follow signs to Chet\'s Place.', website: 'http://www.chetsplace.com' },
        { name: 'Stone Bridge Restaurant', phone: '(570) 679-9500', address: 'RR2, Box 3112, Union Dale, PA', description: 'Has a beautiful setting and gourmet dishes ranging from $7 appetizers to $29.95 entrées.', website: 'http://www.stone-bridge-inn.com' },
        { name: 'Elegante Restaurant and Pizzaria', address: '315 South Main Street, Forest City, PA', description: 'Serves Italian-American cuisine ranging in price from $3 to $17 and also does catering.', website: 'http://www.eleganterestaurant.com/' },
        { name: 'Elk Mountain Ski Resort', phone: '(570) 679-4400', address: 'RR2, Box 3328, Union Dale, PA', description: 'Has an assortment of reasonably priced appetizers, soups, salads, and sandwiches. Directions: Elk Mountain Ski Resort is located north of Scranton, Pennsylvania, easily accessible from Interstate 81, off Exit 206.', website: 'http://www.elkskier.com' },
        { name: 'Giuseppe\'s Pizza & Hoagies', phone: '570-785-6411', address: '500 Main St, Forest City, PA' },
        { name: 'Pleasant Mount Café', phone: '570-448-2127', address: 'State Route 371, Pleasant Mount, PA' },
        { name: 'Jay Dee\'s Bar & Grill', phone: '570-785-5995', address: '923 Main St, Forest City, PA' },
        { name: 'The Inn At Starlight Lake Restaurant', address: '289 Starlight Lake Road, Starlight, PA', description: 'A pretty setting with an appetizing menu and an award-winning pastry chef.', website: 'http://www.innatstarlightlake.com/' },
        { name: 'McDonnell\'s Family Restaurant', phone: '(570) 282-5144', address: '7 Main St., Carbondale, PA' },
        { name: 'Mamasita\'s Mexican Food', phone: '570-222-6262' },
        { name: 'Mountain View Restaurant', phone: '570-222-5000' },
      ]
    },
    shopping: {
      title: 'Shopping',
      icon: ShoppingCart,
      activities: [
        { name: 'Retail Malls and Stores on RT 6 in Carbondale', description: 'Local shopping opportunities.' },
        { name: 'Crossings Outlets in Tannersville', description: 'One hour south off RT 80 - outlet shopping.' },
      ]
    },
    skiing: {
      title: 'Skiing',
      icon: DownhillSkiing,
      activities: [
        { name: 'Callender\'s Sugar House', phone: '570-727-2982' },
        { name: 'Elk Mountain Ski Resort', website: 'http://www.elkskier.com' },
        { name: 'Idlewild Ski Shop & Rentals', website: 'http://www.idlewildskishop.com' },
        { name: 'Chet\'s Place, Cross Country Ski Rentals', website: 'http://www.chetsplace.com' },
        { name: 'Mount Tone Ski Camp', phone: '(800) 747-2SKI', address: 'Wallerville Road, Lake Como, PA 18437' },
      ]
    },
    snowmobiling: {
      title: 'Snowmobiling',
      icon: DirectionsBike,
      activities: [
        { name: 'D & H Rail-Trails of NEPA', website: 'http://www.nepa-rail-trails.org' },
        { name: 'NEPA Snow Trails', website: 'http://www.pasnow.org' },
      ]
    },
    whiteWater: {
      title: 'White Water Rafting & Canoeing',
      icon: Water,
      activities: [
        { name: 'Lander\'s River Trips', website: 'http://www.landersrivertrips.com' },
        { name: 'Kittantinny Canoes', phone: '800-356-2852', address: 'Dingman\'s Ferry' },
        { name: 'Soaring Eagle Campground', phone: '877-278-8383', description: 'Located on the upper Delaware River near Equinumk PA', website: 'http://www.soaringeaglecampground.com' },
      ]
    },
  };

  return (
    <>
      <Helmet>
        <title>Activities - Hemlock Point Lodge</title>
        <meta 
          name="description" 
          content="Explore endless activities at Hemlock Point Lodge. From skiing and fishing on our private lake to hiking trails, golf, and local attractions." 
        />
        <meta property="og:title" content="Activities - Hemlock Point Lodge" />
        <meta property="og:description" content="Explore endless activities at Hemlock Point Lodge. From skiing and fishing on our private lake to hiking trails, golf, and local attractions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hemlockpointlodge.com/activities" />
      </Helmet>
      
      <Box sx={{ pt: 8, pb: 6 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
              Activities & Attractions
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 6, textAlign: 'center' }}>
              Endless opportunities for adventure and relaxation on the property and in the surrounding area
            </Typography>
          </motion.div>

          {/* On Property Activities */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h2" component="h2" sx={{ mb: 4, color: 'primary.main' }}>
              On Property Activities
            </Typography>
            <Grid container spacing={3} sx={{ mb: 6 }}>
              {onPropertyActivities.map((activity, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Card sx={{ 
                    height: '100%',
                    backgroundColor: '#F5F5DC', // Rustic beige background
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.2)',
                    }
                  }}>
                    <CardContent sx={{ p: 3, textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          mx: 'auto',
                          backgroundColor: activity.bgColor,
                          color: activity.iconBgColor,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)',
                            boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                          }
                        }}
                      >
                        <activity.icon sx={{ fontSize: 35 }} />
                      </Box>
                      <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                        {activity.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {activity.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Local Activities */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography variant="h2" component="h2" sx={{ mb: 4, color: 'primary.main' }}>
              Local Activities & Attractions
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Call for hours of operation and directions. If you find another activity that is not listed or have corrections please let us know. All listings are provided for your convenience, not an endorsement.
            </Typography>

            {Object.entries(localActivities).map(([key, category], index) => (
              <Accordion key={key} sx={{ 
                mb: 2,
                backgroundColor: '#F5F5DC', // Rustic beige background
                '&:hover': {
                  backgroundColor: '#E6D7C3', // Slightly darker beige on hover
                }
              }}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <category.icon sx={{ color: 'primary.main' }} />
                    <Typography variant="h6">{category.title}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <List dense>
                    {category.activities.map((activity, activityIndex) => (
                      <ListItem key={activityIndex} sx={{ px: 0, flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, flexWrap: 'wrap' }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {activity.name}
                          </Typography>
                          {'phone' in activity && activity.phone && (
                            <Chip 
                              icon={<LocalPhone />}
                              label={activity.phone} 
                              size="small" 
                              color="primary" 
                              variant="outlined"
                            />
                          )}
                          {'website' in activity && activity.website && (
                            <Chip 
                              label="Website" 
                              size="small" 
                              color="secondary" 
                              variant="outlined"
                              component={Link}
                              href={activity.website}
                              target="_blank"
                              clickable
                            />
                          )}
                        </Box>
                        {'address' in activity && activity.address && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                            <LocationOn sx={{ fontSize: 16, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {activity.address}
                            </Typography>
                          </Box>
                        )}
                        {'owners' in activity && activity.owners && (
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                            <strong>Owners:</strong> {activity.owners}
                          </Typography>
                        )}
                        {'owner' in activity && activity.owner && (
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                            <strong>Owner:</strong> {activity.owner}
                          </Typography>
                        )}
                        {'description' in activity && activity.description && (
                          <Typography variant="body2" color="text.secondary">
                            {activity.description}
                          </Typography>
                        )}
                        {activityIndex < category.activities.length - 1 && (
                          <Divider sx={{ width: '100%', mt: 1 }} />
                        )}
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default Activities;
