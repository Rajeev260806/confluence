import { useEffect, useMemo, useState } from 'react'
import logo75 from './assets/75.jpeg'
import logo100 from './assets/100.jpeg'
import collegeLogo from './assets/college.jpeg'
import iicLogo from './assets/iic.jpeg'
import './App.css'

const eventDate = new Date('2026-02-20T09:00:00+05:30')

const highlights = [
  {
    title: 'Technical Sessions',
    copy:
      'Deep-dive talks with industry leaders, researchers, and innovators covering breakthrough technologies and entrepreneurship trends.',
  },
  {
    title: 'Panel Discussions',
    copy:
      'Interactive conversations that unpack the future of innovation, incubation, and collaborative problem-solving within academia and industry.',
  },
  {
    title: 'Idea Pitching Competition',
    copy:
      'Students, innovators, researchers, and early-stage founders present original ideas in a high-energy pitch arena with expert feedback.',
  },
  {
    title: 'Inventors’ Exhibit',
    copy:
      'A curated showcase of prototypes, working models, and transformative projects that highlight the creative power of PSG Tech.',
  },
]

const sponsorshipReasons = [
  'Connect with emerging startups and innovators.',
  'Engage with top academicians and R&D experts.',
  'Recruit talent and explore collaborations.',
  'Strengthen brand presence among a large, diverse audience.',
]

const sponsorshipCategories = [
  'Platinum Sponsor',
  'Gold Sponsor',
  'Session Sponsor',
  'Stall',
  'Idea Pitching Competition Sponsor',
]

const participationProfiles = [
  'Entrepreneurs & Startup Founders',
  'Innovators & R&D Professionals',
  'Academicians & Researchers',
  'Students & Young Innovators',
  'Industry Experts & Professionals',
  'Investors & Incubation/Innovation Cell Members',
]

const ideaPitchRules = [
  'Open to students, innovators, researchers, and early-stage entrepreneurs.',
  'Individual or team participation (up to 3 members).',
  'Submit a 150–200 word abstract during registration.',
  'Only shortlisted submissions will be invited for the final pitch.',
  'Ideas must be original and not submitted elsewhere.',
  'Judging criteria: problem clarity, innovation, feasibility, impact, presentation.',
  '3-minute pitch followed by a 2-minute Q&A.',
]

const exhibitGuidelines = [
  'Individual inventors, student innovators, R&D teams, and early-stage product developers are invited.',
  'Exhibits must represent an original invention or prototype.',
  'Provide a brief description of the invention during registration.',
  'Working models, demos, or proof-of-concepts are mandatory.',
  'Space and basic display arrangements will be provided.',
  'Participants must be present during exhibit hours to explain their innovation.',
]

const aboutCollege = `PSG College of Technology (PSG Tech), established in 1951 by PSG & Sons' Charities, is an ISO 9001:2015 certified autonomous institution affiliated with Anna University, Chennai. Celebrating its Platinum Jubilee, PSG Tech offers 21 undergraduate and 24 postgraduate programs spanning Engineering and Technology, Computer Applications, Management Sciences, and Basic and Advanced Sciences. The campus hosts state-of-the-art Centers of Excellence including TIFAC-CORE in Product Design, Machine Tool Research Centre, Engineering Design Centre, Virtual Reality Centre, Tool and Die Centre, Centre for Nanotechnology, Centre for Robotics, Centre of Excellence in Artificial Intelligence and Software, Centre for Non-Linear Dynamics, Danfoss Centre of Excellence in Climate and Energy, and the Centre of Excellence in Welding Engineering and Technology. PSG Tech partners closely with industry, operates on-campus manufacturing units, and consistently ranks among India’s top institutions for innovation and industry linkage.`

const aboutEvent = `The Institution’s Innovation Council (IIC) of PSG College of Technology organizes “The Confluence – PSG Tech Innovation & Entrepreneurship Summit 2026” to foster a culture of innovation and entrepreneurial thinking. The summit provides a platform for students, faculty, startups, and industry experts to collaborate, share ideas, and showcase successful projects, startups, IPR achievements, and research outcomes of PSG Tech. Aligned with the national innovation agenda, it strengthens PSG Tech’s position as a leading contributor to India’s innovation ecosystem.`

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date()
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="countdown">
      {['days', 'hours', 'minutes', 'seconds'].map((label) => (
        <div key={label} className="countdown__unit">
          <span className="countdown__value">
            {String(timeLeft[label]).padStart(2, '0')}
          </span>
          <span className="countdown__label">{label}</span>
        </div>
      ))}
    </div>
  )
}

const SectionHeading = ({ kicker, title, subtitle }) => (
  <div className="section-heading">
    {kicker && <span className="section-heading__kicker">{kicker}</span>}
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
)

const GradientCard = ({ title, copy }) => (
  <article className="gradient-card">
    <h3>{title}</h3>
    <p>{copy}</p>
  </article>
)

