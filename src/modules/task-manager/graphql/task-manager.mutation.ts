import gql from 'graphql-tag';

export const addBoard =  gql`
  mutation ($board: BoardInputGraphType!) {
    addBoard(board: $board){
      id
      title
    }
  }
`;

export const addList =  gql`
  mutation ($boardId: String!, $column: ColumnInputGraphType!) {
    addColumn(boardId: $boardId, column: $column){
      id
      title
    }
  }
`;

export const addCard =  gql`
  mutation ($columnId: String!, $ticket: TicketInputGraphType!) {
  addTicket(columnId: $columnId, ticket: $ticket){
    id
    title
  }
}
`;
