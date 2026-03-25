# CashMeAI — Python Backend

Flask-based API server with a LangGraph-powered AI financial agent.

## Overview

This backend provides the conversational AI engine for CashMeAI. It uses LangGraph for stateful, multi-turn conversations and LangChain with Google Vertex AI for natural language understanding. The agent can query account balances, fetch transactions, and provide financial insights.

## Architecture

```
Flask API Server
├── /api/chat              → LangGraph Agent
│   ├── State Graph        → Manages conversation flow
│   ├── Tool Calling       → Dynamically invokes financial tools
│   └── Checkpointing     → Persists state across sessions
├── /api/plaid/*           → Plaid API proxy endpoints
└── /health                → Health check
```

### Agent Capabilities

| Tool | Description |
|------|-------------|
| `get_account_balance` | Query current balance for a connected account |
| `get_recent_transactions` | Fetch transaction history with date filtering |

The agent automatically selects tools based on user queries and maintains conversation context across messages.

## Setup

### Prerequisites

- Python 3.10+
- Google Cloud credentials (for Vertex AI)

### Installation

```bash
cd backend
pip install -r requirements.txt
```

### Configuration

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

| Variable | Description |
|----------|-------------|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key |
| `PLAID_CLIENT_ID` | Plaid client ID |
| `PLAID_SECRET` | Plaid secret key |
| `PLAID_ENV` | `sandbox`, `development`, or `production` |
| `LOVABLE_API_KEY` | Lovable AI Gateway API key |

### Run Locally

```bash
python app.py
```

Server starts on `http://localhost:5000`

## API Endpoints

### Health
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | Server health check |

### Chat
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/chat` | Send a message to the financial agent |

**Request body:**
```json
{
  "message": "What's my checking account balance?",
  "conversation_id": "uuid",
  "user_id": "uuid"
}
```

### Plaid
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/plaid/create-link-token` | Create Plaid Link token |
| `POST` | `/api/plaid/exchange-token` | Exchange public token for access token |
| `POST` | `/api/plaid/get-balance` | Get account balances |
| `POST` | `/api/plaid/get-transactions` | Get transaction history |

## Deployment

### GCP Cloud Run (Recommended)
```bash
gcloud run deploy cashmeai-backend \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars "PLAID_ENV=sandbox"
```

### Railway
```bash
railway login && railway init && railway up
```

### Render
1. Connect GitHub repo → select `backend/` directory
2. Build command: `pip install -r requirements.txt`
3. Start command: `gunicorn app:app`
4. Add environment variables in dashboard

### Heroku
```bash
heroku create cashmeai-backend
git subtree push --prefix backend heroku main
```

## Database Tables

The backend reads/writes to these Supabase tables:

| Table | Purpose |
|-------|---------|
| `conversations` | Chat sessions (id, title, user_id) |
| `messages` | Message history (role, content, metadata) |
| `conversation_state` | LangGraph agent state (JSON) |
| `connected_accounts` | Plaid access tokens and account metadata |

## Extending the Agent

Add new tools in `financial_agent.py`:

```python
@tool
def analyze_spending(category: str, months: int = 1) -> str:
    """Analyze spending in a category over N months."""
    # Implementation
    return result

# Add to tools list
self.tools = [...existing_tools, analyze_spending]
```

The agent automatically discovers and uses new tools based on user queries.

## Related

- [Main README](../README.md)
- [Product Requirements Document](../docs/CashMeAI_PRD.md)
