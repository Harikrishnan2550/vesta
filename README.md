# Vesta Future Pvt Ltd — Corporate Web Application & Dynamic Gallery

A production-ready corporate digital platform engineered for **Vesta Future Pvt Ltd**, a multi-sector business group based in Kerala, India.

---

## 🏢 Brand & Business Divisions

- **Parent Group:** Vesta Future Pvt Ltd (Holdings & Enterprise)
- **Division 1 (Construction & Properties):** Vesta Future Builders & Developers (`/construction`)
- **Division 2 (Aquaculture & Seafood):** The Seagull — Crabs & Fish (`/crabs-fish`)
- **Division 3 (Sports Facilities):** Vesta Sports Infrastructure Pvt Ltd (`/sports`)

---

## 📍 Corporate Headquarters

```
NH 66, Pulimootil Building
Cheppad P.O., Cheppad
Alappuzha, Kerala, India
```

---

## 🚀 Quick Start (Local Development)

### 1. Backend Server (Port 5000)

```bash
cd backend
npm install
npm run dev
```

* **API Health Check:** `http://localhost:5000/api/health`
* **Static Uploads:** `http://localhost:5000/uploads`

### 2. Frontend Web Application (Port 3000)

```bash
cd frontend
npm install
npm run dev
```

* **Public Website:** `http://localhost:3000`
* **Admin Portal:** `http://localhost:3000/admin/login`

---

## 🔐 Admin Authentication & Media Management

| Parameter | Default Value |
| :--- | :--- |
| **Login Route** | `/admin/login` |
| **Admin Email** | `admin@vestafuture.com` |
| **Default Password** | `VestaAdmin@2026!` |
| **Dashboard** | `/admin/gallery` |

### Image Processing Pipeline (Sharp + Multer)
1. Original image uploaded via admin panel.
2. Filtered for MIME safety (JPEG, PNG, WebP).
3. Resized to maximum **1920px width** (preserving aspect ratio).
4. Auto-oriented using EXIF data.
5. Converted to optimized **WebP** at 82% quality (producing crisp 200–500 KB files).
6. Stored in category-specific disk folders:
   - `backend/uploads/construction/`
   - `backend/uploads/crabs-fish/`
   - `backend/uploads/sports/`

---

## 🌐 API Route Specification

- `POST /api/auth/login` — Administrator authentication (Rate limited, JWT signed)
- `GET  /api/auth/me` — Verify authenticated session
- `GET  /api/gallery` — Public gallery items (`?category=construction|crabs-fish|sports&featured=true`)
- `GET  /api/gallery/:id` — Public single gallery record
- `POST /api/gallery` — **[JWT Protected]** Upload and optimize image
- `PUT  /api/gallery/:id` — **[JWT Protected]** Update metadata
- `DELETE /api/gallery/:id` — **[JWT Protected]** Delete record & unlink image file from disk
- `POST /api/contact` — Submit executive inquiry

---

## 🚀 VPS & Production Deployment (AIC Cloud VPS)

### Environment Variables (.env)
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/vesta_future?retryWrites=true&w=majority
JWT_SECRET=your_production_jwt_secret_key
ADMIN_EMAIL=admin@vestafuture.com
ADMIN_PASSWORD=VestaAdmin@2026!
FRONTEND_URL=https://vestafuture.com
NEXT_PUBLIC_API_URL=https://vestafuture.com/api
NEXT_PUBLIC_WHATSAPP_NUMBER=919846000000
```

### Process Management with PM2
```bash
# Start Backend
cd backend && npm run build && pm2 start dist/server.js --name "vesta-backend"

# Start Frontend
cd frontend && npm run build && pm2 start "npm run start" --name "vesta-frontend"
```
