# Next.js Modern SaaS Listing

A high-performance product showcase built with Next.js 16 and Express.

### 🚀 Setup Instructions
1. **Server**: `cd server && npm install && node server.js`
2. **Client**: `cd client && npm install && npm run dev`
3. **Environment**: Ensure `NEXT_PUBLIC_API_URL=http://localhost:5000` is set.

### 🛠 Tech Highlights
- **GSAP ScrollTrigger**: Powering the smooth card reveals and hero animations.
- **Next.js Middleware**: Secure route handling via `auth_token` cookie.
- **Express Backend**: Decoupled API for flexible data management.
- **Tailwind CSS**: Using CSS variables for instant Light/Dark mode switching.

### 🛤 Route Summary
- `/` - Landing Page (7 Sections)
- `/items` - Public listing (API Fetched)
- `/items/[id]` - Detailed view
- `/add-item` - **Protected** creation form
