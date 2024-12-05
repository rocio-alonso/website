import Product from "@/app/models/Product";
import dbConnect from "@/app/database/dbConnect";
import axios from "axios";
import mongoose from "mongoose";

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
