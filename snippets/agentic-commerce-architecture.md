# Agentic Commerce Architecture

## Goal

Convert natural-language shopping intent into ranked, explainable product options across multiple retailers.

## High-Level Flow

```text
User Query
  -> Intent Agent
  -> Search Agent
  -> Scraping / Retrieval Agent
  -> Extraction Agent
  -> Ranking Agent
  -> Explanation Layer
  -> Product Results UI

Support Systems
  -> Python Multi-Agent Backend
  -> Edge Functions / APIs
  -> Search Providers
  -> Caches and Logs
```

## Reusable Pattern

- Split intent understanding from retrieval and ranking.
- Use retrieval fallback paths because retailer data is inconsistent.
- Keep explanations close to ranking output so users can trust recommendations.
- Use Python-based orchestration when the workflow becomes too deep for thin request handlers.
