const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const header = require('./header');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      header,
    },
  }),
});

module.exports = schema;
