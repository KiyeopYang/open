const express = require("express");
const Tesseract = require("tesseract.js");

const PORT = 80;
const app = express();

app.get("/", async (req, res) => {
  try {
    const { url } = req.query;
    const {
      data: { text },
    } = await Tesseract.recognize(url, "eng", { logger: m => console.log(m) });
    res.json(text);
  } catch (e) {
    console.error(e);
    res.status(400).json(e.message);
  }
});

app.listen(PORT, () => {
  console.log(`Listening to requests on http://localhost:${PORT}`);
});
