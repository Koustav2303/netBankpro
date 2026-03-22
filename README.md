🏦 NetBankPro
A flagship frontend banking dashboard showcasing modern fintech UI/UX patterns, complex state management, and immersive micro-interactions.

Experience the live demo: https://koustav2303.github.io/netBankPro/

✨ Overview
NetBankPro is a fully responsive, frontend-only web application designed to simulate a next-generation digital banking experience. Built without a backend, it relies on React's Context API to maintain global state (like account balances) across multiple complex routes. It heavily utilizes GSAP for premium animations, delivering a smooth, app-like feel in the browser.

🚀 Key Features
Global State Synchronization
Real-time balance updates across all components. Depositing funds or creating a Fixed Deposit instantly reflects in the global header and balance dashboards.

Advanced UI Animations
Features GSAP-powered page transitions, a flippable 3D debit card, animated transaction lists, and a simulated UPI barcode scanner laser.

Comprehensive Financial Modules

Dashboard: High-level overview of income, expenses, and quick actions.

Card Management: Interactive 3D ATM card with flip controls and simulated freeze/limit toggles.

Fund Transfers: Deposit and withdrawal interfaces with dynamic emerald/rose theming and simulated OTP verification.

UPI Hub: Request money via a dynamic QR code generator, and a simulated camera interface for scanning.

Wealth Management: Fixed Deposit calculator with visual projection bars mapping principal vs. interest.

Transaction Ledger: Dual-view (list/grid) statement history with category icons and downloadable digital e-receipts.

Modern UX Details

Flawless Dark/Light mode integration using Tailwind CSS.

Glassmorphic mobile navigation bar with a sliding sidebar menu.

Zero intrusive browser alerts; all user feedback is handled gracefully via React Hot Toast.

HashRouter implementation for seamless GitHub Pages compatibility.

🛠️ Tech Stack
Framework: React 19 + Vite 8

Styling: Tailwind CSS 3.4

Animations: GSAP (GreenSock) 3.14

Routing: React Router DOM 7 (HashRouter)

Icons: Lucide React

Notifications: React Hot Toast

Deployment: GitHub Pages (gh-pages)

💻 Local Development
To run NetBankPro on your local machine, follow these steps:

Clone the repository
git clone https://github.com/Koustav2303/netBankPro.git

Navigate into the directory
cd netBankPro

Install the dependencies
npm install

Start the development server
npm run dev

The application will be available at http://localhost:5173.

🌐 Deployment
This project is configured to deploy automatically to GitHub Pages.

To push updates to the live site, simply run:
npm run deploy

This script builds the project using Vite and publishes the dist folder directly to the gh-pages branch.

👨‍💻 Author
Built and maintained by Koustav Pan.
GitHub: @Koustav2303