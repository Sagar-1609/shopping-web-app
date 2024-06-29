const express = require("express");
const mongooes = require("mongoose");
const Product = require("./Schema/Product.Schema");
const Product_router  = require("./Routers/Product.Router")
const bodyParser = require("body-parser");
const cors = require('cors')

const URI =
  "mongodb+srv://bhatisagar812:zoro812@cluster0.xyem6op.mongodb.net/";   //shopify inn atlas

mongooes.connect(URI,{
  useUnifiedTopology: true,
  ssl: true
}).then(() => {
  console.log(`mongooo db is connected`);
});

let corsoption = {
  origin :"http://localhost:7000",
  methode : "GET,POST,PATCH,DELETE",
  Credential: true
}


const app = express();

const port = 7000;
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors(corsoption))
app.use("/Shop", Product_router);



app.listen(port, () => {
  console.log(`server is running at${port}`);
});
