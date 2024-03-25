const axios = require("axios");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("Auth0_Users");

const userCollection = db.collection("users");

exports.getUserInfo = async (req, res) => {
  try {
    const auth0Token = req.oidc.accessToken;
    if (!auth0Token) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Access token not found" });
    }

    const auth0ApiUrl = "https://dev-z8tivme55voqva1b.us.auth0.com/userinfo";

    const response = await axios.get(auth0ApiUrl, {
      headers: {
        Authorization: `Bearer ${auth0Token}`,
      },
    });

    const userInfo = response.data;
    res.json(userInfo);
  } catch (error) {
    console.error("Error fetching user info from Auth0:", error);
    res.status(500).json({ error: "Failed to fetch user info from Auth0" });
  }
};
exports.getProfile = async (req, res) => {
  try {
    const userProfile = req.oidc.user;

    // Check if the user already exists in the database
    const userCollection = db.collection("Auth0Users"); // Assuming "users" is your collection name
    const user = await userCollection.findOne({ sub: userProfile.sub });

    if (!user) {
      const newUser = {
        ...userProfile,
      };

      await userCollection.insertOne(newUser);
      console.log("====================================");
      console.log("Inserted");
      console.log("====================================");
      console.log("====================================");
      console.log(JSON.stringify(newUser));
      console.log("====================================");
    }

    if (user != null) {
      res.send(JSON.stringify(user));
    }
  } catch (error) {
    console.error("Error saving user profile to MongoDB:", error);
    res.status(500).json({ error: "Failed to save user profile to MongoDB" });
  }
};
