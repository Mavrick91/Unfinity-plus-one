const express = require('express');
const graphqlHTTP = require('express-graphql');
const firebase = require('firebase');
const cors = require('cors');

const graphQLSchema = require('./graphql/schema');

const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQLSchema,
    graphiql: true,
  }),
);

const config = {
  apiKey: 'AIzaSyCfGx8uXoXsF5ZxCEoP0wzZEouvYgmLYkE',
  authDomain: 'unfinity-609f7.firebaseapp.com',
  databaseURL: 'https://unfinity-609f7.firebaseio.com',
  storageBucket: 'unfinity-609f7.appspot.com',
};

if (!firebase.apps.length) firebase.initializeApp(config);
else firebase.app();

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});
