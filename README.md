# PLP Bookstore MongoDB Project

This project demonstrates MongoDB fundamentals including CRUD operations, advanced queries, aggregation pipelines, and indexing using a bookstore dataset.

## 🛠️ Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- MongoDB Atlas account (free tier)

### Installation
1. Clone this repository:
   ```bash
   git clone <https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-Vyonavee.git>
   
   cd mongodb-data-layer-fundamentals-and-advanced-techniques-Vyonavee

2.Install dependencies
   npm install mongodb


▶️ How to Run
1. Insert Sample Data
Update the connection string in insert_books.js with your Atlas credentials, then run:
  node insert_books.js

2. Run Queries2. Run Queries
All MongoDB queries are written in shell syntax in queries.js.
To test them:

Connect to your Atlas cluster using MongoDB Shell:
bash
mongosh "mongodb+srv://<your-cluster-url>/plp_bookstore" --username <your-username>

Paste queries from queries.js directly into the shell.

📁 Files Included
insert_books.js – Inserts 11 sample books into the books collection
queries.js – Contains all required CRUD, advanced, aggregation, and indexing commands
screenshot.png – Shows sample data in MongoDB Atlas
README.md – This file

Note: Replace <your-cluster-url> and <your-username> with your actual Atlas connection details when running commands.
