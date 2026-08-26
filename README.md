# Travel Unbounded

A travel company website built for the Travel Unbounded Full Stack Developer
assignment (Phase 1). Showcases India & international destination packages,
the company story, and a booking enquiry form that persists to MongoDB.

## Overview

- **Home** — hero banner, India destinations grid, International destinations grid, CTA
- **About** — company story, office locations, "why choose us"
- **Contact** — booking enquiry form with client + server-side validation, stored in MongoDB
- **API** — `POST /api/enquiry` (create + validate + persist), `GET /api/enquiry` (bonus, list all enquiries)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Backend:** Next.js Route Handlers (`app/api/enquiry/route.js`)
- **Database:** MongoDB Atlas (via Mongoose)
- **Deployment:** Vercel

## Project Structure

```
app/
  page.js                 -> Home page
  about/page.js            -> About page
  contact/page.js           -> Contact / enquiry page
  api/enquiry/route.js       -> POST + GET /api/enquiry
components/
  Navbar.jsx, Footer.jsx, Hero.jsx
  DestinationCard.jsx, DestinationSection.jsx
  BookingForm.jsx
data/
  destinations.js           -> static/dummy destination data (no DB needed for this)
lib/
  mongodb.js                -> cached Mongoose connection helper
  validateEnquiry.js         -> shared validation, used by both client form and API route
models/
  Enquiry.js                 -> Mongoose schema for booking enquiries
```

## Local Setup

```bash
npm install
cp .env.example .env.local   # then fill in MONGODB_URI
npm run dev
```

Open http://localhost:3000

## Environment Variables

Create `.env.local` (never committed — see `.gitignore`) with:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/travel-unbounded?retryWrites=true&w=majority
```

To get this:
1. Create a free cluster at https://cloud.mongodb.com
2. Create a database user (username + password)
3. Network Access -> allow access from anywhere (0.0.0.0/0) for simplicity, or add Vercel's IPs
4. Copy the connection string from "Connect -> Drivers"

## API

**POST `/api/enquiry`**

Body:
```json
{
  "fullName": "Priya Sharma",
  "countryCode": "+91",
  "contactNumber": "9876543210",
  "email": "priya@example.com",
  "dateOfTravel": "2027-01-15",
  "numberOfPeople": 2,
  "hotelCategory": "Deluxe",
  "numberOfChildren": 1
}
```

Validates server-side (required fields, email format, phone format, future
date, min people/children, allowed hotel categories) regardless of what the
client already validated, then saves to MongoDB with a `createdAt` timestamp.

Responses:
- `201` -> `{ success: true, message, id }`
- `400` -> `{ success: false, message, errors: { field: message } }`
- `500` -> `{ success: false, message }`

**GET `/api/enquiry`** (bonus, not required) — returns all stored enquiries,
useful for powering a future `/admin` view.

## Deployment

1. Push this repo to GitHub
2. Import the repo into Vercel (https://vercel.com/new)
3. Add the `MONGODB_URI` environment variable in the Vercel project settings
4. Deploy
5. Verify: open the live URL -> Contact page -> submit a real enquiry -> confirm
   it appears in your MongoDB Atlas collection

## Assumptions & Decisions

- Used the **App Router** (not Pages Router).
- Country code is a plain `<select>` dropdown rather than a third-party phone
  input library, to keep the dependency footprint small — satisfies the
  "dropdown +91, +1, +44 etc." requirement from the brief.
- Destination and pricing data is static (`data/destinations.js`) as the
  brief explicitly allows — no database collection was created for it.
- Phone validation is a basic 7–15 digit check (not full E.164/libphonenumber
  validation), since the brief didn't require a specific numbering standard.
- `GET /api/enquiry` (an admin-style listing endpoint) was added as the
  suggested bonus, but no `/admin` UI was built on top of it — out of scope
  for Phase 1 per the brief.
- Fonts use system font stacks (serif for headings, sans-serif for body)
  instead of `next/font/google`, avoiding an external font-fetch dependency
  at build time while keeping the same visual pairing.
- No authentication, payments, or admin dashboard — explicitly out of scope
  for Phase 1.

## Production Verification Checklist

- [ ] Submit enquiry with valid data -> 201, record appears in MongoDB, success UI shown
- [ ] Submit with missing name / invalid email / past date / 0 people -> validation errors shown, no DB write
- [ ] Try calling `POST /api/enquiry` directly (e.g. via curl) with bad data -> still rejected (server-side validation)
- [ ] Test responsive layout at 375px / 768px / 1024px / 1440px
