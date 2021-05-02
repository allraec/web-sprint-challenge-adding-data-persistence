// start your server here

const server = require("./api/server");

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`\n== API running on port ${PORT} ==\n`);
})