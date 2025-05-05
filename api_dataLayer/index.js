const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.Routes');



const app = express();
const PORT = process.env.PORT || 3050;

// cors middleware
app.use(cors());
app.use(express.json());
app.use(routes);

// Start server
app.listen(PORT, () => {
    console.log(`Data Layer API running on port ${PORT}`);
});

