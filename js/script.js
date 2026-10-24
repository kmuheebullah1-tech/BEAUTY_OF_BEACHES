/**
 * BeautyOfBeaches - Master JavaScript
 * Vanilla JS & jQuery for interactive destination grids, gallery filters,
 * lightbox modal, live query search, star rating, and client-side form validation.
 */

// Embedded Destination Database (ensures seamless operation even under file:// protocol)
const BEACH_DATABASE = [
  // NORTH ZONE
  {
    id: "north-1",
    zone: "North",
    name: "Manora Beach",
    location: "Karachi, Sindh",
    country: "Pakistan",
    image: "images/north/manora.jpg",
    rating: 4.7,
    reviewsCount: 1240,
    shortDescription: "Historic coastal peninsula along the northern Arabian Sea featuring heritage lighthouses, golden sands, and vibrant seafront dining.",
    fullDescription: "Situated on a charming peninsula guarding Karachi harbor, Manora Beach is one of the most beloved coastal getaways of the region. Boasting a modern beachfront promenade, historic 19th-century lighthouse, golden sands, and seaside gazebos, it offers boat cruises from Keamari harbor and memorable sunset views over the northern Arabian waters.",
    bestTimeToVisit: "October to March",
    weather: "22°C - 28°C (Pleasant coastal winter)",
    waterTemp: "23°C - 26°C",
    activities: ["Promenade Walks", "Boat Cruising", "Lighthouse Visits", "Sunset Seafood Dining"],
    amenities: ["Paved Boardwalk", "Family Gazebos", "Parking Area", "Seaside Restaurants"],
    safetyTip: "Follow lifeguard guidance during midsummer monsoon swells; swimming is best in calmer winter months.",
    featured: true,
    galleryCategory: "sunset"
  },
  {
    id: "north-2",
    zone: "North",
    name: "Reynisfjara Black Sand Beach",
    location: "Vik, South Coast",
    country: "Iceland",
    image: "images/north/reynisfjara.jpg",
    rating: 4.9,
    reviewsCount: 1890,
    shortDescription: "World-famous volcanic black pebble coast featuring towering basalt column cliffs and roaring North Atlantic waves.",
    fullDescription: "Reynisfjara is renowned for its ink-black volcanic sand, monumental sea stacks known as Reynisdrangar, and natural hexagonal basalt columns carved into Mount Reynisfjall. Located in southern Iceland's Arctic coastal fringe, it provides a dramatic, otherworldly seaside experience.",
    bestTimeToVisit: "May to September",
    weather: "8°C - 15°C (Cool Arctic breeze)",
    waterTemp: "6°C - 9°C",
    activities: ["Photography", "Geological Walks", "Puffin Watching", "Coastal Sightseeing"],
    amenities: ["Visitor Pavilion", "Café & Restrooms", "Parking Area", "Information Boards"],
    safetyTip: "Never turn your back on the Atlantic sneaker waves which surge unexpectedly far onto the sand.",
    featured: true,
    galleryCategory: "adventure"
  },
  {
    id: "north-3",
    zone: "North",
    name: "Cannon Beach & Haystack Rock",
    location: "Oregon Coast",
    country: "United States",
    image: "images/north/cannon-beach.jpg",
    rating: 4.8,
    reviewsCount: 2150,
    shortDescription: "Vast mist-kissed Pacific Northwest shoreline crowned by the iconic 235-foot Haystack Rock monolithic sea stack.",
    fullDescription: "Cannon Beach is a beloved coastal treasure along Oregon's rugged Pacific rim. Low tides expose fascinating tide pools teeming with bright sea stars, anemones, and tufted puffins nesting on Haystack Rock. The broad sandy stretch is ideal for long contemplative walks and sunset bonfires.",
    bestTimeToVisit: "June to October",
    weather: "17°C - 24°C (Mild coastal sunshine)",
    waterTemp: "12°C - 15°C",
    activities: ["Tide Pooling", "Bird Watching", "Surfing", "Beachcombing"],
    amenities: ["Boardwalk Access", "Art Galleries Nearby", "Pet-Friendly", "Picnic Areas"],
    safetyTip: "Respect the Marine Garden protected boundary around Haystack Rock during low tide.",
    featured: true,
    galleryCategory: "sunset"
  },
  {
    "id": "north-4",
    zone: "North",
    name: "Kvalvika Beach",
    location: "Lofoten Islands",
    country: "Norway",
    image: "images/north/kvalvika.jpg",
    rating: 4.9,
    reviewsCount: 890,
    shortDescription: "Isolated Arctic oasis tucked between sheer granite mountain peaks with golden sand and turquoise fjords.",
    fullDescription: "Accessible only by a scenic mountain hike over the Ryten ridge, Kvalvika Beach rewards adventurous hikers with turquoise waters and pristine golden shores framed by sheer vertical rock faces rising into the clouds. Under the midnight sun in summer, the beach radiates in golden warmth 24 hours a day.",
    bestTimeToVisit: "June to August",
    weather: "12°C - 19°C (Midnight Sun season)",
    waterTemp: "8°C - 12°C",
    activities: ["Hiking", "Wild Camping", "Midnight Sun Viewing", "Arctic Surfing"],
    amenities: ["Trailhead Parking", "Eco-camping spots", "Natural Springs"],
    safetyTip: "Pack waterproof gear and carry all waste out; strictly pristine wilderness regulations apply.",
    featured: false,
    galleryCategory: "adventure"
  },
  {
    id: "north-5",
    zone: "North",
    name: "Giant's Causeway Coast & Portrush",
    location: "County Antrim",
    country: "Northern Ireland",
    image: "images/north/giants-causeway.jpg",
    rating: 4.8,
    reviewsCount: 1620,
    shortDescription: "Ancient UNESCO-listed basalt coastline where mythical legends meet roaring North Atlantic sea spray.",
    fullDescription: "Formed by intense volcanic cooling 60 million years ago, this northern marvel showcases thousands of interlocking basalt columns stepping down into the Atlantic Ocean. Nearby Whiterocks Beach features white limestone cliffs and gentle sands loved by walkers and coastal explorers.",
    bestTimeToVisit: "May to September",
    weather: "14°C - 20°C (Breezy oceanic)",
    waterTemp: "11°C - 14°C",
    activities: ["Coastal Trails", "Geology Tours", "Surfing", "Cliff Photography"],
    amenities: ["Interpretive Center", "Audio Tours", "Shuttle Service", "Café"],
    safetyTip: "Watch for wet, algae-covered rocks that can be extremely slippery near the waterline.",
    featured: false,
    galleryCategory: "adventure"
  },
  {
    id: "north-6",
    zone: "North",
    name: "Ruby Beach",
    location: "Olympic National Park, Washington",
    country: "United States",
    image: "images/north/ruby-beach.jpg",
    rating: 4.8,
    reviewsCount: 1410,
    shortDescription: "Mystical northern Pacific coast strewn with massive weathered driftwood trees and jagged sea stacks.",
    fullDescription: "Named for its garnet-colored sand crystals that glitter under afternoon light, Ruby Beach is one of the jewels of Washington's Olympic wilderness. Giant cedar drift logs line the shore while sea stacks rise through rolling Pacific fog banks, creating a photographer's dream landscape.",
    bestTimeToVisit: "July to October",
    weather: "16°C - 22°C (Misty temperate)",
    waterTemp: "10°C - 13°C",
    activities: ["Driftwood Walks", "Tide Pool Spotting", "Photography", "Sunset Watching"],
    amenities: ["Scenic Overlook Parking", "Trail Access", "Restrooms"],
    safetyTip: "Check local tide tables before exploring around outer sea stacks so as not to be cut off.",
    featured: false,
    galleryCategory: "golden-sands"
  },

  // SOUTH ZONE
  {
    id: "south-1",
    zone: "South",
    name: "Clifton Beach",
    location: "Karachi, Sindh",
    country: "Pakistan",
    image: "images/south/clifton.jpg",
    rating: 4.6,
    reviewsCount: 2650,
    shortDescription: "Vibrant and sprawling urban beach on the southern Arabian Sea famous for camel and horse rides along sunset sands.",
    fullDescription: "Clifton Beach (also known as Sea View) is Karachi's most bustling coastal destination. Stretching along the southern Arabian Sea, it is renowned for gentle sea breezes, decorated camel rides, dune buggies, and family gatherings. In the evening, the coastline comes alive with illuminated promenades, street food, and warm ocean winds.",
    bestTimeToVisit: "November to March",
    weather: "22°C - 29°C (Breezy winter evenings)",
    waterTemp: "23°C - 26°C",
    activities: ["Camel Rides", "Horse Rides", "Dune Buggy Cruising", "Sunset Promenade Walks"],
    amenities: ["Paved Sea View Promenade", "Street Food Stalls", "Ample Parking", "Night Illumination"],
    safetyTip: "Swim only in designated calm zones and avoid swimming deep during the monsoon months (June-August).",
    featured: true,
    galleryCategory: "sunset"
  },
  {
    id: "south-2",
    zone: "South",
    name: "Whitehaven Beach",
    location: "Whitsunday Island, Queensland",
    country: "Australia",
    image: "images/south/whitehaven.jpg",
    rating: 5.0,
    reviewsCount: 3420,
    shortDescription: "Seven kilometers of pure 98% silica sand swirling with luminous turquoise waters at Hill Inlet.",
    fullDescription: "Consistently voted among the top beaches globally, Whitehaven Beach sits at the heart of the Great Barrier Reef. Its pure silica sand does not retain heat, making it silky and cool to walk on even during hot summer days. The famous Hill Inlet creates an ever-shifting tapestry of blues and whites as the tide shifts.",
    bestTimeToVisit: "April to November",
    weather: "25°C - 30°C (Subtropical warmth)",
    waterTemp: "24°C - 27°C",
    activities: ["Scenic Flights", "Snorkeling", "Catamaran Cruises", "Hill Inlet Lookout Trek"],
    amenities: ["Eco Toilets", "Shaded Picnic Grounds", "National Park Ranger Stations"],
    safetyTip: "Stinger suits are recommended between November and May during marine jellyfish season.",
    featured: true,
    galleryCategory: "golden-sands"
  },
  {
    id: "south-3",
    zone: "South",
    name: "Baía do Sancho",
    location: "Fernando de Noronha",
    country: "Brazil",
    image: "images/south/baia-do-sancho.jpg",
    rating: 4.9,
    reviewsCount: 1980,
    shortDescription: "Protected paradise cove encircled by lush cliff greenery, crystalline emerald sea, and playing spinner dolphins.",
    fullDescription: "Tucked away in the Fernando de Noronha archipelago, Baía do Sancho is reached via rock stairs and ladders through narrow cliff crevices. Below lies a pristine bay boasting crystal-clear visibility up to 50 meters, vibrant coral life, sea turtles, and graceful rays swimming along the reef.",
    bestTimeToVisit: "August to December",
    weather: "27°C - 31°C (Tropical breeze)",
    waterTemp: "26°C - 28°C",
    activities: ["Scuba Diving", "Sea Turtle Snorkeling", "Dolphin Watching", "Cliff Treks"],
    amenities: ["Protected Marine Park Access", "Gear Rental Hub", "Information Point"],
    safetyTip: "Entry is scheduled by park authorities to protect the fragile cliff ecosystem.",
    featured: true,
    galleryCategory: "tropical"
  },
  {
    id: "south-4",
    zone: "South",
    name: "Anse Source d'Argent",
    location: "La Digue Island",
    country: "Seychelles",
    image: "images/south/anse-source.jpg",
    rating: 4.9,
    reviewsCount: 2740,
    shortDescription: "Spectacular pink-hued sands sheltered by sculpted ancient granite boulders and calm shallow coral lagoons.",
    fullDescription: "Known as one of the most photographed beaches on earth, Anse Source d'Argent features giant, smooth weathered granite boulders standing sentinel over calm shallow waters protected by an offshore coral reef. Coconut palms lean gently over warm sands populated by giant Aldabra tortoises.",
    bestTimeToVisit: "March to May & September to November",
    weather: "28°C - 32°C (Warm tropical)",
    waterTemp: "28°C",
    activities: ["Kayaking in Glass-Bottom Boats", "Snorkeling", "Bicycle Touring", "Fruit Shack Tasting"],
    amenities: ["Local Fruit Bars", "Vanille Plantation Trail", "Restrooms", "Bike Stands"],
    safetyTip: "Water is shallow and exceptionally calm, making it ideal for families and relaxed wading.",
    featured: true,
    galleryCategory: "islands"
  },
  {
    id: "south-5",
    zone: "South",
    name: "Camps Bay Beach",
    location: "Cape Town, Western Cape",
    country: "South Africa",
    image: "images/south/camps-bay.jpg",
    rating: 4.8,
    reviewsCount: 2400,
    shortDescription: "Glamorous white sand haven beneath the Twelve Apostles mountain range with vibrant sunset cafes.",
    fullDescription: "Camps Bay is Cape Town’s premier seaside enclave. With the dramatic peaks of the Twelve Apostles standing sentinel behind and the vast Atlantic unfolding ahead, this vibrant beach attracts sunseekers, volleyball players, and international travelers enjoying seaside promenades.",
    bestTimeToVisit: "December to March",
    weather: "24°C - 29°C (Mediterranean summer)",
    waterTemp: "14°C - 16°C",
    activities: ["Beach Volleyball", "Sunset Dining", "Surfing", "Tidal Pool Swimming"],
    amenities: ["Lifeguard Stations", "Promenade Cafés & Cocktails", "Showers", "Lounger Rentals"],
    safetyTip: "Atlantic water is refreshing but brisk; stay between the designated red-and-yellow flags.",
    featured: false,
    galleryCategory: "sunset"
  },
  {
    id: "south-6",
    zone: "South",
    name: "Bondi Beach",
    location: "Sydney, New South Wales",
    country: "Australia",
    image: "images/south/bondi.jpg",
    rating: 4.8,
    reviewsCount: 3800,
    shortDescription: "World-renowned golden sweep of sand celebrated for rolling surf breaks, coastal walks, and sunlit ocean pools.",
    fullDescription: "Bondi Beach is Australia's most legendary stretch of sand. Surrounded by sandstone headlands, Bondi offers world-class surfing, the dramatic Bondi to Bronte coastal cliff walk, and the famous Bondi Icebergs ocean pool where waves crash right over the swimming lanes.",
    bestTimeToVisit: "November to April",
    weather: "23°C - 28°C (Sunny southern summer)",
    waterTemp: "20°C - 24°C",
    activities: ["Surfing Lessons", "Bondi to Coogee Walk", "Ocean Pool Swimming", "Café Culture"],
    amenities: ["Surf Lifesaver Patrols", "Locker Rooms", "Beach Pavilion", "Skate Park"],
    safetyTip: "Always swim between the red and yellow flags where surf lifesavers monitor the water.",
    featured: false,
    galleryCategory: "golden-sands"
  },

  // EAST ZONE
  {
    id: "east-1",
    zone: "East",
    name: "Maya Bay & Phi Phi Leh",
    location: "Krabi Province",
    country: "Thailand",
    image: "images/east/maya-bay.jpg",
    rating: 4.9,
    reviewsCount: 4120,
    shortDescription: "Iconic emerald lagoon enclosed by 100-meter karst limestone cliffs and vibrant blacktip reef shark habitats.",
    fullDescription: "Famed worldwide as the cinematic paradise from 'The Beach', Maya Bay has undergone extensive ecological restoration. Now managed with strict conservation caps, the crystal waters have welcomed back dozens of baby blacktip reef sharks, lush marine plants, and sparkling powdery white sand.",
    bestTimeToVisit: "November to April",
    weather: "29°C - 33°C (Tropical sunshine)",
    waterTemp: "29°C",
    activities: ["Eco-Boardwalk Walks", "Reef Shark Watching", "Speedboat Excursions", "Photography"],
    amenities: ["Elevated Wooden Walkway", "Restrooms", "Eco Education Board", "Ranger Post"],
    safetyTip: "Swimming is strictly regulated in the bay to protect newly planted coral nurseries.",
    featured: true,
    galleryCategory: "tropical"
  },
  {
    id: "east-2",
    zone: "East",
    name: "Radhanagar Beach (Beach No. 7)",
    location: "Havelock Island, Andaman",
    country: "India",
    image: "images/east/radhanagar.jpg",
    rating: 4.9,
    reviewsCount: 2310,
    shortDescription: "Blue Flag certified haven with pristine gentle waves, dense rainforest borders, and magical glowing sunsets.",
    fullDescription: "Celebrated by TIME Magazine as one of Asia's finest beaches, Radhanagar Beach on Havelock Island (Swaraj Dweep) is an immaculate 2-kilometer stretch of silky pearl-white sand kissed by soothing turquoise waters. Dense native Mahua forests frame the coastline, providing natural shade and refreshing breezes.",
    bestTimeToVisit: "October to May",
    weather: "26°C - 31°C (Warm tropical)",
    waterTemp: "28°C",
    activities: ["Swimming", "Sunset Gazing", "Scuba Diving nearby", "Nature Walks"],
    amenities: ["Eco Huts", "Lifeguard Watches", "Clean Changing Rooms", "Fresh Coconut Stalls"],
    safetyTip: "Swimming is permitted only up to the safety buoy zone overseen by lifeguards.",
    featured: true,
    galleryCategory: "sunset"
  },
  {
    id: "east-3",
    zone: "East",
    name: "Boracay White Beach",
    location: "Aklan Province",
    country: "Philippines",
    image: "images/east/boracay.jpg",
    rating: 4.8,
    reviewsCount: 3890,
    shortDescription: "Four kilometers of flour-like powdery white sand, traditional paraw sailboats, and festive island life.",
    fullDescription: "Divided into Stations 1, 2, and 3, Boracay's White Beach delivers both serene luxury and spirited island joy. Its signature paraw sailboats glide across calm sunset waters while beachfront dining, live acoustic music, and world-class dive shops line the pedestrian-only palm boulevard.",
    bestTimeToVisit: "November to May",
    weather: "28°C - 32°C (Dry tropical)",
    waterTemp: "28°C",
    activities: ["Paraw Sunset Sailing", "Paddleboarding", "Parasailing", "Helmet Diving"],
    amenities: ["Boutique Resorts", "Water Sports Centers", "Beachfront Dining", "ATM Services"],
    safetyTip: "Strict environmental laws prohibit single-use plastics and smoking directly on the beach.",
    featured: true,
    galleryCategory: "tropical"
  },
  {
    id: "east-4",
    zone: "East",
    name: "Matira Beach",
    location: "Bora Bora, Society Islands",
    country: "French Polynesia",
    image: "images/east/matira.jpg",
    rating: 5.0,
    reviewsCount: 1780,
    shortDescription: "The crown jewel of French Polynesia with translucent lagoon shallows and overwater bungalow vistas.",
    fullDescription: "Matira Beach is the only public beach on Bora Bora's main island. The sand slopes gently into a warm, neon-turquoise lagoon that stays waist-deep for hundreds of yards out to the barrier reef, where rays and tropical fish play in natural aquariums.",
    bestTimeToVisit: "May to October",
    weather: "26°C - 30°C (Polynesian trade winds)",
    waterTemp: "27°C - 29°C",
    activities: ["Lagoon Snorkeling", "Ray & Shark Safaris", "Polynesian Canoeing", "Sunset Lounging"],
    amenities: ["Public Showers", "Boutique Snack Bars", "Shaded Coconut Palms", "Kayak Rentals"],
    safetyTip: "Apply coral-safe sunscreen to preserve the delicate lagoon coral gardens.",
    featured: false,
    galleryCategory: "islands"
  },
  {
    id: "east-5",
    zone: "East",
    name: "My Khe Beach",
    location: "Da Nang, Central Coast",
    country: "Vietnam",
    image: "images/east/my-khe.jpg",
    rating: 4.7,
    reviewsCount: 2150,
    shortDescription: "Sprawling white-sand coastline bordered by coconut palms and warm, gentle East Sea waves.",
    fullDescription: "Named by Forbes as one of the most attractive beaches on the planet, My Khe Beach stretches over 10 kilometers with soft white sand, coconut palm groves, and panoramic views of the Son Tra Peninsula and the Marble Mountains. It offers pleasant swimming, water scooters, and seaside seafood grills.",
    bestTimeToVisit: "April to September",
    weather: "27°C - 34°C (Sunny tropical)",
    waterTemp: "27°C - 29°C",
    activities: ["Surfing", "Jet Skiing", "Seafood Dining", "Morning Yoga"],
    amenities: ["Promenade Walkways", "Showers & Lockers", "Bicycle Rentals", "Lifeguards"],
    safetyTip: "Follow the flag indicators; green flags signify safe calm swimming zones.",
    featured: false,
    galleryCategory: "golden-sands"
  },
  {
    id: "east-6",
    zone: "East",
    name: "Cox's Bazar Sea Beach",
    location: "Chittagong Division",
    country: "Bangladesh",
    image: "images/east/coxs-bazar.jpg",
    rating: 4.6,
    reviewsCount: 3100,
    shortDescription: "The world's longest unbroken natural sandy sea beach stretching 120 uninterrupted kilometers along the Bay of Bengal.",
    fullDescription: "With an astonishing 120 kilometers of unbroken golden sand, Cox's Bazar is a world wonder of the Bay of Bengal coast. Golden dawn sunrises and flaming evening sunsets cast brilliant reflections along the endless surf line, surrounded by verdant hill tracts and fishing dhows.",
    bestTimeToVisit: "November to March",
    weather: "20°C - 27°C (Mild winter)",
    waterTemp: "24°C - 26°C",
    activities: ["Endless Beach Treks", "Surfing at Laboni Beach", "Seashell Craft Shopping", "Sunrise Watching"],
    amenities: ["Marine Drive Highway", "Beach Umbrellas & Loungers", "Resorts & Hotels"],
    safetyTip: "Be attentive to the undertow during outgoing tides; swim near lifeguard supervision posts.",
    featured: false,
    galleryCategory: "golden-sands"
  },

  // WEST ZONE
  {
    id: "west-1",
    zone: "West",
    name: "Navagio Beach (Shipwreck Cove)",
    location: "Zakynthos Island",
    country: "Greece",
    image: "images/west/navagio.jpg",
    rating: 4.9,
    reviewsCount: 4200,
    shortDescription: "Legendary Ionian bay featuring the weathered hull of the MV Panagiotis against sheer 200m limestone amphitheater.",
    fullDescription: "Enclosed by blindingly white limestone cliffs, Navagio Beach is accessible solely by boat. The contrast between electric cobalt water, pure white pebbles, and the rusted 1980 shipwreck resting in the center has cemented this spot as one of the Mediterranean's most spectacular coastal wonders.",
    bestTimeToVisit: "May to October",
    weather: "25°C - 32°C (Mediterranean sunshine)",
    waterTemp: "23°C - 26°C",
    activities: ["Boat Tours", "Blue Caves Excursions", "Cliff Viewpoint Trek", "Snorkeling"],
    amenities: ["Tour Boat Landings", "Panoramic Cliff Balcony", "Souvenir Stands at Lookout"],
    safetyTip: "Check sea conditions before boat departure as swells can prevent beach landings.",
    featured: true,
    galleryCategory: "adventure"
  },
  {
    id: "west-2",
    zone: "West",
    name: "Grace Bay Beach",
    location: "Providenciales",
    country: "Turks and Caicos",
    image: "images/west/grace-bay.jpg",
    rating: 5.0,
    reviewsCount: 3610,
    shortDescription: "Twelve miles of unblemished sugar sand, tranquil crystal surf, and a protective barrier reef system.",
    fullDescription: "Grace Bay is frequently ranked as the world's best beach due to its absence of rocks, seaweed, or pollution. A barrier reef a mile offshore keeps Atlantic swells at bay, leaving the coast calm and transparent like an immense swimming pool with rich marine life.",
    bestTimeToVisit: "December to April",
    weather: "27°C - 30°C (Trade wind breeze)",
    waterTemp: "26°C - 28°C",
    activities: ["Scuba Diving", "Stand-Up Paddleboarding", "Kite Surfing", "Sunset Catamaran"],
    amenities: ["Luxury Beach Loungers", "Water Sports Hire", "Fine Dining", "Restrooms"],
    safetyTip: "No motorized watercraft are permitted in the designated swimming safety zones.",
    featured: true,
    galleryCategory: "tropical"
  },
  {
    id: "west-3",
    zone: "West",
    name: "Praia da Marinha",
    location: "Algarve, Lagoa",
    country: "Portugal",
    image: "images/west/praia-marinha.jpg",
    rating: 4.9,
    reviewsCount: 2890,
    shortDescription: "Golden limestone cliffs, natural sea arches, hidden caves, and crystal clear Atlantic waters.",
    fullDescription: "Praia da Marinha is universally considered the emblem of Portugal's Algarve coast. Reached by a gentle cliff staircase, the beach offers natural arches shaped by centuries of wave action, hidden sea caves, and calm, transparent waters ideal for snorkeling among seabream and octopuses.",
    bestTimeToVisit: "June to September",
    weather: "24°C - 29°C (Atlantic Mediterranean)",
    waterTemp: "20°C - 22°C",
    activities: ["Sea Cave Kayaking", "Snorkeling", "Seven Hanging Valleys Hike", "Photography"],
    amenities: ["Clifftop Parking", "Beachside Bistro", "Rental Parasols", "Restrooms"],
    safetyTip: "Avoid setting towels directly beneath towering sandstone overhangs due to loose shale.",
    featured: true,
    galleryCategory: "golden-sands"
  },
  {
    id: "west-4",
    zone: "West",
    name: "Tulum Beach & Mayan Ruins",
    location: "Riviera Maya, Quintana Roo",
    country: "Mexico",
    image: "images/west/tulum.jpg",
    rating: 4.8,
    reviewsCount: 3150,
    shortDescription: "Ancient 13th-century Mayan fortress perched directly above white Caribbean sands and turquoise waters.",
    fullDescription: "Where ancient Mesoamerican history merges with Caribbean paradise. Tulum's cliffside El Castillo overlooks white sands and turquoise waters. Bohemian eco-chic cabanas, cenote diving excursions, and gentle sea breezes make this a premier destination on Mexico's Yucatan Peninsula.",
    bestTimeToVisit: "November to April",
    weather: "26°C - 31°C (Warm Caribbean)",
    waterTemp: "27°C - 28°C",
    activities: ["Mayan Archaeological Tours", "Cenote Diving", "Yoga on the Sand", "Biking"],
    amenities: ["Eco Boutiques", "Beach Clubs", "Shaded Hammocks", "Bicycle Rentals"],
    safetyTip: "Bring biodegradable sunscreen to protect the Mesoamerican Barrier Reef.",
    featured: false,
    galleryCategory: "tropical"
  },
  {
    id: "west-5",
    zone: "West",
    name: "Pfeiffer Beach",
    location: "Big Sur, California",
    country: "United States",
    image: "images/west/pfeiffer.jpg",
    rating: 4.8,
    reviewsCount: 2040,
    shortDescription: "Enchanting western Pacific cove famed for purple manganese garnet sands and Keyhole Rock archway.",
    fullDescription: "Tucked away off California's scenic Highway 1 in Big Sur, Pfeiffer Beach is renowned for its distinctive purple-tinted sand created by manganese garnet crystals washing down from hillside cliffs. Its massive offshore Keyhole Rock frames blinding rays of golden sunset light during winter solstices.",
    bestTimeToVisit: "September to November",
    weather: "18°C - 25°C (Crisp coastal sunshine)",
    waterTemp: "13°C - 15°C",
    activities: ["Keyhole Rock Photography", "Beachcombing", "Sunset Watching", "Picnics"],
    amenities: ["Day-use Parking", "Restroom Facilities", "Footpath to Shore"],
    safetyTip: "Strong undertows make swimming hazardous; wading and photography are the primary activities.",
    featured: false,
    galleryCategory: "sunset"
  },
  {
    id: "west-6",
    zone: "West",
    name: "Seven Mile Beach",
    location: "Grand Cayman",
    country: "Cayman Islands",
    image: "images/west/seven-mile.jpg",
    rating: 4.9,
    reviewsCount: 2720,
    shortDescription: "Crescent-shaped corridor of coral-sand beaches renowned for crystalline calm shallows and stingray coves.",
    fullDescription: "Seven Mile Beach is the crown jewel of the western Caribbean. Its coral-sand shoreline slopes into calm, gin-clear water ideal for paddleboarding, parasailing, and swimming with gentle southern stingrays at nearby sandbars.",
    bestTimeToVisit: "December to April",
    weather: "26°C - 30°C (Warm Caribbean breeze)",
    waterTemp: "27°C - 29°C",
    activities: ["Stingray City Excursions", "Stand-Up Paddleboarding", "Snorkeling Cemetery Reef", "Sunset Walks"],
    amenities: ["Beachfront Resorts", "Public Beach Park", "Restrooms & Showers", "Watersport Rentals"],
    safetyTip: "All shorelines are publicly accessible up to the high-water mark.",
    featured: false,
    galleryCategory: "islands"
  }
];

