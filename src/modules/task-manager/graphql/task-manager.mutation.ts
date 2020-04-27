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

export const addChecklist =  gql`
  mutation ($ticketId: String!, $title: String!) {
    addChecklist(ticketId: $ticketId, title: $title){
      id
      title
      checkListItems {
        id
        title
        isChecked
      }
    }
  }
`;

export const addChecklistItem =  gql`
  mutation ($checklistId: String!, $title: String!) {
    addChecklistItem(checklistId: $checklistId, title: $title){
      id
      title
      isChecked
    }
  }
`;

export const updateChecklist =  gql`
  mutation ($id: String!, $checklist: CheckList!) {
    updateChecklist(id: $id, checklist: $checklist) {
      id
      title
    }
  }
`;

export const updateChecklistItem =  gql`
  mutation ($id: String!, $checklistItem: CheckListItemInputGraphType!) {
    updateChecklistItem(id: $id, checklistItem: $checklistItem) {
      id
      title
      isChecked
    }
  }
`;


