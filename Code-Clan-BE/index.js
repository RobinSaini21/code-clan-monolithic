import express from "express";
const app = express();
import './config/db';
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from 'dotenv';
import codeExecutor from "./routes/codeExecutor";
dotenv.config()




// ALL THE MIDDLEWARES GOES HERE
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// ALL THE ROUTES HERE
app.use("/v1", codeExecutor);



app.get('/', (req, res) => {
  return res.send('welcome to the docker')
})

const port = 5003;

// fs.writeFile('./code-files/example.java', "Ello", (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port} 👍️`);
}).timeout = 5000;