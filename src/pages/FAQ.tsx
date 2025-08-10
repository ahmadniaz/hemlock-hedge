import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Stack,
  Grid
} from '@mui/material';
import {
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  Home as HomeIcon,
  EventAvailable as EventAvailableIcon,
  ContactSupport as ContactSupportIcon,
  Checklist as ChecklistIcon,
  Policy as PolicyIcon,
  Accessibility as AccessibilityIcon,
  OutdoorGrill as OutdoorGrillIcon,
  Info as InfoIcon,
  LocalPhone as LocalPhoneIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// FAQ Data Structure
interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string | React.ReactNode;
  tags: string[];
  priority: number;
  hasLinks?: boolean;
  relatedQuestions?: string[];
}

// FAQ Categories
const faqCategories = [
  {
    id: 'essentials',
    name: "What's Provided & What to Bring",
    icon: ChecklistIcon,
    color: '#2D4A36',
  },
  {
    id: 'policies',
    name: 'House Rules & Policies',
    icon: PolicyIcon,
    color: '#B8860B',
  },
  {
    id: 'accessibility',
    name: 'Accessibility & Safety',
    icon: AccessibilityIcon,
    color: '#D4A574',
  },
  {
    id: 'activities',
    name: 'Activities & Recreation',
    icon: OutdoorGrillIcon,
    color: '#4A6B52',
  },
  {
    id: 'practical',
    name: 'Practical Information',
    icon: InfoIcon,
    color: '#8B6508',
  },
  {
    id: 'booking',
    name: 'Booking & Check-in',
    icon: EventAvailableIcon,
    color: '#6B4423',
  },
];

