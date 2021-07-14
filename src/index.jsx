import React from 'react';
import ReactDom from 'react-dom';
import { Header } from './components/Header';

window.addEventListener('load', () => {
    ReactDom.render(<Header />, document.getElementById('root'));
})