// Gallery specific items with categories
const GALLERY_ITEMS = [
  { title: "Evening Crowds on the Shore", location: "Cox's Bazar, Bangladesh", category: "golden-sands", img: "images/gallery/g01.jpg" },
  { title: "Blue Hour Surf & Wet Sands", location: "Bay of Bengal Coast", category: "adventure", img: "images/gallery/g02.jpg" },
  { title: "Fishing Boat at Sunset", location: "Karnataka Coast, India", category: "sunset", img: "images/gallery/g03.jpg" },
  { title: "Aerial Turquoise Shallows", location: "Coastal Aerial View", category: "tropical", img: "images/gallery/g04.jpg" },
  { title: "Footprints on Golden Sands", location: "Sunlit Shoreline", category: "golden-sands", img: "images/gallery/g05.jpg" },
  { title: "Storm Light over the Sea", location: "Atlantic Coastline", category: "adventure", img: "images/gallery/g06.jpg" },
  { title: "Palm Shade Paradise", location: "Tropical Island Shore", category: "islands", img: "images/gallery/g07.jpg" },
  { title: "Orange Horizon Glow", location: "Sunset Shoreline", category: "sunset", img: "images/gallery/g08.jpg" },
  { title: "Camel Rides at Clifton Sunset", location: "Karachi, Pakistan", category: "sunset", img: "images/gallery/g09.jpg" },
  { title: "Seaside Gazebo at Dusk", location: "Coastal Promenade", category: "golden-sands", img: "images/gallery/g10.jpg" },
  { title: "Promenade After Sunset", location: "Coastal Promenade", category: "sunset", img: "images/gallery/g11.jpg" },
  { title: "Golden Hour over the Net Fence", location: "Sunlit Shoreline", category: "sunset", img: "images/gallery/g12.jpg" },
  { title: "Manora Lighthouse Glow", location: "Karachi, Pakistan", category: "golden-sands", img: "images/gallery/g13.jpg" },
  { title: "Seafront Lounge Seating", location: "Seaside Retreat", category: "tropical", img: "images/gallery/g14.jpg" },
  { title: "Red Roofs by the Sea", location: "Seaside Town", category: "islands", img: "images/gallery/g15.jpg" },
  { title: "Sun Reflections on the Waves", location: "Golden Shoreline", category: "sunset", img: "images/gallery/g16.jpg" },
  { title: "Purple Palm Sunset", location: "Tropical Coast", category: "tropical", img: "images/gallery/g17.jpg" }
];

