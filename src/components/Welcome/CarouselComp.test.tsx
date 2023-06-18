import { screen } from '@testing-library/react';
import { render } from '@test-utils';
import CarouselComp from './CarouselComp';

it('displays welcome text', () => {
  render(<CarouselComp />);
  expect(screen.getByText('Welcome to Mantine!')).toBeInTheDocument();
});
