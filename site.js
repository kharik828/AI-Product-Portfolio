import { projects, snippets } from "./data.js";

const projectGrid = document.querySelector("#project-grid");
const snippetGrid = document.querySelector("#snippet-grid");

function buildProjectCard(project) {
  const techList = project.stack.map((item) => `<span class="pill">${item}</span>`).join("");

  return `
    <article class="card">
      <div class="card-top">
        <p class="status">${project.domain} · ${project.status}</p>
        <h3>${project.name}</h3>
        <p>${project.summary}</p>
      </div>
      <div class="pill-row">${techList}</div>
      <div class="card-actions">
        <a class="text-link" href="./project.html?slug=${project.slug}">Project detail</a>
        <a class="text-link" href="${project.repoUrl}" target="_blank" rel="noreferrer">Repo</a>
      </div>
    </article>
  `;
}

function buildSnippetCard(snippet) {
  return `
    <article class="card compact-card">
      <h3>${snippet.name}</h3>
      <p>${snippet.summary}</p>
      <a class="text-link" href="${snippet.path}">Open snippet</a>
    </article>
  `;
}

projectGrid.innerHTML = projects.map(buildProjectCard).join("");
snippetGrid.innerHTML = snippets.map(buildSnippetCard).join("");
