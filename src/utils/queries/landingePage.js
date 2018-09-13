import gql from 'graphql-tag';

export const headerQuery = gql`
  {
    header {
      logo
      pictures
      subtitle
      title
    }
  }
`;

export const conceptQuery = gql`
  {
    concept {
      title
      subtitle
      concepts {
        id
        picture
        title
      }
    }
  }
`;

export const featureQuery = gql`
  {
    feature {
      subtitle
      title
      features {
        id
        icon
        title
        description
      }
    }
  }
`;
