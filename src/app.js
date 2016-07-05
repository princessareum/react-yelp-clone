import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import styles from './styles.module.css';

const App = React.createClass({
  render: function() {
    return (
      <div className={styles.wrapper}>
        Hello World!
      </div>
    );
  }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
