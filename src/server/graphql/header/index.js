const firebase = require('firebase');
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const headerType = new GraphQLObjectType({
  name: 'headerType',
  fields: () => ({
    logo: {
      type: GraphQLString,
      resolve: ({ logo }) => logo,
    },
    pictures: {
      type: GraphQLList(GraphQLString),
      resolve: ({ pictures }) => pictures,
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
  type: headerType,
  resolve() {
    return firebase
      .database()
      .ref('/unfinityCMS/header')
      .once('value')
      .then((res) => res.val());
  },
};
