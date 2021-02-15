import "reflect-metadata";
import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express"
import { buildSchemaSync } from "type-graphql"
import { ContactsResolver } from "./resolvers/contactResolver"

dotenv.config({ path: './config/config.env' });
const app = express();
const path = '/contacts';
app.use(cors(), bodyParser.json())

// Build TypeGraphQL executable schema
const schema = buildSchemaSync({
	resolvers: [ContactsResolver]
});
const apolloServer = new ApolloServer({schema});
apolloServer.applyMiddleware({ app, path });

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`Server started on port ${port}`));
