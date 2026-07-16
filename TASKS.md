# TASKS.md — DevPilot AI Development Backlog

Format:
- Status: `TODO` | `IN_PROGRESS` | `DONE`
- Max 5 files changed per task
- Run lint + build before marking DONE

---

## Task001 — Create landing page shell

**Status:** `DONE` (Completed 2026-07-16)

**Goal:** Replace the default Next.js page with a branded landing page shell for DevPilot AI.

**Acceptance Criteria:**
- Page title is "DevPilot AI — AI Locator Generator"
- Header with logo/brand name visible
- Placeholder section where the locator tool will live
- Responsive layout
- No broken build or lint errors

**Files to touch (max 5):**
- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`

---

## Task002 — TypeScript type definitions

**Status:** `TODO`

**Goal:** Define all TypeScript interfaces and enums for the locator feature.

**Acceptance Criteria:**
- `LocatorRequest` interface
- `LocatorResult` interface
- `FrameworkLocator` interface
- `ConfidenceLevel` enum
- All types exported from a barrel `src/types/index.ts`

**Files to touch (max 5):**
- `src/types/locator.ts`
- `src/types/index.ts`

---

## Task003 — OpenAI client + system prompt

**Status:** `TODO`

**Goal:** Create the AI client singleton and the locator system prompt.

**Acceptance Criteria:**
- `src/lib/openai.ts` — provider-agnostic OpenAI client factory
- `src/lib/prompts.ts` — system prompt with locator priority rules
- Prompt enforces: data-testid > aria-label > role > name > id > text > css > xpath
- Prompt instructs AI to always return JSON
- No hardcoded API keys

**Files to touch (max 5):**
- `src/lib/openai.ts`
- `src/lib/prompts.ts`

---

## Task004 — AI service layer

**Status:** `TODO`

**Goal:** Create the `LocatorService` that calls OpenAI and parses the response.

**Acceptance Criteria:**
- `src/services/locatorService.ts`
- Accepts `LocatorRequest`, returns `LocatorResult`
- Handles OpenAI errors gracefully
- Validates JSON response shape
- No UI imports

**Files to touch (max 5):**
- `src/services/locatorService.ts`

---

## Task005 — API route `/api/generate-locator`

**Status:** `TODO`

**Goal:** Create the Next.js Route Handler that wires the HTTP layer to the service.

**Acceptance Criteria:**
- POST `/api/generate-locator`
- Validates request body
- Calls `LocatorService`
- Returns JSON with correct status codes (200, 400, 500)
- Uses native `Response.json()` (Next.js 16)

**Files to touch (max 5):**
- `src/app/api/generate-locator/route.ts`

---

## Task006 — HTML input component

**Status:** `TODO`

**Goal:** Build the `LocatorInput` component with textarea + submit button.

**Acceptance Criteria:**
- Textarea for HTML paste
- Character count indicator
- "Generate Locator" button with loading state
- Client component (`'use client'`)
- Accessible (label, aria attributes)

**Files to touch (max 5):**
- `src/components/locator/LocatorInput.tsx`

---

## Task007 — Locator result cards component

**Status:** `TODO`

**Goal:** Build the `LocatorResults` component to display AI output.

**Acceptance Criteria:**
- Displays: Best Locator, Playwright, Selenium XPath, Selenium CSS, Appium
- Copy-to-clipboard button per locator
- Confidence score badge (color-coded)
- Explanation section
- Handles loading and error states

**Files to touch (max 5):**
- `src/components/locator/LocatorResults.tsx`
- `src/components/locator/LocatorCard.tsx`

---

## Task008 — Wire up the main page

**Status:** `TODO`

**Goal:** Assemble the full page by connecting `LocatorInput` + `LocatorResults` with API calls.

**Acceptance Criteria:**
- State management for HTML input, results, loading, error
- Calls `/api/generate-locator` on submit
- Shows loading skeleton during AI call
- Shows error message on failure
- Full end-to-end flow working

**Files to touch (max 5):**
- `src/app/page.tsx`
- `src/components/locator/LocatorTool.tsx`

---

## Task009 — Polish & error handling

**Status:** `TODO`

**Goal:** Production-quality UX polish.

**Acceptance Criteria:**
- Toast notifications for copy success / errors
- Empty state when no results yet
- Proper 404 and error pages
- Meta tags (title, description, og:image)
- Mobile responsive

**Files to touch (max 5):**
- `src/app/layout.tsx`
- `src/app/error.tsx`
- `src/app/not-found.tsx`
- `src/components/locator/LocatorTool.tsx`

---

## Task010 — Vercel deployment prep

**Status:** `TODO`

**Goal:** Ensure the project is ready to deploy to Vercel.

**Acceptance Criteria:**
- `vercel.json` if needed
- Environment variable documentation complete
- `npm run build` passes cleanly
- No console errors in production build

**Files to touch (max 5):**
- `vercel.json` (if needed)
- `.env.example` (updated)
- `README.md` (deployment section)
