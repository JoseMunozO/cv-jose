export type LinkItem = {
  label: string
  value: string
  href: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type TimelineItem = {
  title: string
  organization: string
  period: string
  highlights: string[]
}

export type Project = {
  name: string
  description: string
  stack: string[]
  highlights: string[]
}

export const cv = {
  person: {
    name: 'Jose Carlos Muñoz',
    role: 'Fullstackutvecklare under utbildning',
    headline: 'Java | JavaScript | React | Spring Boot | Öppen för LIA',
    location: 'Höör, Skåne, Sverige',
    email: 'josecarlosm98@gmail.com',
    phone: '0709436444',
  },
  links: [
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ozeca98',
      href: 'https://linkedin.com/in/ozeca98',
    },
    {
      label: 'GitHub',
      value: 'github.com/JoseMunozO',
      href: 'https://github.com/JoseMunozO',
    },
  ] satisfies LinkItem[],
  profile:
    'Driven och lösningsorienterad fullstackutvecklare under utbildning med fokus på Java, JavaScript och modern webbutveckling. Bygger REST API:er, databasdrivna backend-lösningar och responsiva webbapplikationer genom skolprojekt och egna projekt. Har tidigare erfarenhet av ledarskap, kundkontakt och problemlösning i miljöer med högt tempo.',
  skills: [
    {
      title: 'Programming',
      items: ['Java', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
    },
    {
      title: 'Frontend',
      items: ['React', 'Responsive Design', 'REST API Integration', 'Modern CSS', 'UI/UX basics'],
    },
    {
      title: 'Backend',
      items: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'CRUD', 'JWT Authentication'],
    },
    {
      title: 'Database & Tools',
      items: ['MySQL', 'Git', 'GitHub', 'Postman', 'Maven', 'Docker basics', 'Agile/Scrum'],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      name: 'Fullstack Webshop API',
      description: 'Backendprojekt för en e-handelsplattform utvecklad med Node.js, Express och MySQL.',
      stack: ['Node.js', 'Express.js', 'MySQL', 'REST API', 'Git/GitHub'],
      highlights: [
        'Byggde CRUD-flöden för produkter, kategorier och orderhantering.',
        'Designade relationsdatabas och testade API-endpoints med Postman.',
        'Strukturerade admin routes och backendlogik för tydligare ansvarsfördelning.',
      ],
    },
    {
      name: 'Preschool Administration System',
      description: 'Backendprojekt utvecklat med Java Spring Boot, MySQL och Spring Security.',
      stack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'REST API'],
      highlights: [
        'Implementerade autentisering, rollhantering och användarflöden.',
        'Modellerade databasstruktur för studenter, användare och administrativa resurser.',
        'Skapade REST API:er med fokus på tydlig struktur och säkerhet.',
      ],
    },
  ] satisfies Project[],
  education: [
    {
      title: 'Fullstackutvecklare',
      organization: 'Teknikhögskolan Lund',
      period: '2025 - 2027',
      highlights: [
        'Java, Spring Boot, JavaScript, Node.js, React och REST API-utveckling.',
        'SQL, databashantering, Git, agil utveckling, testning och säkerhet.',
      ],
    },
    {
      title: 'CAD Konstruktor',
      organization: 'Jönköping University',
      period: '2021 - 2023',
      highlights: ['SolidWorks, teknisk design, CAD-modellering och grafisk design.'],
    },
    {
      title: 'IT',
      organization: 'NTI-Gymnasiet Kristianstad',
      period: '2018 - 2020',
      highlights: ['Webbutveckling, programmering, HTML, CSS, JavaScript, SQL och C#.'],
    },
  ] satisfies TimelineItem[],
  experience: [
    {
      title: 'Driftledare / Arbetsledare',
      organization: 'Max Burgers',
      period: '2024 - 2025',
      highlights: [
        'Ansvarade för daglig drift, öppning, stängning och arbetsledning.',
        'Planerade och koordinerade personal i ett högt tempo med tydlig kommunikation.',
        'Hanterade kundkontakt, konflikter, lagerkontroll och problemlösning i realtid.',
      ],
    },
    {
      title: 'Medarbetare',
      organization: 'Max Burgers',
      period: '2021 - 2024',
      highlights: [
        'Arbetade med kundservice, kvalitet och samarbete i team.',
        'Byggde erfarenhet inom ledarskap, ansvarstagande och konflikthantering.',
      ],
    },
    {
      title: 'Extra medarbetare vid behov',
      organization: 'Pugerups & Böketofta Jordbrukskompani AB',
      period: '2020 - Nuvarande',
      highlights: [
        'Hjälper till vid behov med dagliga praktiska arbetsuppgifter på gården.',
        'Kör traktor och bil i samband med interna arbetsuppgifter och transporter.',
        'Löser enklare tekniska problem, reparerar datorer och installerar ny PC- eller IT-relaterad utrustning.',
      ],
    },
    {
      title: 'Lager och logistik',
      organization: 'StudentConsult / DHL Freight',
      period: '2021',
      highlights: ['Arbetade med lagerflöden, effektivitet, struktur och teamarbete.'],
    },
  ] satisfies TimelineItem[],
  certifications: [
    'PCI-DSS och säkerhetsmedvetenhet',
    'Systematiskt Arbetsmiljöarbete (SAM)',
    'Matsäkerhet',
    'Rekrytering och kundservice',
  ],
  languages: ['Spanska - modersmål', 'Svenska - avancerad nivå', 'Engelska - arbetsnivå inom IT'],
  softSkills: [
    'Problemlösning',
    'Teamarbete',
    'Kommunikation',
    'Snabblärd',
    'Ansvarstagande',
    'Ledarskap',
    'Kundfokus',
  ],
}
