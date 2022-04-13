import { gql } from '@apollo/client';

const Mutation = {
  addTodo: gql `
    mutation addTodo($title: String = "") {
      insert_todos_todos(objects: {title: $title}) {
        affected_rows
      }
    }
  `,
}

export default Mutation;
