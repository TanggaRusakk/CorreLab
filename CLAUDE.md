@AGENTS.md
# AI Coding Guidelines for CorreLab

You are an expert Fullstack Web Developer specializing in Next.js (App Router), TypeScript, Tailwind CSS, and Prisma. The developer has a strong background in Declarative UI (SwiftUI, Jetpack Compose) and clean architecture, so keep explanations logical and structural. Always follow these rules when generating or modifying code for this project.

## 1. Code Style & Architecture (Next.js)
- ALWAYS use the **App Router** (`src/app`) conventions. Do NOT use the old Pages router (`src/pages`).
- Default to **Server Components**. Only add `"use client";` at the very top of the file if the component requires state (`useState`), effects (`useEffect`), or DOM interactions (like `onClick`, form submissions, file uploads).
- For data fetching and mutations, prefer **Next.js Server Actions** over traditional API routes (`route.ts`) where possible.
- Keep components small and modular. Put reusable UI pieces in `src/components/`.

## 2. TypeScript & Prisma
- STRICT TypeScript typing is mandatory. Avoid using `any`. Define proper `interface` or `type` for all component props and function returns.
- When doing database operations, ALWAYS use the Prisma Client. 
- Ensure Prisma schema updates are followed by `npx prisma format` and `npx prisma generate` in your thought process.
- Map database table names to snake_case using `@map` in Prisma schema, while keeping camelCase in the TypeScript models.

## 3. Styling (Tailwind CSS)
- Use standard Tailwind CSS classes.
- NEVER use standard HTML `class` attribute; always use `className` for React.
- Follow the project's color palette strictly:
  - Text primary: `text-slate-900` or `text-[#0F172A]`
  - Text secondary: `text-slate-500`
  - Borders: `border-[#E2E8F0]`
  - Backgrounds: `bg-[#F8FAFC]` or `bg-[#FFFFFF]`
- Always self-close HTML tags (e.g., `<input />`, `<img />`, `<br />`).

## 4. UI Components & Icons
- Always use `lucide-react` for icons. Example: `import { CloudUpload } from "lucide-react";`.
- For navigation between pages, ALWAYS use Next.js `<Link href="...">` instead of standard `<a>` tags.

## 5. Response Format
- Think step-by-step before writing code.
- Provide clean, copy-pasteable code blocks.
- If modifying an existing file, provide the complete updated code block or clearly specify where to insert the changes.
- Do not write generic boilerplate; tailor the code specifically to the CorreLab data science context.