// Verified Community Reviews
const COMMUNITY_REVIEWS = [
  {
    name: "Tariq Mansoor",
    location: "Karachi, Pakistan",
    beach: "Manora Beach",
    rating: 5,
    comment: "The renovated Manora promenade and lighthouse view at sunset is breathtaking. Watching boats return while enjoying coastal breeze was truly special.",
    initial: "T"
  },
  {
    name: "Elena Rostova",
    location: "Oslo, Norway",
    beach: "Reynisfjara Beach",
    rating: 5,
    comment: "The sheer contrast of black volcanic sand against the frothing Atlantic and basalt columns feels otherworldly. Unforgettable Northern experience!",
    initial: "E"
  },
  {
    name: "Marcus Vance",
    location: "Melbourne, Australia",
    beach: "Whitehaven Beach",
    rating: 5,
    comment: "Hill Inlet's swirling silica sand is the purest beach I have ever witnessed. The sand was cool even under blazing midday sun.",
    initial: "M"
  },
  {
    name: "Sophia Delgado",
    location: "Barcelona, Spain",
    beach: "Navagio Beach",
    rating: 5,
    comment: "Standing on the cliff viewpoint overlooking Shipwreck Cove took my breath away. The cobalt Ionian waters look painted.",
    initial: "S"
  }
];

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", function () {
  initNavbarHighlight();
  initBackToTop();
  initDestinationGrids();
  initGallery();
  initLightbox();
  initQueriesSearch();
  initFeedbackForm();
  initContactForm();
  initNewsletterForm();
  initModalTriggers();
  initGeolocationMap();
});

