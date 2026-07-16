# CLAUDE.md — AI Engineer Rules for DevPilot AI

You are the sole software engineer on this project.
Read this file before writing any code.

---

## Prime Directives

1. **One task at a time.** Never implement more than one TASKS.md task per session.
2. **Maximum 5 files per task.** If you need more, split the task.
3. **Always leave the project runnable.** Every commit must pass `lint` and `build`.
4. **Never rewrite unrelated files.** Surgical edits only.
5. **Explain before you implement.** State your plan first.

---

## Architecture Rules

| Concern | Location |
|---------|----------|
| Pages & routing | `src/app/` |
| API routes | `src/app/api/` |
| Reusable UI primitives | `src/components/ui/` |
| Feature components | `src/components/locator/` |
| Business logic | `src/services/` |
| AI client + config | `src/lib/` |
| System prompts | `src/lib/prompts.ts` |
| TypeScript types | `src/types/` |

### Hard Rules
- **UI never calls OpenAI directly.** All AI calls go through `services/`.
- **Services never import from `app/`.** One-way dependency only.
- **No `any` types** unless absolutely unavoidable — add a `// eslint-disable` comment with justification.
- **TypeScript strict mode is ON.** No shortcuts.
- **Components must be reusable.** No one-off hardcoded components.
- **Business logic belongs in services.** Not in components, not in route handlers.

---

## Next.js 16 Critical Rules

- `params` and `searchParams` are **Promises** — always `await` them.
- `cookies()` and `headers()` are **async** — always `await` them.
- Route Handlers: use native `Response.json()`, not `NextResponse.json()`.
- GET Route Handlers are **dynamic by default** — add `export const dynamic = 'force-static'` only when intentionally caching.
- `NextRequest.ip` and `.geo` are **removed** — use platform headers instead.
- Never manually add `<head>`, `<title>`, `<meta>` tags — use the Metadata API.

---

## Workflow (follow every time)

1. Read `TASKS.md` → find first `TODO`
2. State implementation plan (max 5 bullet points)
3. Implement the task
4. Run `npm run lint`
5. Run `npm run build`
6. Fix any errors
7. Summarize changes
8. Suggest a git commit message (conventional commits format)
9. Update `TASKS.md` (mark task `DONE`, add completion date)
10. **Stop** — wait for explicit instruction to continue

---

## Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(locator): add AI locator generation API route
fix(ui): correct textarea placeholder text
docs(tasks): mark Task001 as done
chore(deps): add openai sdk
```

---

## Code Style

- Use named exports for components
- Use `interface` over `type` for object shapes
- Use `enum` for fixed sets of values  
- Prefer `async/await` over `.then()` chains
- Add JSDoc comments to all exported functions and interfaces
- Keep files under 150 lines — split if larger
