// import { useDispatch, useSelector } from 'react-redux';
// import { createTodo, deleteTodo, getAllData } from '../redux/todos';
import PropTypes from 'prop-types';
import { useState } from 'react';

const TodoPage = () => {
  // const [title, setTitle] = useState('');

  // const { todos, isLoading, error } = useSelector((state) => state.todos);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // getAllData(dispatch); won't work without middleware
  //   dispatch(getAllData());
  // }, [dispatch]);

  // const handleDeleteTodo = (id) => {
  //   dispatch(deleteTodo(id));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   dispatch(
  //     createTodo({
  //       title,
  //       id: Math.round(Math.random() * 100),
  //     })
  //   );

  //   setTitle('');
  // };

  return (
    <div>
      <ComponentTest age={123} />
    </div>
  );
};

export default TodoPage;

export const ComponentTest = ({ name }) => {
  const [state, setState] = useState(false);

  const doSth = () => {};

  return (
    <div>
      <button onClick={() => setState(true)}>click</button>
      {state && <h1>{name}</h1>}
    </div>
  );
};
