import express, { Express } from "express";
import chalk from "chalk";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

if (!process.env.PORT) {
	process.exit();
}
const PORT = parseInt(process.env.PORT as string, 10);

const app: Express = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log(chalk.cyan.underline(`Server live on port ${PORT}`));
});
