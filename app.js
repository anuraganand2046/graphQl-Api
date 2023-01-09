const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const {graphqlHTTP} = require('express-graphql');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const connectDB = require('./config/db');
connectDB();

const app = express();
app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})