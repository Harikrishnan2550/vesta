export const siteConfig = {
  name: 'Vesta Future Pvt Ltd',
  legalName: 'Vesta Future Pvt. Ltd.',
  website: 'vestafuture.in',
  tagline: 'Construction • Sports Infrastructure • Crab & Fish Hatchery',
  description:
    'An established business group with roots in construction and expanding expertise across sports infrastructure and crab & fish hatchery operations.',
  
  // Incorporation & History
  history: {
    journeyDuration: 'Approximately 10 Years',
    pvtLtdDate: 'February 2025',
    roots: 'Construction & Building Development',
    narrative:
      'Vesta Future began its journey with a strong focus on construction and building development. Over approximately a decade, the company has grown through experience, execution, and a commitment to quality into multiple specialized divisions.',
  },

  // Company Presence
  presence: ['Kerala', 'Tamil Nadu', 'Puducherry', 'Dubai'],

  // Official Client Address
  address: {
    street: 'NH 66, Pulimootil Building',
    subArea: 'Cheppad P.O.',
    town: 'Cheppad',
    district: 'Alappuzha',
    state: 'Kerala',
    country: 'India',
    full: 'NH 66, Pulimootil Building, Cheppad P.O., Cheppad, Alappuzha, Kerala, India',
    mapsUrl: 'https://maps.google.com/?q=Cheppad,Alappuzha,Kerala',
  },

  // Contact Channels
  contact: {
    email: 'official.futureproperties@gmail.com',
    phone: process.env.NEXT_PUBLIC_SITE_PHONE || '+91 95668 66144',
    phoneDisplay: '+91 95668 66144',
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919566866144',
    instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/vestafuture',
  },

  // Three Dedicated Business Divisions
  divisions: {
    construction: {
      id: 'construction',
      name: 'Vesta Future Builders & Developers',
      shortName: 'Builders & Developers',
      parentConcern: 'Vesta Future Pvt. Ltd.',
      route: '/construction',
      logo: '/logo/Vesta_Future_Builders_Developers_Logo.png',
      categoryKey: 'construction',
      tagline: 'Construction, Buildings & Residential Development',
      description:
        'The original core business area of Vesta Future. Providing professional residential construction, 2D/3D elevations, renovations, interior design, landscaping, budget homes, and real estate.',
      services: [
        'Residential Construction',
        '2D/3D Plans & Elevations',
        'Renovations',
        'Interior Design',
        'Landscaping',
        'Budget Homes',
        'Real Estate',
      ],
      whatsappMessage:
        "Hello, I would like to inquire about Vesta Future Builders & Developers construction packages and design services.",
    },
    sports: {
      id: 'sports',
      name: 'Vesta Future De Sports Infrastructure Pvt. Ltd.',
      shortName: 'De Sports Infrastructure',
      parentConcern: 'Vesta Future Pvt. Ltd.',
      route: '/sports',
      logo: '/logo/Vesta_Sports.png',
      categoryKey: 'sports',
      positioning: 'Leading Sports Infrastructure Providers & Solutions',
      tagline: 'Building Better Spaces for Better Sports',
      description:
        'A professionally driven sports infrastructure company providing comprehensive, end-to-end turnkey solutions for modern sports facilities across India and overseas.',
      experienceClaim: '10+ years of turf construction experience across India and international projects',
      whatsappMessage:
        "Hello, I would like to inquire about Vesta Future De Sports Infrastructure turnkey solutions, turfs, and court construction.",
    },
    crabsFish: {
      id: 'crabs-fish',
      name: 'The Seagull — Crab & Fish Hatchery',
      shortName: 'The Seagull Hatchery',
      brandName: 'THE SEAGULL',
      businessType: 'CRAB & FISH HATCHERY',
      parentConcern: 'Vesta Future Pvt. Ltd.',
      route: '/crabs-fish',
      logo: '/logo/Vesta_Future_Crabs_Fish_Logo.png',
      categoryKey: 'crabs-fish',
      tagline: 'Crab & Fish Hatchery Operations',
      description:
        'The specialized crab and fish hatchery division within the Vesta Future business group, dedicated to scientific hatchery and aquaculture operations.',
      whatsappMessage:
        "Hello, I would like to inquire about The Seagull Crab & Fish Hatchery operations.",
    },
  },

  // Navigation Links
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Construction', href: '/construction' },
    { label: 'Sports', href: '/sports' },
    { label: 'The Seagull', href: '/crabs-fish' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const getWhatsAppLink = (customMessage?: string) => {
  const number = siteConfig.contact.whatsappNumber;
  const message = encodeURIComponent(
    customMessage ||
      "Hello, I would like to connect with Vesta Future Pvt. Ltd. regarding your business services."
  );
  return `https://wa.me/${number}?text=${message}`;
};
