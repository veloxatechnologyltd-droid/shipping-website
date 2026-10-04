import { useEffect, useRef, useState } from 'react'

const images = {
  hero: '/images/hero-suv.webp',
  drive: '/images/night-drive.webp',
  interior: '/images/interior.webp',
  front: '/images/front-detail.webp',
  cargo: '/images/open-cargo.webp',
  sedan: '/images/red-sedan.webp',
  silver: '/images/silver-suv.webp',
}

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value))

const services = [
  { number: '01', icon: '↗', title: 'Ship a car', copy: 'Bring your next vehicle to Ghana with a clear path from sourcing to arrival.', link: 'Explore shipping', target: '#shipping' },
  { number: '02', icon: '◈', title: 'Buy a car', copy: 'Explore the kind of sedans and SUVs Ghana drivers keep coming back to.', link: 'Explore vehicles', target: '#vehicles' },
  { number: '03', icon: '⌁', title: 'Rent a car', copy: 'Find the right ride for business, travel, or the days that call for more freedom.', link: 'Explore rentals', target: '#rentals' },
  { number: '04', icon: '▣', title: 'Shop imports', copy: 'Discover merchandise and American products brought closer to home.', link: 'Explore goods', target: '#merchandise' },
]

const chapters = [
  { eyebrow: '01 / THE ARRIVAL', title: 'FEEL THE\nMOMENT.', copy: 'The road opens up. A new possibility comes into view.' },
  { eyebrow: '02 / THE DRIVE', title: 'MADE TO\nMOVE.', copy: 'The city fades behind you. The journey is all yours.' },
  { eyebrow: '03 / THE FRONT', title: 'MAKE AN\nENTRANCE.', copy: 'A sharp light signature and a bold front give this SUV its presence.' },
  { eyebrow: '04 / THE FORM', title: 'EVERY LINE\nCOUNTS.', copy: 'Pause the action. Take in the shape, stance, and details up close.' },
  { eyebrow: '05 / THE CABIN', title: 'STEP\nINSIDE.', copy: 'A calm, considered space changes how the journey feels.' },
  { eyebrow: '06 / THE SPACE', title: 'ROOM FOR\nMORE.', copy: 'Open the back and picture everything the next chapter could hold.' },
]

type VehicleView = 'exterior' | 'front' | 'interior' | 'cargo'

const featureDetails: { number: string, label: string, title: string, copy: string, image: string, alt: string, className?: string }[] = [
  { number: '01', label: 'THE FRONT', title: 'A FIRST IMPRESSION THAT STAYS.', copy: 'Sculpted surfaces, a patterned grille, and a crisp light signature make this concept SUV hard to ignore.', image: images.front, alt: 'Close view of the blue SUV front lighting and grille' },
  { number: '02', label: 'THE PROFILE', title: 'CONFIDENCE FROM EVERY ANGLE.', copy: 'The deep blue finish, raised stance, and wheel design bring the whole silhouette together.', image: images.hero, alt: 'Three-quarter view of the blue SUV exterior', className: 'gallery-contain' },
  { number: '03', label: 'THE CABIN', title: 'THE BEST VIEW IS FROM INSIDE.', copy: 'Open the door to a welcoming cabin with contrasting textures, generous glass, and a composed dashboard.', image: images.interior, alt: 'Interior view through the open door of the concept SUV' },
  { number: '04', label: 'THE SPACE', title: 'ROOM FOR THE LIFE YOU LIVE.', copy: 'A wide opening and flexible rear space invite plans that go beyond the everyday drive.', image: images.cargo, alt: 'Open rear cargo area of a matching concept SUV' },
]

function Wordmark({ light = false }: { light?: boolean }) {
  return <a className={`wordmark ${light ? 'wordmark-light' : ''}`} href="#top" aria-label="Eram Shipping and Motors, back to top">
    <span className="brand-symbol" aria-hidden="true"><span /></span>
    <span className="brand-name">ERAM<span>SHIPPING & MOTORS</span></span>
  </a>
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow-icon">{diagonal ? '↗' : '→'}</span>
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey) }
  }, [])
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
    <div className="header-inner container">
      <Wordmark />
      <nav className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
        <a onClick={() => setOpen(false)} href="#experience">Experience</a>
        <a onClick={() => setOpen(false)} href="#services">What we do</a>
        <a onClick={() => setOpen(false)} href="#vehicles">Vehicles</a>
        <a onClick={() => setOpen(false)} href="#shipping">Shipping</a>
        <a onClick={() => setOpen(false)} href="#merchandise">Merchandise</a>
        <a className="nav-call" onClick={() => setOpen(false)} href="tel:+233241248393"><small>CALL ERAM · GHANA</small>+233 24 124 8393</a>
      </nav>
      <a className="header-cta" href="#contact">LET'S TALK <Arrow diagonal /></a>
      <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
    </div>
  </header>
}

