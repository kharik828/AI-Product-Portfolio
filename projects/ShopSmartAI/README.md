# ShopSmart AI — Intelligent Multi-Platform Shopping Assistant

An AI-powered shopping assistant that searches across multiple e-commerce platforms (Amazon, Target, Walmart, Best Buy, etc.), scrapes product data, and uses GPT-4o-mini to extract, rank, and recommend the most relevant products based on natural language queries.

**Lovable Project**: [https://lovable.dev/projects/cd20b7e0-a609-4185-a115-0147a8e2b3ef](https://lovable.dev/projects/cd20b7e0-a609-4185-a115-0147a8e2b3ef)

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (React + Vite)               │
│  Login → Platform Selection → Search → Product Results  │
└──────────────────────┬──────────────────────────────────┘
                       │ Supabase Edge Functions
┌──────────────────────▼──────────────────────────────────┐
│              Supabase Edge Functions (Deno)              │
│  ┌──────────────┐ ┌────────────────┐ ┌───────────────┐  │
│  │ Intent Agent │→│ Product Search │→│ Product       │  │
│  │ (GPT-4o)     │ │ Agent (Google) │ │ Extractor     │  │
│  └──────────────┘ └────────────────┘ │ (GPT-4o-mini) │  │
│                                      └───────┬───────┘  │
│                    ┌─────────────────────────┐│          │
│                    │ Web Scraper (Cheerio +  ││          │
│                    │ Playwright + Fallback)  │┘          │
│                    └─────────────────────────┘           │
└─────────────────────────────────────────────────────────┘
```

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** — build tool & dev server
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — accessible component library (Radix UI primitives)
- **React Router v6** — client-side routing
- **TanStack React Query** — server state management
- **Axios** — HTTP client
- **Lucide React** — icon set
- **Framer Motion** — animations (via sonner)

### Backend (Supabase Edge Functions — Deno)
- **Intent Generation Agent** (`intent-agent.ts`) — uses GPT-4o to convert natural language queries into structured search intents
- **Product Search Agent** (`product-search-agent.ts`) — queries Google Custom Search API, filters for product pages, orchestrates scraping & extraction
- **Product Extractor** (`product-extractor.ts`) — uses GPT-4o-mini to extract structured product data from scraped page content
- **Web Scraper** (`web-scraper.ts`) — multi-strategy scraper (Cheerio → Playwright → fallback) with bot-detection avoidance
- **Scraping Strategies** (`utils/scraping-strategies.ts`) — rotating user agents, realistic headers, delays
- **Bot Detection Utils** (`utils/bot-detection.ts`) — detects and handles CAPTCHAs and bot checks
- **Content Extractor** (`utils/content-extractor.ts`) — cleans HTML into structured product data

### Legacy Backend (Python — reference only)
- `ShoppingAIBackend.py` — original LangChain/LangGraph agent implementation
- `multi-site-scrapper.py` — BeautifulSoup/Requests multi-site scraper

### Infrastructure
- **Supabase** — PostgreSQL database, auth, edge functions, secrets management
- **Google Custom Search API** — product discovery (up to 20 results per query)
- **OpenAI API** — GPT-4o (intent), GPT-4o-mini (extraction & ranking)
- **Lovable Cloud** — deployment and hosting

## Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `LoginPage` | Amazon OAuth login |
| `/login` | `LoginPage` | Login redirect |
| `/search` | `SearchPage` | Main search interface with platform selection, search bar, and product results |
| `/product/:asin` | `ProductPage` | Detailed product view with custom product page |

## Key Features

- **Natural Language Search** — type queries like "best noise cancelling headphones under $200" and the AI understands intent
- **Multi-Platform Search** — search across Amazon, Target, Walmart, Best Buy, eBay simultaneously
- **AI-Powered Ranking** — products ranked by relevance score with explanations
- **Intelligent Scraping** — multi-strategy web scraping with bot-detection avoidance and concurrency limiting (p-limit)
- **Product Details Extraction** — images, prices, ratings, reviews, features, shipping, offers, coupons all extracted via LLM
- **Search History** — queries stored in Supabase for personalization

## Local Development

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL="http://localhost:5000/api"
VITE_AMAZON_CLIENT_ID="your-amazon-client-id"
VITE_AMAZON_REDIRECT_URI="http://localhost:5000/callback"
```

Supabase Edge Function secrets (configured via Lovable Cloud / Supabase dashboard):
- `OPENAI_API_KEY` — OpenAI API key for GPT-4o and GPT-4o-mini
- `SUPABASE_URL` — auto-configured
- `SUPABASE_SERVICE_ROLE_KEY` — auto-configured

## Deployment

Open [Lovable](https://lovable.dev/projects/cd20b7e0-a609-4185-a115-0147a8e2b3ef) and click Share → Publish.

Edge functions deploy automatically on push. Frontend requires clicking "Update" in the publish dialog.

## Project Structure

```
├── src/
│   ├── components/          # UI components
│   │   ├── ui/              # shadcn/ui primitives
│   │   ├── SearchResults.tsx # Product search results grid
│   │   ├── SearchIntent.tsx  # Search intent display
│   │   ├── CustomProductPage.tsx # Detailed product view
│   │   ├── PlatformSelection.tsx # Platform picker
│   │   └── ...
│   ├── pages/               # Route pages
│   ├── lib/                 # API service, utilities
│   ├── hooks/               # Custom React hooks
│   ├── integrations/        # Supabase client config
│   └── utils/               # OpenAI service utilities
├── supabase/
│   └── functions/
│       └── search/          # Edge function modules
│           ├── index.ts     # Entry point & orchestrator
│           ├── intent-agent.ts
│           ├── product-search-agent.ts
│           ├── product-extractor.ts
│           ├── web-scraper.ts
│           ├── types.ts
│           └── utils/       # Scraping utilities
├── backend/                 # Legacy Python backend (reference)
└── public/                  # Static assets
```
