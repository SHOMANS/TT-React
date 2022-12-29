import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import { posts } from '../mock/posts';

const Post = () => {
  const { id } = useParams();

  const myData = posts.find((item) => item.id === Number(id)); // to get the post from array that has an id equals the id from params

  // console.log(myData);
  return (
    <Container>
      <h1>post number {myData?.id}</h1>
      <h3>{myData?.title}</h3>
      <p>{myData?.body}</p>
    </Container>
  );
};

export default Post;
