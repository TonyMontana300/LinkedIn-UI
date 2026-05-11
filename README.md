LinkedIn UI Clone (Upgraded)

This is a LinkedIn-inspired full stack web app that I built while learning and improving my MERN stack skills.

I wanted to create something that feels close to a real social media platform instead of just making small practice projects. So I tried building features like authentication, posts, comments, profile pages, protected routes, and a responsive feed system.

A lot of this project was also about learning how real deployment works. I deployed the frontend on Vercel and the backend on Render, fixed routing issues, handled environment variables, and debugged production errors along the way.

Even though it started as a UI clone, it slowly became one of my biggest learning projects.


---

🚀 Live Demo

Frontend: https://linked-in-ui.vercel.app
Backend API: https://linkedin-backend-2vss.onrender.com


---

✨ Features:

🔐 Authentication & Authorization

User signup and login
JWT-based authentication
Protected routes
Persistent login state


👤 User Profile

Profile image & cover image
User headline
Dynamic profile pages


📝 Posts

Create posts
View feed posts
Responsive post layout


💬 Comments

Add comments to posts
Dynamic comment rendering


🔔 Notifications

Notification system integration


🤝 Connections UI

Suggested users section
Connect button UI


🎨 Modern UI/UX

LinkedIn-inspired interface
Responsive design
Hover effects & transitions
Tailwind CSS styling


🌐 Deployment

Frontend deployed on Vercel
Backend deployed on Render




---

🛠️ Tech Stack:

Frontend

React.js
React Router DOM
Tailwind CSS
Context API
Vite


Backend

Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Bcrypt.js
Multer
Cloudinary


Deployment

Vercel (Frontend)
Render (Backend)



---

📂 Project Structure

LinkedIn-UI/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   ├── utils/
│   └── layouts/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
│
├── package.json
└── README.md


---

⚙️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/TonyMontana300/LinkedIn-UI.git


---

2️⃣ Frontend Setup

npm install
npm run dev

Create a .env file in the frontend root:

VITE_API_URL=http://localhost:5000


---

3️⃣ Backend Setup

Navigate to the server folder:

cd server
npm install
npm run dev

Create a .env file inside the server folder:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


---

📸 Screenshots:


Landing Page
![Hero Section](./screenshots/hero.png.png)
![Section 1](./screenshots/section-1.png.png)
![Section 2](./screenshots/section-2.png.png)
![Section 3](./screenshots/section-3.png.png)
![Section 4](./screenshots/section-4.png.png)
![Image Section](./screenshots/imageSection.png.png)
![CTA Section](./screenshots/CTA.png.png)
![Footer Section](./screenshots/footer.png.png)

Login Page
![Login Page](./screenshots/login.png.png)

Signup Page
![Sign Up Page](./screenshots/signup.png.png)

Feed Page
![Feed Page](./screenshots/feed.png.png)

MyNetwork Page
![MyNetwork Page](./screenshots/myNetwork.png.png)

Jobs Page
![Jobs Page](./screenshots/jobs.png.png)

Messages Page
![Messages Page](./screenshots/messages.png.png)

Notification Page
![Notification Page](./screenshots/notification.png.png)

Profile Page
![Profile Header](./screenshots/profile.png.png)
![Profile About](./screenshots/profileAnalyticsAndAbout.png.png)
![Profile Activity](./screenshots/profileActivity.png.png)
![Profile Experience](./screenshots/profileExperience.png.png)
![Profile Education](./screenshots/profileEducationAndCertificate.png.png)
![Profile Projects](./screenshots/profileProjects.png.png)
![Profile Skills](./screenshots/profileSkills.png.png)

Navbar
![Navbar](./screenshots/navbar.png.png)




---

📈 Things I Want To Add Later

✅ Real-time chat
✅ Real-time notifications
✅ Dark mode
✅ Image uploads in posts
✅ Better Profile Customization
✅ Search functionality



---

🧠 What I Learned This Project

The project helped me to understand:

Full-stack MERN development
How frontend and backend works together
REST API creation
Authentication with JWT
React state management
MongoDB and Mongoose
Deployment using Render & Vercel
Environment variable management
React Router production routing fixes
Real-world debugging & deployment workflows

Honestly, deployment and debugging taught me almost as much coding the project itself.



---

👨‍💻 About Me

I'm Ayush Barman, a full stack wev developer who enjoys building projects for small business, startups and companies which helps me to explore more about this field and enhance my curiosity.

GitHub: https://github.com/TonyMontana300



---

⭐ Support

If you like this project, feel free to star the repository⭐. It really helps as well as motivates me to keep building more projects.