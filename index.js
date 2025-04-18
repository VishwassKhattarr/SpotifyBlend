
import express from "express"
import bodyParser from "body-parser"

const app = express();
const port=3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
  });

  app.get("/create-playlist", (req, res) => {
    res.render("create-playlist.ejs");
  });



  app.get("/about", (req, res) => {
    res.render("about.ejs");
  });

  app.get("/home", (req, res) => {
    res.render("index.ejs");
  });

  app.get("/", (req, res) => {
    res.render("index.ejs");
  });

  app.get("/my-playlists", (req,res) =>{
    res.render("");
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

