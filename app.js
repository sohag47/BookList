const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const books = require('./routes/api/books');

const app = express();

// connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// init midleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send("Hello World!")
});
// use routes
app.use('/api/books', books);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => console.log(`Server is Running on port ${PORT}....`));