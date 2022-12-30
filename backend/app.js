const express = require("express");
const app = express();
const port = 4000;
//
var cors = require("cors");
app.use(
  express.json(),
  cors({
    origin: "*",
  })
);

const fs = require("fs");
const path = require("path");
const multer = require("multer");
//

app.post("/", (req, res) => {
  let fileName = (((1 + Math.random()) * 0x10000) | 0)
    .toString(16)
    .substring(1);

  try {
    fs.writeFileSync(
      path.join(__dirname, `storage/${fileName}.txt`),
      req.body.text
    );

    res.set({
      "Content-Type": "text/txt", // txt
      "Content-Disposition": " attachment; filename = " + `${fileName}.txt`, //test.txt
    });

    res.sendFile(
      path.join(__dirname, `storage/${fileName}.txt`),
      function (err) {
        if (err) {
          res.sendStatus(500);
        } else {
          console.log("Sending:", `${fileName}.txt`);
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

const upload = multer({ dest: "storage/" });
app.put("/", upload.single("text"), (req, res) => {
  console.log(req.file);

  fs.readFile(req.file.path, (err, data) => {
    if (err) throw err;
    res.send({ Text: data.toString("utf-8") });
    console.log(data.toString("utf-8"));
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
