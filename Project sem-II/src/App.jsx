import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";

const HERO_IMAGES = [
  {
    url: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    kicker: "Autonomous | IIT Bombay Academic Mentorship | NAAC 'A++'",
    title: "Shaping Innovators at Lakshya Institute of Technology",
    sub: "Ranked among the top engineering institutes in Mumbai."
  },
  {
    url: "https://images.pexels.com/photos/37954917/pexels-photo-37954917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    kicker: "Admissions Open 2025-26",
    title: "Your Future in Technology Starts Here",
    sub: "B.Tech CSE / AI / Data Science • M.Tech • Mumbai Campus"
  },
  {
    url: "https://images.pexels.com/photos/9242834/pexels-photo-9242834.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    kicker: "85 LPA Highest Package • 400+ Recruiters",
    title: "Industry-Ready Engineers, Global Careers",
    sub: "Centre of Excellence, Hackathons, Incubation – Build more than a degree."
  }
];

const TOP_LINKS = ["IQAC","NIRF","Alumni","Careers","Grievance","ERP","Pay Fee Online","Contact Us"];

const NAV_ITEMS = [
  { label: "About Us", href: "#about" },
  { label: "Admissions", href: "#admissions" },
  { label: "Academics", href: "#programs" },
  { label: "Placements", href: "#placements" },
  { label: "Campus Life", href: "#life" },
  { label: "Fests & Events", href: "#fests" },
  { label: "Achievements", href: "#achievements" },
];

const NOTICES = [
  "Admissions Open 2025-26 – B.Tech | M.Tech – Apply Now",
  "B.Tech CSE (AI & ML / Data Science) – Limited Seats",
  "Placement 2024: 85 LPA Highest | 12.5 LPA Average | 1850 Offers",
  "NAAC 'A++' Grade Accredited | Autonomous | IIT Bombay Academic Mentorship",
  "Lakshya Institute of Technology (LIT), Mumbai",
];

const PROGRAMS = [
  { icon: "cpu", name: "Computer Science & Engineering", seats: "180 Seats", highlight: true, desc: "Flagship CSE with industry specializations." },
  { icon: "brain", name: "CSE – Artificial Intelligence & ML", seats: "120 Seats", desc: "AI/ML, GenAI, Computer Vision, NLP Labs." },
  { icon: "database", name: "CSE – Data Science", seats: "60 Seats", desc: "Big Data, Analytics, Cloud, Power BI." },
  { icon: "radio", name: "Electronics & Communication Engg.", seats: "120 Seats", desc: "VLSI, IoT, Embedded & 5G Lab." },
  { icon: "wrench", name: "Mechanical Engineering", seats: "60 Seats", desc: "CAD/CAM, Robotics, EV Systems." },
  { icon: "laptop", name: "M.Tech Programs", seats: "60 Seats", desc: "M.Tech CSE & ECE – PG programs." },
];

const WHY = [
  { icon: "medal", t: "IIT Bombay Academic Mentorship", d: "Autonomous curriculum designed and mentored in collaboration with IIT Bombay." },
  { icon: "shield", t: "NAAC A++ Accredited", d: "Quality assured academics with Outcome Based Education." },
  { icon: "briefcase", t: "Superb Placements", d: "400+ recruiters, 25,000+ alumni network across the globe." },
  { icon: "library", t: "Centres of Excellence", d: "AWS, Palo Alto, UiPath, Cisco, Salesforce, EV Lab & more." },
  { icon: "users", t: "Established Excellence", d: "Over 17 years of transforming careers and building leaders." },
  { icon: "globe", t: "Heart of Mumbai", d: "State-of-the-art campus located in the financial capital of India." },
];

const RECRUITERS = [
  "Amazon","Microsoft","Google","Adobe","TCS","Infosys","Wipro","Accenture",
  "Goldman Sachs","Morgan Stanley","J.P. Morgan","HCLTech","Capgemini","Tech Mahindra",
  "Deloitte","KPMG","Samsung","IBM","Nutanix","Commvault","Groww","Juspay"
];

