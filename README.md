# 📝 AI-Powered Blogging Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Platform-0070F3?style=for-the-badge&logo=vercel&logoColor=white)](https://groovblog-client.vercel.app)
[![Author](https://img.shields.io/badge/Author-Ayush_Pandey-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/groov33)
[![Tech Stack](https://img.shields.io/badge/Stack-MERN_|_Google_Gemini_|_ImageKit_|_JWT_|_Vercel-EC4899?style=for-the-badge)](https://github.com/groov33/groovblog)

> A full-stack MERN blogging platform featuring AI-assisted article generation via Google Gemini, ImageKit CDN image transformations, rich-text publishing, and a dedicated admin analytics dashboard.

---

## 🌐 Live Deployments
* **Public Publication:** [https://groovblog-client.vercel.app](https://groovblog-client.vercel.app)
* **Backend API Server:** [https://groovblog-server.vercel.app](https://groovblog-server.vercel.app)
* **Admin Management Console:** [https://groovblog-client.vercel.app/admin](https://groovblog-client.vercel.app/admin)

---

## 📌 Project Overview
Engineered as a core full-stack resume project demonstrating modern RESTful API architecture, cloud media processing, AI content pipeline integration, and responsive web interface design. The platform allows readers to browse, filter, search, and comment on articles, while administrators enjoy a full suite of AI content generation and post management tools.

### ✨ Key Features
- **AI Content & Summary Generation:** Seamless integration with Google Gemini API to generate engaging article drafts, headings, and SEO summaries from a single topic prompt.
- **ImageKit CDN Media Pipeline:** High-speed media upload and real-time WebP format conversion, dynamic resizing, and CDN caching via ImageKit SDK.
- **Full Administrative Control:** Protected admin dashboard with JWT authentication for drafting, publishing, toggling post visibility, and moderating reader comments.
- **Discovery & Search UX:** Real-time keyword search, categorized topic filtering (Technology, Startup, Lifestyle), and responsive mobile drawer navigation.
- **Engagement & Comments:** Reader commenting subsystem with multi-level approval workflows and comment moderation.

---

## 🛠️ Architecture & Tech Stack

### Frontend (`client/`)
- **Framework:** React.js, Vite
- **Styling:** Tailwind CSS, Lucide React icons
- **State & Networking:** Axios, React Router DOM, React Hot Toast
- **Deployment:** Vercel

### Backend (`server/`)
- **Server:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose ODM)
- **AI Model:** Google Gemini API (`@google/genai`)
- **Media CDN:** ImageKit Node.js SDK
- **Authentication:** JSON Web Tokens (JWT) & bcrypt
- **Deployment:** Vercel Serverless Functions (`@vercel/node`)

---

## 📁 Repository Structure
```
groovblog/
├── client/                     # React + Vite Frontend
│   ├── src/
│   │   ├── components/         # Navbar, Footer, Header, BlogCard, BlogList, Newsletter
│   │   ├── components/admin/   # Admin Login, Sidebar, BlogTableItem, CommentTableItem
│   │   ├── pages/              # Home, Blog, AddBlog, ListBlog, Comments, Dashboard
│   │   ├── context/            # AppContext with global Axios instance
│   │   └── assets/             # Brand logos & illustration assets
│   ├── package.json
│   └── vercel.json
│
└── server/                     # Express Backend
    ├── configs/                # MongoDB connection, ImageKit, Google Gemini SDK
    ├── controllers/            # blogController, adminController
    ├── middleware/             # auth (JWT verification), multer (file buffer)
    ├── models/                 # Blog, Comment schemas
    ├── routes/                 # blogRoutes, adminRoutes
    ├── server.js               # Express entry point
    ├── package.json
    └── vercel.json
```

---

## ⚙️ Environment Variables

### Backend (`server/.env`)
```env
PORT=5000
MONGODB_URI="mongodb+srv://<user>:<password>@cluster0.mongodb.net"
GEMINI_API_KEY="your-google-gemini-key"
IMAGEKIT_PUBLIC_KEY="your-imagekit-public-key"
IMAGEKIT_PRIVATE_KEY="your-imagekit-private-key"
IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/<your-id>"
JWT_SECRET="your-jwt-secret"
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="your-secure-password"
```

### Frontend (`client/.env`)
```env
VITE_BASE_URL="https://groovblog-server.vercel.app"
```

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/groov33/groovblog.git
   cd groovblog
   ```

2. **Setup Server:**
   ```bash
   cd server
   npm install
   npm run dev
   ```

3. **Setup Client:**
   ```bash
   cd ../client
   npm install
   npm run dev
   ```

---

## 👤 Author
**Ayush Pandey**  
*National Institute of Technology, Tiruchirappalli (NIT Trichy)*  
* **Email:** [realayush44@gmail.com](mailto:realayush44@gmail.com)  
* **GitHub:** [@groov33](https://github.com/groov33)  
* **LinkedIn:** [Ayush Pandey](https://linkedin.com)
