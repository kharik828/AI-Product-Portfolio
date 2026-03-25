# Agentic Decision Support Architecture

## Goal

Help users make a better decision inside an existing workflow by pulling external evidence, normalizing it, and summarizing it in context.

## High-Level Flow

```text
User Context
  -> In-Workflow Trigger
  -> Context Extraction Agent
  -> Retrieval Agent
  -> Matching / Relevance Agent
  -> Fallback Source Agent
  -> Summary / Insight Layer
  -> Inline UI Output

Sources
  -> Public Web Data
  -> Structured Records
  -> Browser Automation
```

## Reusable Pattern

- Start with the user workflow rather than a standalone dashboard.
- Extract only the context needed to retrieve evidence.
- Expect source inconsistency and build fallback paths.
- Optimize for decision usefulness, not just retrieval volume.
