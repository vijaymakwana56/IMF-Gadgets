import express from "express";
import sequelize from "./config/db.js";
import router from "./routes/gadgetroutes.js";

import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api", router);


try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.listen(process.env.PORT, () => console.log("Server running!"));
