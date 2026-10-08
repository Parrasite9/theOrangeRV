import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { inventoryWithIds } from "./Component/Product/Inventory";

const phone = "+14323019668";
const money = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
// Keep original listing IDs and prices. The first four records are demo inventory with nonexistent photos.
const listings = inventoryWithIds
  .filter((rv) => !rv.image.includes("modelType"))
  .map((rv) => ({
    ...rv,
    image: rv.image.replace("/wilderness/", "/Wilderness/"),
    album: rv.album.map((src) => src.replace("/wilderness/", "/Wilderness/")),
    category: rv.type === "Fifth" ? "Fifth wheels" : "Travel trailers",
  }));
const categories = [
  {
    name: "Travel trailers",
    image: "travelTrailer.png",
    text: "A little home. A lot of possibility.",
  },
  {
    name: "Fifth wheels",
    image: "fifthWheel.png",
    text: "Room to settle into the journey.",
  },
  {
    name: "Pop-up campers",
    image: "popup.png",
    text: "Pack light. Go a little further.",
  },
  {
    name: "Toy haulers",
    image: "toyHauler.png",
    text: "Bring your kind of adventure.",
  },
];
const detailUrl = (rv) =>
  `/browse/${rv.id}/${rv.year}/${rv.type}/${encodeURIComponent(rv.name)}`;
