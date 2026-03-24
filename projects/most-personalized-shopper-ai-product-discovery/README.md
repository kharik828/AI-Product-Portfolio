# Most Personalized Shopper AI - Product Discovery

## Problem

Online shopping often forces users to translate a vague need into exact search filters, then manually compare products across multiple retailers. That creates friction for users who know the outcome they want but do not know the best product or platform to start with.

## Product Direction

This project aims to behave more like an intelligent product discovery layer than a traditional search box. The target experience is a shopping assistant that understands intent, searches multiple sources, ranks products by relevance, and helps the user move from ambiguity to decision.

## Approach

The current codebase shows a React application with multi-page shopping flows, product result handling, intent display, and a backend integration path through Supabase Edge Functions.

- Frontend flows support login, search, results, and product detail exploration.
- Search results are tied to intent understanding rather than keyword-only matching.
- The implementation points toward multi-retailer support including Amazon, Target, Walmart, and Best Buy.
- OpenAI-backed search intent analysis appears in the code path, alongside backend-driven search and ranking workflows.
- Supabase is used as an application integration layer for server-side functions.

## AI And Agentic Architecture

This product is moving toward a multi-agent commerce workflow.

- Intent agent: interprets the user request into categories, constraints, and desired features.
- Retrieval agents: gather candidate products from one or more retailers.
- Ranking agent: scores products against the interpreted intent.
- Explanation agent: tells the user why a product is a match.
- Workflow agents for development: Lovable accelerates UI and interaction iteration, while Codex is better suited to repository shaping, code cleanup, and system-level integration work.

## Technologies

- React
- TypeScript
- Vite
- Tailwind and shadcn-style UI primitives
- Supabase Edge Functions
- OpenAI model integration for intent and scoring experiments
- Capacitor browser utilities for flow support

## Key Decisions And Tradeoffs

- Intent-led shopping: stronger personalization than keyword search, but depends on evaluation quality.
- Multi-retailer ambition: higher user value, but harder normalization across product data shapes.
- Fast prototyping with Lovable: useful for product velocity, but often requires follow-up engineering cleanup.
- Hybrid frontend and backend AI paths: flexible for experimentation, but architecture needs consolidation as the system matures.

## Outcomes And Learnings

- The most important layer is intent clarity, not just product retrieval.
- Personalization requires a better explanation system, otherwise users cannot trust the recommendations.
- UI velocity is useful early, but product credibility depends on stronger ranking logic and evaluation.
- Agentic development is already part of the product story because the product itself and the way it is being built both rely on decomposing work into specialized steps.

## Evals

Human evals are the current starting point.

- Human reviewers can judge whether the interpreted intent matches what the user meant.
- Human reviewers can compare ranked results for usefulness and relevance.
- Human reviewers can score explanation quality and trustworthiness.
- These rubrics can evolve into structured eval datasets for intent extraction, retrieval coverage, ranking quality, and explanation fidelity.

## Current Status

In-progress product exploration with meaningful frontend and architecture direction already visible. The main next step is to tighten the backend retrieval and ranking system so the personalized experience is measurable, repeatable, and easier to trust.
