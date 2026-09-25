import './clients-and-team.css';

const clients = ['Acorn Commerce', 'Pawprint', 'Slow & Steady', 'Tall Order'];

const teammates = [
  { name: 'Felix Pivot', role: 'CEO & cofounder', character: 'Female fox' },
  { name: 'Codex McCompile', role: 'CTO & cofounder', character: 'Codex robot' },
  { name: 'Barkley Clicks', role: 'Head of Product', character: 'Dog' },
];

export function ClientsAndTeam() {
  return (
    <section className="company-story" aria-labelledby="company-story-title">
      <div className="company-story__heading">
        <p className="company-story__eyebrow">A fictional company story</p>
        <h2 id="company-story-title">The people behind Persona Lab</h2>
      </div>

      <div className="company-story__grid">
        <section className="company-story__group" aria-labelledby="clients-title">
          <h3 id="clients-title">Fictional clients</h3>
          <ul className="company-story__list">
            {clients.map((client) => <li key={client}>{client}</li>)}
          </ul>
          <p className="company-story__disclosure">Fictional customers. Wildly fictional results.</p>
        </section>

        <section className="company-story__group" aria-labelledby="team-title">
          <h3 id="team-title">The team</h3>
          <ul className="company-story__list company-story__team">
            {teammates.map(({ name, role, character }) => (
              <li key={name}>
                <span className="company-story__name">{name}</span>
                <span className="company-story__role">{role}</span>
                <span className="company-story__character">{character}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
