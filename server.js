require("dotenv").config();
const http = require("http");
require("./config/dbConnect");

const app = require("./app/app");
const PORT = process.env.PORT || 2020;

const server = http.createServer(app);
server.listen(PORT, console.log(`Server is running at port ${PORT}`));

// 3A6XEPXQrzPtvWLU