const CAMPUS_LIFE = [
  { img: "https://images.pexels.com/photos/4622108/pexels-photo-4622108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900", title: "Clubs & Societies", desc: "55+ technical & cultural clubs – ACM, CSI, GDSC, Enigma, Samvaad." },
  { img: "https://images.pexels.com/photos/33992840/pexels-photo-33992840.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900", title: "Innovation & Incubation", desc: "LIT Incubation Foundation, Hackathons, SIH Winners." },
  { img: "https://images.pexels.com/photos/37371667/pexels-photo-37371667.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900", title: "Sports & Fitness", desc: "Floodlit stadium, swimming pool, gym, courts & auditorium." },
  { img: "https://images.pexels.com/photos/37410978/pexels-photo-37410978.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900", title: "Life at LIT", desc: "VORTEX – Annual Tech Fest, TEDxLIT, Cultural Nights." },
];

const FESTS = [
  { title: "VORTEX", subtitle: "The Annual TechFest", icon: "gamepad", img: "https://images.pexels.com/photos/7868886/pexels-photo-7868886.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800", desc: "Mumbai's largest technical symposium featuring 48-hour hackathons, robo-wars, coding challenges, and tech-talks by industry pioneers." },
  { title: "EUPHORIA", subtitle: "The Cultural Extravaganza", icon: "music", img: "https://images.pexels.com/photos/36882728/pexels-photo-36882728.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800", desc: "A 3-day spectacle of music, dance, and arts. Bringing together talents from across the state with celebrity DJ nights and EDM concerts." },
  { title: "E-SUMMIT", subtitle: "Entrepreneurship Network", icon: "mic", img: "https://images.pexels.com/photos/22857358/pexels-photo-22857358.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800", desc: "Empowering student founders. Pitch your startups to real VCs, attend masterclasses, and ignite your entrepreneurial journey." },
];

const ACHIEVEMENTS = [
  { icon: "trophy", title: "Smart India Hackathon 2024", desc: "First Prize Winners in the Software Edition, building AI solutions for the Ministry of Education." },
  { icon: "star", title: "Google Summer of Code", desc: "12 LIT students selected as global finalists for GSoC 2024, contributing to major open-source projects." },
  { icon: "sparkles", title: "TCS CodeVita", desc: "Top 50 global rankers from LIT, securing direct interview calls and top-tier placement offers." },
];

