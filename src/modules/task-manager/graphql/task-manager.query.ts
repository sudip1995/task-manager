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

export const cardDetailsById = gql`
  query ($ticketId: String!) {
    ticketDetails(id: $ticketId) {
      id
      title
      checkLists {
        id
        title
        checkListItems {
          id
          title
          isChecked
        }
      }
      attachments {
        id
        fileName
        fileSize
      }
    }
  }
`;