function App() {
  const eventMeta = useMemo(
    () => ({
      date: 'Friday, Feb 27, 2026',
      venue: 'GRD Centenary Auditorium, PSG Tech, Coimbatore',
    }),
    []
  )

  return (
    <div className="page">
      <nav className="site-nav">
        <span className="site-nav__brand">
          <img src={collegeLogo} alt="PSG College of Technology" className="nav-logo" />
          PSG College of Technology
        </span>
        <div className="site-nav__links">
          <a href="#highlights">Highlights</a>
          <a href="#competitions">Competitions</a>
          <a href="#exhibit">Exhibit</a>
          <a href="#sponsorship">Sponsorship</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a
            className="nav-cta"
            href="https://confluence.psgtech.ac.in"
            target="_blank"
            rel="noreferrer"
          >
            Register Now
          </a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero__grid">
          <div className="hero__main">
            <div className="hero__badge">
              <img src={iicLogo} alt="Institution’s Innovation Council" className="hero-badge__logo" />
              Institution’s Innovation Council Presents
            </div>
            <div className="hero__title-row">
              <div className="hero__title">
                <h1>
                  <span className="hero__title-word">The</span>
                  <span className="hero__title-word hero__title-word--accent">Confluence</span>
                </h1>
                <p className="hero__subtitle">PSG Tech Innovation & Entrepreneurship Summit 2026</p>
              </div>
              <div className="hero__logos hero__logos--pair">
                <img src={logo75} alt="PSG Tech 75 Years" className="hero-logo" />
                <img src={logo100} alt="PSG Centenary" className="hero-logo hero-logo--centenary" />
              </div>
            </div>
            <div className="hero__meta">
              <div>
                <span>Date</span>
                <strong>{eventMeta.date}</strong>
              </div>
              <div>
                <span>Venue</span>
                <strong>{eventMeta.venue}</strong>
              </div>
            </div>
            <div className="hero__countdown">
              <Countdown targetDate={eventDate} />
            </div>

            <section id="highlights" className="section section--compact">
              <div className="grid grid--four">
                {highlights.map((item) => (
                  <GradientCard key={item.title} {...item} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </header>

      <section id="competitions" className="section split-section">
        <div className="panel panel--accent">
          <SectionHeading
            kicker="Idea Pitching Competition"
            title="Showcase your most impactful solutions"
            subtitle="Pitch to industry and academic experts, gain feedback, visibility, and a chance to win exciting prizes."
          />
          <ul className="list list--arrow">
            {ideaPitchRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>
        <div className="panel panel--outline">
          <SectionHeading
            kicker="Inventors’ Exhibit"
            title="Spotlight for breakthrough prototypes"
            subtitle="Creators, innovators, and researchers exhibit working models and disruptive solutions."
          />
          <ul className="list list--arrow">
            {exhibitGuidelines.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="exhibit">
        <SectionHeading
          kicker="Community"
          title="Who Can Participate?"
          subtitle="The Confluence welcomes a diverse community of forward-thinking changemakers."
        />
        <div className="grid grid--chips">
          {participationProfiles.map((profile) => (
            <span key={profile} className="chip">
              {profile}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="sponsorship">
        <SectionHeading
          kicker="Partners"
          title="Sponsorship Opportunities"
          subtitle="Gain exceptional visibility among entrepreneurs, innovators, academicians, industry leaders, and students."
        />
        <div className="sponsorship">
          <div>
            <h3>Why Sponsor?</h3>
            <ul className="list list--dot">
              {sponsorshipReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
      <div>
            <h3>Sponsorship Categories</h3>
            <ul className="list list--dot">
              {sponsorshipCategories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="note">For more details please contact the organizers.</p>
      </section>

      <section className="section" id="registration">
        <SectionHeading
          kicker="Registration Details"
          title="Secure your spot online"
          subtitle="Participants can register through the event portal. Early submissions are encouraged for curated slots."
        />
      </section>

      <section className="section about" id="about">
        <div className="panel panel--outline">
          <SectionHeading kicker="The College" title="PSG College of Technology" />
          <p>{aboutCollege}</p>
        </div>
        <div className="panel panel--accent">
          <SectionHeading kicker="The Confluence" title="Innovation & Entrepreneurship Summit" />
          <p>{aboutEvent}</p>
          <ul className="list list--dot">
            <li>
              Provide a platform for students, faculty, startups, and industry experts to collaborate and
              exchange innovative ideas.
            </li>
            <li>
              Conduct workshops, keynote sessions, panel discussions, and exhibitions that promote
              innovation and entrepreneurship.
            </li>
            <li>
              Showcase successful projects, startups, IPR achievements, and research outcomes of PSG Tech.
            </li>
            <li>
              Strengthen PSG Tech’s role in India’s innovation ecosystem under the IIC framework.
            </li>
            <li>
              Identify and nurture early-stage student innovations for pre-incubation and incubation support.
            </li>
          </ul>
        </div>
      </section>

      <section className="section contact" id="contact">
        <SectionHeading kicker="Contact Details" title="Connect with The Confluence Team" />
        <div className="contact__grid">
          <div className="contact__card">
            <strong>Institution’s Innovation Council</strong>
            <p>
              PSG College of Technology
              <br />
              Peelamedu, Coimbatore – 641 004
            </p>
          </div>
          <div className="contact__card">
            <p>
              Website:{' '}
              <a href="https://confluence.psgtech.ac.in" target="_blank" rel="noreferrer">
                https://confluence.psgtech.ac.in
              </a>
            </p>
            <p>Email: <a href="mailto:confluence@psgtech.ac.in">confluence@psgtech.ac.in</a></p>
            <p>Mobile: <a href="tel:+919952418357">+91 99524 18357</a></p>
          </div>
        </div>
      </section>

      <div className="back-to-top">
        <a href="#top" aria-label="Back to top">
          <span>↑</span>
        </a>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Institution’s Innovation Council · PSG College of Technology</p>
      </footer>
      </div>
  )
}

export default App
