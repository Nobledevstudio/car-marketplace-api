# 🚗 Car Marketplace — Node.js Backend

### 🛠️ Project Overview
**Car Marketplace Backend** is a production-ready **Node.js & Express API** powering a car marketplace.  
It allows users to browse, rent, and purchase cars, with **role-based access** for customers, dealers, and admin.

The backend demonstrates **real-world backend functionality** including authentication, bookings, purchases, admin management, and proper business logic validation.

---

### 🔗 Live API
👉 **Render URL:**  
https://car-marketplace-api-bg06.onrender.com

---

### ✨ Features
- **Authentication** — JWT-based login/register, hashed passwords, role-based access  
- **Car Management** — Dealers can create, update, delete cars; only approved dealers can manage listings  
- **Bookings (Rent)** — Prevent double bookings, allow cancellations, dealer view of bookings  
- **Purchases (Buy)** — Prevent buying already sold cars, track payment status, admin monitoring  
- **Admin Panel** — Manage users, approve dealers, delete cars or users  
- **Validation & Error Handling** — Role-based authorization, booking availability checks, meaningful HTTP errors

---

### 🛠️ Technologies Used
- **Backend:** Node.js, Express  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JWT, bcrypt  
- **Testing:** Jest, Supertest  
- **Deployment:** Render.com

---

### 📁 Project Structure
```
backend/
├── controllers/       # Handles HTTP request logic (auth, cars, bookings, admin)
├── services/          # Business logic & DB operations
├── utils/             # Helper functions (validation, formatting)
├── routes/            # REST API route definitions
├── models/            # Mongoose schemas (User, Car, Booking, Purchase)
├── middlewares/       # Authorization, authentication, error handling
├── config/            # DB connection (db.js)
├── server.js          # Express app setup and Entry point
├── seedScript.js      # Admin scripts
├── tests/             # Jest/Supertest tests
├── .gitignore
├── package.json
└── README.md
```

---

### ⚙️ Installation & Setup
```bash
git clone https://github.com/YOUR_USERNAME/car-backend.git
cd car-backend
npm install
```

Create a `.env` file in the root folder:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000
```

Start server:
- Development:
```bash
npm run dev
```
- Production:
```bash
npm start
```

---

### 🧭 Usage
1. Use API clients like **Postman** or **Insomnia**.  
2. Test endpoints: view cars, add/update/delete cars, make bookings, approve dealers, purchase cars.  
3. Admin-only endpoints require admin JWT.  
4. Dealer-only endpoints require approved dealer JWT.

---

### 📌 Key Endpoints
| Method | Endpoint                      | Description                          |
|--------|-------------------------------|---------------------------------------|
| POST   | /api/auth/register             | Register a new user                  |
| POST   | /api/auth/login                | Login and receive JWT                |
| POST   | /api/cars                      | Dealer creates a car (requires approval) |
| GET    | /api/cars                      | View all cars                        |
| GET    | /api/cars/:id                  | View single car                       |
| PATCH  | /api/cars/:id                  | Update car (dealer only)             |
| DELETE | /api/cars/:id                  | Delete car (dealer/admin)            |
| POST   | /api/bookings                  | Create a booking                     |
| GET    | /api/bookings/user                  | Get user bookings                     |
| PATCH  | /api/bookings/:id/cancel       | Cancel booking (before start date)  |
| GET    | /api/bookings/dealer           | Dealer views their car bookings      |
| GET    | /api/bookings/admin            | Admin views all bookings             |
| POST   | /api/purchases                 | Create a purchase                    |
| GET    | /api/purchases/user            | Get user purchases                   |
| GET    | /api/purchases/admin           | Admin views all purchases            |
| GET    | /api/admin/users               | View all users                        |
| PATCH  | /api/admin/approve-dealer/:id  | Approve dealer                        |
| DELETE | /api/admin/users/:id           | Delete user                           |

> ⚠️ All protected routes require JWT Authorization:  
```http
Authorization: Bearer YOUR_TOKEN
```

---

### 🧠 Key Logic Overview
- **Services** layer handles business logic and database operations  
- **Utils** for reusable helpers (date formatting, error messages)  
- **Role-based authorization** in middlewares  
- **Booking & Purchase validations** to prevent double booking or sold items

---

### 🧪 Testing
- Written using **Jest** & **Supertest**  
- Includes authentication, bookings, admin management tests  
- Run tests:
```bash
npm test
```
### 📸 API Testing (ThunderClient)

### Get All Cars
![Get Cars](/screenshots/get-cars.png)

### User Login (JWT Auth) 
![Login](/screenshots/login.png)

### Create Car (Dealer)
![Get Cars](/screenshots/dealer-create-car.png)

### Create Booking (Customer)
![Get Cars](/screenshots/create-booking.png)

### Already Booked (Customer)
![Get Cars](/screenshots/already-booked.png)

### Invalid Booking Date (Customer)
![Get Cars](/screenshots/invalid-booking-date.png)

### Purchase Car (Customer)
![Get Cars](/screenshots/invalid-booking-date.png)

### Payment (Customer)
![Get Cars](/screenshots/invalid-booking-date.png)






---

### 🔮 Future Enhancements
- Upload **actual car images** instead of placeholders  
- Full test coverage for all endpoints  
- Implement **rate limiting** & security enhancements  
- Integrate with **React/Next.js frontend**  
- Add **search, filters, and sort functionality**  
- Include **screenshots of requests & responses** for documentation

---

### 👨‍💻 Author
**NobleDevStudio**

