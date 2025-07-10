const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend")));
app.use("/chatbot", express.static(path.join(__dirname, "../chatbot")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server running on http://localhost:${PORT});
});