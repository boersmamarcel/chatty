// Single source of truth for facts the site states about the product.
// Keep in step with chatty2's user docs; see strategy/04-website-plan.md §7.

export const links = {
  releases: "https://github.com/boersmamarcel/chatty2/releases/latest",
  repo: "https://github.com/boersmamarcel/chatty2",
  issues: "https://github.com/boersmamarcel/chatty2/issues",
  docs: "https://boersmamarcel.github.io/chatty2/",
  gettingStarted:
    "https://boersmamarcel.github.io/chatty2/user/getting-started.html",
  security: "https://boersmamarcel.github.io/chatty2/user/security.html",
  terminal: "https://boersmamarcel.github.io/chatty2/user/terminal.html",
  terminalDock:
    "https://boersmamarcel.github.io/chatty2/user/terminal-dock.html",
  subAgents: "https://boersmamarcel.github.io/chatty2/user/sub-agents.html",
  teamTutorial:
    "https://boersmamarcel.github.io/chatty2/user/tutorial-team.html",
  swarmTutorial:
    "https://boersmamarcel.github.io/chatty2/user/tutorial-swarm.html",
  release050: "https://github.com/boersmamarcel/chatty2/releases/tag/v0.5.0",
  skills:
    "https://boersmamarcel.github.io/chatty2/user/memory-and-skills.html",
  providers:
    "https://boersmamarcel.github.io/chatty2/user/providers-and-models.html",
  dataLocations:
    "https://boersmamarcel.github.io/chatty2/user/advanced.html#where-chatty-stores-data",
};

export const providers = [
  { name: "OpenRouter", note: "One key, hundreds of models, live prices" },
  { name: "Azure OpenAI", note: "Your company's deployments, key or Entra ID" },
  { name: "Ollama", note: "Local models, free, found automatically" },
  {
    name: "OpenAI-compatible servers",
    note: "vLLM, llama.cpp, LM Studio (terminal app)",
  },
];

export const platforms = ["macOS", "Linux", "Windows"];
