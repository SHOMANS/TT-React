import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [values, setValues] = useState({});

  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submit', values.title, values.body);

    setTodos((prevState) => [values, ...prevState]);

    // setTodos((prevState) => [...prevState, { title, body }]);
    // setBody('');
    // setTitle('');

    setValues({ title: '', body: '', zaqout: '' }); // reset state to initial values
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    // if (name === 'title') {
    //   setTitle(value);
    // } else {
    //   setBody(value);
    // }

    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <ul>
        <form onSubmit={handleSubmit}>
          <input type='text' name='title' onChange={handleChangeInput} value={values.title} />
          <input type='text' name='body' onChange={handleChangeInput} value={values.body} />
          <input type='text' name='zaqout' onChange={handleChangeInput} value={values.zaqout} />
          <button type='submit'>Submit</button>
        </form>
        {todos.map((todo) => (
          <li>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
            <p>{todo.zaqout}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

// ------------------ Mai Code -------------------
// import React, { useState } from 'react';

// function Todo() {
//   const [values, setValues] = useState({
//     email: '',
//     name: '',
//   });

//   const [todo, setTodo] = useState([]);

//   const handleChange = (event, value) => {
//     setValues({ ...values, [value]: event.target.value });
//   };
//   const HandelSubmit = (e) => {
//     e.preventDefault();
//     // setTodo([values]);
//     setTodo((prevState) => [...prevState, values]);
//     setValues({
//       name: '',
//       email: '',
//     });
//   };
//   return (
//     <>
//       <div>
//         <form onSubmit={HandelSubmit}>
//           <input onChange={(e) => handleChange(e, 'email')} value={values.email} />
//           <input onChange={(e) => handleChange(e, 'name')} value={values.name} />

//           <button type='submit'>ON CLICK</button>
//         </form>
//         {todo.map((item) => (
//           <>
//             <p>{item.name}</p>
//             <p>{item.email}</p>
//           </>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Todo;
