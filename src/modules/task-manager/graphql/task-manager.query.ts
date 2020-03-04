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
        tickets {
          id
          title
          columnId
        }
      }
    }
  }
`;

