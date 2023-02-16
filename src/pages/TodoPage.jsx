import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, deleteTodo, getAllData } from '../redux/todos';

const TodoPage = () => {
  const [title, setTitle] = useState('');

  const { todos, isLoading, error } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    // getAllData(dispatch); won't work without middleware
    dispatch(getAllData());
  }, [dispatch]);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createTodo({
        title,
        id: Math.round(Math.random() * 100),
      })
    );

    setTitle('');
  };

  return (
    <div>
      {isLoading ? <h3>Loading...</h3> : ''}
      {error}
      <form onSubmit={handleSubmit}>
        <input type='text' name='title' onChange={(e) => setTitle(e.target.value)} value={title} />
        <button type='submit'>submit</button>
      </form>
      {todos.length ? (
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.title} <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
          </div>
        ))
      ) : (
        <h3>no todos to show</h3>
      )}
    </div>
  );
};

export default TodoPage;
