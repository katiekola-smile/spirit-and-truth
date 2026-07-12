/* sections-a.jsx — Nav, Hero, Verse, Vision, Worship + shared helpers */

/* Resolve an asset URL — uses the bundled blob (window.__resources) when present
   (standalone export), otherwise the relative path (normal viewing). */
function RES(id, path) {
  return typeof window !== 'undefined' && window.__resources && window.__resources[id] || path;
}
const LOGO_CREAM = () => RES('logoCream', 'assets/logo-cream-transparent.png');
const LOGO_RED = () => RES('logoRed', 'assets/logo-red-transparent.png');

const LINKS = {
  partiful: 'https://partiful.com/e/9nf3wZ9JmulEDbplB6Do',
  whatsapp: 'https://chat.whatsapp.com/GgVHw3wVFCeFcpUmpnZprp?mode=gi_t',
  email: 'spiritandtruthwn@gmail.com',
  ig: 'https://www.instagram.com/spiritandtruthwn',
  igHandle: '@spiritandtruthwn'
};

const Arrow = () =>
<svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


/* ---- scroll reveal ---- */
function Reveal({ children, className = '', delay = 0, style }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {setSeen(true);return;}
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {if (e.isIntersecting) {setSeen(true);io.disconnect();}}),
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${seen ? 'is-in' : ''} ${className}`}
    style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}>
      {children}
    </div>);

}

/* ---- nav ---- */
function Nav({ heroIsLight }) {
  const [stuck, setStuck] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const cls = stuck ? 'is-stuck' : heroIsLight ? 'is-stuck' : 'is-top';
  return (
    <nav className={`nav ${cls}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          <img src={LOGO_CREAM()} alt="Spirit & Truth" style={{ display: stuck || !heroIsLight ? 'block' : 'none' }} />
          <img src={LOGO_RED()} alt="Spirit & Truth" style={{ display: stuck || !heroIsLight ? 'none' : 'block' }} />
        </a>
        <div className="nav-links">
          <a href="#vision">Vision</a>
          <a href="#worship">The Night</a>
          <a href="#believe">Believe</a>
          <a href="#churches">Churches</a>
          <a href="#connect">Connect</a>
        </div>
        <div className="nav-cta">
          <a className="btn btn--butter" href={LINKS.partiful} target="_blank" rel="noopener">RSVP <Arrow /></a>
        </div>
      </div>
    </nav>);

}

/* ---- hero ---- */
function HeroMeta() {
  return (
    <div className="hero-meta">
      <div className="mi"><b style={{ fontFamily: 'Helvetica', fontSize: 13 }}>Upcoming</b><span>JULY 17, 2026</span></div>
      <div className="mi"><b style={{ fontFamily: 'Helvetica', fontSize: 13 }}>Location</b><span>CENTRE OF SOCIAL INNOVATION</span></div>
    </div>);

}

function HeroActions() {
  return (
    <div className="hero-actions">
      <a className="btn btn--butter" href={LINKS.partiful} target="_blank" rel="noopener">RSVP on Partiful <Arrow /></a>
      <a className="btn btn--ghost-butter" href={LINKS.whatsapp} target="_blank" rel="noopener">Join our WhatsApp</a>
    </div>);

}