// 1. Highlight Active Nav Link based on URL
function initNavbarHighlight() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && (currentPath.endsWith(href) || (currentPath === "/" && href === "index.html"))) {
      link.classList.add("active");
    } else if (currentPath.includes(href) && href !== "index.html") {
      link.classList.add("active");
    }
  });

  // Sticky Navbar border change on scroll
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".bob-navbar");
    if (nav) {
      if (window.scrollY > 40) {
        nav.classList.add("shadow-sm");
        nav.style.backgroundColor = "rgba(255, 248, 239, 0.98)";
      } else {
        nav.classList.remove("shadow-sm");
        nav.style.backgroundColor = "rgba(255, 248, 239, 0.94)";
      }
    }
  });
}

// 2. Back To Top Button
function initBackToTop() {
  const btn = document.getElementById("back-to-top-btn");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Helper: Generate Beach Card HTML
function renderBeachCard(beach) {
  const zoneColors = {
    North: "text-terracotta",
    South: "text-coral",
    East: "text-terracotta",
    West: "text-coral"
  };

  const zonePages = {
    North: "north-beaches.html",
    South: "south-beaches.html",
    East: "east-beaches.html",
    West: "west-beaches.html"
  };

  const activitiesHtml = beach.activities
    ? beach.activities.slice(0, 3).map((act) => `<span class="activity-tag"><i class="fa-solid fa-umbrella-beach me-1"></i>${act}</span>`).join("")
    : "";

  return `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="beach-card">
        <div class="beach-card-img-wrap">
          <img src="${beach.image}" alt="${beach.name}" class="beach-card-img">
          <span class="beach-zone-badge"><i class="fa-solid fa-compass me-1"></i>${beach.zone} Coast</span>
          <span class="beach-rating-badge">
            <i class="fa-solid fa-star text-warning"></i> ${beach.rating}
          </span>
        </div>
        <div class="beach-card-body">
          <div class="beach-location">
            <i class="fa-solid fa-location-dot"></i> ${beach.location}, ${beach.country}
          </div>
          <h4 class="beach-card-title">${beach.name}</h4>
          <p class="beach-card-desc">${beach.shortDescription}</p>
          <div class="beach-activities-tags">
            ${activitiesHtml}
          </div>
          <div class="beach-card-footer">
            <div class="beach-best-time">
              Best Season: <strong>${beach.bestTimeToVisit || 'All Year'}</strong>
            </div>
            <button class="btn btn-sm btn-coral-primary px-3 rounded-pill btn-view-details" data-id="${beach.id}">
              Details <i class="fa-solid fa-arrow-right ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 3. Render Destination Grids on Zone Pages & Home Page
function initDestinationGrids() {
  // Home Featured Grid
  const homeFeaturedGrid = document.getElementById("featured-beaches-grid");
  if (homeFeaturedGrid) {
    const featured = BEACH_DATABASE.filter((b) => b.featured);
    homeFeaturedGrid.innerHTML = featured.map(renderBeachCard).join("");
  }

  // Zone specific containers
  const zoneContainers = [
    { id: "north-beaches-grid", zone: "North" },
    { id: "south-beaches-grid", zone: "South" },
    { id: "east-beaches-grid", zone: "East" },
    { id: "west-beaches-grid", zone: "West" }
  ];

  zoneContainers.forEach(({ id, zone }) => {
    const container = document.getElementById(id);
    if (container) {
      const zoneBeaches = BEACH_DATABASE.filter((b) => b.zone === zone);
      container.innerHTML = zoneBeaches.map(renderBeachCard).join("");
    }
  });

  // Attach Detail Modal Trigger
  document.addEventListener("click", function (e) {
    const btn = e.target.closest(".btn-view-details");
    if (btn) {
      const beachId = btn.getAttribute("data-id");
      showBeachDetailsModal(beachId);
    }
  });
}

// Show Beach Detail Modal
function showBeachDetailsModal(id) {
  const beach = BEACH_DATABASE.find((b) => b.id === id);
  if (!beach) return;

  const modalEl = document.getElementById("beachDetailModal");
  if (!modalEl) return;

  document.getElementById("modalBeachTitle").textContent = beach.name;
  document.getElementById("modalBeachLocation").innerHTML = `<i class="fa-solid fa-location-dot text-terracotta me-1"></i> ${beach.location}, ${beach.country}`;
  document.getElementById("modalBeachImg").src = beach.image;
  document.getElementById("modalBeachDesc").textContent = beach.fullDescription || beach.shortDescription;
  document.getElementById("modalBeachBestTime").textContent = beach.bestTimeToVisit || "Year Round";
  document.getElementById("modalBeachWeather").textContent = beach.weather || "Pleasant Tropical Coastal";
  document.getElementById("modalBeachWater").textContent = beach.waterTemp || "Warm Coastal Waters";
  document.getElementById("modalBeachSafety").textContent = beach.safetyTip || "Always adhere to local beach flags.";

  // Activities
  const actList = document.getElementById("modalBeachActivities");
  if (actList) {
    actList.innerHTML = (beach.activities || []).map((a) => `<span class="activity-tag"><i class="fa-solid fa-check text-coral me-1"></i>${a}</span>`).join(" ");
  }

  // Amenities
  const amenList = document.getElementById("modalBeachAmenities");
  if (amenList) {
    amenList.innerHTML = (beach.amenities || []).map((m) => `<li class="small text-muted"><i class="fa-solid fa-circle-check text-coral me-2"></i>${m}</li>`).join("");
  }

  // Show Bootstrap modal
  if (window.bootstrap && bootstrap.Modal) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}

// 4. Gallery Category Filter
function initGallery() {
  const galleryGrid = document.getElementById("gallery-items-grid");
  if (!galleryGrid) return;

  // Initial render of all items
  renderGallery(GALLERY_ITEMS);

  // Filter Buttons
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");
      if (filter === "all") {
        renderGallery(GALLERY_ITEMS);
      } else {
        const filtered = GALLERY_ITEMS.filter((item) => item.category === filter);
        renderGallery(filtered);
      }
    });
  });
}

function renderGallery(items) {
  const grid = document.getElementById("gallery-items-grid");
  if (!grid) return;

  grid.innerHTML = items
    .map(
      (item, idx) => `
    <div class="col-12 col-sm-6 col-lg-4 mb-4">
      <div class="gallery-item" data-index="${idx}" data-img="${item.img}" data-title="${item.title}" data-loc="${item.location}">
        <img src="${item.img}" alt="${item.title}">
        <div class="gallery-item-overlay">
          <span class="gallery-item-badge">${item.category.replace("-", " ")}</span>
          <h5 class="gallery-item-title">${item.title}</h5>
          <div class="gallery-item-loc"><i class="fa-solid fa-location-dot me-1"></i>${item.location}</div>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// 5. Interactive Lightbox
let currentLightboxIndex = 0;
let currentLightboxList = [];

function initLightbox() {
  const lightbox = document.getElementById("bob-lightbox");
  if (!lightbox) return;

  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  // Open Lightbox on Gallery Item Click
  document.addEventListener("click", function (e) {
    const item = e.target.closest(".gallery-item");
    if (item) {
      const items = Array.from(document.querySelectorAll(".gallery-item"));
      currentLightboxList = items.map((el) => ({
        img: el.getAttribute("data-img"),
        title: el.getAttribute("data-title"),
        loc: el.getAttribute("data-loc")
      }));
      currentLightboxIndex = items.indexOf(item);
      openLightbox();
    }
  });

  function openLightbox() {
    if (!currentLightboxList[currentLightboxIndex]) return;
    const data = currentLightboxList[currentLightboxIndex];
    document.getElementById("lightbox-img").src = data.img;
    document.getElementById("lightbox-title").textContent = data.title;
    document.getElementById("lightbox-loc").textContent = data.loc;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
    openLightbox();
  }

  function prevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
    openLightbox();
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", nextImage);
  if (prevBtn) prevBtn.addEventListener("click", prevImage);

  // Click outside backdrop to close
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  window.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });
}

