import React from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { CardsList } from './components/CardsList';

import './styles/main.global.css';

export function App(): JSX.Element{
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList></CardsList>
      </Content>
    </Layout>
  );
}
