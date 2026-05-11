import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'
import { getResume, type Project, type SkillGroup, type TimelineItem } from './data/cv'
import { languageNames, supportedLanguages, type SupportedLanguage } from './i18n'

function App() {
  const resumeRef = useRef<HTMLElement>(null)
  const [isExporting, setIsExporting] = useState(false)
  const { i18n, t } = useTranslation()
  const activeLanguage = getSupportedLanguage(i18n.resolvedLanguage ?? i18n.language)
  const cv = getResume(activeLanguage)

  useEffect(() => {
    document.documentElement.lang = activeLanguage
  }, [activeLanguage])

  const handleDownloadPdf = async () => {
    if (!resumeRef.current || isExporting) {
      return
    }

    setIsExporting(true)

    try {
      await waitForNextPaint()

      const html2pdf = (await import('html2pdf.js')).default
      const pdfOptions = {
        filename: `jose-carlos-munoz-cv-${activeLanguage}.pdf`,
        margin: [6, 6, 6, 6] as [number, number, number, number],
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff',
        },
        jsPDF: {
          unit: 'mm' as const,
          format: 'a4' as const,
          orientation: 'portrait' as const,
        },
        pagebreak: {
          mode: ['css', 'legacy'],
          avoid: ['.entry'],
        },
      }

      await html2pdf()
        .set(pdfOptions)
        .from(resumeRef.current)
        .save()
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <main className="app-shell">
      <div className="toolbar no-print" aria-label="CV actions">
        <div>
          <p className="toolbar__eyebrow">{t('app.toolbarEyebrow')}</p>
          <h1>{cv.person.name}</h1>
        </div>
        <div className="toolbar__actions">
          <div className="language-switcher" aria-label={t('labels.language')}>
            {supportedLanguages.map((language) => (
              <button
                type="button"
                className={language === activeLanguage ? 'is-active' : ''}
                onClick={() => void i18n.changeLanguage(language)}
                aria-pressed={language === activeLanguage}
                key={language}
              >
                {language.toUpperCase()}
                <span>{languageNames[language]}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="download-button"
            onClick={handleDownloadPdf}
            disabled={isExporting}
            aria-label={t('actions.downloadPdf')}
          >
            {isExporting ? t('actions.creatingPdf') : t('actions.downloadPdf')}
          </button>
        </div>
      </div>

      <article
        ref={resumeRef}
        className={`resume ${isExporting ? 'resume--pdf' : ''}`}
        aria-label={`CV for ${cv.person.name}`}
      >
        <header className="resume-header">
          <div className="portrait" aria-label={cv.person.name}>
            {cv.person.photoUrl ? (
              <img src={cv.person.photoUrl} alt={cv.person.name} />
            ) : (
              <span aria-hidden="true">{getInitials(cv.person.name)}</span>
            )}
          </div>

          <div className="identity">
            <p className="kicker">{cv.person.availability}</p>
            <h2>{cv.person.name}</h2>
            <p className="role">{cv.person.role}</p>
            <p className="headline">{cv.person.headline}</p>
          </div>

          <address className="contact">
            <a className="contact__link" href={`mailto:${cv.person.email}`}>
              <span aria-hidden="true">✉️</span>
              <span>{cv.person.email}</span>
            </a>
            <a className="contact__link" href={`tel:${cv.person.phone}`}>
              <span aria-hidden="true">📞</span>
              <span>{cv.person.phone}</span>
            </a>
            <span className="contact__link">
              <span aria-hidden="true">📍</span>
              <span>{cv.person.location}</span>
            </span>
            {cv.links.map((link) => (
              <a className="contact__link" href={link.href} key={link.label} target="_blank" rel="noreferrer">
                <span aria-hidden="true">{link.icon}</span>
                <span>{link.value}</span>
              </a>
            ))}
          </address>
        </header>

        <section className="section profile-section">
          <h3>{t('sections.profile')}</h3>
          <p>{cv.profile}</p>
        </section>

        <div className="resume-grid">
          <div className="main-column">
            <Section title={t('sections.projects')}>
              <div className="stacked-list">
                {cv.projects.map((project) => (
                  <ProjectBlock project={project} key={project.name} />
                ))}
              </div>
            </Section>

            <Section title={t('sections.education')}>
              <div className="stacked-list">
                {cv.education.map((item) => (
                  <TimelineBlock item={item} key={`${item.organization}-${item.title}`} />
                ))}
              </div>
            </Section>

            <Section title={t('sections.workExperience')}>
              <div className="stacked-list compact">
                {cv.experience.map((item) => (
                  <TimelineBlock item={item} key={`${item.organization}-${item.period}`} />
                ))}
              </div>
            </Section>
          </div>

          <aside className="side-column" aria-label="Skills and extra information">
            <Section title={t('sections.hardSkills')}>
              <div className="skill-groups">
                {cv.skills.map((group) => (
                  <SkillGroupBlock group={group} key={group.title} />
                ))}
              </div>
            </Section>

            <Section title={t('sections.softSkills')}>
              <TagList items={cv.softSkills} />
            </Section>

            <Section title={t('sections.languages')}>
              <ul className="plain-list">
                {cv.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </Section>

            <Section title={t('sections.certifications')}>
              <ul className="plain-list">
                {cv.certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </Section>

            <Section title={t('sections.references')}>
              <p className="muted">{t('labels.referencesAvailable')}</p>
            </Section>
          </aside>
        </div>
      </article>
    </main>
  )
}

function Section({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <section className="section">
      <h3>{title}</h3>
      {children}
    </section>
  )
}

function TimelineBlock({ item }: { item: TimelineItem }) {
  return (
    <article className="entry">
      <div className="entry__header">
        <div>
          <h4>{item.title}</h4>
          <p>{item.organization}</p>
        </div>
        <span>{item.period}</span>
      </div>
      <BulletList items={item.highlights} />
    </article>
  )
}

function ProjectBlock({ project }: { project: Project }) {
  return (
    <article className="entry">
      <div className="entry__header">
        <div>
          <h4>{project.name}</h4>
          <p>{project.description}</p>
        </div>
      </div>
      <TagList items={project.stack} />
      <BulletList items={project.highlights} />
    </article>
  )
}

function SkillGroupBlock({ group }: { group: SkillGroup }) {
  return (
    <div className="skill-group">
      <h4>{group.title}</h4>
      <TagList items={group.items} />
    </div>
  )
}

function TagList({ items }: { items: string[] }) {
  return (
    <ul className="tag-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function waitForNextPaint() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve())
    })
  })
}

function getSupportedLanguage(language: string): SupportedLanguage {
  const normalizedLanguage = language.split('-')[0] as SupportedLanguage

  return supportedLanguages.includes(normalizedLanguage) ? normalizedLanguage : 'en'
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default App
