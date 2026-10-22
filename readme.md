# Grid & Logic School Management

An English-language school management workspace built with Next.js and React, with the Grid & Logic identity.

## Start the app

```bash
npm install
npm run dev
```

Open [http://localhost:3002](http://localhost:3002).

Demo sign-in: **admin** / **cj**. The same account is available from the dashboard profile menu.

## Workspaces

- Dashboard and school calendar
- Students, attendance, staff, parents, classes, and sections
- Subjects, exams, marks, grades, and timetables
- Fees and payments, library catalogue and requests, hostel and dorms
- Student promotions, access pins, reports, school settings, and account profile

Management lists support search, status filters, add/edit/delete dialogs, CSV export, and printing. Seed records are stored in browser local storage for the current preview.

This preview uses browser-local demo data and demo sign-in. It is not yet connected to a shared database or production authentication service.

## Deploy to Vercel

Import this repository with `main` as the production branch. Use the repository root as the Root Directory (leave the field empty), not `public` or `pages`.

The committed `vercel.json` sets these deployment options:

- Framework preset: **Next.js**
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `.next`

No environment variables or database are required for the current preview. A `DATABASE_URL` is not read by this version. Shared storage, database migrations, and server authentication must be implemented before using it as a live school system.

The legacy `/home` and `/dashboard` URLs redirect to `/`.
