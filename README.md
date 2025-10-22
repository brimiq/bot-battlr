Bot Battlr

Bot Battlr is a web application built with React, Vite, and Tailwind CSS that allows users to view a collection of battle-ready bots, assemble their own army, and manage bot selections. Data is served locally through a JSON server.

Features

Fetch and display bot data from a JSON server

View individual bot stats such as health, damage, and armor

Add and remove bots from your personal army

Responsive design using Tailwind CSS

Clean and modular React component structure

Technologies Used

React (Vite setup for fast development)

Tailwind CSS for styling

JSON Server for backend simulation

JavaScript (ES6+)

Node.js & npm

Project Structure
bot-battlr/
├── db.json
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    └── components/
        ├── BotCollection.jsx
        ├── YourBotArmy.jsx
        └── NavBar.jsx

Getting Started
1. Clone the Repository
git clone https://github.com/your-username/bot-battlr.git
cd bot-battlr

2. Install Dependencies
npm install

3. Start the JSON Server

Make sure you have a db.json file in your project root with bot data.
Then start the server:

npx json-server --watch db.json --port 8001


or using Node directly:

node node_modules/json-server/bin/index.js --watch db.json --port 8001


This will run the server on:

http://localhost:8001/bots

4. Start the React App
npm run dev


Vite will start a local development server (usually on http://localhost:5173).
