# React starter

An empty, working starting point. React 19, Vite, TypeScript, Tailwind CSS v4, shadcn/ui,
TanStack Query, Zustand and React Router v7 are installed and set up. You build the features.

## Get started

You need Node.js 20.19 or newer (`.nvmrc` pins 22).

```bash
npm install
npm run dev
```

Open the address Vite prints (usually http://localhost:5173).

## Commands

| Command              | What it does                                    |
| -------------------- | ----------------------------------------------- |
| `npm run dev`        | Start the dev server with hot reload            |
| `npm test`           | Run all tests once                              |
| `npm run test:watch` | Re-run tests as you save files                  |
| `npm run lint`       | Check code with ESLint                          |
| `npm run typecheck`  | Check types with TypeScript                     |
| `npm run build`      | Type-check and build for production into `dist` |
| `npm run format`     | Format all files with Prettier                  |

## Project layout

```
src/
  app/          App setup: routes, query client
  components/
    ui/         shadcn/ui components
    layout/     Page layout and navigation
  features/     One folder per feature: its API calls and hooks
  pages/        One file per route
  stores/       Zustand stores (browser-only state)
  lib/          Helpers such as cn()
  test/         Test setup and the renderApp() helper
```

The `@/` import prefix means `src/`, for example `import { cn } from "@/lib/utils"`.

## How to add things

- **A page.** Create `src/pages/my-page.tsx`, then add one entry to `children` in
  `src/app/routes.tsx`.
- **Server data.** Put the request in `src/features/<name>/api.ts` and wrap it in a hook with
  `useQuery` or `useMutation` from TanStack Query. The query client is already provided.
- **Browser-only state.** Create a Zustand store in `src/stores`.
- **A UI component.** Run `npx shadcn@latest add input` (or any component name). The settings
  are in `components.json`.

## Tests

Tests use Vitest and Testing Library and live next to the code as `*.test.ts(x)`.
`renderApp("/some-path")` from `src/test/render-app.tsx` renders the whole app at a URL,
with routing and TanStack Query set up.

All tests pass on a fresh copy. When you change behavior, add or update a test in the same
commit.

## Continuous integration

Two GitHub Actions workflows run on every push and pull request:

- **Tests** (`.github/workflows/tests.yml`): installs and runs `npm test`.
- **Checks** (`.github/workflows/checks.yml`): runs lint, type-check and build.