function Hero({ scrollY }: { scrollY: number }) {
  const motion = clamp(scrollY / 780)
  return <section className="hero" id="top">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-glow" aria-hidden="true" />
    <div className="hero-content container">
      <div className="hero-copy">
        <div className="eyebrow"><span className="red-rule" /> GHANA MOVES WITH ERAM</div>
        <h1>BUILT FOR<br /><em>THE JOURNEY.</em></h1>
        <p>Cars to ship. Cars to own. Cars to drive today. American goods brought to Ghana. Your next move starts here.</p>
        <div className="hero-actions">
          <a className="button button-red" href="#experience">EXPLORE THE EXPERIENCE <Arrow /></a>
          <a className="text-link" href="#services">WHAT WE DO <Arrow /></a>
        </div>
      </div>
      <div className="hero-art" aria-label="Illustrative dark blue SUV">
        <div className="hero-ring hero-ring-one" aria-hidden="true" />
        <div className="hero-ring hero-ring-two" aria-hidden="true" />
        <div className="hero-art-inner" style={{ transform: `translate3d(${motion * 65}px, ${motion * -18}px, 0) rotateY(${-motion * 13}deg) rotateZ(${motion * -2}deg) scale(${1 + motion * .09})` }}>
          <img src={images.hero} alt="Dark blue concept SUV" fetchPriority="high" />
        </div>
        <span className="hero-art-label">THE ERAM EXPERIENCE <b>001</b></span>
      </div>
    </div>
    <div className="hero-footer container">
      <span>SHIP <b>•</b> DRIVE <b>•</b> DISCOVER</span>
      <a href="#experience" className="scroll-cue">SCROLL TO EXPLORE <span className="scroll-line" /></a>
      <span>GHANA <i>↗</i> USA</span>
    </div>
  </section>
}

