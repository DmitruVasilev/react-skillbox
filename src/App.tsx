import React from 'react';
import { Layout } from './components/Layout/Layout';
import { Header } from './components/Header';

import './styles/main.global.scss';

export function App(): JSX.Element{
  return (
    <main>
      <Layout>
        <Header />
      </Layout>
    </main>
  );
}
