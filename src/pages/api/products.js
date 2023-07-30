const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DATABASE_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    const productCollection = client.db("power-builds").collection("products");

    if (req.method === "GET") {
      const result = await productCollection.find({}).toArray();

      res.send({ message: "success", status: 200, data: result });
    }

    console.log("Database connection established");
  } finally {
    // await client.close();
  }
}

export default run;
