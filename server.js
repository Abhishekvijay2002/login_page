
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userroutes.js');
const cors = require('cors'); 

connectDB();

const app = express();
app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true 
}));
app.use(express.json()); 

app.use('/', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));