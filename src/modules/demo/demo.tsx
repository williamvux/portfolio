import { Component, ReactNode } from 'react';
import logo from '../../bootstrap/logo.svg';
import { MainContext, ValueContext } from '../../context';
import './demo.css';

export default class Demo extends Component {
  static contextType = MainContext;
  render(): ReactNode {
    const context = this.context as ValueContext;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with {context.name}
          </a>
        </header>
      </div>
    );
  }
};
