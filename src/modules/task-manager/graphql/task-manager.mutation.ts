import gql from 'graphql-tag';

export const addBoard =  gql`
  mutation ($title: String!) {
    addBoard(title: $title){
      id
      title
    }
  }
`;

export const addList =  gql`
  mutation ($boardId: String!, $title: String!) {
    addColumn(boardId: $boardId, title: $title){
      id
      title
    }
  }
`;

export const addCard =  gql`
  mutation ($columnId: String!, $title: String!) {
    addTicket(columnId: $columnId, title: $title){
      id
      title
    }
  }
`;

export const moveColumn =  gql`
  mutation ($fromBoardId: String!, $toBoardId: String, $previousIndex: Int!, $currentIndex: Int!) {
    moveColumn(fromBoardId: $fromBoardId, toBoardId: $toBoardId, previousIndex: $previousIndex, currentIndex: $currentIndex){
      id
    }
  }
`;

export const moveTicket =  gql`
  mutation ($fromBoardId: String!, $toBoardId: String, $fromColumnId: String!, $toColumnId: String, $previousIndex: Int!, $currentIndex: Int!) {
    moveTicket(fromBoardId: $fromBoardId, toBoardId: $toBoardId, fromColumnId: $fromColumnId, toColumnId: $toColumnId, previousIndex: $previousIndex, currentIndex: $currentIndex){
      id
    }
  }
`;


