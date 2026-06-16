# CorreLab - Project Master Document

## 📌 Project Overview
CorreLab is a modern Data Analytics and Statistical Modeling SaaS application. It allows users to upload datasets (CSV, Excel, JSON), auto-detect data structures, run statistical models (via a Python microservice), and view the results in a clean, interactive dashboard.

## 🏗️ Architecture: MVC Pattern (Next.js Adapted)
This project strictly follows the **Model-View-Controller (MVC)** architectural pattern adapted for Next.js App Router:
- **Model (Data Layer):** Managed via **Prisma** (`prisma/schema.prisma`) and TypeScript interfaces (`src/types/`). Responsible for database operations and data shapes.
- **View (Presentation Layer):** Managed via **React Server/Client Components** (`src/app/` and `src/components/`). Strictly handles UI rendering and user interactions using Tailwind CSS.
- **Controller (Business Logic Layer):** Managed via **Next.js Server Actions** (`src/actions/`) and API Route Handlers (`src/app/api/`). Responsible for processing inputs, handling file hashing, interacting with the Python microservice, and returning data to the View.

## 🛠️ Tech Stack
- **Frontend & API:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** `lucide-react`
- **Database:** PostgreSQL (Hosted on Supabase)
- **ORM:** Prisma
- **Deployment:** Vercel
- **Data Processing Engine:** Python (FastAPI) Microservice (Handled separately)

## 🚀 Core Features
1. **Dataset Upload & Management:** Drag-and-drop interface for uploading CSV/Excel files.
2. **Guided Auto-Detection:** System suggests the best statistical models (Correlations, Predictive Modeling, Time-Series).
3. **Duplicate Prevention (File Hashing):** System hashes uploaded files (MD5/SHA) to check Prisma DB for existing analysis before sending to the Python engine to save compute costs.
4. **Analysis Dashboard:** Visual representation of R-Squared, P-Values, and other statistical metrics.

## 📂 Folder Structure (Next.js App Router with MVC)
correlab/
├── prisma/
│   └── schema.prisma        # (MODEL) Database models & relations
├── public/                  # Static assets, SVG icons from Figma
├── src/
│   ├── app/                 # (ROUTER) Next.js App Router (Thin wrappers)
│   │   ├── api/             # API routes
│   │   ├── globals.css      # Global Tailwind styles
│   │   └── layout.tsx       # Root layout
│   ├── models/              # (MODEL) Database instances & types
│   │   └── PrismaClient.ts  # Prisma Client singleton
│   ├── views/               # (VIEW) React Components and Pages
│   │   ├── auth/            # Auth-related views
│   │   ├── dashboard/       # Dashboard views
│   │   ├── profile/         # Profile views
│   │   ├── history/         # History views
│   │   └── analysis/        # Analysis views
│   ├── controllers/         # (CONTROLLER) Business Logic & Server Actions
│   │   ├── AnalysisController.ts
│   │   └── WebhookController.ts
│   ├── components/          # Reusable UI Components
│   │   ├── AppShell.tsx     # Main application wrapper/layout
│   │   └── ui/              # Buttons, Cards, Inputs
│   └── types/               # Global TypeScript Interfaces

## 🔄 Core Data Flow (Analysis Process)
1. **View (Client):** User uploads a dataset via `src/app/new-analysis/page.tsx`.
2. **Controller (Server Action):** Reads the file, generates a Hash.
3. **Model (Prisma Check):** Controller queries PostgreSQL `AnalysisHistory` model using the Hash.
   - *If exists:* Controller returns cached results instantly to the View.
   - *If new:* Controller forwards dataset to Python FastAPI Microservice.
4. **Python Engine:** Computes metrics (Pandas/Scikit-learn) -> Returns JSON to Controller.
5. **Controller:** Tells the Model (Prisma) to save new results & Hash to PostgreSQL.
6. **View (Client):** Receives data from Controller and redirects to Results page displaying the data.

## 🎨 Master Design & Layout (UI/UX)
- **Design System:** Clean, Enterprise SaaS look.
- **Primary Colors:** Deep Navy (`#0F172A`), Slate Grays (`#334155`, `#E2E8F0`), Bright Blue Accents (`#38BDF8`).
- **Cards/Containers:** White (`#FFFFFF`) with subtle borders (`border-[#E2E8F0]`) and light shadows.
- **Form Elements:** Rounded corners (`rounded-[4px]` or `rounded-[8px]`), clear hover states.