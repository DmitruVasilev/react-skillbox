import React from 'react';

import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { CardsList } from './components/CardsList';
import { Dropdown } from './components/Dropdown';

import './styles/main.global.css';

export function App(){
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <div style={{ padding: 20}}>
          <br/>
          <Dropdown button={<button>test</button>}>
            <ul>
              <li>1</li>
            </ul>
          </Dropdown>
        </div>

      </Content>
    </Layout>
  );
}
