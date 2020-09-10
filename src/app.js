import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";
import cors from "cors";

const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  }) 
);
app.get('/', (req,res) => {
  res.send("Welcome to Swift Food graphql")
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Graphql server is running on PORT ${PORT}`)
);
