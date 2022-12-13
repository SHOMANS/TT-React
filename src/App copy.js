import img from './logo.svg';

function App() {
  const styles = {
    backgroundColor: 'green',
    fontSize: 80,
    color: 'white',
    padding: 10,
  };

  const user = {
    name: 'abd',
    age: 22,
    love: ['mom', 'dad'],
    subjects: [
      { subject: 'math', mark: 67 },
      { subject: 'programming', mark: 60 },
    ],
  };

  const myFunction = (data) =>
    data
      .filter((sub) => sub.mark >= 50)
      .map((item) => item.subject)
      .join(' and ');

  return (
    <div className='App' style={styles}>
      {/* <div>first</div>
      <div>second</div> */}

      <p>
        my name is {user.name} and I am {user.age} years old, and I love {user.love.join(' and ')}
      </p>

      <p>I passed in {myFunction(user.subjects)}</p>
      <p>I failed in {user.subjects.filter((sub) => sub.mark < 50)[0]?.subject}</p>

      {/* <form>
        <label htmlFor='input'>my input</label>
        <input id='input' />
      </form> */}

      <img src={img} alt='' />
    </div>
  );
}

export default App;
