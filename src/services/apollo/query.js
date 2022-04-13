import { gql } from '@apollo/client';

const Query = {
  getTodoList: gql `
    query GetTodoList {
      list: todos_todos(order_by: {id: asc}) {
        id
        title
        completed
      }
    }
  `,
  getTodoById: gql `
    query GetTodoById ($id: Int = 1) {
      todo: todos_todos_by_pk(id: $id) {
        id
        title
        completed
      }
    }
  `,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default Query;
