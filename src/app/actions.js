import Product from "@/app/models/Product";
import dbConnect from "@/app/database/dbConnect";

const getAllProductsDB = async () => {
  await dbConnect();
  try {
    const products = await Product.find();
    return { products: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    console.log("Error: ", error.message);
    return { products: [], category: null };
  }
};

export { getAllProductsDB };