function Experience({ progress, sectionRef }: { progress: number, sectionRef: React.RefObject<HTMLElement | null> }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [manualView, setManualView] = useState<VehicleView | null>(null)
  const phase = Math.min(chapters.length - 1, Math.floor(progress * chapters.length))
  useEffect(() => setManualView(null), [phase])
  const defaultView: VehicleView = phase === 2 ? 'front' : phase === 4 ? 'interior' : phase === 5 ? 'cargo' : 'exterior'
  const activeView = manualView ?? defaultView
  const travel = clamp(progress / (2 / chapters.length))
  const braking = clamp((progress - 1 / chapters.length) / (1 / chapters.length))
  const reveal = clamp((progress - 2 / chapters.length) / (1 / chapters.length))
  const roadOpacity = 1 - clamp((progress - .28) / .13)
  const speed = Math.round(118 * (1 - braking))
  const showChapter = (index: number) => {
    setManualView(null)
    const el = sectionRef.current
    if (!el) return
    const room = el.offsetHeight - window.innerHeight
    window.scrollTo({ top: el.offsetTop + room * ((index + .12) / chapters.length), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  return <section className="experience" id="experience" ref={sectionRef}>
    <div className="experience-sticky">
      <div className="drive-backdrop" style={{ opacity: roadOpacity }} aria-hidden="true" />
      <div className="showroom-backdrop" style={{ opacity: 1 - roadOpacity }} aria-hidden="true"><div className="showroom-grid" /></div>
      <div className="speed-streaks" style={{ opacity: clamp(1 - braking * 1.7), transform: `translateX(${-travel * 12}%)` }} aria-hidden="true"><i /><i /><i /></div>
      <div className="experience-top container">
        <span className="section-kicker"><span className="red-dot" /> THE FEATURED DRIVE</span>
        <span className="experience-counter">0{phase + 1} <span>/ 0{chapters.length}</span></span>
      </div>
      <div className="experience-content container">
        <div className="chapter-copy" key={phase}>
          <span className="mini-label">{chapters[phase].eyebrow}</span>
          <h2>{chapters[phase].title.split('\n').map((line) => <span key={line}>{line}</span>)}</h2>
          <p>{chapters[phase].copy}</p>
          {phase >= 2 && <div className="view-switch" role="group" aria-label="Vehicle view">
            {([['exterior', 'EXTERIOR'], ['front', 'FRONT'], ['interior', 'CABIN'], ['cargo', 'CARGO']] as const).map(([view, label]) => <button key={view} type="button" className={activeView === view ? 'selected' : ''} aria-pressed={activeView === view} onClick={() => setManualView(view)}>{label}</button>)}
          </div>}
          {phase >= 2 && <a href="#feature-gallery" className="story-detail-link">DISCOVER THE DETAILS <Arrow diagonal /></a>}
          {phase === 5 && <a href="tel:+233241248393" className="story-call">ASK ERAM ABOUT AN SUV LIKE THIS <Arrow diagonal /></a>}
        </div>
        <div className={`story-car view-${activeView}`} onPointerMove={(event) => {
          if (event.pointerType === 'touch') return
          const box = event.currentTarget.getBoundingClientRect()
          setTilt({ x: ((event.clientX - box.left) / box.width - .5) * 8, y: ((event.clientY - box.top) / box.height - .5) * -5 })
        }} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
          <div className="car-shadow" style={{ opacity: .32 + reveal * .32 }} />
          <img className="story-exterior" src={images.hero} alt="Illustrative blue SUV rotating toward a showroom view" style={{ transform: `translate3d(${(-25 + travel * 20 + reveal * 4)}%, ${(-3 + braking * 3)}%, 0) rotateY(${(12 - travel * 12 - reveal * 9 + tilt.x)}deg) rotateX(${tilt.y}deg) rotateZ(${braking * -1.5}deg) scale(${.83 + travel * .12 + reveal * .08})` }} />
          <div className="detail-reveal" aria-hidden={activeView !== 'front'}><img src={images.front} alt="" /><span>THE FRONT SIGNATURE <i>↗</i></span></div>
          <div className="interior-reveal" aria-hidden={activeView !== 'interior'}><img src={images.interior} alt="" /><span>INSIDE THE DRIVE <i>↗</i></span></div>
          <div className="cargo-reveal" aria-hidden={activeView !== 'cargo'}><img src={images.cargo} alt="" /><span>SPACE TO GO FURTHER <i>↗</i></span></div>
          <div className="car-point point-one" style={{ opacity: reveal * (activeView === 'exterior' ? 1 : 0) }}><b>01</b><span>SCULPTED PROFILE</span></div>
          <div className="car-point point-two" style={{ opacity: reveal * (activeView === 'exterior' ? 1 : 0) }}><b>02</b><span>CONFIDENT STANCE</span></div>
        </div>
      </div>
      <div className="experience-bottom container">
        <div className="chapter-nav" aria-label="Experience chapters">{chapters.map((chapter, index) => <button key={chapter.eyebrow} type="button" className={phase === index ? 'active' : ''} onClick={() => showChapter(index)} aria-label={`Go to ${chapter.eyebrow.toLowerCase()}`}><span /><small>0{index + 1}</small></button>)}</div>
        <span className="story-hint">{phase < 2 ? <><span className="speed-number">{speed}</span> KM/H <span className="speed-caption">SCROLL TO BRAKE</span></> : phase === 5 ? <a href="#contact">ASK ERAM ABOUT AN SUV LIKE THIS <Arrow diagonal /></a> : 'CHOOSE A VIEW TO LOOK CLOSER'}</span>
      </div>
      <div className="experience-progress" style={{ width: `${progress * 100}%` }} />
    </div>
  </section>
}

function FeatureGallery() {
  const [selected, setSelected] = useState(0)
  const feature = featureDetails[selected]
  return <section className="feature-gallery" id="feature-gallery">
    <div className="container">
      <div className="feature-gallery-heading"><div><span className="section-kicker"><span className="red-dot" /> LOOK A LITTLE CLOSER</span><h2>IT'S THE DETAILS<br /><em>YOU REMEMBER.</em></h2></div><p>Explore four views of the featured concept SUV. The feeling starts with the design; Eram can help you find out what is actually available.</p></div>
      <div className="feature-gallery-layout">
        <div className={`feature-gallery-image ${feature.className ?? ''}`} key={feature.image}><img src={feature.image} alt={feature.alt} loading="lazy" /><span className="image-corner top-left" /><span className="image-corner bottom-right" /><div className="feature-image-caption"><span>FEATURE VIEW / {feature.number}</span><span>ERAM MOTORS CONCEPT</span></div></div>
        <div className="feature-gallery-info"><div className="feature-tabs" role="tablist" aria-label="Explore vehicle details" onKeyDown={(event) => {
          const next = event.key === 'ArrowRight' ? (selected + 1) % featureDetails.length : event.key === 'ArrowLeft' ? (selected - 1 + featureDetails.length) % featureDetails.length : event.key === 'Home' ? 0 : event.key === 'End' ? featureDetails.length - 1 : null
          if (next === null) return
          event.preventDefault()
          setSelected(next)
          event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus()
        }}>{featureDetails.map((item, index) => <button type="button" key={item.number} id={`feature-tab-${index}`} role="tab" tabIndex={selected === index ? 0 : -1} aria-selected={selected === index} aria-controls="feature-detail" className={selected === index ? 'active' : ''} onClick={() => setSelected(index)}><span>{item.number}</span>{item.label}<b>↗</b></button>)}</div><div className="feature-description" id="feature-detail" role="tabpanel" aria-labelledby={`feature-tab-${selected}`}><span>{feature.number} / 04</span><h3>{feature.title}</h3><p>{feature.copy}</p><a href="tel:+233241248393">CALL ERAM ABOUT AN SUV LIKE THIS <Arrow diagonal /></a></div></div>
      </div>
      <div className="feature-gallery-footer"><span>ILLUSTRATIVE CONCEPT VEHICLE</span><span>REAL VEHICLE DETAILS AND AVAILABILITY ON REQUEST</span></div>
    </div>
  </section>
}

function Services() {
  return <section className="services-section" id="services">
    <div className="container">
      <div className="section-heading split-heading"><div><span className="section-kicker dark"><span className="red-dot" /> MORE THAN THE DRIVE</span><h2>ONE COMPANY.<br /><em>MORE WAYS TO MOVE.</em></h2></div><p>From bringing a vehicle across the ocean to finding your next ride or imported essentials, Eram connects the journey.</p></div>
      <div className="services-grid">{services.map((service) => <a key={service.title} href={service.target} className="service-card"><div className="service-top"><span>{service.number} / SERVICE</span><span className="service-icon">{service.icon}</span></div><div><h3>{service.title}</h3><p>{service.copy}</p></div><span className="service-link">{service.link} <Arrow /></span></a>)}</div>
    </div>
  </section>
}

function Vehicles() {
  return <section className="vehicles-section" id="vehicles">
    <div className="container">
      <div className="section-heading vehicle-heading"><div><span className="section-kicker"><span className="red-dot" /> THE VEHICLE EDIT</span><h2>FIND YOUR<br /><em>NEXT DRIVE.</em></h2></div><p>Explore the styles Ghana drivers often look for. These concept visuals show what Eram can help you discuss and source; availability is confirmed by the team.</p></div>
      <div className="vehicle-grid">
        <article className="vehicle-card vehicle-featured"><img src={images.silver} alt="Illustrative silver compact SUV parked in a Ghana city setting" loading="lazy" /><div className="vehicle-gradient" /><div className="vehicle-text"><span>01 / THE EVERYDAY SUV</span><h3>SPACE FOR<br />WHAT'S NEXT.</h3><a href="#contact">ASK ABOUT SUVs <Arrow diagonal /></a></div></article>
        <article className="vehicle-card"><img src={images.sedan} alt="Illustrative red compact sedan parked in a Ghana city setting" loading="lazy" /><div className="vehicle-gradient" /><div className="vehicle-text"><span>02 / THE CITY SEDAN</span><h3>OWN THE<br />OPEN ROAD.</h3><a href="#contact">ASK ABOUT SEDANS <Arrow diagonal /></a></div></article>
      </div>
      <div className="vehicle-note"><span>INSPIRED BY IN-DEMAND IMPORT STYLES</span><span>Illustrative vehicles • Model and stock details on request</span></div>
    </div>
  </section>
}

function Shipping() {
  return <section className="shipping-section" id="shipping">
    <div className="shipping-image" aria-hidden="true" />
    <div className="container shipping-content">
      <span className="section-kicker"><span className="red-dot" /> SHIPPING TO GHANA</span>
      <h2>FROM THERE<br /><em>TO HERE.</em></h2>
      <p>Have a car in mind? Tell us what you want to bring to Ghana. We’ll help you start the conversation about sourcing, shipping, and the next steps.</p>
      <div className="route"><div><span>01</span><b>SOURCE</b></div><i /><div><span>02</span><b>SHIP</b></div><i /><div><span>03</span><b>ARRIVE</b></div></div>
      <a className="button button-red" href="#contact">ASK ABOUT SHIPPING <Arrow /></a>
    </div>
  </section>
}

function RentalsAndGoods() {
  return <section className="more-section" id="rentals"><div className="container more-grid">
    <div className="more-card rental-card"><div className="more-top"><span>03 / RENTALS</span><span>↗</span></div><div><h2>GO WHERE<br /><em>THE DAY TAKES YOU.</em></h2><p>Need a vehicle for a trip, work, or a special moment? Tell us your dates and the kind of ride you need.</p><a href="#contact">ASK ABOUT RENTALS <Arrow /></a></div></div>
    <div className="more-card goods-card" id="merchandise"><div className="more-top"><span>04 / MERCHANDISE</span><span>↗</span></div><div><h2>MORE FROM<br /><em>AMERICA.</em></h2><p>American products and imported merchandise, brought within reach in Ghana. Ask what is currently available.</p><a href="#contact">ASK ABOUT MERCHANDISE <Arrow /></a></div></div>
  </div></section>
}

function Contact() {
  return <section className="contact-section" id="contact"><div className="container contact-grid"><div><span className="section-kicker"><span className="red-dot" /> YOUR NEXT MOVE</span><h2>READY TO<br /><em>MAKE IT HAPPEN?</em></h2><p>Tell Eram what you’re looking for, whether it’s a vehicle, a shipment, a rental, or imported goods.</p></div><div className="contact-card"><span>START THE CONVERSATION</span><h3>Tell us what<br />moves you.</h3><p>Call the team to ask about vehicles, shipping, rentals, or American products.</p><div className="contact-lines"><a href="tel:+233241248393"><small>GHANA</small><strong>+233 24 124 8393</strong><Arrow diagonal /></a><a href="tel:+12406258512"><small>UNITED STATES</small><strong>+1 240 625 8512</strong><Arrow diagonal /></a></div></div></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-main"><div><Wordmark light /><p>Shipping. Motors. Merchandise.<br />Moving Ghana forward.</p></div><div className="footer-links"><a href="#experience">Experience</a><a href="#services">Services</a><a href="#vehicles">Vehicles</a><a href="#shipping">Shipping</a><a href="#contact">Contact</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ERAM SHIPPING & MOTORS</span><span>MADE FOR THE JOURNEY <i>↗</i></span><a href="#top">BACK TO TOP ↑</a></div></div></footer>
}

function MobileBar({ scrollY }: { scrollY: number }) {
  const [covered, setCovered] = useState<string[]>([])
  useEffect(() => {
    // Hide the bar where it would cover the story's own controls or duplicate the contact card.
    const ids = ['experience', 'contact']
    const observer = new IntersectionObserver((entries) => setCovered((now) => {
      const next = new Set(now)
      entries.forEach((entry) => entry.isIntersecting ? next.add(entry.target.id) : next.delete(entry.target.id))
      return [...next]
    }), { threshold: .15 })
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])
  const visible = scrollY > 520 && covered.length === 0
  return <div className={`mobile-bar ${visible ? 'is-visible' : ''}`} aria-hidden={!visible}>
    <a href="tel:+233241248393" tabIndex={visible ? 0 : -1} className="mobile-bar-main">CALL GHANA <Arrow diagonal /></a>
    <a href="tel:+12406258512" tabIndex={visible ? 0 : -1} className="mobile-bar-alt">USA</a>
  </div>
}

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  const [progress, setProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setScrollY(window.scrollY)
        const section = sectionRef.current
        if (section) {
          const rect = section.getBoundingClientRect()
          setProgress(clamp(-rect.top / Math.max(1, rect.height - window.innerHeight)))
        }
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])
  return <><Header /><main><Hero scrollY={scrollY} /><Experience progress={progress} sectionRef={sectionRef} /><FeatureGallery /><Services /><Vehicles /><Shipping /><RentalsAndGoods /><Contact /></main><Footer /><MobileBar scrollY={scrollY} /></>
}
