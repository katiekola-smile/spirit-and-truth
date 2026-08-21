import React from 'react';
import { RES, LOGO_CREAM, LINKS, Arrow, Reveal } from './sections-a.jsx';

/* sections-b.jsx — Structure, SetList, Foundations, Events, Connect, Churches, Instagram, Footer */

/* ---- structure of the night ---- */
function Structure() {
  const rows = [
  ['7:00', 'Doors open & Community time'],
  ['7:30', 'Worship begins'],
  ['8:15', 'Quiet time & Prayer'],
  ['8:30', 'Worship continues'],
  ['9:30', 'Closing']];

  return (
    <section className="section section--deep" id="night">
      <div className="container">
        <Reveal><p className="eyebrow">Structure of the night</p></Reveal>
        <Reveal delay={60}>
          <h2 className="h2">What a night<br />looks like.</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="body lead" style={{ maxWidth: '52ch', marginBottom: 12, width: "600px" }}>Every gathering is thoughtfully structured, making space for Scripture, prayer, worship, and responsiveness to the Holy Spirit.

          </p>
        </Reveal>
        <div className="timeline">
          {rows.map(([t, h, p, tag], i) =>
          <Reveal key={t} delay={i * 60}>
              <div className="tl-row">
                <div className="tl-time">{t}</div>
                <div className="tl-body">
                  <h4>{h}</h4>
                  {p && <p>{p}</p>}
                  {tag && <span className="tl-tag">{tag}</span>}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ---- set list ---- */
/* Paste your Spotify playlist link below (Share → Copy link to playlist). */
const SPOTIFY_PLAYLIST = 'YOUR_SPOTIFY_PLAYLIST_URL';

function SetList() {
  const hasSpotify = SPOTIFY_PLAYLIST && !SPOTIFY_PLAYLIST.startsWith('YOUR_');
  return (
    <section className="section section--paper2">
      <div className="container">
        <div className="setlist-wrap">
          <div>
            <Reveal><p className="eyebrow">Recent set list</p></Reveal>
            <Reveal delay={60}>
              <h2 className="h2" style={{ color: 'var(--red)' }}>What we've<br />been singing.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="body" style={{ maxWidth: '34ch' }}>
                Songs are chosen <strong>prayerfully and intentionally</strong> to reflect a full biblical expression of honour, praise, the gospel, repentance, renewal and hope. Set lists change every month.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div style={{ marginTop: 28 }}>
                <a className="btn btn--red" href={hasSpotify ? SPOTIFY_PLAYLIST : '#'} target="_blank" rel="noopener">
                  Listen on Spotify <Arrow />
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal className="setlist-media">
            <img className="media-img" src={RES('photoGroup', 'assets/photo-group.jpg')} alt="Worship set" />
          </Reveal>
        </div>
      </div>
    </section>);

}

/* ---- foundations ---- */
function Foundations() {
  const beliefs = [
  'The death and resurrection of Jesus Christ',
  'The Holy Trinity',
  'God as Creator',
  'The authority of Scripture',
  'Salvation through Jesus’ sacrifice',
  'A transformed, covenant life of repentance & obedience'];

  return (
    <section className="section section--red" id="believe">
      <div className="container">
        <Reveal><p className="eyebrow">Foundations — what we believe</p></Reveal>
        <Reveal delay={60}>
          <h2 className="h2" style={{ maxWidth: '24ch' }}>A faith rooted in Scripture, centered on Christ.</h2>
        </Reveal>
        <div className="beliefs">
          {beliefs.map((b, i) =>
          <Reveal key={b} delay={i % 2 * 60}>
              <div className="belief">
                <span className="bn">{String(i + 1).padStart(2, '0')}</span>
                <h4>{b}</h4>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ---- events / rsvp ---- */
function Events() {
  return (
    <section className="section section--paper" id="events">
      <div className="container">
        <Reveal><p className="eyebrow" style={{ color: 'var(--red)' }}>Upcoming</p></Reveal>
        <div className="events">
          <Reveal>
            <div className="event-card" style={{ backgroundColor: "#f8f2c8" }}>
              <span className="etag">Next gathering</span>
              <h3 className="ename">Worship Night Vol. 7</h3>
              <div className="event-rows">
                <div className="er"><span style={{ fontFamily: "Helvetica", fontSize: 15 }}>Date</span><span style={{ fontFamily: "Helvetica", fontSize: 15 }}>August 21, 2026</span></div>
                <div className="er"><span style={{ fontFamily: "Helvetica", fontSize: 13 }}>TIME</span><span style={{ fontFamily: "Helvetica", fontSize: 13 }}>7:00-10:30 PM</span></div>
                <div className="er"><span style={{ fontFamily: "Helvetica", fontSize: 15 }}>Location</span><span style={{ fontFamily: "Helvetica", fontSize: 15 }}>CENTRE OF SOCIAL INNOVATION</span></div>
              </div>
              <a className="btn btn--red" href={LINKS.partiful} target="_blank" rel="noopener">RSVP on Partiful <Arrow /></a>
            </div>
          </Reveal>
          <Reveal delay={100} className="event-side">
            <h3 className="monthly" style={{ color: 'var(--red)' }}>We gather monthly across the city.</h3>
            <p className="body" style={{ maxWidth: '40ch' }}>Find dates, locations and RSVP details for all of our events on Partiful.

            </p>
            <div style={{ marginTop: 26 }}>
              <a className="btn btn--ghost-red" href={LINKS.partiful} target="_blank" rel="noopener">See all events <Arrow /></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

/* ---- connect / join the team ---- */
function ChatIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ display: 'block' }}>
      <path d="M4 5.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3.2V16.5H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="8.5" cy="11" r="1.05" fill="currentColor" />
      <circle cx="12" cy="11" r="1.05" fill="currentColor" />
      <circle cx="15.5" cy="11" r="1.05" fill="currentColor" />
    </svg>);

}
function IgIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ display: 'block' }}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" />
    </svg>);

}
function SmileIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ display: 'block' }}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.5 14c.9 1.2 2.1 1.9 3.5 1.9s2.6-.7 3.5-1.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="9.2" cy="9.8" r="1.05" fill="currentColor" />
      <circle cx="14.8" cy="9.8" r="1.05" fill="currentColor" />
    </svg>);

}
function Connect() {
  const cards = [
  [<ChatIcon key="chat" />, 'Join us on WhatsApp', "Stay in the loop with our events, locations, and what's happening in our community.", 'Join the group', LINKS.whatsapp],
  [<SmileIcon key="smile" />, 'Serve on a team', "Across the welcome team, prayer team, band, and outreach team, there's a place for you. Let's find your fit.", 'Email us', `mailto:${LINKS.email}?subject=${encodeURIComponent("I'd like to join the team")}`],
  [<IgIcon key="ig" />, 'Follow along', 'Catch set lists, recaps, and behind-the-scenes from every night over on Instagram.', LINKS.igHandle, LINKS.ig]];

  return (
    <section className="section section--red" id="connect">
      <div className="container">
        <Reveal><p className="eyebrow">Get involved</p></Reveal>
        <Reveal delay={60}>
          <h2 className="h2" style={{ maxWidth: '15ch' }}>Come worship. Stay to build.</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="body lead" style={{ maxWidth: '50ch' }}>
            We're always praying for people to serve and grow with us. Whether you sing, play, pray, or simply love to welcome people — there's room for you.
          </p>
        </Reveal>
        <div className="connect-grid">
          {cards.map(([icon, h, p, link, href], i) =>
          <Reveal key={h} delay={i * 80}>
              <a className="connect-card" href={href} target="_blank" rel="noopener">
                <span className="ci">{icon}</span>
                <h4>{h}</h4>
                <p>{p}</p>
                <span className="clink">{link} <Arrow /></span>
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ---- suggested churches ---- */
function Churches() {
  const churches = [
  ['Vivid Church', 'Toronto', '213 Sterling Rd, Unit 105 - Sundays @ 11am'],
  ['St. George', 'Grange Park, Toronto', '30 Stephanie St - Sundays @ 4pm', 'https://maps.app.goo.gl/x7j6Jkhr6E5Hxrs3A'],
  ['Portico Church', 'Mississauga', '1814 Barbertown Rd - Sundays 9:15am / 11:15am'],
  ['Hope Bible Church', 'Markham', '8176 McCowan Rd - Sundays @ 9am / 11am']];

  const mapUrl = (name, loc, addr) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ', ' + addr + ', ' + loc)}`;
  return (
    <section className="section section--paper2" id="churches">
      <div className="container">
        <Reveal><p className="eyebrow">Find a church home</p></Reveal>
        <Reveal delay={60}>
          <h2 className="h2" style={{ color: 'var(--red)', maxWidth: '18ch' }}>Churches we'd love to point you toward.</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="body" style={{ maxWidth: '52ch' }}>The local church is a great foundation for discipleship, accountability and long-term growth. If you're looking for a community to call home, here are a few we love.

          </p>
        </Reveal>
        <div className="church-grid">
          {churches.map(([name, loc, addr, link], i) =>
          <Reveal key={name} delay={i % 2 * 70}>
              <a className="church-card" href={link || mapUrl(name, loc, addr)} target="_blank" rel="noopener">
                <div className="cinfo">
                  <p className="cloc">{loc}</p>
                  <h4>{name}</h4>
                  <p className="caddr">{addr}</p>
                </div>
                <span className="cgo"><Arrow /></span>
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ---- instagram ---- */
/* ============================================================
   LIVE INSTAGRAM FEED  —  Elfsight widget
   The Elfsight platform script (loaded in index.html) hydrates the
   .elfsight-app-* div below into the live @spiritandtruthwn feed.
   To swap feeds, replace the class id with your own Elfsight app id.
   ============================================================ */
function Instagram() {
  React.useEffect(() => {
    const root = document.getElementById('instagram');
    if (!root) return;
    const strip = () => {
      root.querySelectorAll('a').forEach((a) => {
        if (/free instagram feed widget/i.test(a.textContent || '')) {
          a.style.display = 'none';
        }
      });
    };
    strip();
    const mo = new MutationObserver(strip);
    mo.observe(root, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);
  return (
    <section className="section section--deep" id="instagram">
      <div className="container">
        <div className="ig-head">
          <div>
            <Reveal><p className="eyebrow">FIND US ON INSTAGRAM</p></Reveal>
            <Reveal delay={60}><div className="ig-handle">{LINKS.igHandle}</div></Reveal>
          </div>
          <Reveal delay={80}>
            <a className="btn btn--butter" href={LINKS.ig} target="_blank" rel="noopener">Follow us <Arrow /></a>
          </Reveal>
        </div>
        <Reveal>
          <div className="ig-embed ig-live">
            <div className="elfsight-app-ec97891e-a341-40f8-97f6-9f36d5f9b9c4" data-elfsight-app-lazy></div>
          </div>
        </Reveal>
      </div>
    </section>);

}

/* ---- footer ---- */
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <img className="footer-cross" src={LOGO_CREAM()} alt="Spirit & Truth" />
            <p className="footer-tagline">Uniting the Church in worship, prayer &amp; community.</p>
          </div>
          <div>
            <h5>Explore</h5>
            <div className="footer-links">
              <a href="#vision">Our Vision</a>
              <a href="#night">The Night</a>
              <a href="#believe">What We Believe</a>
              <a href="#churches">Suggested Churches</a>
            </div>
          </div>
          <div>
            <h5>Connect</h5>
            <div className="footer-links">
              <a href={LINKS.partiful} target="_blank" rel="noopener">Events on Partiful <Arrow /></a>
              <a href={LINKS.whatsapp} target="_blank" rel="noopener">WhatsApp Group <Arrow /></a>
              <a href={LINKS.ig} target="_blank" rel="noopener">Instagram <Arrow /></a>
              <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Spirit &amp; Truth Worship Night · Toronto</span>
        </div>
      </div>
    </footer>);

}

export { Structure, SetList, Foundations, Events, Connect, Churches, Instagram, Footer };