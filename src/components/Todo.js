const Todo = ({
  id,
  title,
  completed,
  onClickItem,
  onDeleteItem,
}) => {
  return (
    <li className={completed ? 'done todo-item' : 'todo-item'} data-key={id}>
      <input onChange={onClickItem} id={id} type="checkbox" />
      <label htmlFor={id} className="tick js-tick"></label>
      <span>{title} - ID: {id}</span>
      <button onClick={onDeleteItem} className="delete-todo js-delete-todo">
        <svg>
          <use href="#delete-icon"></use>
        </svg>
      </button>
    </li>
  );
}

export default Todo;
