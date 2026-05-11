import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

export const supportedLanguages = ['en', 'sv', 'es'] as const

export type SupportedLanguage = (typeof supportedLanguages)[number]

export const languageNames: Record<SupportedLanguage, string> = {
  en: 'English',
  sv: 'Svenska',
  es: 'Español',
}

export const resources = {
  en: {
    translation: {
      actions: {
        creatingPdf: 'Creating PDF...',
        downloadPdf: 'Download PDF',
      },
      app: {
        toolbarEyebrow: 'Editable React CV',
      },
      sections: {
        profile: 'Profile',
        projects: 'Projects',
        education: 'Education',
        workExperience: 'Work Experience',
        hardSkills: 'Hard Skills',
        softSkills: 'Soft Skills',
        languages: 'Languages',
        certifications: 'Certifications',
        references: 'References',
      },
      labels: {
        language: 'Language',
        referencesAvailable: 'Available on request.',
      },
    },
  },
  sv: {
    translation: {
      actions: {
        creatingPdf: 'Skapar PDF...',
        downloadPdf: 'Ladda ner PDF',
      },
      app: {
        toolbarEyebrow: 'Redigerbart React-CV',
      },
      sections: {
        profile: 'Profil',
        projects: 'Projekt',
        education: 'Utbildning',
        workExperience: 'Arbetslivserfarenhet',
        hardSkills: 'Tekniska kunskaper',
        softSkills: 'Personliga styrkor',
        languages: 'Språk',
        certifications: 'Certifieringar',
        references: 'Referenser',
      },
      labels: {
        language: 'Språk',
        referencesAvailable: 'Lämnas på begäran.',
      },
    },
  },
  es: {
    translation: {
      actions: {
        creatingPdf: 'Creando PDF...',
        downloadPdf: 'Descargar PDF',
      },
      app: {
        toolbarEyebrow: 'CV editable en React',
      },
      sections: {
        profile: 'Perfil',
        projects: 'Proyectos',
        education: 'Educación',
        workExperience: 'Experiencia laboral',
        hardSkills: 'Habilidades técnicas',
        softSkills: 'Habilidades personales',
        languages: 'Idiomas',
        certifications: 'Certificaciones',
        references: 'Referencias',
      },
      labels: {
        language: 'Idioma',
        referencesAvailable: 'Disponibles bajo solicitud.',
      },
    },
  },
} as const

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'cv-jose-language',
      convertDetectedLanguage: (language) => language.split('-')[0],
    },
  })

export default i18n
