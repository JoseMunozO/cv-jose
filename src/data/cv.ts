import type { SupportedLanguage } from '../i18n'

export type LinkItem = {
  label: string
  icon: string
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

export type Resume = {
  person: {
    name: string
    role: string
    availability: string
    headline: string
    location: string
    email: string
    phone: string
    photoUrl?: string
  }
  links: LinkItem[]
  profile: string
  skills: SkillGroup[]
  projects: Project[]
  education: TimelineItem[]
  experience: TimelineItem[]
  certifications: string[]
  languages: string[]
  softSkills: string[]
}

const sharedContact = {
  name: 'Jose Carlos Muñoz',
  location: 'Höör, Skåne, Sweden',
  email: 'josecarlosm98@gmail.com',
  phone: '0709436444',
  photoUrl: '/profile/PHOTO-2026-05-11-22-05-53.jpg',
}

const sharedLinks: LinkItem[] = [
  {
    label: 'LinkedIn',
    icon: '💼',
    value: 'linkedin.com/in/ozeca98',
    href: 'https://linkedin.com/in/ozeca98',
  },
  {
    label: 'GitHub',
    icon: '💻',
    value: 'github.com/JoseMunozO',
    href: 'https://github.com/JoseMunozO',
  },
]

export const resumes: Record<SupportedLanguage, Resume> = {
  en: {
    person: {
      ...sharedContact,
      role: 'Fullstack Developer Student',
      availability: 'Open for LIA internship',
      headline: 'Java | JavaScript | React | Spring Boot | REST APIs',
    },
    links: sharedLinks,
    profile:
      'Fullstack developer student focused on Java, Spring Boot, React and TypeScript. Experienced in building structured REST APIs, database-backed services and responsive interfaces through applied projects. Brings a practical engineering mindset, strong ownership and previous leadership experience from operational environments.',
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
    ],
    projects: [
      {
        name: 'Fullstack Webshop API',
        description: 'E-commerce API focused on product, category and order management with a relational data model.',
        stack: ['Node.js', 'Express.js', 'MySQL', 'REST API', 'Git/GitHub'],
        highlights: [
          'Implemented REST endpoints for products, categories, orders and administrative operations.',
          'Designed relational database structures and validated API behavior with Postman.',
          'Separated routing and service responsibilities to keep the backend maintainable.',
        ],
      },
      {
        name: 'Preschool Administration System',
        description:
          'Fullstack administration platform for preschool operations, covering students, guardians, finance, inventory, schedules and role-based dashboards.',
        stack: ['React', 'TypeScript', 'Spring Boot', 'Spring Security', 'MySQL', 'Docker', 'Swagger', 'GitHub Actions'],
        highlights: [
          'Implemented JWT authentication, role-based authorization and separate staff, finance, teacher and parent flows.',
          'Built domain modules for students, guardians, monthly payments, materials, schedules, notes, consent handling and dashboards.',
          'Integrated React data tables, search and filters with real APIs; added Flyway migrations, automated tests, smoke tests, Docker, Swagger and CI.',
        ],
      },
    ],
    education: [
      {
        title: 'Fullstack Developer',
        organization: 'Teknikhögskolan Lund',
        period: '2025 - 2027',
        highlights: [
          'Focused on Java, Spring Boot, JavaScript, Node.js, React and REST API development.',
          'Covers SQL, database design, Git, agile methods, testing and application security.',
        ],
      },
      {
        title: 'CAD Designer',
        organization: 'Jönköping University',
        period: '2021 - 2023',
        highlights: ['SolidWorks, technical design, CAD modeling and graphic design.'],
      },
      {
        title: 'IT',
        organization: 'NTI-Gymnasiet Kristianstad',
        period: '2018 - 2020',
        highlights: ['Web development, programming, HTML, CSS, JavaScript, SQL and C#.'],
      },
    ],
    experience: [
      {
        title: 'Shift Leader / Supervisor',
        organization: 'Max Burgers',
        period: '2024 - 2025',
        highlights: [
          'Led daily operations, opening and closing routines, shift planning and team coordination.',
          'Maintained quality, service level and prioritization in a fast-paced environment.',
          'Handled customer issues, conflicts, inventory control and real-time problem solving.',
        ],
      },
      {
        title: 'Team Member',
        organization: 'Max Burgers',
        period: '2021 - 2024',
        highlights: [
          'Worked with customer service, quality routines and team-based delivery.',
          'Developed responsibility, communication and conflict-handling skills later used in leadership roles.',
        ],
      },
      {
        title: 'Extra Team Member When Needed',
        organization: 'Pugerups & Böketofta Jordbrukskompani AB',
        period: '2020 - Present',
        highlights: [
          'Support daily practical tasks on demand, including internal transport with tractors and cars.',
          'Resolve basic technical issues, repair computers and install new PC or IT-related equipment.',
        ],
      },
      {
        title: 'Warehouse and Logistics',
        organization: 'StudentConsult / DHL Freight',
        period: '2021',
        highlights: ['Worked with warehouse flows, efficiency, structure and teamwork.'],
      },
    ],
    certifications: [
      'PCI-DSS and security awareness',
      'Systematic Work Environment Management (SAM)',
      'Food safety',
      'Recruitment and customer service',
    ],
    languages: ['Spanish - native', 'Swedish - advanced', 'English - professional IT working level'],
    softSkills: ['Ownership', 'Problem solving', 'Structured work', 'Collaboration', 'Communication', 'Leadership'],
  },
  sv: {
    person: {
      ...sharedContact,
      location: 'Höör, Skåne, Sverige',
      role: 'Fullstackutvecklare under utbildning',
      availability: 'Öppen för LIA',
      headline: 'Java | JavaScript | React | Spring Boot | REST API:er',
    },
    links: sharedLinks,
    profile:
      'Fullstackutvecklare under utbildning med fokus på Java, Spring Boot, React och TypeScript. Erfarenhet av att bygga strukturerade REST API:er, databasdrivna tjänster och responsiva gränssnitt genom praktiska projekt. Har ett lösningsorienterat arbetssätt, stark ansvarskänsla och tidigare ledarskapserfarenhet från operativa miljöer.',
    skills: [
      {
        title: 'Programmering',
        items: ['Java', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
      },
      {
        title: 'Frontend',
        items: ['React', 'Responsiv design', 'REST API-integration', 'Modern CSS', 'UI/UX-grunder'],
      },
      {
        title: 'Backend',
        items: ['Spring Boot', 'Node.js', 'Express.js', 'REST API:er', 'CRUD', 'JWT Authentication'],
      },
      {
        title: 'Databas & verktyg',
        items: ['MySQL', 'Git', 'GitHub', 'Postman', 'Maven', 'Docker grunder', 'Agile/Scrum'],
      },
    ],
    projects: [
      {
        name: 'Fullstack Webshop API',
        description: 'E-handels-API med fokus på produkter, kategorier, orderhantering och relationell datamodellering.',
        stack: ['Node.js', 'Express.js', 'MySQL', 'REST API', 'Git/GitHub'],
        highlights: [
          'Implementerade REST-endpoints för produkter, kategorier, order och administrativa flöden.',
          'Designade relationsdatabas och validerade API-beteende med Postman.',
          'Delade upp routes och servicelogik för en mer underhållbar backendstruktur.',
        ],
      },
      {
        name: 'Preschool Administration System',
        description:
          'Fullstack administrativ plattform för förskoleverksamhet med studenter, vårdnadshavare, ekonomi, material, scheman och rollbaserade dashboards.',
        stack: ['React', 'TypeScript', 'Spring Boot', 'Spring Security', 'MySQL', 'Docker', 'Swagger', 'GitHub Actions'],
        highlights: [
          'Implementerade JWT-autentisering, rollbaserad behörighet och separata flöden för personal, ekonomi, lärare och vårdnadshavare.',
          'Byggde domänmoduler för studenter, vårdnadshavare, månadsbetalningar, material, scheman, anteckningar, samtycken och dashboards.',
          'Integrerade React-tabeller, sök och filter mot riktiga API:er; lade till Flyway-migreringar, automatiserade tester, smoke tests, Docker, Swagger och CI.',
        ],
      },
    ],
    education: [
      {
        title: 'Fullstackutvecklare',
        organization: 'Teknikhögskolan Lund',
        period: '2025 - 2027',
        highlights: [
          'Fokus på Java, Spring Boot, JavaScript, Node.js, React och REST API-utveckling.',
          'Omfattar SQL, databasdesign, Git, agila arbetssätt, testning och applikationssäkerhet.',
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
    ],
    experience: [
      {
        title: 'Driftledare / Arbetsledare',
        organization: 'Max Burgers',
        period: '2024 - 2025',
        highlights: [
          'Ledde daglig drift, öppning och stängning, skiftplanering och teamkoordinering.',
          'Säkerställde kvalitet, servicenivå och prioritering i en miljö med högt tempo.',
          'Hanterade kundärenden, konflikter, lagerkontroll och problemlösning i realtid.',
        ],
      },
      {
        title: 'Medarbetare',
        organization: 'Max Burgers',
        period: '2021 - 2024',
        highlights: [
          'Arbetade med kundservice, kvalitetsrutiner och teambaserad leverans.',
          'Utvecklade ansvarstagande, kommunikation och konflikthantering som senare användes i ledarroll.',
        ],
      },
      {
        title: 'Extra medarbetare vid behov',
        organization: 'Pugerups & Böketofta Jordbrukskompani AB',
        period: '2020 - Nuvarande',
        highlights: [
          'Hjälper till vid behov med praktiska arbetsuppgifter, inklusive interna transporter med traktor och bil.',
          'Löser enklare tekniska problem, reparerar datorer och installerar ny PC- eller IT-relaterad utrustning.',
        ],
      },
      {
        title: 'Lager och logistik',
        organization: 'StudentConsult / DHL Freight',
        period: '2021',
        highlights: ['Arbetade med lagerflöden, effektivitet, struktur och teamarbete.'],
      },
    ],
    certifications: [
      'PCI-DSS och säkerhetsmedvetenhet',
      'Systematiskt Arbetsmiljöarbete (SAM)',
      'Matsäkerhet',
      'Rekrytering och kundservice',
    ],
    languages: ['Spanska - modersmål', 'Svenska - avancerad nivå', 'Engelska - arbetsnivå inom IT'],
    softSkills: ['Ansvarstagande', 'Problemlösning', 'Strukturerat arbete', 'Samarbete', 'Kommunikation', 'Ledarskap'],
  },
  es: {
    person: {
      ...sharedContact,
      location: 'Höör, Skåne, Suecia',
      role: 'Estudiante de desarrollo Fullstack',
      availability: 'Disponible para prácticas LIA',
      headline: 'Java | JavaScript | React | Spring Boot | REST APIs',
    },
    links: sharedLinks,
    profile:
      'Desarrollador fullstack en formación con foco en Java, Spring Boot, React y TypeScript. Experiencia construyendo REST APIs estructuradas, servicios con base de datos e interfaces responsivas mediante proyectos aplicados. Aporta criterio práctico de ingeniería, responsabilidad y experiencia previa liderando en entornos operativos.',
    skills: [
      {
        title: 'Programación',
        items: ['Java', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
      },
      {
        title: 'Frontend',
        items: ['React', 'Diseño responsive', 'Integración REST API', 'CSS moderno', 'Bases de UI/UX'],
      },
      {
        title: 'Backend',
        items: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'CRUD', 'JWT Authentication'],
      },
      {
        title: 'Base de datos & herramientas',
        items: ['MySQL', 'Git', 'GitHub', 'Postman', 'Maven', 'Docker básico', 'Agile/Scrum'],
      },
    ],
    projects: [
      {
        name: 'Fullstack Webshop API',
        description: 'API e-commerce centrada en productos, categorías, pedidos y modelado relacional de datos.',
        stack: ['Node.js', 'Express.js', 'MySQL', 'REST API', 'Git/GitHub'],
        highlights: [
          'Implementó endpoints REST para productos, categorías, pedidos y operaciones administrativas.',
          'Diseñó estructuras de base de datos relacional y validó comportamiento de API con Postman.',
          'Separó rutas y lógica de servicios para una estructura backend más mantenible.',
        ],
      },
      {
        name: 'Preschool Administration System',
        description:
          'Plataforma administrativa fullstack para operación preescolar con estudiantes, tutores, finanzas, inventario, horarios y dashboards por rol.',
        stack: ['React', 'TypeScript', 'Spring Boot', 'Spring Security', 'MySQL', 'Docker', 'Swagger', 'GitHub Actions'],
        highlights: [
          'Implementó autenticación JWT, autorización por roles y flujos separados para personal, finanzas, profesores y tutores.',
          'Construyó módulos de estudiantes, tutores, pagos mensuales, materiales, horarios, notas, consentimientos y dashboards.',
          'Integró tablas, búsqueda y filtros en React contra APIs reales; añadió migraciones Flyway, tests automatizados, smoke tests, Docker, Swagger y CI.',
        ],
      },
    ],
    education: [
      {
        title: 'Desarrollador Fullstack',
        organization: 'Teknikhögskolan Lund',
        period: '2025 - 2027',
        highlights: [
          'Foco en Java, Spring Boot, JavaScript, Node.js, React y desarrollo de REST APIs.',
          'Incluye SQL, diseño de bases de datos, Git, métodos ágiles, testing y seguridad de aplicaciones.',
        ],
      },
      {
        title: 'Diseñador CAD',
        organization: 'Jönköping University',
        period: '2021 - 2023',
        highlights: ['SolidWorks, diseño técnico, modelado CAD y diseño gráfico.'],
      },
      {
        title: 'IT',
        organization: 'NTI-Gymnasiet Kristianstad',
        period: '2018 - 2020',
        highlights: ['Desarrollo web, programación, HTML, CSS, JavaScript, SQL y C#.'],
      },
    ],
    experience: [
      {
        title: 'Jefe de turno / Supervisor',
        organization: 'Max Burgers',
        period: '2024 - 2025',
        highlights: [
          'Lideró operaciones diarias, apertura y cierre, planificación de turnos y coordinación de equipo.',
          'Mantuvo calidad, nivel de servicio y priorización en un entorno de ritmo alto.',
          'Gestionó atención al cliente, conflictos, control de inventario y resolución de problemas en tiempo real.',
        ],
      },
      {
        title: 'Empleado',
        organization: 'Max Burgers',
        period: '2021 - 2024',
        highlights: [
          'Trabajó con servicio al cliente, rutinas de calidad y entrega basada en equipo.',
          'Desarrolló responsabilidad, comunicación y manejo de conflictos aplicados después en roles de liderazgo.',
        ],
      },
      {
        title: 'Empleado extra bajo demanda',
        organization: 'Pugerups & Böketofta Jordbrukskompani AB',
        period: '2020 - Actualidad',
        highlights: [
          'Apoya bajo demanda en tareas prácticas, incluyendo transporte interno con tractores y coches.',
          'Resuelve problemas técnicos básicos, repara ordenadores e instala nuevos PC o equipos relacionados con IT.',
        ],
      },
      {
        title: 'Almacén y logística',
        organization: 'StudentConsult / DHL Freight',
        period: '2021',
        highlights: ['Trabajó con flujos de almacén, eficiencia, estructura y trabajo en equipo.'],
      },
    ],
    certifications: [
      'PCI-DSS y conciencia de seguridad',
      'Gestión sistemática del entorno laboral (SAM)',
      'Seguridad alimentaria',
      'Reclutamiento y servicio al cliente',
    ],
    languages: ['Español - nativo', 'Sueco - avanzado', 'Inglés - nivel profesional en IT'],
    softSkills: ['Responsabilidad', 'Resolución de problemas', 'Trabajo estructurado', 'Colaboración', 'Comunicación', 'Liderazgo'],
  },
}

export function getResume(language: string): Resume {
  const normalizedLanguage = language.split('-')[0] as SupportedLanguage

  return resumes[normalizedLanguage] ?? resumes.en
}
