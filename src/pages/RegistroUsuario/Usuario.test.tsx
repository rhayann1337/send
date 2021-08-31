import React from 'react';
import { render, screen } from '@testing-library/react';
import RegistroUsuario from '.';

test('renders learn react link', () => {
  render(<RegistroUsuario />);
  const linkElement = screen.getByText(/cadastro de usuário/i);
  expect(linkElement).toBeInTheDocument();
});
