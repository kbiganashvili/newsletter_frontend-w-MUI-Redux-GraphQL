import { gql } from '@apollo/client';

const ADD_ARTICLE = gql`
  mutation addArticle(
    $title: String!
    $name: String!
    $surname: String!
    $phone: String!
    $email: String!
    $date: String!
    $categoryId: Int!
    $content: String!
    $limit: String!
    $offset: String!
    $startDate: String
    $endDate: String
  ) {
    addArticle(
      title: $title
      name: $name
      surname: $surname
      email: $email
      phone: $phone
      date: $date
      content: $content
      categoryId: $categoryId
      limit: $limit
      offset: $offset
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      title
      name
      surname
      phone
      email
      date
      content
      category {
        id
        name
      }
    }
  }
`;

export { ADD_ARTICLE };
