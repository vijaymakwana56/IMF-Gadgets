import {Sequelize} from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME,process.env.PASSWORD, {
//     dialect: "postgres",
//     port: 5432,
//     dialectOptions: {
//         ssl: {
//           require: true,
//           rejectUnauthorized: false,
//         },
//       },
//     logging: false,
// });
const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    logging: false,
});


export default sequelize;