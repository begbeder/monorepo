import type React from 'react';
import { Main, Button } from '@sample/components';

export interface AppProps {
  text: string;
}

export const App: React.VFC<AppProps> = ({ text }) =>
(
  <div>
    <Main text={text} />
    <Button text='button text' />
  </div>
);
