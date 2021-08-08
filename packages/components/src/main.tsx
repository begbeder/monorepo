import type React from 'react';

export interface MainProps {
  text: string;
}

export const Main: React.VFC<MainProps> = ({ text }) =>
(
  <main style={{ padding: '40px', border: '1px solid red' }}>
    <h1>{text}</h1>
    <p>{text}</p>
  </main>
);
