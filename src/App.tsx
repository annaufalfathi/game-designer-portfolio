import RIFTSTORM_IMG from './assets/abea2.png';
import GUILD_IMG from './assets/guild_chronicles.png';
const STEAM_URL = "https://store.steampowered.com/app/2282790/RIFTSTORM/";
const GUILD_URL = "https://annaufalfathi.itch.io/guild-chronicles";
const EMAIL_URL = "mailto:annaufalfathi@gmail.com";


function ButtonLink({
  children,
  href,
  variant = "primary",
  external = false,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline";
  external?: boolean;
}) {
  return (
    <a
      className={`button-link ${variant === "outline" ? "button-link--outline" : ""}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Fathi Annaufal, home">
          Fathi Annaufal
        </a>
        <nav aria-label="Main navigation">
          <a className="nav-link" href="#work">
            Work
          </a>
        </nav>
      </header>

      <main>
        <section className="section hero" id="top" aria-labelledby="hero-title">
          <div className="content hero-content">
            <h1 id="hero-title">Fathi Annaufal</h1>
            <p className="eyebrow">Game Designer &amp; Developer</p>
            <p className="hero-copy">
              I design and build engaging, systems-driven games. Create a prototyping core mechanics and I focus on creating polished,
              player-centric experiences.
            </p>
            <div className="button-row">
              <ButtonLink href="#work">View Selected Work</ButtonLink>
              <ButtonLink href={EMAIL_URL} variant="outline">
                Contact Me
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="section projects" id="work" aria-labelledby="projects-title">
          <div className="content projects-header">
            <h2 id="projects-title">My Projects</h2>
            <p>
              A few examples of how I design systems and ship player-facing
              experiences.
            </p>
          </div>

          <div className="content project-list">
            <article className="project-card project-card--featured">
              <div className="project-details">
                <div className="project-heading">
                  <h3>RIFTSTORM</h3>
                  <p>System Game Designer | Co-op Looter-Shooter | Action RPG</p>
                </div>
                <p>
                  I contributed to the design of RIFTSTORM, a co-op PvE extraction looter-shooter
                  currently in Early Access on Steam. Focused on engaging combat mechanics,
                  rogue-lite progression loops, and dynamic build-crafting systems that allow
                  players to shape their playstyle mid-mission.
                </p>
                <div className="project-action">
                  <ButtonLink href={STEAM_URL} external>
                    View on Steam
                  </ButtonLink>
                </div>
              </div>
              <div className="project-image" aria-hidden="true">
                <img src={RIFTSTORM_IMG} alt="RIFTSTORM Gameplay" />
              </div>
            </article>

            <article className="project-card project-card--simple">
              <div className="project-heading">
                <h3>Semi-Idle Mobile Game</h3>
                <p>Game Designer | Unity</p>
              </div>
              <p>
                Currently designing session-capped minigames and retention-focused core loops for a
                semi-idle mobile experience. Creating player journeys and working together with
                engineering to ensure the game has a fun and engaging experience based on narrative
                pillars.
              </p>
            </article>

                        <article className="project-card project-card--featured">
              <div className="project-details">
                <div className="project-heading">
                  <h3>Guild Chronicles</h3>
                  <p>Game Designer | Programmer | Personal Project</p>
                </div>
                <p> 
                  Puts every choice in your hands.
                  Your decisions won’t just change the story. 
                  they’ll shape the very lives of the NPCs you meet, creating a deeply personal and unforgettable experience.
                </p>
                <div className="project-action">
                  <ButtonLink href={GUILD_URL} external>
                    View project
                  </ButtonLink>
                </div>
              </div>
              <div className="project-image" aria-hidden="true">
                <img src={GUILD_IMG} alt="Guild Chronicle Gameplay" />
              </div>
            </article>
          </div>
        </section>

        <section className="section approach" aria-labelledby="approach-title">
          <div className="content">
            <h2 id="approach-title">My Approach</h2>
            <p>
              I bridge the gap between design and development. My process revolves around rapid
              prototyping, continuous UI/UX refinement based on direct testing, and building clean,
              scalable code architecture. Whether I&apos;m balancing game economies or building
              scene managers, my goal is always to deliver frictionless, engaging gameplay.
            </p>
          </div>
        </section>
      </main>

      <footer className="section contact" id="contact">
        <div className="content contact-content">
          <h2>Let&apos;s build something great.</h2>
          <p>Currently open for new opportunities and collaborations.</p>
          <ButtonLink href={EMAIL_URL}>Send me an Email</ButtonLink>
        </div>
      </footer>
    </div>
  );
}
