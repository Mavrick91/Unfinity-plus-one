const firebase = require('firebase');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const itemConceptType = new GraphQLObjectType({
  name: 'itemConceptType',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: ({ id }) => id,
    },
    picture: {
      type: GraphQLString,
      resolve: ({ picture }) => picture,
    },
    title: {
      type: GraphQLString,
      resolve: ({ title }) => title,
    },
  }),
});

const conceptType = new GraphQLObjectType({
  name: 'conceptType',
  fields: () => ({
    concepts: {
      type: GraphQLList(itemConceptType),
    },
    subtitle: {
      type: GraphQLString,
      resolve: ({ subtitle }) => subtitle,
    },
    title: {
      type: GraphQLString,
      resolve: ({ title }) => title,
    },
  }),
});

module.exports = {
  type: conceptType,
  resolve() {
    return firebase
      .database()
      .ref('/unfinityCMS/concept')
      .once('value')
      .then((res) => res.val());
  },
};
