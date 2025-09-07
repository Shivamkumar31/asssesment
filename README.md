# Sales Dashboard - Next.js 15

This is a **Sales Dashboard** project built with **Next.js 15** and **TypeScript**. It provides interactive charts, filters, and controls to visualize sales data effectively.

---

## Folder Structure

sales-dashboard/
├── .next/ # Next.js build output
├── node_modules/ # Project dependencies
├── public/
│ └── favicon.ico # Favicon for the application
├── src/
│ ├── app/
│ │ ├── api/sales/
│ │ │ └── route.ts # API route to handle sales data
│ │ ├── dashboard/
│ │ │ └── page.tsx # Main dashboard page
│ │ ├── layout.tsx # Layout wrapper for the app
│ │ ├── globals.css # Global styles
│ │ └── page.tsx # Home page (if any)
│ ├── components/
│ │ ├── charts/
│ │ │ ├── BarChart.tsx # Bar chart component
│ │ │ ├── LineChart.tsx # Line chart component
│ │ │ └── PieChart.tsx # Pie chart component
│ │ └── controls/
│ │ ├── ChartToggle.tsx # Component to toggle charts
│ │ ├── FilterInput.tsx # Filter input component
│ │ └── YearSelector.tsx # Year selection component
│ └── lib/
│ └── mockData.ts # Mock sales data
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
└── package-lock.json



---

## Features

- **Interactive Dashboard:** Displays sales data using bar, line, and pie charts.
- **Chart Controls:** Users can toggle charts, filter data, and select years.
- **API Integration:** `/api/sales/route.ts` serves sales data (currently using mock data).
- **Responsive Layout:** Uses `ResponsiveContainer` from `Recharts` for responsive charts.
- **Next.js 15 App Directory:** Structured using the new app routing system.

---

## Technologies Used

- **Next.js 15**
- **React 18+**
- **TypeScript**
- **Recharts** (for charts)
- **CSS Modules / Global CSS**

---

## Usage

1. Install dependencies:

```bash
npm install

pm install
Run the development server:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser to see the dashboard.

Notes
All chart data is currently loaded from src/lib/mockData.ts. You can replace it with a real API.

Components are modular and reusable for future expansion.

Dashboard page is under src/app/dashboard/page.tsx.

Future Improvements
Connect to a real database for dynamic sales data.

Add authentication for secure access.

Enhance charts with tooltips, legends, and more filtering options.

yaml
Copy code

---

I can also make a **shorter, cleaner “in-style” README** suitable for GitHub with badges, usage, and folder structure visually more appealing if you want.  

Do you want me to do that version too?


