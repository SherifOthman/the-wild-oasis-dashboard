# The Wild Oasis

## 🚀 Overview

Hotel management dashboard for staff to manage bookings, cabins, guests, and check-ins/check-outs. Built to learn React Query for server state management and Supabase as a backend-as-a-service.

The system handles typical hotel operations: viewing and filtering bookings, managing cabin inventory, checking guests in/out, and viewing sales analytics. Authentication ensures only authorized staff can access the dashboard.

**Live Demo**: https://the-wild-oasis-green-kappa.vercel.app

---

## 🏗 Architecture

**Frontend:** React SPA with React Router for navigation. TanStack React Query manages all server state (bookings, cabins, users). Styled Components for styling. Feature-based folder structure groups related components, hooks, and API calls.

**Backend:** Supabase provides PostgreSQL database, authentication, and file storage. All data fetching goes through Supabase client. Row Level Security policies handle authorization at the database level.

**Data flow:** Component → Custom Hook → React Query → Supabase API → PostgreSQL. React Query caches responses and handles loading/error states automatically.

---

## 🔐 Authentication

Supabase Auth handles email/password authentication. Protected routes redirect unauthenticated users to login. Session tokens stored in localStorage with automatic refresh. User profile management includes avatar upload and password changes.

---

## 📦 Key Features

- View, filter, and sort bookings by status and date
- Manage cabin inventory (create, update, delete, upload images)
- Check guests in/out with payment confirmation
- Dashboard with sales charts and statistics
- User authentication and profile management
- Dark mode theme switching
- Pagination for large datasets

---

## 🧠 Technical Skills Demonstrated

**State management:** TanStack React Query for server state (caching, background refetching, optimistic updates). No Redux needed - React Query handles all server data.

**Async handling:** Custom hooks encapsulate data fetching with loading and error states. Mutations invalidate cache to trigger automatic refetch. Prefetching next page for smooth pagination.

**CRUD operations:** Full create, read, update, delete for bookings and cabins. Server-side filtering and sorting. Image upload to Supabase storage with error handling.

**Form handling:** React Hook Form for validation and submission. File upload with preview. Controlled inputs with error messages.

---

## 🧠 What I Learned

**React Query eliminates complexity:** No need for global state management for server data. Automatic caching, background refetching, and loading states built-in. Optimistic updates improve perceived performance.

**Supabase speeds up development:** Backend-as-a-service provides database, auth, and storage without building an API. PostgreSQL with SQL queries. Row Level Security handles authorization.

**Component patterns matter:** Custom hooks make data fetching reusable. Compound components (Modal, Table) provide flexibility. Feature folders keep related code together.

**Real-world challenges:** Pagination requires careful state management. Filtering/sorting should be server-side. Image uploads need proper error handling. Authentication state must be checked on protected routes.

---

## Technology Stack

React 18, Vite, TanStack React Query, Supabase (PostgreSQL + Auth + Storage), Styled Components, React Router v6, React Hook Form, Recharts

---

## License

MIT
