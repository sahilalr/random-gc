const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/linkDB', { useNewUrlParser: true, useUnifiedTopology: true });

const linkSchema = new mongoose.Schema({
    url: String
});

const Link = mongoose.model('Link', linkSchema);

// Routes
app.get('/links', async (req, res) => {
    const links = await Link.find();
    res.json(links);
});

app.post('/links', async (req, res) => {
    const newLink = new Link({ url: req.body.url });
    await newLink.save();
    res.json(newLink);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
