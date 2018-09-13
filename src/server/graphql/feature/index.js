const firebase = require('firebase');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const itemFeatureType = new GraphQLObjectType({
  name: 'itemFeatureType',
  fields: () => ({
    icon: {
      type: GraphQLString,
      resolve: ({ icon }) => icon,
    },
    id: {
      type: GraphQLInt,
      resolve: ({ id }) => id,
    },
    title: {
      type: GraphQLString,
      resolve: ({ title }) => title,
    },
    description: {
      type: GraphQLString,
      resolve: ({ description }) => description,
    },
  }),
});

const featureType = new GraphQLObjectType({
  name: 'featureType',
  fields: () => ({
    features: {
      type: GraphQLList(itemFeatureType),
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
  type: featureType,
  resolve() {
    return firebase
      .database()
      .ref('/unfinityCMS/feature')
      .once('value')
      .then((res) => res.val());
  },
};
