const product = require("../models/product");
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  //throw new error("testing async errors");
  //const products = await Product.find({}).sort("-name price");
  //const products = await Product.find({}).select("name price").limit(10);
  const products = await Product.find({ price: { $gt: 30 } })
    .sort("name")
    .select("name price")
    .limit(10)
    .skip(5);
  res.status(200).json({ products, nbHits: products.length });
  //res.status(200).json({ msg: "products testing route" });
};

const getAllProducts = async (req, res) => {
  //console.log(req.query);
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
    //queryObject.name = name;
  }

  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
    //console.log(filters);
    //console.log(numericFilters);
  }
  console.log(queryObject);

  /* const products = await product.find(queryObject);
  //const products = await product.find(req.query); //para encontrar en especificos.
  res.status(200).json({ products, nbHits: products.length });
  //res.status(200).json({ msg: "products route" });
};*/

  let result = product.find(queryObject);
  if (sort) {
    //products = products.sort()
    //console.log(sort);//lo coloca todo junto. para resolver eso se hace lo siguiente linea 38
    const sortList = sort.split(",").join("");
    result = result.sort(sortList);
  } else {
    result = result.sort("createAt");
  }
  if (fields) {
    const fieldsList = fields.split(",").join("");
    result = result.select(fieldsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
