import express from "express";
import Product from "../models/Product.js";
const productRouter = express.Router();




productRouter.post("/", async (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        count: req.body.count,
    });
    const product = await newProduct.save();
    if (newProduct) {
        res.status(201).send({ message: "New Product Created", product });
    } else {
        res.status(404).send({ message: "try again" });
    }
});

productRouter.get("/", async (req, res) => {
    const products = await Product.find();
    res.send(products);
});



productRouter.delete("/delete/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete({
            _id: req.params.id,
        });
        res.status(200).send({ message: "product deleted" });
    } catch (error) {
        res.status(404).send({ message: "product not found" });
    }
});

productRouter.put("/update/:id", async (req, res) => {
    const prod = await Product.findById(req.params.id);
    if (prod) {
        prod.name = req.body.name;
        prod.countInStock = req.body.countInStock;
        prod.price = req.body.price;

        const updatedProduct = await prod.save();
        res.send({
            name: updatedProduct.name,
            countInStock: updatedProduct.countInStock,
            price: updatedProduct.price,
        });
    } else {
        res.status(404).send({ message: "product not found" });
    }
});

productRouter.get("/details/:id", async (req, res) => {
    const oneProd = await Product.findOne({_id:req.params.id });

    if (oneProd) {
        res.send(oneProd);
    } else {
        res.status(404).send({ message: "product nots found" });
    }
});

export default productRouter;