const inquiryUrl = (rv, intent = "Check availability") =>
  `/contact-us?rv=${encodeURIComponent(`${rv.year} ${rv.name}`)}&intent=${encodeURIComponent(intent)}`;
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
function Brand() {
  return (
    <Link to="/" className="brand" aria-label="The Orange RV home">
      <span className="brand-icon" aria-hidden="true">
        ▰<i>••</i>
      </span>
      <span>
        the<span className="orange">Orange</span>RV
        <span className="brand-caption">A LITTLE FREEDOM GOES A LONG WAY</span>
      </span>
    </Link>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>Your next chapter starts on the road.</span>
          <a href={`tel:${phone}`}>
            Hablamos español <span>•</span> (432) 301-9668
          </a>
        </div>
      </div>
      <header className="header">
        <div className="wrap nav">
          <Brand />
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close ✕" : "Menu ☰"}
          </button>
          <nav
            id="main-nav"
            className={open ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            <NavLink to="/search">Browse RVs</NavLink>
            <NavLink to="/trade-and-sell">Sell or trade</NavLink>
            <NavLink to="/about">Our story</NavLink>
            <Link className="button small" to="/contact-us">
              Let’s talk <Arrow />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <Brand />
          <p>
            Less everyday.
            <br />
            More open road.
          </p>
        </div>
        <div>
          <h3>Find your way</h3>
          <Link to="/search">Browse inventory</Link>
          <Link to="/trade-and-sell">Sell or trade your RV</Link>
          <Link to="/about">About The Orange RV</Link>
        </div>
        <div>
          <h3>Let’s make a plan</h3>
          <a href={`tel:${phone}`}>
            (432) 301-9668 <Arrow />
          </a>
          <Link to="/contact-us">Get in touch</Link>
          <span>Hablamos español</span>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} The Orange RV</span>
        <span>Find a little freedom.</span>
      </div>
    </footer>
  );
}
function Card({ rv }) {
  return (
    <article className="rv-card">
      <Link className="card-photo" to={detailUrl(rv)}>
        <img
          src={rv.image}
          alt={`${rv.year} ${rv.name} exterior`}
          loading="lazy"
        />
        <span className="badge">
          {rv.condition} • {rv.category}
        </span>
        <span className="photo-arrow">
          <Arrow />
        </span>
      </Link>
      <div className="card-body">
        <div className="card-title">
          <div>
            <span className="eyebrow">
              {rv.year} / {rv.category}
            </span>
            <h3>
              <Link to={detailUrl(rv)}>{rv.name}</Link>
            </h3>
          </div>
          <strong>{money(rv.price)}</strong>
        </div>
        <p className="card-note">
          Explore photos and ask us about the details.
        </p>
        <Link className="card-link" to={detailUrl(rv)}>
          Take a closer look <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
function Intro({ eyebrow, title, children }) {
  return (
    <div className="page-intro wrap">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {children && <p>{children}</p>}
    </div>
  );
}
function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <span className="tiny-line" /> BIG POSSIBILITIES. OPEN ROADS.
              </span>
              <h1>
                A little freedom.
                <br />A whole lot of
                <br />
                <em>adventure.</em>
              </h1>
              <p>
                Find the RV that fits your next chapter. From weekend escapes to
                taking the scenic route home.
              </p>
              <div className="actions">
                <Link className="button" to="/search">
                  Find your RV <span aria-hidden="true">→</span>
                </Link>
                <Link className="text-link" to="/trade-and-sell">
                  Sell or trade <Arrow />
                </Link>
              </div>
              <div className="hero-footnote">
                <span className="sun-icon" aria-hidden="true">
                  ✳
                </span>
                <span>Make room for somewhere new.</span>
              </div>
            </div>
            <div className="hero-art">
              <div className="orbit" />
              <span className="art-label">THE ROAD IS CALLING.</span>
              <img
                src="/images/hero/hero_img.png"
                alt="Orange motorhome ready for the open road"
                fetchpriority="high"
              />
              <div className="art-note">
                <span aria-hidden="true">↗</span>
                <span>
                  Where to next?<small>That part is up to you.</small>
                </span>
              </div>
              <span className="art-bottom">LESS ROUTINE. MORE ROAMING.</span>
            </div>
          </div>
        </section>
        <div className="benefit-strip">
          <div className="wrap">
            <span>
              01 <b>Find your fit</b> RVs for different adventures
            </span>
            <span>
              02 <b>See the details</b> Explore every angle
            </span>
            <span>
              03 <b>Talk to a person</b> We’re a phone call away
            </span>
          </div>
        </div>
        <section className="section wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR ADVENTURE, YOUR WAY</span>
              <h2>What’s your travel style?</h2>
            </div>
            <Link className="text-link" to="/search">
              Explore all RVs <Arrow />
            </Link>
          </div>
          <div className="category-grid">
            {categories.map((cat, i) => (
              <Link
                key={cat.name}
                className="category-card"
                to={`/search?type=${encodeURIComponent(cat.name)}`}
              >
                <span className="category-number">
                  0{i + 1} <Arrow />
                </span>
                <img
                  src={`/images/models/${cat.image}`}
                  alt=""
                  loading="lazy"
                />
                <h3>{cat.name}</h3>
                <p>{cat.text}</p>
              </Link>
            ))}
          </div>
        </section>
        <section className="section inventory-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">A FEW PLACES TO START</span>
                <h2>Your next adventure awaits.</h2>
              </div>
              <Link className="text-link" to="/search">
                View all inventory <Arrow />
              </Link>
            </div>
            <div className="inventory-grid">
              {listings.slice(0, 3).map((rv) => (
                <Card key={rv.id} rv={rv} />
              ))}
            </div>
            <p className="inventory-disclaimer">
              Listed prices and availability are subject to confirmation. Ask us
              for current specifications.
            </p>
          </div>
        </section>
        <AboutBlock />
        <section className="section wrap faq-section">
          <div>
            <span className="eyebrow">BEFORE YOU HIT THE ROAD</span>
            <h2>A few good questions.</h2>
            <Link className="text-link" to="/contact-us">
              Ask us anything <Arrow />
            </Link>
          </div>
          <div>
            {[
              [
                "How do I check if an RV is available?",
                "Open a listing and choose Check availability, or give us a call. We’ll confirm the current status and help you plan a viewing.",
              ],
              [
                "Can I sell or trade my current RV?",
                "Get in touch with the year, make, model, condition, and photos of your RV to start a conversation about your options.",
              ],
              [
                "How can I arrange a visit?",
                "Call us before heading out so we can confirm the location, a suitable time, and the RV you’d like to see.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <ContactBanner />
      </main>
    </>
  );
}
function AboutBlock() {
  return (
    <section className="section wrap about-grid">
      <div className="about-photo">
        <img
          src="/images/about/about.jpeg"
          alt="The Orange RV"
          loading="lazy"
        />
        <span>
          GOOD THINGS ARE AHEAD. <Arrow />
        </span>
      </div>
      <div>
        <span className="eyebrow">HELLO FROM THE ORANGE RV</span>
        <h2>
          It’s more than an RV.
          <br />
          It’s your next chapter.
        </h2>
        <p>
          A slower morning. A different view. A weekend that feels a little
          longer. Finding your RV starts with the way you want to travel.
        </p>
        <p>
          Explore the collection, take a closer look, and talk with us about the
          one that catches your eye. We’re here to help you take the next step.
        </p>
        <Link className="button dark" to="/contact-us">
          Let’s find your fit <Arrow />
        </Link>
      </div>
    </section>
  );
}
function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="wrap">
        <div>
          <span className="eyebrow">YOUR NEXT CHAPTER IS OUT THERE</span>
          <h2>Let’s get you on the road.</h2>
        </div>
        <a className="button light" href={`tel:${phone}`}>
          Call (432) 301-9668 <Arrow />
        </a>
      </div>
    </section>
  );
}
function Browse() {
  const [params, setParams] = useSearchParams();
  const type = params.get("type") || "";
  const query = params.get("q") || "";
  const max = params.get("max") || "";
  const year = params.get("year") || "";
  const sort = params.get("sort") || "featured";
  function update(key, value) {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    setParams(next, { replace: true });
  }
  const filtered = listings
    .filter(
      (rv) =>
        (!type || rv.category === type) &&
        `${rv.name} ${rv.year} ${rv.category}`
          .toLowerCase()
          .includes(query.toLowerCase()) &&
        (!max || rv.price <= Number(max)) &&
        (!year || rv.year >= Number(year)),
    )
    .sort((a, b) =>
      sort === "price-low"
        ? a.price - b.price
        : sort === "price-high"
          ? b.price - a.price
          : sort === "year"
            ? b.year - a.year
            : a.id - b.id,
    );
  return (
    <main>
      <Intro eyebrow="FIND YOUR NEXT CHAPTER" title="Room for adventure.">
        A different view starts here. Explore the collection and find your kind
        of getaway.
      </Intro>
      <section className="wrap browse-layout">
        <aside className="filters">
          <div className="filter-heading">
            <h2>Find your fit</h2>
            <button className="text-link" onClick={() => setParams({})}>
              Reset
            </button>
          </div>
          <label>
            Search inventory
            <input
              type="search"
              placeholder="Name or year"
              value={query}
              onChange={(e) => update("q", e.target.value)}
            />
          </label>
          <label>
            RV type
            <select
              value={type}
              onChange={(e) => update("type", e.target.value)}
            >
              <option value="">All RV types</option>
              {categories.map((cat) => (
                <option key={cat.name}>{cat.name}</option>
              ))}
            </select>
          </label>
          <label>
            Maximum price
            <select value={max} onChange={(e) => update("max", e.target.value)}>
              <option value="">Any price</option>
              {[10000, 15000, 25000, 50000].map((n) => (
                <option key={n} value={n}>
                  {money(n)}
                </option>
              ))}
            </select>
          </label>
          <label>
            Year
            <select
              value={year}
              onChange={(e) => update("year", e.target.value)}
            >
              <option value="">All years</option>
              {[...new Set(listings.map((rv) => rv.year))]
                .sort((a, b) => b - a)
                .map((n) => (
                  <option key={n} value={n}>
                    {n} or newer
                  </option>
                ))}
            </select>
          </label>
          <div className="filter-help">
            <span aria-hidden="true">✳</span>
            <h3>Need a hand?</h3>
            <p>Tell us what you have in mind.</p>
            <a href={`tel:${phone}`}>(432) 301-9668 ↗</a>
          </div>
        </aside>
        <div>
          <div className="results-toolbar">
            <p>
              <strong>{filtered.length}</strong> RV
              {filtered.length !== 1 ? "s" : ""} to explore
            </p>
            <label>
              Sort by{" "}
              <select
                value={sort}
                onChange={(e) => update("sort", e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="year">Newest year</option>
              </select>
            </label>
          </div>
          <div className="inventory-grid browse-grid">
            {filtered.map((rv) => (
              <Card key={rv.id} rv={rv} />
            ))}
          </div>
          {!filtered.length && (
            <div className="empty-state">
              <span aria-hidden="true">↗</span>
              <h2>A different route, perhaps?</h2>
              <p>
                No RVs match these filters. Try another category or ask us
                what’s available.
              </p>
              <button className="button" onClick={() => setParams({})}>
                View all RVs
              </button>
              <Link className="text-link" to="/contact-us">
                Talk to us
              </Link>
            </div>
          )}
          <p className="inventory-disclaimer">
            Confirm pricing, availability, and specifications with our team
            before making plans.
          </p>
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
function Detail() {
  const { id } = useParams();
  const rv = listings.find((item) => String(item.id) === id);
  const [selected, setSelected] = useState(0);
  useEffect(() => setSelected(0), [id]);
  if (!rv) return <NotFound />;
  return (
    <main className="wrap detail-page">
      <Link className="text-link" to="/search">
        ← Back to inventory
      </Link>
      <div className="detail-heading">
        <div>
          <span className="eyebrow">
            {rv.condition} / {rv.category}
          </span>
          <h1>
            {rv.year} {rv.name}
          </h1>
        </div>
        <span className="detail-id">RV / {String(rv.id).padStart(3, "0")}</span>
      </div>
      <div className="detail-layout">
        <div>
          <div className="gallery-main">
            <img
              src={rv.album[selected]}
              alt={`${rv.name}, view ${selected + 1}`}
            />
            <div className="gallery-controls">
              <button
                aria-label="Previous photo"
                onClick={() =>
                  setSelected(
                    (selected - 1 + rv.album.length) % rv.album.length,
                  )
                }
              >
                ←
              </button>
              <span>
                {selected + 1} / {rv.album.length}
              </span>
              <button
                aria-label="Next photo"
                onClick={() => setSelected((selected + 1) % rv.album.length)}
              >
                →
              </button>
            </div>
          </div>
          <div className="thumbnails" aria-label="Choose a photo">
            {rv.album.map((src, i) => (
              <button
                key={src}
                aria-label={`View photo ${i + 1}`}
                aria-pressed={selected === i}
                onClick={() => setSelected(i)}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
          <section className="overview">
            <span className="eyebrow">TAKE A CLOSER LOOK</span>
            <h2>A place for your next chapter.</h2>
            <p>
              Explore the {rv.year} {rv.name} in the gallery above. Get in touch
              to confirm availability, request current specifications, or
              arrange a time to see it in person.
            </p>
            <dl>
              <div>
                <dt>Year</dt>
                <dd>{rv.year}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{rv.category}</dd>
              </div>
              <div>
                <dt>Condition</dt>
                <dd>{rv.condition}</dd>
              </div>
            </dl>
            <p className="inventory-disclaimer">
              Ask our team to confirm sleeping capacity, dimensions, weight, and
              tow-vehicle compatibility.
            </p>
          </section>
        </div>
        <aside className="inquiry-panel">
          <span className="eyebrow">LISTED PRICE</span>
          <p className="detail-price">{money(rv.price)}</p>
          <p>See yourself somewhere new.</p>
          <Link className="button" to={inquiryUrl(rv)}>
            Check availability <Arrow />
          </Link>
          <Link
            className="button secondary"
            to={inquiryUrl(rv, "Schedule a viewing")}
          >
            Schedule a viewing
          </Link>
          <Link className="text-link" to={inquiryUrl(rv, "Make an offer")}>
            Make an offer →
          </Link>
          <div className="panel-call">
            <span>Prefer a conversation?</span>
            <a href={`tel:${phone}`}>(432) 301-9668</a>
            <small>Hablamos español</small>
          </div>
          <p className="inventory-disclaimer">
            Price and availability subject to confirmation.
          </p>
        </aside>
      </div>
    </main>
  );
}
function Contact({ trade = false }) {
  const [params] = useSearchParams();
  const rv = params.get("rv");
  const intent = trade
    ? "Sell or trade my RV"
    : params.get("intent") || "General inquiry";
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const initial = `${intent}${rv ? `: ${rv}` : ""}\n${trade ? "My RV year, make, and model: \nCondition: \n" : ""}`;
  useEffect(() => {
    setMessage(initial);
    setCopied(false);
  }, [initial]);
  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }
  return (
    <main>
      <Intro
        eyebrow={
          trade ? "MAKE ROOM FOR WHAT’S NEXT" : "LET’S START A CONVERSATION"
        }
        title={
          trade ? "A new chapter for your RV." : "Good adventures start here."
        }
      >
        {trade
          ? "Thinking about selling or trading? Tell us about your RV and where you want to go next."
          : "Ask a question, check availability, or plan a viewing. We’d love to hear from you."}
      </Intro>
      <section className="wrap contact-layout">
        <div className="contact-details">
          <span className="eyebrow">TALK WITH THE ORANGE RV</span>
          <h2>
            A real conversation.
            <br />A helpful next step.
          </h2>
          <a className="contact-phone" href={`tel:${phone}`}>
            (432) 301-9668 <Arrow />
          </a>
          <p>Hablamos español</p>
          <div className="visit-note">
            <h3>Planning a visit?</h3>
            <p>
              Call ahead to confirm our location, a convenient time, and the RV
              you’d like to see.
            </p>
          </div>
        </div>
        <div className="contact-compose">
          <h2>{intent}</h2>
          {rv && <p className="selected-rv">{rv}</p>}
          <label htmlFor="inquiry">Your message</label>
          <textarea
            id="inquiry"
            rows="7"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setCopied(false);
            }}
          />
          <p>
            Send this through your phone’s messaging app, or call us directly.
          </p>
          <div className="actions">
            <a
              className="button"
              href={`sms:${phone}?body=${encodeURIComponent(message)}`}
            >
              Open text message <Arrow />
            </a>
            <button className="text-link" onClick={copy}>
              Copy message
            </button>
          </div>
          <p role="status">
            {copied
              ? "Message copied. Paste it into your messaging app."
              : "Your message is only sent when you send it in your messaging app."}
          </p>
        </div>
      </section>
    </main>
  );
}
function NotFound() {
  return (
    <main className="wrap empty-state">
      <span className="eyebrow">LET’S FIND YOUR WAY</span>
      <h1>This RV or page isn’t available.</h1>
      <p>Browse the current collection or contact us for help.</p>
      <Link className="button" to="/search">
        Explore inventory →
      </Link>
    </main>
  );
}
export default function Site() {
  return (
    <>
      <a className="skip-link" href="#page-content">
        Skip to content
      </a>
      <Header />
      <div id="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Browse />} />
          <Route path="/browse/:id/:year/:type/:name" element={<Detail />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/trade-and-sell" element={<Contact trade />} />
          <Route
            path="/about"
            element={
              <main>
                <Intro eyebrow="THE ORANGE RV" title="Here’s to somewhere new.">
                  A little more possibility. A little less routine.
                </Intro>
                <AboutBlock />
                <ContactBanner />
              </main>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
