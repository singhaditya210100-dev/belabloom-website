export type Region = 'Mumbai Suburbs' | 'Western Suburbs' | 'Central Mumbai' | 'Navi Mumbai' | 'Thane District' | 'Vasai-Virar' | 'Beyond MMR';

export interface Location {
  slug: string;
  name: string;
  region: Region;
  description: string;
  landmark: string;
  pin: string;
}

export const locations: Location[] = [
  // Central Mumbai
  { slug: 'bandra', name: 'Bandra', region: 'Central Mumbai', description: 'Serving premium residential societies, corporate offices, and commercial establishments across Bandra West and Bandra East.', landmark: 'Bandra-Worli Sea Link', pin: '400050' },
  { slug: 'dadar', name: 'Dadar', region: 'Central Mumbai', description: 'Comprehensive facility management for residential towers, retail spaces, and commercial hubs in the heart of Mumbai.', landmark: 'Dadar Chowk', pin: '400014' },
  { slug: 'worli', name: 'Worli', region: 'Central Mumbai', description: 'Trusted by luxury residences and corporate campuses in Worli for pest control, housekeeping, and integrated facility services.', landmark: 'Worli Sea Face', pin: '400018' },
  { slug: 'chembur', name: 'Chembur', region: 'Central Mumbai', description: 'Reliable facility management services for housing societies, IT parks, and commercial complexes across Chembur.', landmark: 'RCF Colony', pin: '400071' },
  { slug: 'powai', name: 'Powai', region: 'Central Mumbai', description: 'Specialized facility management for Powai\'s vibrant tech parks, lakeside residences, and retail malls.', landmark: 'Powai Lake', pin: '400076' },

  // Western Suburbs
  { slug: 'andheri', name: 'Andheri', region: 'Western Suburbs', description: 'Full-spectrum facility management for Andheri\'s commercial corridors, residential societies, and entertainment hubs.', landmark: 'SEEPZ & MIDC', pin: '400058' },
  { slug: 'borivali', name: 'Borivali', region: 'Western Suburbs', description: 'Serving housing societies, schools, hospitals, and commercial spaces across Borivali East and West.', landmark: 'Sanjay Gandhi National Park', pin: '400066' },
  { slug: 'malad', name: 'Malad', region: 'Western Suburbs', description: 'Expert pest control and housekeeping services for Malad\'s growing IT hubs, malls, and residential towers.', landmark: 'Inorbit Mall', pin: '400064' },
  { slug: 'kandivali', name: 'Kandivali', region: 'Western Suburbs', description: 'Trusted facility management partner for housing societies, schools, and corporate offices in Kandivali.', landmark: 'Thakur Village', pin: '400067' },
  { slug: 'goregaon', name: 'Goregaon', region: 'Western Suburbs', description: 'Professional services for Film City studios, residential townships, and commercial offices across Goregaon.', landmark: 'Film City', pin: '400063' },
  { slug: 'santacruz', name: 'Santacruz', region: 'Western Suburbs', description: 'Quality facility management for residential societies, hotels, and SMEs across Santacruz East and West.', landmark: 'Chhatrapati Shivaji Airport', pin: '400054' },
  { slug: 'vile-parle', name: 'Vile Parle', region: 'Western Suburbs', description: 'Dedicated pest control, housekeeping, and facility management for Vile Parle\'s residential and commercial zones.', landmark: 'Juhu Beach', pin: '400057' },
  { slug: 'bhayandar', name: 'Bhayandar', region: 'Western Suburbs', description: 'Affordable and reliable facility management services for housing societies and commercial properties in Bhayandar.', landmark: 'Bhayandar Creek', pin: '401101' },
  { slug: 'mira-road', name: 'Mira Road', region: 'Western Suburbs', description: 'Comprehensive pest control and integrated facility management for Mira Road\'s rapidly growing townships and offices.', landmark: 'Mira Road Station', pin: '401107' },

  // Mumbai Suburbs (East)
  { slug: 'ghatkopar', name: 'Ghatkopar', region: 'Mumbai Suburbs', description: 'Professional facility services for Ghatkopar\'s commercial hubs, retail malls, and high-rise residential towers.', landmark: 'R City Mall', pin: '400077' },
  { slug: 'mulund', name: 'Mulund', region: 'Mumbai Suburbs', description: 'Serving housing societies, pharma parks, and commercial complexes across Mulund East and West.', landmark: 'Mulund Check Naka', pin: '400080' },
  { slug: 'bhandup', name: 'Bhandup', region: 'Mumbai Suburbs', description: 'Expert pest control and facility management for Bhandup\'s industrial estates, residential societies, and offices.', landmark: 'Bhandup Industrial Area', pin: '400078' },

  // Navi Mumbai
  { slug: 'vashi', name: 'Vashi', region: 'Navi Mumbai', description: 'Premium facility management for Vashi\'s corporate offices, APMC market zone, and large residential townships.', landmark: 'APMC Market', pin: '400703' },
  { slug: 'nerul', name: 'Nerul', region: 'Navi Mumbai', description: 'Comprehensive pest control and housekeeping for Nerul\'s well-planned sectors, schools, and commercial spaces.', landmark: 'Nerul Lake', pin: '400706' },
  { slug: 'belapur', name: 'Belapur', region: 'Navi Mumbai', description: 'Trusted facility partner for CBD Belapur\'s government offices, corporate parks, and residential societies.', landmark: 'CBD Belapur', pin: '400614' },
  { slug: 'kharghar', name: 'Kharghar', region: 'Navi Mumbai', description: 'Full-spectrum facility services for Kharghar\'s planned townships, golf course zone, and commercial centers.', landmark: 'Central Park Kharghar', pin: '410210' },
  { slug: 'panvel', name: 'Panvel', region: 'Navi Mumbai', description: 'Reliable pest control and facility management for Panvel\'s growing industrial and residential belt.', landmark: 'Panvel Railway Station', pin: '410206' },
  { slug: 'kamothe', name: 'Kamothe', region: 'Navi Mumbai', description: 'Facility management solutions for Kamothe\'s large housing societies and commercial establishments.', landmark: 'Kamothe Sector 35', pin: '410209' },
  { slug: 'seawoods', name: 'Seawoods', region: 'Navi Mumbai', description: 'Expert services for Seawoods\' premium residential complexes, retail mall, and corporate offices.', landmark: 'Seawoods Grand Central Mall', pin: '400706' },
  { slug: 'sanpada', name: 'Sanpada', region: 'Navi Mumbai', description: 'Quality pest control and housekeeping for Sanpada\'s corporate hubs and well-maintained residential sectors.', landmark: 'Sanpada Railway Station', pin: '400705' },
  { slug: 'ghansoli', name: 'Ghansoli', region: 'Navi Mumbai', description: 'Facility management for Ghansoli\'s industrial zones, housing societies, and commercial establishments.', landmark: 'TTC Industrial Area', pin: '400701' },
  { slug: 'airoli', name: 'Airoli', region: 'Navi Mumbai', description: 'Specialized facility services for Airoli\'s IT parks, pharmaceutical companies, and residential towers.', landmark: 'Airoli IT Park', pin: '400708' },
  { slug: 'ulwe', name: 'Ulwe', region: 'Navi Mumbai', description: 'Emerging residential hub — Belabloom provides reliable pest control and facility management for Ulwe\'s new townships.', landmark: 'Navi Mumbai Airport Zone', pin: '410206' },

  // Thane District
  { slug: 'thane', name: 'Thane', region: 'Thane District', description: 'Comprehensive facility management for Thane\'s sprawling lake city — from corporate offices to large gated communities.', landmark: 'Yeoor Hills & Upvan Lake', pin: '400601' },
  { slug: 'kalyan', name: 'Kalyan', region: 'Thane District', description: 'Serving Kalyan\'s growing commercial hubs, residential societies, and educational institutions with professional facility services.', landmark: 'Kalyan Station', pin: '421301' },
  { slug: 'dombivli', name: 'Dombivli', region: 'Thane District', description: 'Trusted pest control and housekeeping for Dombivli\'s large residential complexes and MIDC industrial area.', landmark: 'MIDC Dombivli', pin: '421201' },
  { slug: 'ulhasnagar', name: 'Ulhasnagar', region: 'Thane District', description: 'Facility management solutions for Ulhasnagar\'s commercial markets, factories, and residential buildings.', landmark: 'Ulhasnagar Camp 4', pin: '421003' },
  { slug: 'ambernath', name: 'Ambernath', region: 'Thane District', description: 'Professional pest control and facility management for Ambernath\'s MIDC factories, temples, and residential areas.', landmark: 'Ambernath Shiva Temple', pin: '421501' },
  { slug: 'badlapur', name: 'Badlapur', region: 'Thane District', description: 'Reliable facility services for Badlapur\'s expanding residential townships and industrial establishments.', landmark: 'Badlapur Station', pin: '421503' },
  { slug: 'taloja', name: 'Taloja', region: 'Thane District', description: 'Industrial facility management and pest control for Taloja MIDC\'s pharmaceutical and manufacturing units.', landmark: 'Taloja MIDC', pin: '410208' },
  { slug: 'diva', name: 'Diva', region: 'Thane District', description: 'Affordable pest control and facility management for Diva\'s residential and commercial properties.', landmark: 'Diva Junction', pin: '400612' },
  { slug: 'mumbra', name: 'Mumbra', region: 'Thane District', description: 'Comprehensive facility services for Mumbra\'s densely populated residential towers and commercial areas.', landmark: 'Mumbra Railway Station', pin: '400612' },

  // Vasai-Virar
  { slug: 'vasai', name: 'Vasai', region: 'Vasai-Virar', description: 'Facility management and pest control for Vasai\'s large residential projects, schools, and commercial complexes.', landmark: 'Vasai Fort', pin: '401201' },
  { slug: 'virar', name: 'Virar', region: 'Vasai-Virar', description: 'Expert facility services for Virar\'s rapidly growing residential townships and commercial hubs.', landmark: 'Virar Station', pin: '401303' },

  // Beyond MMR
  { slug: 'lonavala', name: 'Lonavala', region: 'Beyond MMR', description: 'Seasonal and year-round facility management for Lonavala\'s holiday homes, resorts, and commercial properties.', landmark: 'Tiger\'s Leap', pin: '410401' },
  { slug: 'mumbai', name: 'Mumbai', region: 'Central Mumbai', description: 'Belabloom\'s flagship service territory — providing integrated facility management across all of Mumbai for corporates, societies, and commercial spaces.', landmark: 'Gateway of India', pin: '400001' },
  { slug: 'navi-mumbai', name: 'Navi Mumbai', region: 'Navi Mumbai', description: 'Your go-to facility management partner across all sectors and nodes of Navi Mumbai — the city that never stops growing.', landmark: 'Palm Beach Road', pin: '400614' },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(l => l.slug === slug);
}

export function getLocationsByRegion(): Record<Region, Location[]> {
  return locations.reduce((acc, loc) => {
    if (!acc[loc.region]) acc[loc.region] = [];
    acc[loc.region].push(loc);
    return acc;
  }, {} as Record<Region, Location[]>);
}

export const regionOrder: Region[] = [
  'Central Mumbai',
  'Western Suburbs',
  'Mumbai Suburbs',
  'Navi Mumbai',
  'Thane District',
  'Vasai-Virar',
  'Beyond MMR',
];
