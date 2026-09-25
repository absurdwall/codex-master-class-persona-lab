import './SupportersFooter.css';

const fictionalSupporters = [
  'Placeholder Partners',
  'Venture Maybe',
  'The Hypothesis Fund',
];

export default function SupportersFooter() {
  return (
    <section className="persona-supporter-section" aria-labelledby="persona-supporters-title">
      <div className="persona-supporters">
        <div className="persona-supporters-copy">
          <h2 id="persona-supporters-title">Fictional supporters</h2>
          <p>Workshop names only · no real endorsements or investment.</p>
        </div>
        <ul className="persona-supporters-list">
          {fictionalSupporters.map((supporter) => (
            <li key={supporter}>{supporter}</li>
          ))}
        </ul>
      </div>
      <p className="persona-company-info">
        Persona Lab · Somewhere on the Internet · Built with synthetic personas and suspiciously confident hypotheses.
      </p>
    </section>
  );
}
