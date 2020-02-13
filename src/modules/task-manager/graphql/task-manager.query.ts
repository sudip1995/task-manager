import gql from 'graphql-tag';

export const board =  gql`
  query {
    boards {
      id
      title
    }
  }
`;

export const boardById = gql`
  query ($boardId: String!) {
    board(id: $boardId)
    {
      id
      title
      columns {
        id
        boardId
        title
        order
        tickets {
          id
          title
          columnId
          description
          order
        }
      }
    }
  }
`;

