require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ATG server running");
});
app.listen(port, () => {
  console.log(`ATG app listening on port ${port}`);
});
//  auth verify function using Json web token
function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  //   console.log(req?.headers, "headers");
  if (!authHeader) {
    return res.status(401).send({ message: "Unauthorized access request" });
  }
  const token = authHeader.split(" ")[1];
  // console.log("token",token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    // console.log("error", err);
    if (err) {
      return res.status(403).send({ message: "Forbidden access" });
    } else {
      //   console.log("deCoded", decoded);
      req.decoded = decoded;
      next();
    }
  });
}
const uri = `${process.env.URI}`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  client.connect((err) => {
    if (err) {
      console.log("database error" + err);
    }
    console.log("connected");
  });
  const userCollection = client.db("ATG_DB").collection("users");
  // user get or login
  app.post("/login", async (req, res) => {
    try {
      const { userName, password } = req.body;
      const filter = { userName };
      const found = await userCollection.findOne(filter);
      const isPassValid = await bcrypt.compare(password, found.password);
      console.log(isPassValid);
      if (found.userName === userName && isPassValid) {
        // console.log("info true");
        const token = jwt.sign(
          { userName, userId: found._id },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "1d",
          },
        );
        res.send({ response: "success", status: 200, token });
      } else {
        res.send({ response: "not found user", status: 400 });
      }
    } catch (error) {
      res.send({ response: "not found user", status: 400 });
      console.log("login error", error);
    }
  });
  // user creation
  app.post("/registration", async (req, res) => {
    try {
      const { userName, email, password } = req.body;
      const passHashing = await bcrypt.hash(password, 10);
      const createObj = {
        userName,
        email,
        password: passHashing,
      };
      // console.log(createObj);
      await userCollection.insertOne(createObj);
      res.send({ response: "success", status: 200 });
    } catch (error) {
      res.send({ response: "internal error", status: 500 });
      console.log("registration error" + error);
    }
  });

  // forget password api
  app.post("/forget-password", async (req, res) => {
    try {
      const { userName, email, newPassword } = req.body;
      console.log(newPassword);
      const filter = { userName };
      const result = await userCollection.findOne(filter);
      console.log(result);
      if (result.email === email && result.userName === userName) {
        const passHashing = await bcrypt.hash(newPassword, 10);
        await userCollection.updateOne(filter, {
          $set: { password: passHashing },
        });
        res.send({ response: "success", status: 200 });
      } else {
        res.send({ response: "internal error", status: 500 });
      }
    } catch (error) {
      res.send({ response: "internal error", status: 500 });
      console.log("registration error" + error);
    }
  });
}
run().catch(console.dir);