/* ============================================
   App
   ============================================ */

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_IMAGES.length), 5600);
    return () => clearInterval(id);
  }, []);

  const current = HERO_IMAGES[slide];
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2600);
  };

  return (
    <div>
      {/* Top utility bar */}
      <div className="topbar">
        <div className="container">
          <div className="top-links">
            {TOP_LINKS.map((l) => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
          <div className="top-contact">
            <span><Icon name="phone" size={14}/> Admission Helpline: +91-120-7135112</span>
            <span className="divider">|</span>
            <span><Icon name="mail" size={14}/> info@lit.ac.in</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container">
          <a href="#" className="brand">
            <div className="logo">LIT</div>
            <div className="name">
              <div className="title">Lakshya Institute of Technology</div>
              <div className="subtitle">Mumbai • Estd. 2008 • Autonomous • IIT Bombay Academic Mentorship</div>
            </div>
          </a>

          <nav className="nav-desktop">
            {NAV_ITEMS.map((n) => (
              <a key={n.label} href={n.href} className="nav-link">{n.label}</a>
            ))}
            <a href="#admissions" className="apply-btn">Apply Now</a>
          </nav>

          <button className="menu-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Icon name="menu" />
          </button>
        </div>

        <div className={"mobile-menu" + (mobileOpen ? " open" : "")}>
          <div className="close-row">
            <button className="close-btn" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <Icon name="x" size={20} />
            </button>
          </div>
          <div className="grid">
            {NAV_ITEMS.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setMobileOpen(false)}>{n.label}</a>
            ))}
          </div>
          <div className="help">Helpline: +91-120-7135112 • info@lit.ac.in</div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div>
            <div className="slider">
              <img src={current.url} alt="LIT Campus" />
              <div className="overlay"></div>
              <div className="caption">
                <span className="kicker">{current.kicker}</span>
                <h1>{current.title}</h1>
                <p className="sub">{current.sub}</p>
                <div className="cta">
                  <a href="#admissions" className="btn-primary">Apply for 2025-26</a>
                  <a href="#programs" className="btn-ghost">Explore Programs</a>
                </div>
              </div>
              <button className="arrow left" onClick={() => setSlide((slide - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)} aria-label="Previous">
                <Icon name="chevL" size={20} />
              </button>
              <button className="arrow right" onClick={() => setSlide((slide + 1) % HERO_IMAGES.length)} aria-label="Next">
                <Icon name="chevR" size={20} />
              </button>
              <div className="dots">
                {HERO_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    className={"dot" + (i === slide ? " active" : "")}
                    onClick={() => setSlide(i)}
                    aria-label={"Go to slide " + (i + 1)}
                  />
                ))}
              </div>
            </div>

            <div className="accred-row">
              <span className="label">Accreditations:</span>
              <span className="item"><Icon name="shield" size={16} className="check-icon"/> NAAC Grade 'A++'</span>
              <span className="dot-sep">•</span>
              <span>Autonomous</span>
              <span className="dot-sep">•</span>
              <span>IIT Bombay Mentorship</span>
              <span className="dot-sep">•</span>
              <span>AICTE Approved</span>
              <span className="dot-sep">•</span>
              <span>ISO 9001:2015</span>
            </div>
          </div>

          {/* Enquiry */}
          <div id="admissions">
            <div className="enquiry">
              <div className="head">
                <div className="tag">ADMISSION ENQUIRY 2025-26</div>
                <h3>Talk to our representative</h3>
                <div className="sub">Get course details, fee structure &amp; scholarship info.</div>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  showToast("Thanks! Our representative will call you shortly.");
                  e.target.reset();
                }}
              >
                <label>
                  Full Name
                  <input name="name" type="text" required placeholder="Full Name" />
                </label>
                <label>
                  Mobile Number
                  <input name="phone" type="tel" required placeholder="Mobile Number" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required placeholder="Email" />
                </label>
                <label>
                  City
                  <input name="city" type="text" required placeholder="City" />
                </label>
                <label style={{ gridColumn: "1 / -1" }}>
                  Program Interested
                  <select required defaultValue="">
                    <option value="" disabled>Select a program</option>
                    <option>B.Tech Computer Science &amp; Engg.</option>
                    <option>B.Tech CSE – AIML</option>
                    <option>B.Tech CSE – Data Science</option>
                    <option>B.Tech ECE</option>
                    <option>B.Tech Mechanical</option>
                    <option>M.Tech Programs</option>
                  </select>
                </label>
                <button type="submit" className="submit">Connect with a Representative</button>
                <p className="terms">
                  By submitting, you agree to be contacted by Lakshya Institute of Technology.
                </p>
              </form>
              <div className="badges">
                <span className="badge"><Icon name="check" size={16}/> 100% Placement Assistance</span>
                <span className="badge"><Icon name="check" size={16}/> Scholarships Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notice ticker */}
        <div className="ticker">
          <div className="container">
            <span className="tag"><Icon name="bullhorn" size={16}/> ANNOUNCEMENTS</span>
            <div className="ticker-track">
              <div className="ticker-list">
                {[...NOTICES, ...NOTICES].map((n, i) => (
                  <span key={i}>{n}<span className="sep">•</span></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <div>
            <div className="about-img-wrap">
              <div className="img-inner">
                <img src="https://images.pexels.com/photos/6140610/pexels-photo-6140610.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=820&w=1100" alt="Campus life" />
                <div className="badge-card">
                  <div className="t">Center of Excellence</div>
                  <div className="d">AWS • Palo Alto • EV • Salesforce</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="section-eyebrow">Welcome to LIT</div>
            <h2 className="section-title">A legacy of engineering excellence in Mumbai</h2>
            <p className="body">
              At Lakshya Institute of Technology (LIT), we ignite curiosity, knowledge, and innovation. Established in 2008, LIT has evolved into a dynamic, autonomous center of learning in the heart of Mumbai. Our unwavering commitment to excellence has earned us top positions in national rankings and academic mentorship from IIT Bombay.
            </p>
            <p className="body">
              Beyond engineering, our academic spectrum encompasses M.Tech programs designed to cater to the multifaceted aspirations of our students. Integrity, excellence and innovation remain at our foundation.
            </p>
            <div className="stats">
              {[["15,000+","Students on campus"],["250+","Qualified Faculty"],["60+","Clubs & Societies"]].map(([a,b]) => (
                <div key={a} className="stat">
                  <div className="num">{a}</div>
                  <div className="lbl">{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="stats-band">
        <div className="container">
          {[
            ["17+","Years of Excellence","Since 2008"],
            ["25,000+","Alumni Worldwide","Global network"],
            ["400+","Recruiting Companies","2024 Placements"],
            ["12.5 LPA","Average Package","85 LPA Highest"],
          ].map(([n,l,s]) => (
            <div key={l} className="stat-card">
              <div className="num">{n}</div>
              <div className="lbl">{l}</div>
              <div className="sub">{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="programs">
        <div className="container">
          <div className="programs-head">
            <div>
              <div className="section-eyebrow">PROGRAMS OFFERED</div>
              <h2 className="section-title">Future-focused engineering programs</h2>
            </div>
            <a href="#admissions" className="link-arrow">View fee structure <Icon name="arrowR" size={16}/></a>
          </div>

          <div className="prog-grid">
            {PROGRAMS.map((p) => (
              <div key={p.name} className={"prog-card" + (p.highlight ? " highlight" : "")}>
                <div className="icon-wrap"><Icon name={p.icon} size={28} /></div>
                <div className="pname">{p.name}</div>
                <div className="pdesc">{p.desc}</div>
                <div className="pseats">
                  <span className="seats-pill">{p.seats}</span>
                  <span className="details-link">Details <Icon name="chevR" size={16}/></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="why">
        <div className="container">
          <div className="head">
            <div className="section-eyebrow">Why Choose Us?</div>
            <h2 className="section-title">Mumbai's premier engineering institute</h2>
          </div>
          <div className="why-grid">
            {WHY.map((w) => (
              <div key={w.t} className="why-card">
                <Icon name={w.icon} size={28} className="icon" />
                <div className="t">{w.t}</div>
                <div className="d">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements */}
      <section id="placements" className="placements">
        <div className="container">
          <div>
            <div className="eyebrow">Placement Highlights 2024</div>
            <h2>Career-ready graduates, top-tier offers</h2>
            <p className="intro">
              Our Career Development Centre ensures 360° placement preparation – aptitude, coding, soft skills, mock drives and industry mentorship directly from IIT alumni.
            </p>
            <div className="stat-grid">
              {[
                ["85 LPA","Highest Package"],
                ["12.5 LPA","Average Package"],
                ["10.0 LPA","Median Package"],
                ["1850+","Total Job Offers"],
              ].map(([a,b]) => (
                <div key={b} className="place-stat">
                  <div className="num">{a}</div>
                  <div className="lbl">{b}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="recruiter-card">
              <div className="label">Top Recruiters</div>
              <div className="recruiter-grid">
                {RECRUITERS.slice(0, 15).map((r) => (
                  <div key={r} className="recruiter-cell">{r}</div>
                ))}
              </div>
              <div className="more">…and 380+ more global tech giants and unicorns.</div>
            </div>
          </div>
        </div>

        <div className="recruiter-marquee">
          <div className="track">
            <div className="row">
              {[...RECRUITERS, ...RECRUITERS].map((r, i) => (
                <span key={i}>{r}<span className="sep">•</span></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fests */}
      <section id="fests" className="fests">
        <div className="container">
          <div className="head">
            <div className="eyebrow">Campus Culture</div>
            <h2>Experience the LIT Energy</h2>
            <p>From electric DJ nights to hardcore hackathons, campus life at LIT is unmatched.</p>
          </div>
          <div className="fest-grid">
            {FESTS.map((f) => (
              <div key={f.title} className="fest-card">
                <img src={f.img} alt={f.title} />
                <div className="grad"></div>
                <div className="content">
                  <Icon name={f.icon} size={40} className="icon" />
                  <div className="sub">{f.subtitle}</div>
                  <div className="ttl">{f.title}</div>
                  <p className="desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="achievements">
        <div className="container">
          <div className="head">
            <div>
              <div className="section-eyebrow">Hall of Fame</div>
              <h2 className="section-title">Student Achievements</h2>
            </div>
          </div>
          <div className="achievements-grid">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.title} className="ach-card">
                <div className="icon-box"><Icon name={a.icon} size={24} /></div>
                <div className="t">{a.title}</div>
                <div className="d">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life @ LIT */}
      <section id="life" className="life">
        <div className="container">
          <div className="head">
            <div>
              <div className="section-eyebrow">Infrastructure</div>
              <h2 className="section-title">More than just classrooms</h2>
            </div>
            <a href="#" className="link-arrow">View campus gallery →</a>
          </div>
          <div className="life-grid">
            {CAMPUS_LIFE.map((c) => (
              <div key={c.title} className="life-card">
                <div className="img-wrap">
                  <img src={c.img} alt={c.title} />
                </div>
                <div className="body">
                  <div className="t">{c.title}</div>
                  <div className="d">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div>
            <h2>Admissions Open 2025-26</h2>
            <p>B.Tech • M.Tech – Secure your seat in Mumbai's top autonomous institute.</p>
          </div>
          <div className="ctas">
            <a href="#admissions" className="btn-white">Apply Online</a>
            <a href="#" className="btn-outline">Download Brochure</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="brand-block">
            <div className="brand">
              <div className="logo">LIT</div>
              <div className="brand-name">Lakshya Institute<br/>of Technology</div>
            </div>
            <p>Autonomous Engineering Institute in Mumbai under IIT Bombay Academic Mentorship. NAAC A++ accredited. Transforming careers since 2008.</p>
            <div className="contact">
              <div><Icon name="pin" size={16} className="icon"/> LIT Campus, Andheri West, Mumbai, Maharashtra – 400053</div>
              <div><Icon name="phone" size={16} className="icon icon-center"/> +91-120-7135112</div>
              <div><Icon name="mail" size={16} className="icon icon-center"/> info@lit.ac.in</div>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {["About LIT","Admissions 2025","Courses & Fees","Placements","NIRF","IQAC","Alumni","Careers"].map((i) => (
                <li key={i}><a href="#">{i}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Programs</h4>
            <ul>
              {["B.Tech CSE","CSE – AIML","CSE – Data Science","ECE","Mechanical Engg.","M.Tech Programs"].map((i) => (
                <li key={i}><a href="#">{i}</a></li>
              ))}
            </ul>
          </div>

          <div className="newsletter">
            <h4>Connect</h4>
            <p>Get admission alerts, placement drives and campus events delivered to your inbox.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showToast("Subscribed!");
                e.target.reset();
              }}
            >
              <input type="email" required placeholder="Email address" />
              <button type="submit">Go</button>
            </form>
            <div className="meta">Autonomous • IIT Bombay Mentorship • AICTE Approved • ISO 9001:2015</div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div>© 2025 Lakshya Institute of Technology (LIT), Mumbai. All rights reserved.</div>
            <div className="links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast */}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
