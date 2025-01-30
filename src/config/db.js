import {Sequelize} from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME,process.env.PASSWAORD, {
    host: "localhost",
    dialect: "postgres",
    logging: false,
});


export default sequelize;