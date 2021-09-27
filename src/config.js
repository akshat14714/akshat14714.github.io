module.exports = {
  siteTitle: 'Akshat Maheshwari | Software Engineer',
  siteDescription:
    'Akshat Maheshwari is a Software Engineer, pursuing Master\'s in Computer Science at The University of Texas at Dallas with a keen interest in NLP, ML, AI, and building & scaling software.',
  siteKeywords:
    'Akshat Maheshwari, Akshat, Maheshwari, akshat14714, software engineer, software developer, javascript, nlp, ut dallas',
  siteUrl: 'https://akshatmaheshwari.netlify.app',
  siteLanguage: 'en_US',
  // googleAnalyticsID: '',
  // googleVerification: '',
  name: 'Akshat Maheshwari',
  location: 'Dallas, TX',
  email: 'akshat14714@gmail.com',
  github: 'https://github.com/akshat14714',
  twitterHandle: '@akshat14714',
  phone: '+1 469-927-3614',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/akshat14714',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/akshat14714',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/akshat.m147',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/akshat14714',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
