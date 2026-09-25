# Persona Lab starter

An intentionally low-fidelity, connected React product starter for the Codex Masterclass exercise.

For the participant workflow and copyable prompts, see [WORKSHOP-GUIDE.md](./WORKSHOP-GUIDE.md).

Participants improve a complete simulated-persona product flow: map one company platform, edit personas, define tasks, invoke a local demo, inspect evidence-linked friction hypotheses, and compare the result with a neutral baseline.

## Run locally

```bash
npm install
npm run dev
```

## Deployment

The paper mock will be published at [Persona Lab on GitHub Pages](https://absurdwall.github.io/codex-master-class-persona-lab/) after its first successful deployment. Pull requests to `main` verify the production build; pushes to `main` deploy the built `dist/` directory. The build uses the repository-name base path so its assets load from the project site URL.

## Exercise boundaries

- This app has no real browser or model integration.
- The sample journey and rationale are simulated; they are not human research.
- GitHub Pages deployment is handled by the repository's GitHub Actions workflow.
