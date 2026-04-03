# The Encore 🎶

A redesigned event website for a Melbourne music gathering, built with React.

## Tech Stack

| Tool                                           | Purpose                   |
| ---------------------------------------------- | ------------------------- |
| [Vite](https://vitejs.dev)                     | Build tool & dev server   |
| [React](https://react.dev)                     | UI framework              |
| [TypeScript](https://www.typescriptlang.org)   | Type safety               |
| [Tailwind CSS v4](https://tailwindcss.com)     | Utility-first styling     |
| [Framer Motion](https://www.framer.com/motion) | Animations                |
| [Bun](https://bun.sh)                          | Package manager & runtime |

## Project Structure

```
src/
├── components/     # Reusable UI components (Button, Text, etc.)
      ├── layout     # Header, footer and overlay
      ├── sections   # Each section on homepage
      ├── ui        # Button, Text, Chips
├── constants/      # Constants for band, date and location
├── styles/         # Global styles and Tailwind config
├── pages/          # Home page contents
└── main.tsx        # App entry point
```

## Getting Started

**Prerequisites:** [Bun](https://bun.sh) installed on your machine.

```bash
bun install
bun run dev
```

The app will be available at `http://localhost:5173`.
