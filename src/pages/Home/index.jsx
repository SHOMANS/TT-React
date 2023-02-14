import { Container } from '../../global/components';
import RefComponent from '../../components/RefComponent';
import HigherOrderLayout from '../../components/HigherOrderLayout';
import { useTranslation } from 'react-i18next';

export default HigherOrderLayout(function HomePage({ title, ...rest }) {
  const { t } = useTranslation();
  return (
    <div>
      <Container className='my-container'>
        <h1>{t('Welcome to React')}</h1>
        {/* <AuthSection /> */}
        <RefComponent />
      </Container>
    </div>
  );
});
