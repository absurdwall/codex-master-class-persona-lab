import './SupportersFooter.css';

const fictionalSupporters = [
  'Placeholder Partners',
  'Venture Maybe',
  'The Hypothesis Fund',
];

export default function SupportersFooter() {
  return (
    <footer className="persona-supporter-footer" aria-label="Persona Lab company information">
      <section className="persona-supporters" aria-labelledby="persona-supporters-title">
        <div className="persona-supporters-copy">
          <h2 id="persona-supporters-title">Fictional supporters</h2>
          <p>Workshop names only · no real endorsements or investment.</p>
        </div>
        <ul className="persona-supporters-list">
          {fictionalSupporters.map((supporter) => (
            <li key={supporter}>{supporter}</li>
          ))}
        </ul>
      </section>
      <p className="persona-company-info">
        Persona Lab · Somewhere on the Internet · Built with synthetic personas and suspiciously confident hypotheses.
      </p>
      <p className="persona-research-disclosure">
        Fake data only · no model API · no browser automation · not human research
      </p>
    </footer>
  );
}
