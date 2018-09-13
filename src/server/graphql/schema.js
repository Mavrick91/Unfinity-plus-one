const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const header = require('./header');
const concept = require('./concept');
const feature = require('./feature');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      header,
      concept,
      feature,
    },
  }),
});

module.exports = schema;
