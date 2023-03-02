import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ComponentTest } from '../pages/TodoPage';
import userEvent from '@testing-library/user-event';

describe('unit test for component test', () => {
  it('should display the button in the document', async () => {
    render(<ComponentTest name='Yahya' />);

    expect(screen.getByRole('button')).toHaveTextContent('click');
  });

  it('should not display the props texts without clicking on the button', () => {
    render(<ComponentTest name='Yahya' />);

    expect(screen.queryByText('Yahya')).not.toBeInTheDocument('');
  });

  it('should display the props texts after clicking on the button', async () => {
    render(<ComponentTest name='Yahya' />);
    expect(screen.getByRole('button')).toHaveTextContent('click');

    userEvent.click(screen.getByText('click'));
    expect(screen.getByText('Yahya')).toBeInTheDocument('');
  });
});
