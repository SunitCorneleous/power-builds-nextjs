// api/getAllProducts.js
import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URI;

export default async function getAllProducts(req, res) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: "1",
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    const productCollection = client.db("power-builds").collection("products");

    const products = await productCollection.find({}).toArray();

    res.status(200).json({
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Unable to fetch products" });
  } finally {
    // await client.close();
  }
}
