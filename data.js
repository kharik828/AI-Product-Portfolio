export const projects = [
  {
    slug: "usa-employer-sponsorship-history",
    name: "USA Employer Sponsorship History",
    status: "Working prototype",
    summary:
      "Chrome extension and backend service that extract employer context from LinkedIn Jobs and summarize H-1B sponsorship patterns from public sources.",
    stack: ["Chrome Extension", "Node.js", "Playwright", "MCP", "RAG", "Embeddings"],
    markdown: "./projects/usa-employer-sponsorship-history/README.md",
    repoUrl: "https://github.com/kharik828/AI-Product-Portfolio"
  },
  {
    slug: "most-personalized-shopper-ai-product-discovery",
    name: "Most Personalized Shopper AI - Product Discovery",
    status: "In progress",
    summary:
      "Multi-retailer shopping assistant focused on intent understanding, product retrieval, ranking, and personalized recommendation flows.",
    stack: ["React", "TypeScript", "Supabase", "Lovable", "OpenAI", "Multi-agent workflow"],
    markdown: "./projects/most-personalized-shopper-ai-product-discovery/README.md",
    repoUrl: "https://github.com/kharik828/AI-Product-Portfolio"
  }
];

export const snippets = [
  {
    name: "Agentic Product Delivery",
    summary: "A reusable workflow for splitting product development across human planning, UI agents, coding agents, and eval loops.",
    path: "./snippets/agentic-product-delivery.md"
  },
  {
    name: "Human Evals First",
    summary: "A simple rubric for evaluating early-stage AI products before building automated eval infrastructure.",
    path: "./snippets/human-evals-first.md"
  }
];
