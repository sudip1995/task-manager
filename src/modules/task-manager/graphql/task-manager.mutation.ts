import gql from 'graphql-tag';

export const addBoard =  gql`
  mutation ($board: BoardInputGraphType!) {
    addBoard(board: $board){
      id
      title
    }
  }
`;
