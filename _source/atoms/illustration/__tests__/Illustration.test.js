import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Illustration from '../Illustration';

test('shows the children when the checkbox is checked', () => {
  const { getByRole } = render(
    <Illustration name="name" ariaHidden={ false } />,
  );

  expect(getByRole('img')).toBeInTheDocument();
});
