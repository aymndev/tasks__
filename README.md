# 📋 Task Management System

A full-stack **Task Management System** built with **React**, **Node.js**, **Express.js**, and **MySQL**.

The application allows users to manage their daily tasks securely, while providing an admin dashboard for managing users, accounts, and system statistics.

---

# 🚀 Features

## 👤 User Features

* Register a new account
* Secure login authentication
* View personal tasks
* Create new tasks
* Update tasks
* Delete tasks
* Mark tasks as completed
* Search tasks
* Protected user routes

---

## 🛠️ Admin Features

* Admin authentication
* View all users
* Add new users
* Accept or reject pending registrations
* Delete users
* Manage user accounts
* View dashboard statistics
* Monitor system activity

---

# 🖼️ Screenshots

Add your screenshots inside the `screenshots` folder.

Example:

```
screenshots/
├── login.png
├── user-dashboard.png
└── admin-dashboard.png
```

Then add them here:

### Login Page

![Login](screenshots/login.png)

### User Dashboard

![User Dashboard](screenshots/user-dashboard.png)

### Admin Dashboard

![Admin Dashboard](screenshots/admin-dashboard.png)

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* React Router
* Axios
* Tailwind CSS
* React Icons

## Backend

* Node.js
* Express.js
* MySQL
* mysql2
* bcrypt
* JSON Web Token (JWT)
* CORS

---

# 📁 Project Structure

```
Task-Management/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   └── user/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/yourusername/task-management.git
```

---

# Backend Setup

Go to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_management

JWT_SECRET=your_secret_key
```

Run the backend:

```bash
npm run dev
```

Backend server:

```
http://localhost:3000
```

---

# Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm run dev
```

Frontend application:

```
http://localhost:5173
```

---

# 🗄️ Database

The project uses MySQL.

Create the database:

```sql
CREATE DATABASE task_management;
```

Main database tables:

```
User
 |
 |
 └── Task
```

Relationship:

```
One User can have many Tasks
```

---

# 🔐 Authentication

The application uses JWT authentication.

Authentication flow:

1. User registers an account.
2. Password is encrypted using bcrypt.
3. User logs in with email and password.
4. Backend generates a JWT token.
5. Token is stored on the client side.
6. Protected routes verify the token using authentication middleware.

Protected resources:

* User tasks
* Admin dashboard
* User management

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register user |
| POST   | `/api/auth/login`    | Login user    |

---

## Tasks

| Method | Endpoint          | Description    |
| ------ | ----------------- | -------------- |
| GET    | `/task`           | Get user tasks |
| POST   | `/task`           | Create task    |
| PUT    | `/task/:id`       | Update task    |
| DELETE | `/task/:id`       | Delete task    |
| GET    | `/task/search?q=` | Search tasks   |

---

## Users / Admin

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| GET    | `/admin/users`     | Get all users      |
| POST   | `/admin/users`     | Add user           |
| DELETE | `/admin/users/:id` | Delete user        |
| PUT    | `/admin/users/:id` | Update user status |

---

# 📊 Current Project Status

Implemented:

✅ User authentication
✅ JWT authorization
✅ Password encryption
✅ User management
✅ Task CRUD operations
✅ Task completion system
✅ Search functionality
✅ Admin dashboard
✅ Responsive UI
✅ MySQL database integration
✅ REST API architecture

---

# 🔮 Future Improvements

* User profile pictures
* Task categories
* Task priorities
* Due dates and reminders
* Pagination
* Advanced search and filtering
* Email verification
* Password reset
* Dark mode
* Charts and analytics
* File attachments
* Real-time notifications
* Unit and integration testing

---

# 📚 What I Learned

During this project, I practiced:

* Building REST APIs with Express.js
* Connecting React applications with backend services
* Managing authentication using JWT
* Encrypting passwords using bcrypt
* Designing MySQL database relationships
* Creating reusable React components
* Managing application state
* Working with Axios HTTP requests
* Using Git and GitHub for version control
* Structuring a full-stack application

---

# 👨‍💻 Author

**Aymane El Mhamdi**

---

# 📄 License

This project is open source and available under the MIT License.