// 6. FAQ / Queries Search Filter
function initQueriesSearch() {
  const searchInput = document.getElementById("faq-search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", function () {
    const term = this.value.toLowerCase().trim();
    const accordionItems = document.querySelectorAll("#queriesAccordion .accordion-item");

    accordionItems.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (text.includes(term)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });

  // Custom User Query Form
  const queryForm = document.getElementById("user-query-form");
  if (queryForm) {
    queryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const question = document.getElementById("user-question").value.trim();
      const email = document.getElementById("user-email").value.trim();
      const feedbackBox = document.getElementById("query-response-alert");

      if (!question) return;

      if (feedbackBox) {
        feedbackBox.classList.remove("d-none");
        feedbackBox.innerHTML = `
          <div class="alert alert-success border-0 shadow-sm rounded-4 p-3 mb-0">
            <h6 class="fw-bold mb-1"><i class="fa-solid fa-circle-check me-2"></i>Query Recorded Locally</h6>
            <p class="small mb-1">Thank you! Your travel question: <em>"${question}"</em> has been processed in your current browser session.</p>
            <p class="small mb-0 text-muted">A response copy will be shown here. (Note: No server backend is connected).</p>
          </div>
        `;
      }
      queryForm.reset();
    });
  }
}

// 7. Interactive Feedback Form (Stars, Validation, Local Display)
function initFeedbackForm() {
  const starContainer = document.getElementById("star-rating-selector");
  let selectedRating = 5;

  if (starContainer) {
    const stars = starContainer.querySelectorAll("i");

    stars.forEach((star) => {
      star.addEventListener("mouseenter", function () {
        const rating = parseInt(this.getAttribute("data-rating"), 10);
        highlightStars(rating);
      });

      star.addEventListener("mouseleave", function () {
        highlightStars(selectedRating);
      });

      star.addEventListener("click", function () {
        selectedRating = parseInt(this.getAttribute("data-rating"), 10);
        highlightStars(selectedRating);
        const ratingLabel = document.getElementById("rating-text-label");
        const ratingTexts = [
          "",
          "1 Star - Poor Experience",
          "2 Stars - Below Average",
          "3 Stars - Good & Relaxing",
          "4 Stars - Very Good Beach",
          "5 Stars - Absolute Coastal Paradise!"
        ];
        if (ratingLabel) {
          ratingLabel.textContent = ratingTexts[selectedRating];
        }
      });
    });

    function highlightStars(rating) {
      stars.forEach((s) => {
        const r = parseInt(s.getAttribute("data-rating"), 10);
        if (r <= rating) {
          s.classList.add("active");
        } else {
          s.classList.remove("active");
        }
      });
    }

    highlightStars(selectedRating);
  }

  // Populate Destination Select Options
  const destSelect = document.getElementById("feedback-destination");
  if (destSelect) {
    BEACH_DATABASE.forEach((beach) => {
      const opt = document.createElement("option");
      opt.value = beach.name;
      opt.textContent = `${beach.name} (${beach.country})`;
      destSelect.appendChild(opt);
    });
  }

  // Populate Community Reviews Showcase
  const reviewsGrid = document.getElementById("community-reviews-grid");
  if (reviewsGrid) {
    reviewsGrid.innerHTML = COMMUNITY_REVIEWS.map(renderReviewCard).join("");
  }

  // Submit Feedback Handling
  const feedbackForm = document.getElementById("feedback-submission-form");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("feedback-name").value.trim();
      const email = document.getElementById("feedback-email").value.trim();
      const dest = document.getElementById("feedback-destination").value;
      const category = document.getElementById("feedback-category").value;
      const comment = document.getElementById("feedback-comment").value.trim();
      const alertBox = document.getElementById("feedback-alert-box");

      if (!name || !email || !comment) {
        if (alertBox) {
          alertBox.classList.remove("d-none");
          alertBox.className = "alert alert-danger rounded-4 shadow-sm mb-3";
          alertBox.innerHTML = `<i class="fa-solid fa-triangle-exclamation me-2"></i>Please fill in all required fields.`;
        }
        return;
      }

      // Prepend to community reviews in memory
      const newReview = {
        name: name,
        location: "Guest Traveler",
        beach: dest,
        rating: selectedRating,
        comment: comment,
        initial: name.charAt(0).toUpperCase()
      };

      if (reviewsGrid) {
        const newCardHtml = renderReviewCard(newReview);
        reviewsGrid.insertAdjacentHTML("afterbegin", newCardHtml);
      }

      if (alertBox) {
        alertBox.classList.remove("d-none");
        alertBox.className = "alert alert-success rounded-4 shadow-sm mb-3";
        alertBox.innerHTML = `
          <h6 class="fw-bold mb-1"><i class="fa-solid fa-circle-check me-2"></i>Thank you, ${name}!</h6>
          <p class="small mb-0">Your ${selectedRating}-star feedback for <strong>${dest}</strong> has been validated and added below for this session. (Submissions are processed locally in your browser).</p>
        `;
      }

      feedbackForm.reset();
      selectedRating = 5;
    });
  }
}

