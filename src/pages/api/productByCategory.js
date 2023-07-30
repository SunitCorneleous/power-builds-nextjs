// api/getProductById.js
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.DATABASE_URI;

export default async function getProductById(req, res) {
  const { category } = req.query;

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

    const product = await productCollection
      .find({
        category: category,
      })
      .toArray();

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({
      message: "Product retrieved successfully",
      data: product,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Unable to fetch product" });
  } finally {
    // await client.close();
  }
}
