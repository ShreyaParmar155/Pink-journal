[README (1).md](https://github.com/user-attachments/files/28660978/README.1.md)
# 🌸 Petal — Pink Journal App

A full-stack personal journaling web app with mood tracking, tags, writing stats, and user authentication. Built with React, Node.js, Express, and MongoDB.

---

## ✨ Features

- 🔐 User signup & login with JWT authentication
- 📝 Create, view, and delete journal entries
- 😊 Mood tracking (Happy, Calm, Sad, Anxious, Grateful, Excited)
- 🏷️ Tag your entries and filter by tag
- 🔍 Search entries by title or content
- 📊 Writing stats — total entries, words written, mood breakdown
- 🔥 Daily writing streak tracker
- 💾 Entries stored in MongoDB per user
- 🌸 Cute & playful pink UI

---

## 🛠️ Tech Stack

| Layer     | Tech                          |
|-----------|-------------------------------|
| Frontend  | React, React Router, Axios    |
| Backend   | Node.js, Express              |
| Database  | MongoDB Atlas (Mongoose)      |
| Auth      | JWT + bcryptjs                |

---

## 📁 Project Structure

```
pink-journal-v2/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Entry.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── entries.js
│   ├── middleware/
│   │   └── auth.js
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── Dashboard.js
│   │   ├── NewEntry.js
│   │   ├── EntryCard.js
│   │   ├── EntryModal.js
│   │   ├── Sidebar.js
│   │   └── Stats.js
│   ├── App.js
│   ├── App.css
│   └── index.js
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18+
- [MongoDB Atlas](https://mongodb.com/atlas) free account
- [Git](https://git-scm.com)

---

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/pink-journal-v2.git
cd pink-journal-v2
```

---

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=mongodb+srv://your_username:your_password@cluster0.xxxxx.mongodb.net/pinkjournal?retryWrites=true&w=majority
JWT_SECRET=pinkjournal_super_secret_key_2024
```

> Get your `MONGO_URI` from [MongoDB Atlas](https://mongodb.com/atlas). Make sure your password has no special characters like `@`.

Start the backend server:

```bash
node server.js
```

You should see:
```
Server running on port 5000 🌸
MongoDB connected ✅
```

---

### 3. Set up the frontend

Open a new terminal tab:

```bash
cd frontend
npm install
npm start
```

The app will open at `http://localhost:3000` 🌸

---

## 🔑 Environment Variables

Only the backend needs a `.env` file:

| Variable     | Description                          |
|--------------|--------------------------------------|
| `MONGO_URI`  | Your MongoDB Atlas connection string |
| `JWT_SECRET` | Any long secret string for JWT       |

> ⚠️ Never commit your `.env` file to GitHub. It's already in `.gitignore`.

---

## 📡 API Endpoints

### Auth

| Method | Endpoint            | Description       |
|--------|---------------------|-------------------|
| POST   | `/api/auth/signup`  | Register new user |
| POST   | `/api/auth/login`   | Login user        |

### Entries (requires JWT token)

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| GET    | `/api/entries`       | Get all entries      |
| POST   | `/api/entries`       | Create a new entry   |
| DELETE | `/api/entries/:id`   | Delete an entry      |
| PUT    | `/api/entries/:id`   | Update an entry      |

---

## 🌐 Deployment (Optional)

### Deploy frontend to GitHub Pages

```bash
cd frontend
npm install gh-pages --save-dev
```

Add to `frontend/package.json`:

```json
"homepage": "https://YOUR_USERNAME.github.io/pink-journal-v2",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:

```bash
npm run deploy
```

### Deploy backend to Render (free)

1. Go to [render.com](https://render.com) and sign up
2. Click **New Web Service** → connect your GitHub repo
3. Set root directory to `backend`
4. Build command: `npm install`
5. Start command: `node server.js`
6. Add your environment variables (`MONGO_URI`, `JWT_SECRET`)
7. Click **Deploy**

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

MIT License — feel free to use this project however you like 🌸

---

## 💕 Made with love by Shreya
