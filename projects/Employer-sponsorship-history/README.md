# USA Employer Sponsorship History

## Problem

Job seekers can usually find open roles on LinkedIn, but they still have to do separate manual research to understand whether a company has a meaningful history of H-1B sponsorship. That extra step slows decision-making and makes it harder to prioritize applications.

## Product Direction

This product brings that research closer to the job search workflow by attaching sponsorship signals directly to LinkedIn Jobs pages. The goal is to reduce the gap between discovering a role and understanding whether the employer is worth pursuing.

## Approach

The current implementation combines a Chrome extension with a backend service.

- The extension extracts company and job context from LinkedIn Jobs pages.
- The backend searches public sponsorship-related sources such as `h1bdata.info` and falls back to `myvisajobs.com` when needed.
- The service can run in an HTTP mode for the extension and also exposes an MCP-oriented interface for future agent use.
- Retrieval quality can be improved through a RAG-style path using local embeddings and cached indexing.
- Playwright is used where browser automation is necessary to reliably access structured public data.

## AI And Agentic Architecture

This is not a chatbot wrapper. The agentic pattern is the orchestration layer around the user task.

- Extraction agent: identifies company context from LinkedIn page HTML.
- Retrieval agent: looks across public sponsorship sources and selects the best source path.
- Matching agent: ranks relevant roles and filters noisy results.
- Fallback agent path: switches between data providers when primary retrieval is weak.
- Developer agents: Lovable and Codex accelerate interface, workflow, and code iteration on different parts of the system.

## Technologies

- Chrome Extension Manifest V3
- Node.js
- Playwright
- MCP-style tool surface
- Local embeddings with `Xenova/all-MiniLM-L6-v2`
- Lightweight RAG index and cache

## Key Decisions And Tradeoffs

- Public data first: keeps the product grounded in accessible sources, but data quality varies by source.
- Browser automation where needed: improves reliability, but increases operational complexity.
- RAG plus fallback modes: improves relevance and resilience, but adds multiple retrieval paths to maintain.
- Extension-first UX: reduces user friction, but constrains the interaction model compared with a full web app.

## Outcomes And Learnings

- The strongest value is not raw search. It is contextual decision support inside the application workflow where the user is already working.
- Source fallback matters because public datasets are incomplete and inconsistent.
- A thin extension can feel powerful when the backend does the heavy lifting.
- Even before full automation, this product shows how agents can break a messy research task into smaller reliable steps.

## Evals

Evaluation is currently centered on human review.

- Human evals are being used to assess whether company extraction is correct.
- Human evals are being used to judge whether the returned sponsorship signal is useful for application decisions.
- Role matching quality is being reviewed for precision versus noise.
- Over time, these review patterns can become structured eval sets for extraction accuracy, retrieval success, fallback frequency, and ranking quality.

## Current Status

Working prototype with extension and backend architecture in place. The next level of maturity is tighter eval coverage, stronger source normalization, and clearer explanation quality for end users.
