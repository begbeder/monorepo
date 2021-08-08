import type React from 'react';

export interface ButtonProps {
  text: string;
}

export const Button: React.VFC<ButtonProps> = ({ text }) =>
(
  <button style={{ padding: '10px', margin: '10px' }}>
    {text}
  </button>
);
