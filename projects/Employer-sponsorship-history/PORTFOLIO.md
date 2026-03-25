# USA Employer Sponsorship History

## What Problem It Solves

Job seekers often discover an interesting role on LinkedIn and then have to leave the flow to research whether the employer has a real history of visa sponsorship. That extra friction slows down decision-making and adds uncertainty during a stressful process.

## Why This Project Matters

This project shows how AI and automation can make public information more useful by placing it directly inside the user workflow. It also demonstrates browser automation, retrieval quality tradeoffs, and product design around a concrete user decision.

## Product Direction

The goal is to help users understand employer sponsorship signals without forcing them to manually search multiple external sources.

- The product sits on top of LinkedIn Jobs.
- It extracts company and role context from the current page.
- It searches public sponsorship-related sources.
- It summarizes the results into a more decision-friendly view.

## How The Solution Works

- A Chrome extension reads company context from LinkedIn Jobs pages.
- A backend service handles retrieval, search logic, and explanation assembly.
- Public data sources such as `h1bdata.info` and `myvisajobs.com` are used as evidence sources.
- Playwright is used where browser automation is required.
- A RAG-oriented retrieval path improves matching quality when straightforward lookup is weak.

## AI And Agentic Architecture

- Extraction agent: identifies employer context from page HTML.
- Retrieval agent: searches sponsorship-related public sources.
- Matching agent: compares available records to the inferred company and role.
- Fallback path: switches sources when primary retrieval is incomplete or noisy.
- Developer agents: Lovable and Codex accelerate both UX shaping and implementation.

## Technologies Used

- Chrome Extension Manifest V3
- Node.js
- Playwright
- MCP-oriented service interface
- Local embeddings with `Xenova/all-MiniLM-L6-v2`
- Lightweight RAG index and cache

## Key Decisions And Tradeoffs

- Extension-first delivery keeps the experience close to the user's job-search workflow, but limits the overall UI surface.
- Public-data-first architecture is accessible and practical, but source quality varies.
- Browser automation improves coverage, but increases complexity.
- Retrieval plus fallback logic raises reliability, but requires more maintenance than a single-source solution.

## Outcomes And Learnings

- The most valuable products often reduce context switching rather than inventing entirely new workflows.
- Public data becomes more useful when it is filtered and ranked for a user's immediate decision.
- A small UX surface can still feel sophisticated if the backend orchestration is well designed.
- This project demonstrates a practical use of AI and automation for career decision support.

## Evals

- Is company extraction correct from the LinkedIn page
- Are the sponsorship results relevant and trustworthy
- Is role matching precise enough to be useful
- How often does fallback improve or confuse the result
- Does the explanation help the user decide whether to prioritize the company

## Status

Working prototype with strong product direction. The next maturity step is better normalization across sources and more structured evaluation of extraction and match quality.
