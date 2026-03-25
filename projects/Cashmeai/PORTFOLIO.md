# CashMeAI

## What Problem It Solves

Personal finance is fragmented. Most people have to jump across bank apps, credit card portals, and loan dashboards just to answer simple questions about balances, transactions, and spending. CashMeAI is designed to turn that fragmented experience into a single conversational interface.

## Why This Project Matters

This project sits at the intersection of fintech, conversational AI, and stateful agent design. It shows that I can work on high-trust product areas where integration, security, and user context matter as much as interface design.

## Product Direction

CashMeAI is an AI-powered financial assistant that connects to real financial accounts through Plaid and helps users interact with their money through chat instead of account-by-account navigation.

- Users connect checking, savings, credit card, and loan accounts.
- The product pulls balances and transaction history through Plaid.
- A conversational agent answers questions using the user's actual financial context.
- Conversation history and state persist over time, making the assistant more useful than a one-shot chatbot.

## How The Solution Works

- Frontend handles account connection, authentication, dashboard views, and chat entry points.
- Plaid integration provides secure account aggregation.
- Supabase provides auth, storage, and supporting data services.
- A Python backend uses LangGraph and LangChain to manage multi-turn financial conversations.
- Vertex AI powers the language layer for financial understanding and response generation.

## AI And Agentic Architecture

This project is a strong example of agentic system design in a high-context domain.

- Conversation agent: handles user chat and decides what financial context is needed.
- Tool-calling layer: invokes account balance and transaction tools dynamically.
- State manager: preserves conversation history and workflow state across sessions.
- Data access layer: retrieves financial data safely without exposing sensitive tokens to the frontend.
- Human design layer: keeps the product aligned with user trust, security, and clarity expectations.

## Technologies Used

- Python
- Flask
- LangGraph
- LangChain
- Google Vertex AI
- Plaid
- Supabase
- React and TypeScript on the frontend

## Key Decisions And Tradeoffs

- LangGraph instead of a stateless chat wrapper: better for multi-turn experiences, but more complex to manage.
- Plaid for account aggregation: accelerates integration, but adds operational and trust requirements.
- Supabase plus custom backend: good separation of concerns, but requires careful coordination across services.
- Finance chat as the interface: easier for users, but correctness and trust matter more than novelty.

## Outcomes And Learnings

- Finance products need strong workflow design, not just model capability.
- Stateful agents are much more compelling than stateless chat for real user tasks.
- Security boundaries and token handling become part of the product architecture, not just infrastructure details.
- This project demonstrates comfort with applied AI in a high-sensitivity environment.

## Evals

The right evals here begin with trust and usefulness.

- Can the agent answer balance and transaction questions correctly
- Does it call the right tool at the right time
- Does conversation state persist in a useful way
- Are responses understandable for non-technical users
- What safeguards are needed before expanding to advice-like behavior

## Status

Working prototype with a real architectural backbone. The most important next steps are broader financial tools, stronger response quality controls, and more explicit evaluation for correctness and trust.
