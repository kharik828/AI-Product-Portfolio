export const projects = [
  {
    slug: "twinkl",
    name: "Health App",
    status: "Working prototype",
    domain: "Mobile App / Health Tech",
    summary:
      "Mobile app focused on a biometric decisioning workflow, RAG, Python-based agentic chat direction, and end-to-end health system architecture.",
    stack: ["React", "Python", "RAG", "Agentic AI Chat", "Supabase", "Fitbit API", "Apple Health"],
    markdown: "./projects/Twinkl/PORTFOLIO.md",
    repoUrl: "https://github.com/kharik828/AI-Product-Portfolio"
  },
  {
    slug: "cashmeai",
    name: "Finance App",
    status: "Working prototype",
    domain: "Mobile App / AI Finance",
    summary:
      "Mobile finance app built around Agentic AI Chat, end-to-end account workflows, conversational intelligence, and a LangGraph-based backend.",
    stack: ["Python", "Flask", "Agentic AI Chat", "LangGraph", "LangChain", "Vertex AI", "Plaid", "Supabase"],
    markdown: "./projects/Cashmeai/PORTFOLIO.md",
    repoUrl: "https://github.com/kharik828/AI-Product-Portfolio"
  },
  {
    slug: "usa-employer-sponsorship-history",
    name: "USA Employer Sponsorship History",
    status: "Completed",
    domain: "Career Intelligence",
    summary:
      "Chrome extension and backend workflow that summarize employer H-1B sponsorship signals directly from LinkedIn Jobs pages.",
    stack: ["Chrome Extension", "Node.js", "Playwright", "MCP", "RAG", "Embeddings"],
    markdown: "./projects/Employer-sponsorship-history/PORTFOLIO.md",
    repoUrl: "https://github.com/kharik828/AI-Product-Portfolio"
  },
  {
    slug: "image-classification-and-grading",
    name: "Image Classification and Grading",
    status: "Completed",
    domain: "Multimodal AI",
    summary:
      "Comparison of traditional CNN pipelines and multimodal LLM workflows for business-oriented image classification and grading tasks.",
    stack: ["Python", "AWS Lambda", "SageMaker", "S3", "TensorFlow", "Gemini"],
    markdown: "./projects/GenAI CNN Image Classification and Grading/PORTFOLIO.md",
    repoUrl: "https://github.com/kharik828/AI-Product-Portfolio"
  },
  {
    slug: "shopsmart-ai",
    name: "Commerce App",
    status: "In progress",
    domain: "Mobile App / AI Commerce",
    summary:
      "Mobile commerce app covering end-to-end discovery, ranking, and execution workflows, including a Python-based multi-agent backend.",
    stack: ["React", "Python", "Multi-agent Backend", "Supabase Edge Functions", "OpenAI", "Playwright"],
    markdown: "./projects/ShopSmartAI/PORTFOLIO.md",
    repoUrl: "https://github.com/kharik828/AI-Product-Portfolio"
  },
  {
    slug: "popularity-ranking",
    name: "Popularity Ranking",
    status: "Completed",
    domain: "Data Science",
    summary:
      "City comparison model that uses venue accessibility, geospatial analysis, and clustering to support relocation-style decisions.",
    stack: ["Python", "pandas", "Geopy", "Foursquare API", "Folium", "scikit-learn"],
    markdown: "./projects/Popularity Ranking/PORTFOLIO.md",
    repoUrl: "https://github.com/kharik828/AI-Product-Portfolio"
  }
];

export const snippets = [
  {
    name: "Agentic Finance Assistant",
    summary: "Stateful finance architecture combining chat orchestration, trusted tools, and real account context.",
    path: "./snippets/agentic-finance-architecture.md"
  },
  {
    name: "Agentic Commerce Pipeline",
    summary: "Shopping architecture that chains intent, retrieval, extraction, ranking, and explanation.",
    path: "./snippets/agentic-commerce-architecture.md"
  },
  {
    name: "Decision Support Extension",
    summary: "Inline decision-support architecture built around contextual retrieval and summarization.",
    path: "./snippets/agentic-decision-support-architecture.md"
  },
  {
    name: "Health Decisioning System",
    summary: "Biometric signal architecture for real-time decisioning with safe fallback behavior.",
    path: "./snippets/agentic-health-architecture.md"
  }
];