function renderReviewCard(rev) {
  let starsHtml = "";
  for (let i = 1; i <= 5; i++) {
    starsHtml += `<i class="fa-solid fa-star ${i <= rev.rating ? "text-warning" : "text-muted"}"></i> `;
  }

  return `
    <div class="col-12 col-md-6 col-lg-3 mb-4">
      <div class="review-card">
        <div>
          <div class="review-stars">${starsHtml}</div>
          <div class="badge bg-soft-peach text-terracotta mb-2 px-2 py-1 small fw-bold">
            <i class="fa-solid fa-water me-1"></i>${rev.beach}
          </div>
          <p class="review-comment">"${rev.comment}"</p>
        </div>
        <div class="review-author">
          <div class="review-avatar">${rev.initial}</div>
          <div>
            <div class="review-author-name">${rev.name}</div>
            <div class="review-author-loc">${rev.location}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 8. Contact Form Handling
function initContactForm() {
  const contactForm = document.getElementById("contact-main-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();
    const alertBox = document.getElementById("contact-alert-box");

    if (!name || !email || !subject || !message) {
      if (alertBox) {
        alertBox.classList.remove("d-none");
        alertBox.className = "alert alert-danger rounded-4 shadow-sm mb-3";
        alertBox.innerHTML = `<i class="fa-solid fa-triangle-exclamation me-2"></i>Please complete all fields before sending.`;
      }
      return;
    }

    if (alertBox) {
      alertBox.classList.remove("d-none");
      alertBox.className = "alert alert-success rounded-4 shadow-sm mb-3";
      alertBox.innerHTML = `
        <h6 class="fw-bold mb-1"><i class="fa-solid fa-circle-check me-2"></i>Dispatch Validated!</h6>
        <p class="small mb-0">Greetings ${name}, your inquiry regarding <em>"${subject}"</em> has been verified on your browser. <em>(Notice: Sample details only; no backend server transmission occurred)</em>.</p>
      `;
    }

    contactForm.reset();
  });
}

// 9. Newsletter Form
function initNewsletterForm() {
  const forms = document.querySelectorAll(".newsletter-form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = this.querySelector("input[type='email']");
      if (input && input.value) {
        alert(`Thank you for subscribing to BeautyOfBeaches coastal dispatches! (${input.value})`);
        input.value = "";
      }
    });
  });
}

// 10. Bootstrap Modal Triggers (ensure smooth initialization)
function initModalTriggers() {
  // Check if modal exists
  const modal = document.getElementById("beachDetailModal");
  if (modal && window.bootstrap) {
    // Ready
  }
}

// 11. Live Geolocation & Interactive Coastal Leaflet Map
function initGeolocationMap() {
  const mapContainer = document.getElementById("coastal-leaflet-map");
  if (!mapContainer || typeof window.L === "undefined") return;

  const BEACH_COORDS = {
    "north-1": { lat: 24.795, lng: 66.975 }, // Manora Beach, Karachi
    "north-2": { lat: 63.404, lng: -19.049 }, // Reynisfjara, Iceland
    "north-3": { lat: 45.891, lng: -123.961 }, // Cannon Beach, Oregon
    "north-4": { lat: 68.075, lng: 13.102 }, // Kvalvika, Norway
    "north-5": { lat: 55.240, lng: -6.511 }, // Giant's Causeway, N. Ireland
    "north-6": { lat: 47.709, lng: -124.414 }, // Ruby Beach, Washington
    "south-1": { lat: 24.814, lng: 67.031 }, // Clifton Beach, Karachi
    "south-2": { lat: -20.282, lng: 149.039 }, // Whitehaven Beach, Australia
    "south-3": { lat: -3.855, lng: -32.443 }, // Baía do Sancho, Brazil
    "south-4": { lat: -4.371, lng: 55.827 }, // Anse Source d'Argent, Seychelles
    "south-5": { lat: -33.951, lng: 18.377 }, // Camps Bay, South Africa
    "south-6": { lat: -33.891, lng: 151.274 }, // Bondi Beach, Australia
    "east-1": { lat: 7.676, lng: 98.766 }, // Maya Bay, Thailand
    "east-2": { lat: 11.984, lng: 92.951 }, // Radhanagar, Andaman
    "east-3": { lat: 11.967, lng: 121.924 }, // Boracay, Philippines
    "east-4": { lat: -16.536, lng: -151.741 }, // Matira, Bora Bora
    "east-5": { lat: 16.059, lng: 108.246 }, // My Khe, Da Nang, Vietnam
    "east-6": { lat: 21.427, lng: 91.978 }, // Cox's Bazar, Bangladesh
    "west-1": { lat: 37.859, lng: 20.624 }, // Navagio, Greece
    "west-2": { lat: 21.796, lng: -72.178 }, // Grace Bay, Turks & Caicos
    "west-3": { lat: 37.089, lng: -8.412 }, // Praia da Marinha, Portugal
    "west-4": { lat: 20.215, lng: -87.429 }, // Tulum, Mexico
    "west-5": { lat: 36.238, lng: -121.815 }, // Pfeiffer Beach, California
    "west-6": { lat: 19.333, lng: -81.383 } // Seven Mile Beach, Grand Cayman
  };

  // Initialize Map
  const map = L.map("coastal-leaflet-map", {
    scrollWheelZoom: false
  }).setView([20, 20], 2);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // Custom Coral Beach Marker Icon
  const coralIcon = L.divIcon({
    className: "custom-coral-pin",
    html: `<div style="background: linear-gradient(135deg, #FF6B4A, #B94E35); width: 26px; height: 26px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 2px solid #FFFFFF; box-shadow: 0 4px 10px rgba(185,78,53,0.4); display: flex; align-items: center; justify-content: center;"><i class="fa-solid fa-umbrella-beach" style="transform: rotate(45deg); font-size: 11px; color: #FFF;"></i></div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 26],
    popupAnchor: [0, -26]
  });

  // Plot All 24 Beaches
  BEACH_DATABASE.forEach((beach) => {
    const coords = BEACH_COORDS[beach.id];
    if (coords) {
      const marker = L.marker([coords.lat, coords.lng], { icon: coralIcon }).addTo(map);
      marker.bindPopup(`
        <div style="font-family: 'DM Sans', sans-serif; min-width: 200px;">
          <img src="${beach.image}" alt="${beach.name}" style="width: 100%; height: 95px; object-fit: cover; border-radius: 8px; margin-bottom: 6px;">
          <strong style="font-size: 14px; color: #382820; display: block;">${beach.name}</strong>
          <small style="color: #B94E35; font-weight: 600;"><i class="fa-solid fa-location-dot me-1"></i>${beach.location}, ${beach.country}</small>
          <div style="font-size: 11px; color: #685348; margin-top: 4px;">Zone: <strong>${beach.zone} Coast</strong> &middot; Rating: ⭐ ${beach.rating}</div>
        </div>
      `);
    }
  });

  // Haversine Distance Formula (km)
  function calcDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  // Geolocation Button Click
  const geoBtn = document.getElementById("btn-get-geolocation");
  if (!geoBtn) return;

  let userMarker = null;
  let connectionLine = null;

  geoBtn.addEventListener("click", function () {
    const statusText = document.getElementById("geo-status-text");
    const coordsDisplay = document.getElementById("geo-coords-display");

    if (!navigator.geolocation) {
      if (statusText) statusText.innerHTML = `<span class="text-danger"><i class="fa-solid fa-xmark me-1"></i> Geolocation is not supported by your browser.</span>`;
      return;
    }

    if (statusText) statusText.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-coral me-1"></i> Requesting permission and retrieving coordinates...`;

    navigator.geolocation.getCurrentPosition(
      function (pos) {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;

        // Find Closest Beach
        let closestBeach = null;
        let minDistance = Infinity;

        BEACH_DATABASE.forEach((beach) => {
          const coords = BEACH_COORDS[beach.id];
          if (coords) {
            const dist = calcDistance(userLat, userLng, coords.lat, coords.lng);
            if (dist < minDistance) {
              minDistance = dist;
              closestBeach = { ...beach, coords, dist };
            }
          }
        });

        // Update UI Text
        if (statusText) statusText.innerHTML = `<span class="text-success"><i class="fa-solid fa-circle-check me-1"></i> Location identified successfully!</span>`;
        if (coordsDisplay) coordsDisplay.classList.remove("d-none");

        const latEl = document.getElementById("geo-lat-val");
        const lngEl = document.getElementById("geo-lng-val");
        const nameEl = document.getElementById("geo-nearest-name");
        const distEl = document.getElementById("geo-nearest-dist");

        if (latEl) latEl.textContent = userLat.toFixed(4) + "°";
        if (lngEl) lngEl.textContent = userLng.toFixed(4) + "°";
        if (nameEl && closestBeach) nameEl.textContent = `${closestBeach.name} (${closestBeach.country})`;
        if (distEl && closestBeach) {
          const km = Math.round(minDistance).toLocaleString();
          const miles = Math.round(minDistance * 0.621371).toLocaleString();
          distEl.textContent = `${km} km (${miles} miles)`;
        }

        // Auto-fill contact form subject if empty
        const subjectField = document.getElementById("contact-subject");
        if (subjectField && closestBeach) {
          subjectField.value = `Travel inquiry regarding nearest coast: ${closestBeach.name} (${closestBeach.country})`;
        }

        // Plot User Marker
        if (userMarker) map.removeLayer(userMarker);
        if (connectionLine) map.removeLayer(connectionLine);

        const userPin = L.divIcon({
          className: "user-location-pin",
          html: `<div style="background: #2563EB; width: 22px; height: 22px; border-radius: 50%; border: 3px solid #FFFFFF; box-shadow: 0 0 14px rgba(37,99,235,0.7); animation: pulse 2s infinite;"></div>`,
          iconSize: [22, 22],
          iconAnchor: [11, 11]
        });

        userMarker = L.marker([userLat, userLng], { icon: userPin }).addTo(map);
        userMarker
          .bindPopup(
            `<strong style="color: #2563EB;">📍 You Are Here</strong><br><small>Lat: ${userLat.toFixed(3)}, Lng: ${userLng.toFixed(3)}</small>`
          )
          .openPopup();

        // Draw Line between User and Nearest Beach
        if (closestBeach) {
          connectionLine = L.polyline(
            [
              [userLat, userLng],
              [closestBeach.coords.lat, closestBeach.coords.lng]
            ],
            {
              color: "#FF6B4A",
              weight: 3,
              dashArray: "6, 8",
              opacity: 0.85
            }
          ).addTo(map);

          // Fly Map to Frame both points
          const bounds = L.latLngBounds([
            [userLat, userLng],
            [closestBeach.coords.lat, closestBeach.coords.lng]
          ]);
          map.fitBounds(bounds, { padding: [50, 50], maxZoom: 8 });
        }
      },
      function (err) {
        if (statusText) {
          statusText.innerHTML = `<span class="text-warning"><i class="fa-solid fa-triangle-exclamation me-1"></i> Location access not granted (${err.message || "Permission denied"}). Showing global map.</span>`;
        }
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });
}


/* Image safety net: if any image fails to load, show a clean placeholder instead of a broken icon */
document.addEventListener('error', function (e) {
  var img = e.target;
  if (!img || img.tagName !== 'IMG' || img.dataset.fallbackDone) return;
  img.dataset.fallbackDone = '1';
  var label = (img.alt || 'Beach').replace(/[<>&"]/g, '');
  img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2EC4B6"/><stop offset="1" stop-color="#0B3C5D"/></linearGradient></defs>' +
    '<rect width="800" height="600" fill="url(#g)"/><circle cx="600" cy="180" r="60" fill="#FFD27A"/>' +
    '<text x="400" y="330" text-anchor="middle" font-family="Arial,sans-serif" font-size="34" fill="#fff">' + label + '</text></svg>'
  );
}, true);
