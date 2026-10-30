# React Login Form

A responsive login-form interface built with React, TypeScript, and Vite. The form is extracted into its own reusable `LoginForm` component; `App.tsx` is responsible only for page composition.

> **Status:** Learning and portfolio project. This implementation performs client-side validation only. It does not authenticate users, call a backend, or store credentials.

## Features

### Implemented
- Dedicated `LoginForm` component.
- Controlled email and password inputs.
- TypeScript types for form values and validation errors.
- Required-field and basic email-format validation.
- Minimum password length validation (8 characters).
- Show/hide password control.
- Accessible labels, field errors, and status announcements.
- Responsive layout and visible keyboard focus styles.
- ESLint, TypeScript, and Vite production build scripts.

### Not implemented
- Real authentication or backend API integration.
- Password reset flow.
- Remember-me persistence.
- Automated component tests.
- CI pipeline or deployment.

## Technology stack

| Technology | Purpose |
| --- | --- |
| React | UI and component state |
| TypeScript | Static type checking |
| Vite | Development server and bundling |
| ESLint | Static code analysis |
| CSS | Responsive presentation |
| npm | Dependency management |

## Prerequisites

- Node.js compatible with the Vite version in `package.json`.
- npm and Git.
- A modern browser.

Check versions:

```bash
node --version
npm --version
git --version
```

## Getting started

### 1. Create the project (if starting from scratch)

```bash
npm create vite@latest react-login-form -- --template react-ts
cd react-login-form
```

Choose React, TypeScript, and ESLint if prompted.

### 2. Add the source files

Copy the supplied files into the project, preserving the folder structure below. The included `package.json` and Vite/TypeScript configuration are provided as a complete project baseline.

### 3. Install dependencies

```bash
npm install
```

After `package-lock.json` has been generated and committed, use `npm ci` for reproducible installs.

### 4. Run locally

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Run TypeScript checks and create production assets |
| `npm run preview` | Preview the production build locally |

Run before committing:

```bash
npm run lint
npm run build
```

## Project structure

```text
react-login-form/
├── src/
│   ├── components/
│   │   └── LoginForm.tsx   # Form state, validation, submit handling
│   ├── App.tsx             # Page composition only
│   ├── App.css             # Page and form styling
│   ├── index.css           # Global styles
│   └── main.tsx            # React entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

## Component design

- **`App.tsx`:** composes the page and renders `LoginForm`; it does not own field state or validation.
- **`LoginForm.tsx`:** owns form values, validation errors, password visibility, and submit handling.

This separation keeps the form independently understandable, reusable, and easier to test.

## Validation behavior

- Email is required and checked with a basic email-format pattern.
- Password is required and must contain at least eight characters.
- Field errors clear when the corresponding field is edited.
- Successful local validation displays a demo message.

Client-side validation is for user experience, not a security boundary. A real backend must validate all input independently.

## Security notes

**This is not real authentication.**
- The form does not send credentials to a server.
- The password is not logged, persisted, or placed in browser storage.
- Never commit passwords, API keys, tokens, or secrets.
- A real authentication flow requires HTTPS and a secure server-side design.
- Use appropriately configured secure, `HttpOnly`, `SameSite` cookies for browser sessions where suitable.
- Production authentication also needs server-side password hashing, rate limiting, abuse protection, session management, and monitoring.

## Accessibility and usability

- Inputs have associated labels.
- Errors are connected with `aria-describedby` and `aria-invalid`.
- Status feedback uses a live region.
- Password visibility uses a button with an accessible label.
- Keyboard focus is visible and the layout adapts to smaller screens.

## Quality checks

Before pushing:

```bash
npm run lint
npm run build
git status
git diff
```

Recommended future tests:
- Required email/password validation.
- Invalid email format.
- Password shorter than eight characters.
- Show/hide password behavior.
- Successful local validation.
- Accessible error and status messages.

## Git workflow

Use focused branches and commits:

```bash
git switch -c feat/login-form-validation
git status
git diff
npm run lint
npm run build
git add .
git commit -m "feat: add typed login form validation"
git push -u origin feat/login-form-validation
```

Open a pull request to merge into `main`, following the repository's configured rules. Do not commit `node_modules/`, `dist/`, or secrets.

## Known limitations

- No authentication backend is connected.
- The email validation pattern is intentionally basic.
- No automated test framework, CI workflow, or deployment is configured.
- “Remember me” and “Forgot password?” are visual placeholders and do not perform actions.

## Roadmap

- [ ] Add tests with Vitest and React Testing Library.
- [ ] Add GitHub Actions checks for linting, tests, and production build.
- [ ] Connect to a backend authentication API.
- [ ] Add loading and server-error states.
- [ ] Implement a real password-reset flow.
- [ ] Add integration and end-to-end tests.
- [ ] Deploy the frontend and document a verified demo URL.

## License

No license has been selected. Unless a license is added, others should not assume they have permission to reuse, modify, or redistribute this code.
