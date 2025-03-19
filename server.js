
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userroutes.js');

connectDB();

const app = express();
app.use(express.json()); 

app.use('/', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));