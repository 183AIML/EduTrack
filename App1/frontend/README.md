# EduTrack Frontend (React + Vite)

## Structure

- `src/pages/` — Main app pages (Home, Register, Login, Dashboards, Personal Details)
- `src/components/Auth/` — Reusable authentication components (e.g., EmailPasswordFields)
- `src/utils/` — API utility functions
- `src/styles/` — CSS modules for styling

## Getting Started

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. The app will be available at `http://localhost:5173`

## Notes

- All legacy/deprecated auth pages have been removed.
- API requests are proxied to the backend via Vite config.
- Update `src/utils/api.js` for API endpoints if backend changes.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
