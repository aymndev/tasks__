# 📋 Task Management System

A full-stack Task Management System built with **React**, **Node.js**, **Express**, and **MySQL**. The application allows users to manage their daily tasks while providing an admin dashboard to manage user accounts.

---

## 🚀 Features

### 👤 User

* Register a new account
* Log in securely
* View personal tasks
* Create new tasks
* Update tasks
* Delete tasks
* Mark tasks as completed

### 🛠️ Admin

* View all users
* Add new users
* Accept or reject pending user registrations
* Delete users
* View dashboard statistics
* Manage user accounts

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* Axios
* Tailwind CSS
* React Icons

### Backend

* Node.js
* Express.js
* MySQL
* bcrypt
* JSON Web Token (JWT)
* CORS

---

## 📁 Project Structure

```text
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

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/task-management.git
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

---

## 🗄️ Database

Create a MySQL database and update your database configuration.

Example:

```sql
CREATE DATABASE task_management;
```

Then import your database tables.

---

## ▶️ Run the Backend

```bash
cd backend
npm run dev
```

Server runs on:

```
http://localhost:3000
```

---

## ▶️ Run the Frontend

```bash
cd frontend
npm run dev
```

Application runs on:

```
http://localhost:5173
```

---

## 📌 API Endpoints

### Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`

### Users

* GET `/user`
* GET `/admin/users`
* POST `/admin/users`
* DELETE `/admin/users/:id`

### Tasks

* GET `/task`
* POST `/task`
* PUT `/task/:id`
* DELETE `/task/:id`

---

## 📊 Current Features

* User authentication
* JWT authentication
* User management
* Task management
* Dashboard statistics
* Responsive interface
* Search UI
* Modern admin dashboard

---

## 🔮 Future Improvements

* User profile pictures
* Task categories
* Due dates
* Search and filtering
* Pagination
* Email verification
* Password reset
* Dark mode
* Charts and analytics
* File attachments

---

## 👨‍💻 Author

**Aymane El Mhamdi**

---

## 📄 License

This project is open source and available under the MIT License.
