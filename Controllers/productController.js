const product = [
  { id: 1, name: "ipnone14", price: 2500 },
  { id: 2, name: "laptop", price: 5000 },
  { id: 3, name: "headphones", price: 500 },
  { id: 4, name: "printer", price: 10000 },
];

//get method
export const getproducts = (req, res) => {
  res.status(200).json({ Message: "Data retrived sucessfully", data: product });
};

//get method by id

export const getProductById = (req, res) => {
  const productId = req.params.id;
  //console.log("productId",productId);

  const productDetail = product.find((ele) => ele.id == productId);
  if (!productDetail) {
    return res.status(404).json({ message: "Product Not Found" });
  }

  res
    .status(200)
    .json({ message: "Product Retrieved Successfully", data: productDetail });
};

// post method

export const createproduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: product.length + 1,
    name: name,
    price: price,
  };

  product.push(newProduct);
  res
    .status(200)
    .json({ message: "Product Added Successfully", data: newProduct });
};

//put/update method

export const updateproduct = (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;
  const index = product.findIndex((ele) => ele.id == productId);
  if (index === -1) {
    return res.status(404).json({ message: "Product Not Found" });
  }

  product[index].name = name;
  product[index].price = price;
  res
    .status(200)
    .json({ message: "product update successfully", data: product[index] });
};

// delete method

export const deleteproduct = (req, res) => {
  const productId = req.params.id;
  const index = product.findIndex((ele) => ele.id == productId);
  if (index === -1) {
    return res.status(404).json({ message: "Product Not Found" });
  }

  product.splice(index, 1);
  res.status(200).json({ message: "product deleted successfully" });
};
