// api/postProduct.js
import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URI;

export default async function postProduct(req, res) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: "1",
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  const productCollection = client.db("power-builds").collection("products");

  try {
    if (req.method === "POST") {
      const product = req.body; // Assuming the product data comes in the request body

      const result = await productCollection.insertOne(product);

      res.status(201).json({
        message: "Product created successfully",
        data: result, // Return the created product document
      });
    }
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Unable to create product" });
  } finally {
    await client.close();
  }
}
