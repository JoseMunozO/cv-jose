import { useRef, useState } from 'react'
import './App.css'
import { cv, type Project, type SkillGroup, type TimelineItem } from './data/cv'

function App() {
  const resumeRef = useRef<HTMLElement>(null)
  const [isExporting, setIsExporting] = useState(false)

  const handleDownloadPdf = async () => {
    if (!resumeRef.current || isExporting) {
      return
    }

    setIsExporting(true)

    try {
      await waitForNextPaint()

      const html2pdf = (await import('html2pdf.js')).default
      const pdfOptions = {
        filename: 'jose-carlos-munoz-cv.pdf',
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
          <p className="toolbar__eyebrow">Editable React CV</p>
          <h1>{cv.person.name}</h1>
        </div>
        <button
          type="button"
          onClick={handleDownloadPdf}
          disabled={isExporting}
          aria-label="Ladda ner CV som PDF"
        >
          {isExporting ? 'Skapar PDF...' : 'Ladda ner PDF'}
        </button>
      </div>

      <article
        ref={resumeRef}
        className={`resume ${isExporting ? 'resume--pdf' : ''}`}
        aria-label={`CV for ${cv.person.name}`}
      >
        <header className="resume-header">
          <div className="identity">
            <p className="kicker">Öppen för LIA</p>
            <h2>{cv.person.name}</h2>
            <p className="role">{cv.person.role}</p>
            <p className="headline">{cv.person.headline}</p>
          </div>

          <address className="contact">
            <a href={`mailto:${cv.person.email}`}>{cv.person.email}</a>
            <a href={`tel:${cv.person.phone}`}>{cv.person.phone}</a>
            <span>{cv.person.location}</span>
            {cv.links.map((link) => (
              <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                {link.value}
              </a>
            ))}
          </address>
        </header>

        <section className="section profile-section">
          <h3>Profile</h3>
          <p>{cv.profile}</p>
        </section>

        <div className="resume-grid">
          <div className="main-column">
            <Section title="Projects">
              <div className="stacked-list">
                {cv.projects.map((project) => (
                  <ProjectBlock project={project} key={project.name} />
                ))}
              </div>
            </Section>

            <Section title="Education">
              <div className="stacked-list">
                {cv.education.map((item) => (
                  <TimelineBlock item={item} key={`${item.organization}-${item.title}`} />
                ))}
              </div>
            </Section>

            <Section title="Work Experience">
              <div className="stacked-list compact">
                {cv.experience.map((item) => (
                  <TimelineBlock item={item} key={`${item.organization}-${item.period}`} />
                ))}
              </div>
            </Section>
          </div>

          <aside className="side-column" aria-label="Skills and extra information">
            <Section title="Hard Skills">
              <div className="skill-groups">
                {cv.skills.map((group) => (
                  <SkillGroupBlock group={group} key={group.title} />
                ))}
              </div>
            </Section>

            <Section title="Soft Skills">
              <TagList items={cv.softSkills} />
            </Section>

            <Section title="Languages">
              <ul className="plain-list">
                {cv.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </Section>

            <Section title="Certifications">
              <ul className="plain-list">
                {cv.certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </Section>

            <Section title="References">
              <p className="muted">Available on request.</p>
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

export default App
