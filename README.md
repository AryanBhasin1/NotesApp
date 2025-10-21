# NotesApp

A full-stack Notes application with user authentication using JWT. Users can register, log in, and securely manage personal notes. The app features a clean, modern interface with the ability to add, view, and delete notes.

## Features

* User registration and login with password hashing
* JWT-based authentication for secure API endpoints
* CRUD operations for notes (add, view, delete)
* Responsive, modern frontend design
* Local storage to manage authentication tokens

## Tech Stack

* **Backend:** Node.js, Express, bcrypt, jsonwebtoken
* **Frontend:** HTML, CSS, JavaScript
* **Storage:** In-memory array (can be extended to MongoDB)

## Installation & Running Locally

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/NotesApp.git
cd NotesApp
```

2. Install dependencies:

```bash
npm install express bcrypt jsonwebtoken dotenv cors open
```

3. Create a `.env` file in the root directory with:

```
JWT_SECRET=your_secret_key
PORT=5000
```

4. Start the server:

```bash
node server.js
```

5. Open the app in your browser:

```
http://localhost:5000/register.html
```

---

## Usage

* **Register:** Create a new account
* **Login:** Log in with your credentials
* **Notes Page:** Add and delete notes; logout when done

---

## Notes

* This project currently uses an in-memory array for users and notes. To persist data, you can integrate **MongoDB** or another database.
* Tokens are stored in **localStorage** for simplicity.

---
