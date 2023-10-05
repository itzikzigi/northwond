import express from "express";
import router from "./router/router";
const app = express();
import chalk from "chalk";
import morgan from "./logger/morgan";
import cors from "./cors/cors";
import connectToDB from "./dataAccess/mongoDBDal";
import { connectToSQL } from "./dataAccess/SQLdal";

app.use(morgan);
app.use(cors);
app.use(express.json());
app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(chalk.blueBright(`Server listening on port: ${PORT}`));

  connectToDB()
    .then((message) => console.log(message))
    .catch((error) => console.log(chalk.red(error)));

  connectToSQL()
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

  // generateInitialUsers()
  //   .then(() => console.log(chalk.magentaBright("Initial Users Created!")))
  //   .catch((error) => console.log(error));
});
