import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Hello from './Hello';

const imageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7Ki-ys2G_MMb_xCrY7nAf87F5ZiIOyCh4f5H_JCTTtMSMLCL';

export default class App extends React.Component {
  render = () => <Hello />;
}

render(<App />, document.querySelector('#root'));
