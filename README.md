# The Stoic Opposition — Prototype ("The Empty Committee Room")

A static prototype redesign of thestoicopposition.com, built to Muse's
concept: a field manual disguised as a website. It does not replace the live
site; nothing here is published until Corey approves it.

## Rebuild

```sh
cd ~/workspace/stoic-opposition-build
python3 build.py
```

Output lands in `~/workspace/stoic-opposition-site/` (override with the `OUT`
environment variable). No dependencies beyond Python 3.

## Structure

- `build.py` — the generator: shared template, CSS, JS, and all page copy.
- `index.html` — home: hero, Lonoke County receipt, three doors, method, horizon.
- `start.html` — Take a Seat: five-step county audit, quorum calculator,
  first-meeting packet builder (both tools run entirely in the browser).
- `playbook.html` — Dynamic Synthesism, the three phases, the Four Pillars.
- `ledger.html` — the Living Ledger: claims with source, status, and date.
- `vault.html` — Steal This Rule: the §601.4 designation mechanism + template.
- `field-notes.html` — essays indexed by function, linked to their sources.
- `argument-lab.html` — Premise Check hub: method, formats, episodes,
  fallacy catalog, corrections log.
- `print.html` — Library Basement Press: handbill, one-page playbook,
  meeting-observation sheet (print CSS: one block per page).
- `about.html` — Corey, the project, canon vocabulary, AI disclosure.
- `privacy.html` — plain-English privacy rules for any future roster.
- `assets/style.css`, `assets/site.js` — shared styling and tools.
- `sitemap.xml`, `robots.txt` — generated for the GitHub Pages staging URL.

## Fidelity rules (do not break these in edits)

1. Every factual claim carries its source discipline: the Ledger labels each
   entry ADOPTED / IN PROCESS / UNRESOLVED IN THE RECORD, and the state-level
   Plebocracy entry stays "unresolved" until a document settles it.
2. The Vault never presents a template as adopted legal text. §601.4 is
   described as the designation mechanism it actually is; verbatim claims
   require the verbatim document.
3. The ALPR field note carries its filed note: the Sep 12, 2026 post is
   thinking-out-loud, and the settled position (Oct 29, 2026) is undo the
   third-party system first.
4. Facebook links are copied verbatim from
   `~/workspace/stoic-opposition/content-bank.md`.
5. No donate button. Ever. The ask is a Tuesday night, not a wallet.
6. This prototype collects and stores nothing; `privacy.html` is the contract
   any future intake must honor before it launches.
