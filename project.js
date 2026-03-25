import { projects } from "./data.js";

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const project = projects.find((item) => item.slug === slug);

const metaRoot = document.querySelector("#project-meta");
const markdownRoot = document.querySelector("#markdown-root");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function inlineMarkdown(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const html = [];
  let inList = false;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (!line.trim()) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      continue;
    }

    if (line.startsWith("# ")) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<h1>${inlineMarkdown(escapeHtml(line.slice(2)))}</h1>`);
      continue;
    }

    if (line.startsWith("## ")) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<h2>${inlineMarkdown(escapeHtml(line.slice(3)))}</h2>`);
      continue;
    }

    if (line.startsWith("### ")) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<h3>${inlineMarkdown(escapeHtml(line.slice(4)))}</h3>`);
      continue;
    }

    if (line.startsWith("- ")) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${inlineMarkdown(escapeHtml(line.slice(2)))}</li>`);
      continue;
    }

    if (inList) {
      html.push("</ul>");
      inList = false;
    }

    html.push(`<p>${inlineMarkdown(escapeHtml(line))}</p>`);
  }

  if (inList) {
    html.push("</ul>");
  }

  return html.join("");
}

async function loadProject() {
  if (!project) {
    metaRoot.innerHTML = "<h1>Project not found</h1>";
    markdownRoot.innerHTML = "<p>The requested project page does not exist.</p>";
    return;
  }

  metaRoot.innerHTML = `
    <p class="eyebrow">${project.status}</p>
    <h1>${project.name}</h1>
    <p class="detail-summary">${project.summary}</p>
  `;

  try {
    const response = await fetch(encodeURI(project.markdown));
    const markdown = await response.text();
    markdownRoot.innerHTML = renderMarkdown(markdown);
  } catch (error) {
    markdownRoot.innerHTML = "<p>Unable to load the markdown file for this project.</p>";
  }
}

loadProject();
