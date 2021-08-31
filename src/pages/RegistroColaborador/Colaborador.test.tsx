import React from 'react';
import { render, screen } from '@testing-library/react';
import RegistroUsuario from '.';

test('renders learn react link', () => {
  render(<RegistroUsuario />);
  const linkElement = screen.getByText(/Adicionar colaborador/i);
  expect(linkElement).toBeInTheDocument();
});
