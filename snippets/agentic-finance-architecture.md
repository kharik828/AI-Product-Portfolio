# Agentic Finance Assistant Architecture

## Goal

Turn fragmented financial account data into a conversational workflow that can answer user questions with real account context.

## High-Level Flow

```text
User
  -> Web App
  -> Auth + Account Connection
  -> Chat Request

Chat Orchestrator
  -> Conversation State Manager
  -> Tool Router
  -> Financial Context Retriever
  -> Response Generator

Tool Layer
  -> Account Balance Tool
  -> Transactions Tool
  -> Future Spending Analysis Tool

Data Layer
  -> Plaid
  -> Supabase / Postgres
```

## Reusable Pattern

- Keep the chat layer separate from the financial tools.
- Use stateful orchestration so follow-up questions remain useful.
- Treat external account integrations as trusted tools, not direct model context.
- Make correctness and traceability first-class concerns.
