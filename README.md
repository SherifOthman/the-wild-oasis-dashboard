# 🏨 The Wild Oasis - Hotel Management Dashboard

> **React Admin Dashboard** for hotel management with Supabase backend and modern UI

## 🔗 **Live Demo**

- **🌐 Live Dashboard**: [https://the-wild-oasis-green-kappa.vercel.app](https://the-wild-oasis-green-kappa.vercel.app)
- **📱 Responsive Design**: Works on desktop, tablet, and mobile
- **🔐 Demo Login**: Available on the live site

## 🎯 **What This Project Is**

A comprehensive hotel management dashboard for "The Wild Oasis" hotel. Manages bookings, cabins, guests, check-ins/check-outs, and provides analytics with a modern, responsive interface.

## 🛠️ **Technology Stack**

| Technology               | Purpose                                  |
| ------------------------ | ---------------------------------------- |
| **React 18**             | Frontend framework with hooks            |
| **Vite**                 | Fast build tool and development server   |
| **Supabase**             | Backend-as-a-Service (PostgreSQL + Auth) |
| **TanStack React Query** | Server state management and caching      |
| **Styled Components**    | CSS-in-JS styling solution               |
| **React Router v6**      | Client-side routing                      |
| **React Hook Form**      | Form handling and validation             |
| **Recharts**             | Data visualization and charts            |

## ✅ **Key Features Implemented**

### **Booking Management**

- ✅ **Complete CRUD** - View, create, edit, delete bookings
- ✅ **Advanced Filtering** - Filter by status (unconfirmed, checked-in, checked-out)
- ✅ **Smart Sorting** - Sort by date, price, guest name
- ✅ **Pagination** - 10 bookings per page with prefetching

### **Cabin Management**

- ✅ **Cabin Operations** - Full CRUD with image upload to Supabase storage
- ✅ **Filtering & Sorting** - By discount status, price, capacity
- ✅ **Image Management** - Photo upload with fallback handling

### **Check-in/Check-out System**

- ✅ **Guest Check-in** - Payment confirmation with optional breakfast add-on
- ✅ **Check-out Process** - Complete guest departure workflow
- ✅ **Today's Activity** - Dashboard showing today's arrivals and departures
- ✅ **Status Tracking** - Booking progression (unconfirmed → checked-in → checked-out)

### **Authentication & Users**

- ✅ **User Registration** - Email/password signup via Supabase Auth
- ✅ **Secure Login** - Session management with protected routes
- ✅ **Profile Management** - Update profile info, change password, avatar upload

### **Dashboard Analytics**

- ✅ **Key Metrics** - Total bookings, confirmed stays, occupancy rate
- ✅ **Visual Charts** - Sales and duration charts with Recharts
- ✅ **Date Filtering** - Last 7, 30, 90 days analytics
- ✅ **Real-time Data** - Live updates from Supabase

### **Settings & Configuration**

- ✅ **Hotel Settings** - Breakfast pricing, min/max booking nights
- ✅ **Dark Mode** - Complete theme switching with localStorage persistence
- ✅ **User Preferences** - System preference detection

## 🏗️ **Architecture**

**Feature-Based Structure:**

- **features/** - Domain modules (authentication, bookings, cabins, etc.)
- **pages/** - Route components for React Router
- **ui/** - Reusable UI components and design system
- **services/** - Supabase API integration
- **hooks/** - Custom React hooks for data fetching

**Data Flow:**

- **React Query** - Server state with caching and background updates
- **Custom Hooks** - Data fetching logic encapsulation
- **Optimistic Updates** - Immediate UI updates with rollback on error

## 💾 **Database**

**Supabase (PostgreSQL):**

- **bookings** - Reservations with guest and cabin relationships
- **cabins** - Hotel rooms with images and pricing
- **guests** - Guest profiles and contact information
- **settings** - Hotel configuration and pricing
- **users** - Staff accounts with Supabase Auth

## 🚀 **Quick Start**

**Prerequisites:** Node.js 18+, Supabase account

**Setup:**

```bash
npm install
# Configure Supabase credentials in src/services/supabase.js
npm run dev
# Access: http://localhost:5173
```

## 📊 **Project Stats**

- **50+ Components** - Reusable UI components
- **8 Pages** - Complete application functionality
- **6 Feature Modules** - Domain-specific organization
- **20+ Custom Hooks** - Data fetching and state management
- **5 Database Tables** - Normalized schema
- **Dark Mode** - Complete theming system

---

**Built for:** Learning modern React development and full-stack application architecture
