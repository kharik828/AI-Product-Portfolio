# AI Product Portfolio

My portfolio of AI, agentic, and data products focused on real-world problems, architecture, tooling, tradeoffs, and evaluation.

This repository is meant to help product and technical folks quickly understand the real problems I am solving, along with the architecture, tooling, tradeoffs, and evaluation mindset behind the work.

## What This Portfolio Says About My Work

I am not using AI only as an end-user feature. I use it across the full product lifecycle:

- problem discovery and PRD shaping
- rapid UI prototyping with Lovable
- implementation, repo cleanup, and systems work with Codex
- LLM orchestration, retrieval, scraping, and workflow automation inside products
- human-first evaluation before automating quality checks

The result is a portfolio that combines product thinking, software engineering, agentic system design, and applied AI.

## Themes Across The Portfolio

- AI commerce and decision support
- agentic workflows and tool orchestration
- retrieval, scraping, and structured extraction
- multimodal AI and classification
- fintech and personal data assistants
- health-tech and real-time biometric decisioning
- classical data science and geospatial analytics

## Product Status

| Product | Status | Notes |
|---|---|---|
| [Health App](./projects/Twinkl/PORTFOLIO.md) | Working prototype | Mobile app around biometric decisioning, RAG, and future Python agentic chat |
| [Finance App](./projects/Cashmeai/PORTFOLIO.md) | Working prototype | Mobile finance app with Agentic AI Chat, LangGraph-backed conversations, and account workflows |
| [USA Employer Sponsorship History](./projects/Employer-sponsorship-history/PORTFOLIO.md) | Completed | Chrome extension and retrieval workflow for sponsorship insights |
| [Image Classification and Grading](./projects/GenAI%20CNN%20Image%20Classification%20and%20Grading/PORTFOLIO.md) | Completed | Comparative multimodal AI vs CNN solution study |
| [Commerce App](./projects/ShopSmartAI/PORTFOLIO.md) | In progress | Mobile commerce app with discovery, ranking, and a Python multi-agent backend |
| [Popularity Ranking](./projects/Popularity%20Ranking/PORTFOLIO.md) | Completed | Data science ranking model for city comparison |

## Projects

### [Health App](./projects/Twinkl/PORTFOLIO.md)

Mobile app focused on wearable-driven decisioning, real-time biometric workflows, RAG, and a future Python-based agentic AI chat layer.

### [Finance App](./projects/Cashmeai/PORTFOLIO.md)

Mobile finance app that connects to financial accounts and uses Agentic AI Chat plus a LangGraph-based backend to support end-to-end account workflows and conversational insight.

### [USA Employer Sponsorship History](./projects/Employer-sponsorship-history/PORTFOLIO.md)

Chrome extension and backend workflow that help job seekers understand employer H-1B sponsorship patterns directly from LinkedIn Jobs pages.

### [Image Classification and Grading](./projects/GenAI%20CNN%20Image%20Classification%20and%20Grading/PORTFOLIO.md)

Comparative AI project showing when multimodal LLMs can outperform traditional CNN-heavy pipelines for business-facing image classification and grading problems.

### [Commerce App](./projects/ShopSmartAI/PORTFOLIO.md)

Mobile commerce app covering discovery, ranking, and execution workflows, including a Python-based multi-agent backend.

### [Popularity Ranking](./projects/Popularity%20Ranking/PORTFOLIO.md)

Data science project using venue accessibility and clustering to compare urban neighborhoods and support relocation-style decisions.

## Technologies Repeated Across The Portfolio

- React, TypeScript, Vite, Tailwind, shadcn/ui
- Python, Flask, Jupyter, pandas, scikit-learn
- Supabase, PostgreSQL, Edge Functions
- OpenAI, Google Vertex AI, Gemini, LangChain, LangGraph
- Plaid, Fitbit API, Google Custom Search API, Foursquare API
- Playwright, Cheerio, browser automation, Chrome Extensions
- AWS Lambda, SageMaker, S3

## How I Think About Evals

Most of these products are still early enough that human evaluation is the right first step.

- Is the output correct
- Is it useful for the actual user decision
- Is the explanation believable
- What failure mode occurred
- Which parts can later become automated eval cases

That approach is visible across recommendation systems, retrieval workflows, financial assistants, and health-tech concepts in this portfolio.

## Repo Layout

```text
projects/    Project-specific source docs plus portfolio summaries
snippets/    Reusable patterns for agentic development and eval design
index.html   Static portfolio landing page
project.html Detail page that renders project markdown
```

## Public vs Internal

Only the curated `PORTFOLIO.md` files are intended for the public repo and portfolio site.

- Downloaded PRDs, raw project readmes, and working notes inside `projects/` are internal reference material.
- `.gitignore` is configured to keep those internal files out of the public repository.

## Publishing

This repo is designed to be:

- readable on GitHub as a portfolio
- publishable via GitHub Pages
- linkable from LinkedIn Featured content

## Scope Note

The downloaded readmes, PRDs, and supporting markdown files from each project repo are preserved inside `projects/`. The `PORTFOLIO.md` file inside each project folder is the curated public summary for this portfolio.
