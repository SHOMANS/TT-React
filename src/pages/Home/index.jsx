import { Container } from '../../global/components';
import RefComponent from '../../components/RefComponent';
import HigherOrderLayout from '../../components/HigherOrderLayout';

export default HigherOrderLayout(function HomePage({ title, ...rest }) {
  return (
    <div>
      <Container className='my-container'>
        {/* <AuthSection /> */}
        <RefComponent />
      </Container>
    </div>
  );
});
