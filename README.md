# The Wild Oasis - Hotel Management Dashboard

A React admin dashboard for hotel management, built to learn modern React patterns, server state management, and full-stack development with Supabase.

**Live Demo**: https://the-wild-oasis-green-kappa.vercel.app

## Purpose

This project simulates a real hotel management system where staff can manage bookings, cabins, guests, and check-ins/check-outs. It demonstrates how to build a complete CRUD application with authentication, real-time data, and analytics.

## Architecture

**Feature-Based Structure**:

```
src/
├── features/          # Domain modules (bookings, cabins, auth, etc.)
├── services/          # Supabase API integration
├── ui/                # Reusable UI components
├── pages/             # Route components
└── hooks/             # Custom React hooks
```

**Key Design Decisions**:

- React Query for server state management (not Redux)
- Styled Components for CSS-in-JS styling
- Custom hooks to encapsulate data fetching logic
- Feature folders to group related components

## Technical Skills Demonstrated

**React Patterns**:

- Custom hooks for reusable logic (`useBookings`, `useCabins`, `useUser`)
- Compound components for flexible UI (Modal, Table, Menus)
- Render props pattern for data fetching
- Higher-order components for route protection

**Server State Management**:

- TanStack React Query for caching and synchronization
- Optimistic updates for instant UI feedback
- Background refetching to keep data fresh
- Prefetching for pagination performance

**Authentication & Authorization**:

- Supabase Auth for email/password authentication
- Protected routes that redirect unauthenticated users
- Session management with automatic token refresh
- User profile management (avatar upload, password change)

**Data Fetching & Mutations**:

- Async operations with loading and error states
- Pagination with prefetching next page
- Filtering and sorting on the server side
- Image upload to Supabase storage

**Form Handling**:

- React Hook Form for validation and submission
- Controlled and uncontrolled inputs
- File upload with preview
- Error messages and field validation

## Implementation Details

**React Query Usage**:

```javascript
// Custom hook for fetching bookings
function useBookings() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  return { bookings: data, isLoading, error };
}
```

**Optimistic Updates**:

- UI updates immediately before server confirms
- Rollback on error with toast notification
- Improves perceived performance

**Data Flow**:

1. Component calls custom hook
2. Hook uses React Query to fetch from Supabase
3. Data cached and shared across components
4. Mutations invalidate cache to trigger refetch

**Supabase Integration**:

- PostgreSQL database with Row Level Security
- Real-time subscriptions (not implemented but supported)
- Storage for cabin images and user avatars
- Built-in authentication with email verification

## Technology Stack

- React 18 with hooks
- Vite for fast development and building
- TanStack React Query for server state
- Supabase for backend (PostgreSQL + Auth + Storage)
- Styled Components for styling
- React Router v6 for routing
- React Hook Form for forms
- Recharts for data visualization

## What I Learned

**React Query Benefits**:

- Eliminates need for global state for server data
- Automatic caching reduces unnecessary API calls
- Background refetching keeps data synchronized
- Built-in loading and error states simplify UI logic

**Supabase as BaaS**:

- Backend-as-a-Service speeds up development significantly
- PostgreSQL provides relational data with SQL queries
- Row Level Security handles authorization at database level
- Storage service simplifies file uploads

**Component Patterns**:

- Compound components provide flexibility without prop drilling
- Custom hooks make logic reusable across components
- Render props pattern works well for data fetching
- Feature folders keep related code together

**Form Complexity**:

- React Hook Form reduces boilerplate significantly
- Validation can be declarative or with schema libraries
- File inputs require special handling
- Optimistic updates improve UX but add complexity

**Real-World Challenges**:

- Pagination requires careful state management
- Filtering and sorting should happen server-side for performance
- Image uploads need error handling and loading states
- Authentication state must be checked on every protected route

## Project Stats

- 50+ components organized by feature
- 8 pages with full CRUD functionality
- 20+ custom hooks for data fetching
- 6 feature modules (auth, bookings, cabins, etc.)
- 5 database tables with relationships
- Dark mode with theme switching

---

**Learning Focus**: Modern React development, server state management with React Query, and full-stack development with Supabase
