# ROADMAP.md — DevPilot AI Feature Roadmap

---

## MVP — Locator Generator ← *We are here*

- [x] Project scaffold (Next.js 16 + TypeScript + Tailwind + shadcn/ui)
- [ ] TypeScript type definitions
- [ ] OpenAI service layer
- [ ] System prompt & locator rules
- [ ] API route (`/api/generate-locator`)
- [ ] Landing page with HTML textarea input
- [ ] Locator result display cards
- [ ] Copy-to-clipboard for each locator
- [ ] Error handling & loading states
- [ ] Deploy to Vercel

---

## v1.1 — Screenshot Analyzer

Upload a screenshot → AI identifies interactive elements and suggests locators.

- [ ] Screenshot upload UI
- [ ] Vision API integration
- [ ] Element bounding box overlay

---

## v1.2 — Test Case Generator

Paste HTML or describe a user flow → AI generates full Playwright/Selenium test scripts.

- [ ] Test template engine
- [ ] Framework selector (Playwright / Selenium / Cypress)
- [ ] Syntax-highlighted code output
- [ ] Download as `.spec.ts` / `.py`

---

## v1.3 — Prompt Builder

Visual prompt editor for QA engineers to craft custom AI prompts without coding.

- [ ] Drag-and-drop prompt blocks
- [ ] Variable interpolation
- [ ] Save/load prompt templates

---

## v1.4 — Jenkins Log Analyzer

Paste a CI log → AI identifies test failures, root causes, and suggested fixes.

- [ ] Log parser
- [ ] Failure pattern recognition
- [ ] Fix suggestions with code snippets

---

## v2.0 — API Generator

From OpenAPI spec or Postman collection → generate typed API client + test stubs.

- [ ] OpenAPI parser
- [ ] Client generator (TypeScript / Python)
- [ ] Test stub generator

---

## Extensions

### VSCode Extension
- Hover over element in HTML → inline locator suggestions
- Right-click → "Generate Locator with DevPilot"

### Chrome Extension  
- Inspect live DOM elements in any browser
- Point-and-click locator generation
- Export directly to clipboard or file

---

## Infrastructure

- [ ] Authentication (Clerk or NextAuth)
- [ ] Usage metering & rate limiting
- [ ] Stripe billing integration
- [ ] Team workspaces
- [ ] Locator history & saved results
