# DevPilot AI 🚀

> AI-powered QA Automation Toolkit for Selenium, Playwright, Appium & Cypress engineers.

## Overview

DevPilot AI generates reliable, maintainable test locators from raw HTML using AI — saving QA engineers hours of manual inspection.

## MVP Feature — Locator Generator

Paste any HTML snippet and receive:

| Output | Description |
|--------|-------------|
| **Best Locator** | Framework-agnostic recommendation |
| **Playwright** | `page.getByRole()`, `page.getByTestId()`, etc. |
| **Selenium XPath** | Stable, attribute-based XPath |
| **Selenium CSS** | CSS selector |
| **Appium** | Mobile-compatible locator |
| **Explanation** | Why this locator was chosen |
| **Confidence Score** | 0–100% reliability rating |

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS v4 + shadcn/ui
- **AI**: OpenAI API (provider-agnostic architecture)
- **Deploy**: Vercel

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local
# → Fill in your OPENAI_API_KEY

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router (pages + API routes)
│   └── api/generate-locator/
├── components/
│   ├── ui/                 # shadcn/ui base components
│   └── locator/            # Feature-specific components
├── services/               # AI service layer (business logic)
├── lib/                    # Utilities, OpenAI client, prompts
└── types/                  # TypeScript interfaces & enums
```

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) — System design decisions
- [ROADMAP.md](./ROADMAP.md) — Feature roadmap
- [TASKS.md](./TASKS.md) — Active development tasks
- [CLAUDE.md](./CLAUDE.md) — AI engineer rules

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for the full plan including Screenshot Analyzer, VSCode Extension, Chrome Extension, and more.
