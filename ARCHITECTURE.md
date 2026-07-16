# ARCHITECTURE.md — DevPilot AI System Architecture

---

## Guiding Principles

1. **Separation of concerns** — UI, business logic, and data access are strictly separated.
2. **Provider agnosticism** — The AI provider (OpenAI) is isolated behind a service layer. Swapping to Anthropic, Gemini, or a local model requires changing only `src/lib/openai.ts`.
3. **Type safety** — All data crossing boundaries (HTTP, service calls) is typed via interfaces in `src/types/`.
4. **Scalability** — New modules (Screenshot Analyzer, Test Generator, etc.) are added as new service + component pairs without touching existing code.

---

## Layer Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Browser / Client                  │
│         src/components/locator/*.tsx                 │
│         src/app/page.tsx  (Client Component)         │
└─────────────────────┬───────────────────────────────┘
                      │ fetch()
┌─────────────────────▼───────────────────────────────┐
│                  HTTP Layer (Next.js)                │
│         src/app/api/generate-locator/route.ts        │
└─────────────────────┬───────────────────────────────┘
                      │ service call
┌─────────────────────▼───────────────────────────────┐
│                 Service Layer                        │
│         src/services/locatorService.ts               │
│         - Input validation                           │
│         - Prompt construction                        │
│         - Response parsing & validation              │
└─────────────────────┬───────────────────────────────┘
                      │ OpenAI API call
┌─────────────────────▼───────────────────────────────┐
│                  AI Layer                            │
│         src/lib/openai.ts  (client singleton)        │
│         src/lib/prompts.ts (system prompt)           │
└─────────────────────┬───────────────────────────────┘
                      │ HTTPS
                ┌─────▼──────┐
                │ OpenAI API  │
                └────────────┘
```

---

## Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── generate-locator/
│   │       └── route.ts          # POST handler
│   ├── layout.tsx                # Root layout + metadata
│   ├── page.tsx                  # Home page
│   ├── error.tsx                 # Error boundary
│   ├── not-found.tsx             # 404 page
│   └── globals.css               # Global styles
│
├── components/
│   ├── ui/                       # shadcn/ui primitives (never modified)
│   └── locator/                  # Feature components
│       ├── LocatorTool.tsx       # Container (owns state)
│       ├── LocatorInput.tsx      # HTML textarea + submit
│       ├── LocatorResults.tsx    # Results layout
│       └── LocatorCard.tsx       # Single locator card
│
├── services/
│   └── locatorService.ts         # AI orchestration, validation
│
├── lib/
│   ├── openai.ts                 # OpenAI client factory
│   ├── prompts.ts                # System prompts
│   └── utils.ts                  # shadcn utility (cn())
│
└── types/
    ├── locator.ts                # Locator-specific types
    └── index.ts                  # Barrel export
```

---

## Data Flow — Locator Generation

```
User pastes HTML
      │
      ▼
LocatorInput.tsx  →  POST /api/generate-locator  {html: string}
                              │
                              ▼
                    route.ts validates body
                              │
                              ▼
                    locatorService.generateLocator(request)
                              │
                              ├─ builds prompt from lib/prompts.ts
                              ├─ calls openai.ts client
                              └─ parses + validates JSON response
                              │
                              ▼
                    Response.json(LocatorResult)
                              │
                              ▼
              LocatorResults.tsx renders cards
```

---

## Adding a New Module (e.g. Screenshot Analyzer)

1. Add new types to `src/types/screenshotAnalyzer.ts`
2. Add system prompt to `src/lib/prompts.ts`
3. Create `src/services/screenshotService.ts`
4. Create `src/app/api/analyze-screenshot/route.ts`
5. Create `src/components/screenshot/` components
6. Add route/page in `src/app/screenshot/page.tsx`

**Zero changes to existing locator code.**

---

## Key Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| AI provider interface | Custom service layer | Easy to swap OpenAI → Anthropic/Gemini |
| State management | React `useState` | MVP scope; add Zustand if complexity grows |
| Styling | Tailwind v4 + shadcn/ui | Speed + consistency + accessible primitives |
| API response format | Strict JSON schema | Reliable parsing; no markdown/prose |
| Component hierarchy | Container + Presentational | Separates state logic from rendering |