function Hero({ layout }) {
  if (layout === 'split') {
    return (
      <header className="hero hero--split" id="top">
        <div className="hero-left">
          <img className="hero-cross" src={LOGO_CREAM()} alt="Spirit & Truth" />
          <p className="hero-sub">Monthly worship night · Toronto</p>
          <h1 className="hero-title">Worship<br /><em>Night</em></h1>
          <p className="lead" style={{ marginTop: 22, opacity: .9 }}>
            Uniting the Church and reconnecting the lost — building God's Kingdom through worship, prayer and community.
          </p>
          <HeroMeta />
          <HeroActions />
        </div>
        <div className="hero-right">
          <img className="hero-img" src={RES('photoHands', 'assets/photo-hands.jpg')} alt="Hands raised in worship" />
        </div>
      </header>);

  }
  if (layout === 'stacked') {
    return (
      <header className="hero hero--stacked" id="top">
        <div className="hero-top">
          <img className="hero-cross" src={LOGO_RED()} alt="Spirit & Truth" />
          <p className="hero-sub" style={{ color: 'var(--red)' }}>Monthly worship night · Toronto</p>
          <h1 className="hero-title">Worship Night</h1>
          <HeroMeta />
          <HeroActions />
        </div>
        <div className="hero-band">
          <img className="hero-img" src={RES('photoGroup', 'assets/photo-group.jpg')} alt="Worship gathering" />
          <div className="hero-scrim" style={{ background: 'linear-gradient(180deg,rgba(68,2,6,.1),rgba(68,2,6,.35))' }}></div>
        </div>
      </header>);

  }
  // overlay (default)
  return (
    <header className="hero hero--overlay" id="top">
      <div className="hero-photo">
        <img className="hero-img" src={RES('photoCrowd', 'assets/photo-crowd.jpg')} alt="Spirit & Truth worship night" />
      </div>
      <div className="hero-scrim"></div>
      <div className="container hero-inner">
        <p className="hero-sub">Monthly worship night · Toronto</p>
        <h1 className="hero-title" style={{ fontStyle: 'italic' }}>Let's worship together in Spirit &amp; in Truth</h1>
        <HeroMeta />
        <HeroActions />
      </div>
    </header>);

}

/* ---- verse band ---- */
function VerseBand() {
  return (
    <section className="verse">
      <div className="container">
        <Reveal>
          <p className="verse-q">
            “The true worshipers will worship the Father in spirit and in truth, for they are the kind of worshipers the Father seeks.”
            <span className="verse-ref">John 4 : 23–24</span>
          </p>
        </Reveal>
      </div>
    </section>);

}

/* ---- vision / mission ---- */
function Vision() {
  return (
    <section className="section section--red" id="vision">
      <div className="container">
        <div className="vision-grid">
          <div>
            <Reveal><p className="eyebrow">Purpose &amp; Vision</p></Reveal>
            <Reveal delay={60}>
              <h2 className="h2">Uniting the Church and reconnecting the lost to build God’s Kingdom.</h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="body lead" style={{ maxWidth: '40ch', marginTop: '28px' }}>
                <p>Spirit &amp; Truth is a non-denominational, ecumenical worship night. We exist to create a welcoming space where people can worship freely, experience the presence of God, and connect with a kingdom-minded community shaped by truth, love, and obedience.</p>
              </div>
            </Reveal>
          </div>
          <div>
            <div className="pillars">
              {[
              ['01', 'Worship', 'A wholehearted response to who God is and what He has done.'],
              ['02', 'Prayer', 'Space and time set aside to seek God and intercede for the city.'],
              ['03', 'Community', 'Faith-filled action that strengthens existing ministries and local churches.'],
              ['04', 'Outreach', 'Carrying the love of God beyond our walls into the streets and neighbourhoods of Toronto.']].
              map(([n, h, p], i) =>
              <Reveal key={n} delay={i * 80}>
                  <div className="pillar">
                    <span className="pn">{n}</span>
                    <div><h4>{h}</h4><p>{p}</p></div>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---- what we mean by worship ---- */
function WorshipMeaning() {
  return (
    <section className="section section--paper" id="worship">
      <div className="container">
        <div className="split2">
          <Reveal className="media">
            <img className="media-img" src={RES('photoBand', 'assets/photo-band.jpg')} alt="Worship band" />
          </Reveal>
          <div>
            <Reveal><p className="eyebrow">WHAT WORSHIP MEANS TO US</p></Reveal>
            <Reveal delay={60}>
              <h2 className="h2" style={{ color: 'var(--red)' }}>Both response<br />and transformation.</h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="body" style={{ maxWidth: '46ch' }}>
                <p>In the Bible, worship is a wholehearted response to who God is and what He has done– expressed through praise, surrender, repentance, and obedience. Worship is not only something we offer; it is something God uses to form and transform us.</p>
                <p>The name <em className="kicker-serif">Spirit &amp; Truth</em> reflects Jesus' teaching that true worship is led by the Holy Spirit and grounded in the truth of God's Word.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { RES, LOGO_CREAM, LOGO_RED, LINKS, Arrow, Reveal, Nav, Hero, VerseBand, Vision, WorshipMeaning });