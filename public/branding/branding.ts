// =========================================================================
//  SCHOOL BRANDING — single source of truth
//  Edit values here to rebrand the entire site. No other file hardcodes
//  the school name, logo, favicon, tagline, contact or social links.
//  Logo/favicon files live alongside this file in /public/branding/assets/
//  (referenced as "/branding/assets/..."  in  <img>/<link> tags).
// =========================================================================

export interface Branding {
  schoolName: string;
  shortName: string;
  tagline: string;
  websiteTitle: string;
  metaDescription: string;
  logo: string;       // path in /public
  logoLight: string;  // light variant for dark backgrounds
  favicon: string;    // path in /public
  primaryColor: string;
  accentColor: string;
  contact: {
    phone: string;
    phoneHref: string;
    whatsapp: string;       // WhatsApp number in international format (no +)
    whatsappHref: string;   // wa.me link
    email: string;
    addressLine1: string;
    addressLine2: string;
    mapEmbedQuery: string; // used for google maps embed query
    mapsUrl: string;        // opens Google Maps (mobile app or desktop web)
  };
  enquiryMessage: string;   // default WhatsApp message for "Enquire Now"
  admission: { year: string; sectionId: string };
  developer: { name: string; url: string };
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
  hero: {
    badge: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
  };
  stats: { label: string; value: string; suffix: string }[];
}

export const branding: Branding = {
  schoolName: 'The Presidential School',
  shortName: 'The Presidential School',
  tagline: 'Nurturing Leaders for Tomorrow',
  websiteTitle: 'The Presidential School — Nurturing Leaders for Tomorrow',
  metaDescription:
    'The Presidential School is a premier institution blending academic excellence with character building. Admissions open for 2027–2028.',
  logo: '/branding/assets/logo.png',
  logoLight: '/branding/assets/logo-light.png',
  favicon: '/branding/assets/favicon-512.png',
  primaryColor: '#0c2249',
  accentColor: '#c9a227',
  contact: {
    phone: '+91 83284 11176',
    phoneHref: 'tel:+918328411176',
    whatsapp: '918328411176',
    whatsappHref: '', // generated below from `whatsapp` — do not edit
    email: 'admissions@example.com',
    addressLine1: 'Radha, 50-121 27/1, Seethammadhara Road',
    addressLine2: 'Balayya Sastri Layout, Visakhapatnam',
    mapEmbedQuery: 'Seethammadhara Road, Balayya Sastri Layout, Visakhapatnam',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('The Presidential School, Seethammadhara Road, Balayya Sastri Layout, Visakhapatnam'),
  },
  enquiryMessage: 'Hello, I would like to enquire about admissions and the school.',
  admission: { year: '2027–2028', sectionId: 'admissions' },
  developer: { name: 'Omatrix AI Solutions', url: 'https://omaitrix.com/' },
  // Replace with the school's real profile links
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
  hero: {
    badge: 'Admissions Open 2027–2028',
    titleA: 'Where Curiosity',
    titleB: 'Becomes Excellence',
    subtitle:
      'A learning home where every child is seen, heard and inspired to grow — academically, creatively and morally.',
    primaryCta: 'Apply for Admission',
    secondaryCta: 'Explore Campus',
    image: '/branding/assets/hero-students.svg',
  },
  stats: [
    { label: 'Years of Legacy', value: '28', suffix: '+' },
    { label: 'Expert Faculty', value: '120', suffix: '+' },
    { label: 'Students Enrolled', value: '2400', suffix: '+' },
    { label: 'Success Rate', value: '99', suffix: '%' },
  ],
};

/** Builds a wa.me link using the configured number and an optional message. */
export function whatsappLink(message: string = branding.enquiryMessage): string {
  return `https://wa.me/${branding.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
branding.contact.whatsappHref = whatsappLink();
