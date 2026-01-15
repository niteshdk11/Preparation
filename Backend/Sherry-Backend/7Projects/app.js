import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    fs.readdir('./files', (err, files) => {
        if (err) return res.send("Error reading files.");
        res.render("index.ejs", { files });
    });
});

app.get('/create', (req, res) => {
  
  const today = new Date();
  const filename = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}.json`;
  const filePath = `./files/${filename}`;

  fs.access(filePath, fs.constants.F_OK, (err) => {
      if (!err) {
          return res.render('error.ejs', {
              message: "A file for today already exists. Please edit the existing file.",
              filename
          });
      }
      res.render('create.ejs');
  });
});



app.post('/create', (req, res) => {
    const { incomeData, expenseData } = req.body;
    const records = [];

    const today = new Date();
    const filename = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}.json`;
    const filePath = `./files/${filename}`;

    if (incomeData) {
        try {
            const incomeEntries = JSON.parse(incomeData);
            incomeEntries.forEach(({ description, value }) => {
                if (description && value) {
                    records.push({
                        type: 'income',
                        description,
                        value: parseFloat(value)
                    });
                }
            });
        } catch (err) {
            return res.send("Error parsing income data.");
        }
    }

    if (expenseData) {
        try {
            const expenseEntries = JSON.parse(expenseData);
            expenseEntries.forEach(({ description, value }) => {
                if (description && value) {
                    records.push({
                        type: 'expense',
                        description,
                        value: parseFloat(value)
                    });
                }
            });
        } catch (err) {
            return res.send("Error parsing expense data.");
        }
    }

    fs.writeFile(filePath, JSON.stringify(records, null, 2), (err) => {
        if (err) return res.send("Error creating the file.");
        res.redirect("/");
    });
});


app.get('/view/:filename', (req, res) => {
  const filename = req.params.filename;
  fs.readFile(`./files/${filename}`, 'utf8', (err, data) => {
      if (err) return res.send("Error reading file.");
      let parsedData;
      try {
          parsedData = JSON.parse(data);
      } catch (parseError) {
          return res.send("Error parsing JSON data.");
      }
      if (!Array.isArray(parsedData)) {
          return res.send("Data is not an array.");
      }

      res.render("view.ejs", { filename, data: parsedData });
  });
});


app.get("/edit/:filename", (req, res) => {
    const filename = req.params.filename;
    fs.readFile(`./files/${filename}`, 'utf8', (err, data) => {
        if (err) return res.send("Error reading file.");
        res.render("edit.ejs", { filename, data });
    });
});


app.post("/update/:filename", (req, res) => {
    const filename = req.params.filename;
    fs.writeFile(`./files/${filename}`, req.body.filedata, (err) => {
        if (err) return res.send("Error updating file.");
        res.redirect("/");
    });
});





app.get('/delete/:filename', (req, res) => {
    const filename = req.params.filename;
    fs.unlink(`./files/${filename}`, (err) => {
        if (err) return res.send("Error deleting file.");
        res.redirect("/");
    });
});


app.listen(4000, () => {
    console.log('Server started on port http://localhost:4000');
});
