export const site = {
  name: 'B and J Exteriors',
  shortName: 'B&J Exteriors',
  tagline: 'Professional Power Washing Services',
  url: 'https://www.bandjexteriors.com',
  domain: 'www.BandJExteriors.com',
  serviceArea: 'Serving Bergen County & Northern NJ',
  serviceAreaLong:
    'Bergen County, NJ and surrounding local areas including Hillsdale, Rivervale, and nearby towns.',
  towns: [
    'Hillsdale',
    'Rivervale',
    'Westwood',
    'Park Ridge',
    'Woodcliff Lake',
    'Montvale',
    'Emerson',
    'Oradell',
    'River Edge',
    'Paramus',
    'Ridgewood',
    'Mahwah',
  ],
  contacts: [
    { name: 'Ben', phone: '201-468-7580', tel: '+12014687580' },
    { name: 'Justin', phone: '201-665-6945', tel: '+12016656945' },
    { name: 'Brady', phone: '201-625-3996', tel: '+12016253996' },
  ],
  services: [
    {
      slug: 'decks-patios-driveways',
      title: 'Decks, Patios & Driveways',
      short: 'Concrete, pavers, and wood deck restoration.',
      description:
        'Bring concrete, paver, and wood surfaces back to life. We remove embedded dirt, algae, mildew, oil stains, and weathering — leaving a clean, even surface ready to seal or enjoy as-is.',
      includes: [
        'Concrete driveways and walkways',
        'Brick and stone paver patios',
        'Pool decks and pool surrounds',
        'Wood deck cleaning and prep for stain',
        'Retaining walls and stairs',
      ],
    },
  ],
  testimonials: [
    {
      quote:
        'Ben and Justin did our deck and the driveway in one visit. Whole back of the house looks brand new. Fair price, on time, and they cleaned up after themselves.',
      name: 'Mike R.',
      town: 'Hillsdale, NJ',
    },
    {
      quote:
        'Hired them for our restaurant patio every spring. Always reliable, always professional. Customers notice the difference.',
      name: 'Lauren K.',
      town: 'Westwood, NJ',
    },
    {
      quote:
        'Our paver patio looked like new after they were done. Took half a day, fair price, and they walked it with me before they left to make sure I was happy.',
      name: 'Dave T.',
      town: 'Paramus, NJ',
    },
  ],
};

export type Service = (typeof site.services)[number];
export type Contact = (typeof site.contacts)[number];

// ─────────────────────────────────────────────────────────────────────────────
// CALENDLY INLINE BOOKING URL
// Replace the path below with your actual Calendly event link so the inline
// widget on the Contact page loads your "Free Quote" booking flow.
// Example:  https://calendly.com/bandjexteriors/free-quote
// ─────────────────────────────────────────────────────────────────────────────
export const calendlyUrl = 'https://calendly.com/ceo-bandjexteriors/new-meeting';
