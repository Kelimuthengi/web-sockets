const express = require("express");
const path = require("path");
const publicPath = path.resolve(__dirname, '/../public');
const app = express();

app.use(express.static(publicPath));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is up at port ${PORT}`);
})
