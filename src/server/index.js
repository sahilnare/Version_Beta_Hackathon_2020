const express = require('express');
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'));

app.get('/api/getMessage', (req, res) => {
  res.send({ message: 'Connected to backend' });
});

app.use(express.static(path.join("dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join("dist", "index.html"), {root: path.join(__dirname, "..", "..")});
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
