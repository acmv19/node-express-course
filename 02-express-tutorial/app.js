console.log("Express Tutorial");

//                          Express

const Express = require("express");
const cookieParser = require("cookie-parser");
const app = Express();
const { products } = require("./data");
const { people } = require("./data");

const logger = require("./logger"); //week 3
const peopleRouter = require("./routes/people");
const authRouter = require("./routes/auth");
const auth = require("./auth");

//app.use(Express.static("./public"));
app.use(Express.static("./methods-public"));

app.use(Express.urlencoded({ extended: false })); //parse form data
app.use(Express.json()); //parse json

app.use(cookieParser());

app.use("/api/vi/people", peopleRouter);
app.use("/", authRouter); //bonus

app.use("/api", logger); //para todos los routers. middleware func

app.post("/login", (req, res) => {
  const { name } = req.body; // Extraer nombre del cuerpo de la solicitud
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  }

  res.status(400).json({ success: false, message: "Please provide a name" }); //si no se ingresa un nombre
});

app.get(
  "/api/v1/test",
  /*logger,*/ (req, res) => {
    //url, callbackfunction
    console.log("user hit the resource");
    //res.send("home pg");
    res.json({ message: "It worked!" });
  }
);

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
  //console.log(req);
  //console.log(req.params)
  const idToFind = parseInt(req.params.productID);
  const product = products.find((product) => product.id === idToFind);
  if (!product) {
    //si no se encuentra el que estan solicitando
    return res.status(404).send("product not found! = (");
  }
  return res.json(product); //mostrar data
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit, price } = req.query;
  let FilterProduct = [...products]; //llamando

  if (search) {
    FilterProduct = FilterProduct.filter((product) => {
      console.log("product name: ", product.name);
      console.log("search term: ", search);
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    FilterProduct = FilterProduct.slice(0, Number(limit));
  }
  if (FilterProduct.length < 1) {
    //res.status(200).send("product not found");
    return res.status(200).json({ sucess: false, data: [] }); //most comun
  }
  if (price) {
    // show price
    FilterProduct = FilterProduct.filter(function (product) {
      return product.price <= parseFloat(price);
    });
  } else {
    //If a price is not specified. only show products with a price < $20.00
    FilterProduct = FilterProduct.filter((product) => {
      return product.price <= 20.0;
    });
  }
  res.status(200).json(FilterProduct);
  //res.send("hi everyone");
});

// para todos los errores 404 error
app.all("*", (req, res) => {
  res.status(404).send("pg not found!");
});

/*app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  res.send("hello");
});*/

app.listen(3000, () => {
  console.log("server is lisyening port 3000!");
});
