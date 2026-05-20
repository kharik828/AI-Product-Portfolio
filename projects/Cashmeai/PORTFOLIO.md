# Finance App — Pre-Pilot

## What Problem It Solves

Personal finance is fragmented. Most people jump across multiple bank apps, credit card portals, and dashboards just to answer basic questions about where their money stands. Tools surface data but rarely help users act on it. This app is built to change that — one conversational workspace that connects to real financial accounts, understands the full picture, and helps users get answers and take action without app-switching.

## Why Pre-Pilot

The app has moved from working prototype to pre-pilot. The core architecture — financial account integration, agentic AI chat with tool-calling, RAG-based context retrieval, and stateful conversations — is operational. The current focus is validating with real users, tightening response accuracy, and hardening the trust model.

## Product Direction

- Users connect their financial accounts through a secure bank-grade integration layer.
- A conversational AI agent answers questions using real account context — balances, transactions, spend patterns.
- The agent invokes financial tools dynamically (balance lookup, transaction search, spend categorization) rather than just generating responses.
- Conversation history persists across sessions, making the assistant progressively more useful over time.
- Proactive behavior is designed into the architecture but gated for pilot validation.

## How The Solution Works

- React and TypeScript frontend handles auth, account connection, dashboard views, and chat.
- A secure account aggregation layer connects to financial institutions.
- Supabase Cloud manages auth, persistent conversation state, and supporting data services.
- Python backend (Flask) orchestrates the agentic layer using Claude API.
- RAG grounds responses in connected-account data rather than general financial knowledge.
- MCP integrations allow Claude Code to inspect live database state, run evaluations against real data, and deploy backend changes directly from the development environment.

## AI and Agentic Architecture

- Conversation agent routes user intent to the right financial tools and decides what context is needed.
- Tool-calling layer invokes balance, transaction, and categorization functions dynamically.
- State manager preserves multi-turn conversation history and session context across interactions.
- Retrieval layer grounds responses in real account data — not hallucinated generalities.
- Evaluation layer uses agent-driven queries to test correctness and response quality before changes are deployed.
- Human trust layer keeps product decisions aligned with security, correctness, and user clarity expectations.

## Technologies Used

- Python, Flask (backend API and agent orchestration)
- Claude API (conversational agent and tool-calling)
- RAG (retrieval-augmented generation for account-grounded responses)
- Secure financial account aggregation
- Supabase Cloud (auth, data, persistent conversation state)
- React, TypeScript (frontend)
- MCP Integrations (database and deployment infrastructure)
- Claude Code and OpenAI Codex (AI engineering and implementation layer)

## AI Stack Evolution

This project reflects a shift in how I work as an AI engineer. The development environment is now a connected system rather than isolated tools:

- **Lovable** generates UI scaffolding and first-pass interfaces synced with the GitHub repo.
- **GitHub and Supabase Cloud** stay connected throughout development — repo state and database schema evolve together.
- **VS Code with Claude Code and Codex** drives backend implementation, refactoring, and agentic logic.
- **MCP integrations** connect Claude Code directly to the database and deployment infrastructure — agents can query live data, evaluate response quality, and trigger deployments without leaving the development loop.

This compression of the build-eval-deploy cycle is one of the most significant changes from how this project started.

## Key Decisions and Tradeoffs

- Bank-grade account aggregation: accelerates institution coverage, but adds operational and trust requirements that shaped the UX.
- RAG over generic chat: better factual grounding tied to real account data, but requires careful retrieval quality and chunking design.
- Stateful sessions: far more compelling than stateless chat for real financial tasks, but requires robust state management.
- Agent-driven evals via MCP: allows evaluation of live system behavior before deployment rather than relying solely on offline test suites.

## Evals

The right evals for a finance product begin with trust and correctness — not just model capability.

- Does the agent answer balance and transaction questions accurately against real account data?
- Does it invoke the right tool at the right time without hallucinating account details?
- Does conversation state persist in a way that feels coherent across sessions?
- Are responses clear and appropriately hedged for non-technical users?
- What safeguards need to be in place before expanding toward advice-adjacent behavior?

## Status

Pre-pilot. Core product is operational against real accounts. Actively validating with users, tightening the eval suite, and refining the agentic response layer.