// FAQ Data
const faqData: FAQItem[] = [
  {
    id: 'what-provided',
    category: 'essentials',
    question: 'What is provided?',
    answer: (
      <List dense>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Bed linens, pillows, and blankets" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Three Queen beds and five bunk beds" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Towels (one for each person)" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Gas grill" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Eight life jackets" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Canoe, row boat, paddle boat and four kayaks" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Toilet paper" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Pots, pans and cooking utensils" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="China and glasses" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Iron and ironing board" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Cable TV" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="DVD/CD player" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Internet access" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Land phone" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Board games" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Books" />
        </ListItem>
      </List>
    ),
    tags: ['amenities', 'provided', 'linens', 'kitchen', 'entertainment'],
    priority: 10,
    hasLinks: true,
  },
  {
    id: 'what-to-bring',
    category: 'essentials',
    question: 'What should I bring?',
    answer: (
      <List dense>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Food and beverages" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Paper products like paper towels, tissue, and napkins" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Your special pillow or blanket" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Toiletries such as shampoo, conditioner, soap, toothpaste, etc." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Laundry soap (liquid type)" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Liquid dishwasher soap and dish soap" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Plastic garbage bags" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Laptop computer and data cable" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Fishing equipment" />
        </ListItem>
      </List>
    ),
    tags: ['packing', 'essentials', 'toiletries', 'food', 'supplies'],
    priority: 9,
    hasLinks: true,
  },
  {
    id: 'house-rules',
    category: 'policies',
    question: 'What are the house rules?',
    answer: (
      <List dense>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Use life jackets when on or near the lake" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="No Smoking in the interior of the lodge at any time. Use the butt cans provided. Please do not throw butts on the ground or in the lake" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="No pets or animals allowed on the property or in the house" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="No fireworks at any time. They are a fire hazard" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="No camp fires anywhere on the property at any time. They are a fire hazard" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="No candles inside or outside at any time. They are a fire hazard" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="No more than 16 people on the property at any time. The septic system cannot handle the additional usage" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="No ATV's, off road vehicles, or motorcycles on the property" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="No motor boats, sail boats, personal watercraft on the lake" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="No cutting of trees or vegetation" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="No illegal drugs, or excessive drinking of alcohol" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="No shooting of firearms on the property" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="No littering no matter how small the item" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Parking on stone driveways only" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="No killing, feeding, or disturbing any of the animals, reptiles, and birds on the property" />
        </ListItem>
      </List>
    ),
    tags: ['rules', 'policies', 'safety', 'restrictions', 'guidelines'],
    priority: 10,
  },
  {
    id: 'bugs',
    category: 'practical',
    question: 'Are there bugs?',
    answer: 'This is the great outdoors so, yes, there are bugs. The gnats and mosquitoes are flying around seasonally. Bring bug spray.',
    tags: ['bugs', 'insects', 'outdoors', 'seasonal'],
    priority: 5,
  },
  {
    id: 'pets',
    category: 'policies',
    question: 'Are pets allowed?',
    answer: 'No, we tried to allow them but it did not work.',
    tags: ['pets', 'animals', 'restrictions'],
    priority: 7,
  },
  {
    id: 'laundry',
    category: 'practical',
    question: 'Are laundry facilities available?',
    answer: 'Yes, there is a washer and dryer. Please bring only liquid soap.',
    tags: ['laundry', 'washer', 'dryer', 'amenities'],
    priority: 6,
  },
  {
    id: 'tv',
    category: 'practical',
    question: 'Is there a TV?',
    answer: 'Yes. It is a 50 inch plasma with surround sound. There is only one TV in the house and is located in the game room.',
    tags: ['tv', 'entertainment', 'game room', 'amenities'],
    priority: 6,
  },
  {
    id: 'handicapped-accessible',
    category: 'accessibility',
    question: 'Is the house handicapped accessible?',
    answer: 'The first floor and one bedroom is handicapped accessible.',
    tags: ['accessibility', 'handicapped', 'wheelchair'],
    priority: 7,
  },
  {
    id: 'key-access',
    category: 'booking',
    question: 'How do we get the key to unlock the door?',
    answer: `You do not need a key. The Lodge has a "Smart Home System" with a key pad at the front door. Prior to your stay you will be given a 4-digit numeric code. This code will be sent to you once you have booked and paid in full. It will become active at check-in time. When you arrive simply type in your numeric code on the key pad next to the front door, the door will open, and the security system will deactivate. When you leave the house you may lock the door and activate the security system by entering the numeric code once everyone is out of the house. Your numeric code will deactivate at check-out time on your day of departure. While in the house you can activate the security system in the "at home" mode by entering this same numeric code at the inside key pad.`,
    tags: ['check-in', 'key', 'smart home', 'security', 'access code'],
    priority: 9,
  },
  {
    id: 'safety-features',
    category: 'accessibility',
    question: 'What safety features does the house have?',
    answer: 'There is a completely interconnected fire alarm system and sprinkler system. When not in the house you can activate the security system by entering your numeric access code at the main door. There are also three fire extinguishers in the house. Take time to locate them.',
    tags: ['safety', 'fire alarm', 'sprinkler', 'security', 'fire extinguishers'],
    priority: 8,
  },
  {
    id: 'game-room',
    category: 'activities',
    question: 'Do you have a game room?',
    answer: 'Yes, and it\'s the best around! Take a look at the floor plan for a better view. It has a 50" flat screen TV with surround sound or you can play a CD or plug in your own iPod. There is also a pool table, foosball table, ping pong table, card table, chess table, and air hockey table. You (and the kids) will not be bored on a rainy day.',
    tags: ['game room', 'entertainment', 'indoor activities', 'pool table', 'foosball'],
    priority: 7,
  },
  {
    id: 'bathrooms',
    category: 'practical',
    question: 'How many bathrooms are there?',
    answer: 'There are four full bathrooms and a powder room.',
    tags: ['bathrooms', 'amenities', 'facilities'],
    priority: 6,
  },
  {
    id: 'communication',
    category: 'practical',
    question: 'Can I keep in touch with the outside world?',
    answer: 'Do you really want to? There is a land phone available and Internet access. Cell phone coverage is weak. We will tell you the lodge phone number when you make a reservation. It is not listed on this Web site, to prevent random calls that may disturb you while at the lodge. Outgoing long distance tolls will be deducted from your security deposit or use a calling card / make collect calls.',
    tags: ['phone', 'internet', 'communication', 'cell coverage'],
    priority: 6,
  },
  {
    id: 'swimming',
    category: 'activities',
    question: 'Can I swim in the Lake?',
    answer: 'No, it is not recommended. There is no beach. The lake bottom is muddy. There is no lifeguard.',
    tags: ['swimming', 'lake', 'safety', 'beach'],
    priority: 7,
  },
  {
    id: 'fishing',
    category: 'activities',
    question: 'Can I fish in the Lake?',
    answer: 'Yes, but you must have a PA license and follow PA State Fishing Laws. We encourage catch and release. There are perch, pickerel, and catfish.',
    tags: ['fishing', 'lake', 'license', 'catch and release'],
    priority: 8,
  },
  {
    id: 'boats',
    category: 'activities',
    question: 'Are boats available?',
    answer: 'Yes, there is a row boat, paddle boat, four kayaks, and a canoe available for your use. You are welcome to bring your own boat that can be carried to the lake. Gas engines are not allowed. Electric motors are allowed. Eight life jackets are provided.',
    tags: ['boats', 'kayaks', 'canoe', 'paddle boat', 'life jackets'],
    priority: 8,
  },
  {
    id: 'ice-skating',
    category: 'activities',
    question: 'Can I ice skate on the Lake?',
    answer: 'No, we discourage this because of the possibility of falling through thin ice. We recommend staying off the ice.',
    tags: ['ice skating', 'winter', 'safety', 'ice'],
    priority: 5,
  },
  {
    id: 'atv',
    category: 'policies',
    question: 'Can I use my ATV on the property?',
    answer: 'NO. This property is environmentally sensitive and full of wildlife.',
    tags: ['atv', 'vehicles', 'restrictions', 'environment'],
    priority: 6,
  },
  {
    id: 'snowmobile',
    category: 'activities',
    question: 'Can I snowmobile on the property?',
    answer: 'Yes, but only on the driveway, designated trails, and in the field. Please know the property lines and do not trespass on other properties. Please do not ride in the woods or on the lake.',
    tags: ['snowmobile', 'winter', 'trails', 'property lines'],
    priority: 6,
  },
  {
    id: 'hiking-trails',
    category: 'activities',
    question: 'Are there hiking trails on the property?',
    answer: 'Yes, there are mowed trails.',
    tags: ['hiking', 'trails', 'outdoor activities'],
    priority: 6,
  },
  {
    id: 'groceries',
    category: 'practical',
    question: 'Where can I buy groceries?',
    answer: (
      <List dense>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Zazzera's in Forest City, on Rt 171, 13 miles south"
            secondary="570-785-3128"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Hobb's Country Market in Thompson, 3.5 miles northwest"
            secondary="570-727-2090"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Weis Market in Carbondale, 20 miles south"
            secondary="570-281-3300"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Schneider's Market, 250 Erie Blvd, Susquehanna, PA"
            secondary="(570) 853-4415"
          />
        </ListItem>
      </List>
    ),
    tags: ['groceries', 'shopping', 'stores', 'local'],
    priority: 7,
  },
  {
    id: 'catering',
    category: 'practical',
    question: 'Can we have meals catered at the House?',
    answer: 'We can recommend a catering service if you are interested.',
    tags: ['catering', 'meals', 'food service'],
    priority: 4,
  },
  {
    id: 'emergency',
    category: 'accessibility',
    question: 'What do we do if there is an emergency?',
    answer: `Call 911: The Lodge driveway is located ¼ mile south of Oxbow Road on Wrighter Lake Road. The property is just south of Wrighter Lake and north of Dunn Lake. The driveway entrance is across from the red barn on Wrighter Lake Road. The official address is 3159 May Road, Thompson, PA 18465 but it is not marked. Any questions or concerns that do not warrant police, fire, or ambulance please call (973) 521-1007 and we will try to help you. We will provide our cell phone numbers when you book.`,
    tags: ['emergency', '911', 'directions', 'contact'],
    priority: 9,
  },
  {
    id: 'kid-friendly',
    category: 'accessibility',
    question: 'Is the house "Kid Friendly"?',
    answer: 'No more than any other house with a lake, hot tub, and stairs. You must watch your children. We do not have safety locks on the kitchen cabinets. We do not have blank plugs in the electrical receptacles. The stair to the second floor does not have a gate.',
    tags: ['children', 'safety', 'kid friendly', 'supervision'],
    priority: 7,
  },
  {
    id: 'campfires',
    category: 'policies',
    question: 'Are campfires allowed?',
    answer: 'No, they are a fire hazard. Do NOT create any camp fires on the property.',
    tags: ['campfires', 'fire hazard', 'restrictions'],
    priority: 7,
  },
  {
    id: 'local-activities',
    category: 'activities',
    question: 'What is there to do in the area?',
    answer: 'There are many activities in the area and on the property. Check out the Local Activities section.',
    tags: ['activities', 'local attractions', 'things to do'],
    priority: 6,
  },
];

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);

  const filteredFAQs = useMemo(() => {
    let filtered = faqData;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchQuery.toLowerCase())) ||
        faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return filtered.sort((a, b) => b.priority - a.priority);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filterByCategory = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? 'all' : categoryId);
  };

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  const getCategoryName = (categoryId: string) => {
    const category = faqCategories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  const popularQuestions = faqData.filter(faq => faq.priority >= 8).slice(0, 6);

  return (
    <>
      <Helmet>
        <title>FAQ - Hemlock Point Lodge | Your Questions Answered</title>
        <meta 
          name="description" 
          content="Find answers to frequently asked questions about Hemlock Point Lodge - your private Adirondack retreat. Everything you need to know for your perfect getaway." 
        />
        <meta property="og:title" content="FAQ - Hemlock Point Lodge | Your Questions Answered" />
        <meta property="og:description" content="Find answers to frequently asked questions about Hemlock Point Lodge - your private Adirondack retreat." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hemlockpointlodge.com/faq" />
      </Helmet>

      {/* Hero Section */}
      <Box sx={{ 
        backgroundImage: 'linear-gradient(rgba(45,74,54,0.7), rgba(45,74,54,0.7)), url("/assets/interior/interior1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '40vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h1" 
              color="white" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography 
              variant="h4" 
              color="white" 
              sx={{ 
                fontFamily: '"Dancing Script", cursive',
                fontSize: { xs: '1.5rem', md: '2rem' },
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              Everything you need to know for your perfect getaway
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Search & Filter Section */}
      <Container maxWidth="lg" sx={{ mt: { xs: -6, md: -8 }, position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card elevation={8} sx={{ p: 4, borderRadius: 3, mb: 4 }}>
            <TextField
              fullWidth
              placeholder="Search frequently asked questions..."
              variant="outlined"
              InputProps={{
                startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                sx: { borderRadius: 3 }
              }}
              value={searchQuery}
              onChange={handleSearch}
              sx={{ mb: 3 }}
            />
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Chip
                label="All Questions"
                onClick={() => filterByCategory('all')}
                variant={selectedCategory === 'all' ? 'filled' : 'outlined'}
                color="primary"
                sx={{ fontWeight: 600 }}
              />
              {faqCategories.map(category => (
                <Chip
                  key={category.id}
                  label={category.name}
                  onClick={() => filterByCategory(category.id)}
                  variant={selectedCategory === category.id ? 'filled' : 'outlined'}
                  color="primary"
                  icon={<category.icon />}
                  sx={{ fontWeight: 600 }}
                />
              ))}
            </Box>
          </Card>
        </motion.div>
      </Container>

      {/* Popular Questions Section */}
      {searchQuery === '' && selectedCategory === 'all' && (
        <Container maxWidth="lg" sx={{ mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography 
              variant="h4" 
              gutterBottom 
              textAlign="center" 
              color="primary.main"
              sx={{ mb: 4, fontWeight: 600 }}
            >
              Most Asked Questions
            </Typography>
            <Grid container spacing={3}>
              {popularQuestions.map((faq, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={faq.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card 
                      sx={{ 
                        height: '100%', 
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 4
                        }
                      }}
                      onClick={() => {
                        setExpandedAccordion(faq.id);
                        document.getElementById(faq.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                          {faq.question}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {typeof faq.answer === 'string' 
                            ? faq.answer.substring(0, 100) + (faq.answer.length > 100 ? '...' : '')
                            : 'Click to view details...'
                          }
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      )}

      {/* FAQ Content */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        {filteredFAQs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No questions found
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try adjusting your search terms or browse all categories.
              </Typography>
            </Card>
          </motion.div>
        ) : (
          filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Accordion
                id={faq.id}
                expanded={expandedAccordion === faq.id}
                onChange={handleAccordionChange(faq.id)}
                sx={{
                  mb: 2,
                  borderRadius: '12px !important',
                  '&:before': { display: 'none' },
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  '&.Mui-expanded': {
                    boxShadow: '0 8px 32px rgba(45,74,54,0.15)',
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    bgcolor: 'rgba(45,74,54,0.05)',
                    borderRadius: '12px',
                    '&.Mui-expanded': {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    },
                    '& .MuiAccordionSummary-content': {
                      alignItems: 'center',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', flexWrap: 'wrap' }}>
                    <Chip 
                      label={getCategoryName(faq.category)}
                      size="small"
                      color="primary"
                      sx={{ mr: 2, mb: { xs: 1, sm: 0 }, fontWeight: 600 }}
                    />
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        color: 'primary.main',
                        fontSize: { xs: '1rem', sm: '1.25rem' }
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </Box>
                </AccordionSummary>
                
                <AccordionDetails sx={{ pt: 3, pb: 3 }}>
                  <Box sx={{ pl: 2 }}>
                    {typeof faq.answer === 'string' ? (
                      <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'text.primary' }}>
                        {faq.answer}
                      </Typography>
                    ) : (
                      faq.answer
                    )}
                    
                    {faq.hasLinks && (
                      <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Helpful Resources:
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                          <Button
                            variant="outlined"
                            size="small"
                            href="/documents/WhatnottoBring_000.pdf"
                            target="_blank"
                            sx={{ textTransform: 'none' }}
                          >
                            What Not to Bring (PDF)
                          </Button>
                          <Button
                            variant="outlined"
                            size="small"
                            href="/documents/WhattoBring_002.pdf"
                            target="_blank"
                            sx={{ textTransform: 'none' }}
                          >
                            What to Bring (PDF)
                          </Button>
                        </Stack>
                      </Box>
                    )}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))
        )}
      </Container>

      {/* Quick Actions Bar */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card sx={{ 
            bgcolor: 'background.paper',
            borderRadius: 3,
            p: 4,
            boxShadow: 3,
          }}>
            <Typography variant="h5" gutterBottom textAlign="center" color="primary.main" sx={{ fontWeight: 600 }}>
              Still Have Questions?
            </Typography>
            <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
              We're here to help make your stay perfect
            </Typography>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              justifyContent="center"
              alignItems="center"
            >
              <Button 
                variant="contained" 
                size="large"
                href="/contact"
                startIcon={<ContactSupportIcon />}
                sx={{ minWidth: 200 }}
              >
                Contact Us
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                href="/accommodations"
                startIcon={<HomeIcon />}
                sx={{ minWidth: 200 }}
              >
                View Accommodations
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                href="tel:+19735211007"
                startIcon={<LocalPhoneIcon />}
                sx={{ minWidth: 200 }}
              >
                Call Now
              </Button>
            </Stack>
          </Card>
        </motion.div>
      </Container>
    </>
  );
};

export default FAQ;
