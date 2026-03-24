# AI Product Portfolio

Public portfolio for my AI and agentic product work. This repo is designed to be the clean, external-facing layer that explains what I am building, how I am using AI agents to accelerate delivery, and what I am learning through product execution.

## Live Portfolio Direction

This repo is structured to support both:

- a GitHub-readable portfolio via markdown
- a lightweight static website that can be published with GitHub Pages and linked as a Featured item on LinkedIn

## What This Portfolio Shows

- The problems I am choosing to work on outside of my day job
- How I combine product thinking with AI-assisted implementation
- Where Lovable, Codex, MCP-style tooling, RAG, and eval design fit into the delivery process
- What has been shipped, what is in progress, and what I am still validating

## Featured Projects

### [USA Employer Sponsorship History](./projects/usa-employer-sponsorship-history/README.md)

Chrome extension plus backend services that help job seekers understand employer H-1B sponsorship history from LinkedIn job pages using public data sources, search logic, and retrieval workflows.

### [Most Personalized Shopper AI - Product Discovery](./projects/most-personalized-shopper-ai-product-discovery/README.md)

Multi-retailer shopping assistant focused on intent understanding, product relevance ranking, and agent-assisted shopping workflows across Amazon and other retail platforms.

## How I Use AI Agents

I do not treat AI as a demo feature. I use agents across the product lifecycle:

- Discovery agents to shape ideas into concrete workflows and product scopes
- Coding agents to scaffold, refactor, and accelerate implementation
- Research and retrieval agents to collect, normalize, and compare source data
- Evaluation loops that begin with human review before moving toward more automated eval coverage

My current working model is:

1. Define the user problem and the decision that the product must help the user make.
2. Break the workflow into agent-sized responsibilities.
3. Use Lovable and Codex where each is strongest.
4. Keep a human-in-the-loop for quality gates, especially in early product stages.
5. Design evals early so the product can mature beyond intuition and demos.

## Repo Layout

```text
projects/   One-page markdown writeups for each product
snippets/   Reusable patterns for agentic systems, eval design, and implementation
index.html  Portfolio landing page for GitHub Pages
project.html Project detail page that renders markdown content
```

## Publish

To publish this as a site:

1. Push this repo to `https://github.com/kharik828/AI-Product-Portfolio.git`
2. Enable GitHub Pages from the repository root
3. Add the GitHub Pages URL as a Featured link on LinkedIn

## Current Scope

This first pass documents the projects that are already available locally in this workspace. More project pages can be added once the remaining repos are cloned into the portfolio workspace.
