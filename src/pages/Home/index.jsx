import { Container } from '../../global/components';
import AuthSection from '../../components/AuthSection';
import RefComponent from '../../components/RefComponent';

export default function HomePage({ title, ...rest }) {
  return (
    <div>
      <Container className='my-container'>
        {/* <AuthSection /> */}
        <RefComponent />
      </Container>
    </div>
  );
}
