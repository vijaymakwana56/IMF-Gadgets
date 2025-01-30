import express from "express";
import sequelize from "./config/db.js";
const app = express();
app.use(express.json());

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.listen(3000, () => console.log("Server running on port 3000"));
