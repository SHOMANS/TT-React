import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header myPage='home' />
        <Container>
          <h2>Home Page</h2>
        </Container>
        <section>
          <Container>
            <h3>Section 1</h3>
            <Button title='click me' isActive={true} />
          </Container>
        </section>
        <section>
          <Container>
            <h3>Section 2</h3>
            <Button title='add new' />
            <Button />
          </Container>
        </section>
        <section>
          <Container>
            <h3>Section 3</h3>
            <Card
              title='Card 1'
              body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed molestias reiciendis, pariatur aspernatur doloremque illum eaque porro rerum rem vero voluptatibus quae quidem quisquam provident facere iusto voluptas cupiditate.'
              imgSrc='https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg'
            />
            <Card
              title='Card 2'
              body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed molestias reiciendis, pariatur aspernatur doloremque illum eaque porro rerum rem vero voluptatibus quae quidem quisquam provident facere iusto voluptas cupiditate.'
              imgSrc='https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg'
            />
            <Card
              title='Card 3'
              body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed molestias reiciendis, pariatur aspernatur doloremque illum eaque porro rerum rem vero voluptatibus quae quidem quisquam provident facere iusto voluptas cupiditate.'
              imgSrc='https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg'
            />
          </Container>
        </section>

        <section>
          <Container>
            <h3>Section 4</h3>
            <Card
              title='Card 1'
              body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed molestias reiciendis, pariatur aspernatur doloremque illum eaque porro rerum rem vero voluptatibus quae quidem quisquam provident facere iusto voluptas cupiditate.'
              imgSrc='https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg'
              actions={<Button title='action button' />}
            >
              <h3>Section 1</h3>
              <Button title='click me' isActive={true} />
            </Card>
            <Card
              title='Card 1'
              body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed molestias reiciendis, pariatur aspernatur doloremque illum eaque porro rerum rem vero voluptatibus quae quidem quisquam provident facere iusto voluptas cupiditate.'
              imgSrc='https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg'
              actions={<Button title='action button' />}
            >
              <h3>Section 3</h3>
            </Card>
          </Container>
        </section>

        <Footer />
      </div>
    );
  }
}

export default HomePage;
