# Commerce App Initiative

## What Problem It Solves

Cross-retailer shopping is fragmented. Users search each site separately, compare inconsistent product information, and still struggle to know which result is actually the best fit for their need.

## Why This Project Matters

This is one of the strongest demonstrations in this portfolio because it connects real user experience design with a fairly complex AI pipeline. It now represents the merged commerce initiative in this portfolio, combining earlier product-discovery exploration with a more implemented multi-platform shopping assistant architecture. It shows full-stack execution, product architecture, retrieval strategy, extraction, ranking, and deployment tradeoffs.

## Product Direction

This is a multi-platform commerce app initiative that turns natural language into structured shopping intent and returns ranked products from multiple retailers. The initiative also includes a Python-based multi-agent backend path for deeper orchestration and shopping intelligence.

- The user enters a natural-language request.
- The system interprets the request into structured search intent.
- Product pages are discovered through web search.
- Product information is scraped and normalized.
- AI models extract attributes, assign relevance scores, and return ranked results.

## How The Solution Works

- React and TypeScript power the user-facing shopping experience.
- A Python-based multi-agent backend supports richer orchestration for discovery, retrieval, and ranking workflows.
- Supabase Edge Functions run the serverless backend logic.
- GPT-4o is used for intent generation.
- GPT-4o-mini is used for product extraction and relevance scoring.
- Google Custom Search API is used to discover product pages.
- Scraping uses a multi-strategy path through Cheerio, Playwright, and fallback logic.
- Results are validated, filtered, and ranked before being shown to the user.

## AI And Agentic Architecture

- Intent agent: interprets the natural-language search request.
- Search agent: builds optimized queries and finds likely product pages.
- Scraping agent: fetches retailer content with layered fallback strategies.
- Extraction agent: converts messy page content into structured product data.
- Ranking layer: scores relevance and filters weak matches.
- Orchestrator: coordinates the pipeline through serverless functions.
- Python multi-agent backend: supports deeper workflow orchestration beyond the edge-function path.

## Technologies Used

- React
- Python
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Supabase Edge Functions
- Deno
- OpenAI APIs
- Google Custom Search API
- Cheerio
- Playwright

## Key Decisions And Tradeoffs

- Serverless edge functions replaced a dedicated Python backend to simplify deployment, but reduced the convenience of using some heavier agent frameworks.
- Google Custom Search replaced a more specialized commerce API because it was faster to access, but required more filtering and scraping work.
- GPT-4o and GPT-4o-mini were split by task for cost control.
- Scraping reliability remains a real constraint, so the system combines metadata-first reasoning with deeper extraction when possible.

## Outcomes And Learnings

- AI commerce products are as much retrieval systems as they are model systems.
- Search quality depends on disciplined query construction and aggressive filtering.
- Scraping is often the hardest engineering problem in these workflows, not the prompting.
- This project demonstrates that I can evolve an architecture in response to real implementation constraints rather than staying attached to an initial plan.

## Evals

- Relevance of ranked products for a given intent
- Accuracy of extracted pricing, titles, and product attributes
- Search latency and cost per search
- Scraping success rate by retailer and strategy
- User trust in explanation quality

## Status

Implemented and deployed architecture with clear evidence of end-to-end thinking across product, AI, and systems engineering.
