import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
    name: { type: String, required: true },
    image: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, required: true, default: 1 },
    raiting:{type: Number, required: true}
},
    {
        timestamps: true,
    }
)

const Product = mongoose.model("Product", productSchema);
export default Product;
