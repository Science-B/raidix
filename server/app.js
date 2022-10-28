const express = require("express");
const config = require("config");
const chalk = require("chalk");
const app = express();
const routes = require("./routes/productsRoutes");
const PORT = config.get("port") ?? 8080;
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/api", routes);

function start() {
  try {
    app.listen(PORT, () => {
      console.log(chalk.green(`Server has been started on port ${PORT} ...`));
    });
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1);
  }
}
start();
